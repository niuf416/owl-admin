<?php

namespace Slowlyo\SlowAdmin\Libs\CodeGenerator;

use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Symfony\Component\HttpFoundation\Response as HttpResponse;
use Illuminate\Database\Migrations\MigrationCreator as BaseMigrationCreator;

class MigrationGenerator extends BaseMigrationCreator
{
    protected string $stub = __DIR__ . '/stubs/model.stub';

    protected Collection $columns;

    protected bool $needSoftDelete = false;

    protected bool $needTimestamp = false;

    protected string $primaryKey = '';

    public static function make(): static
    {
        return new static(app('files'), __DIR__ . '/stubs');
    }

    public function generate($table, $columns): string
    {
        $this->columns = $columns;

        $name = 'create_' . $table . '_table';

        return $this->create($name, database_path('migrations'), $table, null);
    }

    protected function populateStub($stub, $table): array|string
    {
        return str_replace(['{{ content }}', '{{ table }}'], [$this->generateContent(), $table], $stub);
    }

    public function primary($key): static
    {
        $this->primaryKey = $key;

        return $this;
    }

    public function generateContent(): string
    {
        empty($this->columns) && abort(HttpResponse::HTTP_BAD_REQUEST, 'Table fields can\'t be empty');

        $rows   = [];
        $rows[] = "\$table->increments('{$this->primaryKey}');\n";

        foreach ($this->columns as $field) {
            $additional = Arr::get($field, 'additional');

            $column = "\$table->{$field['type']}('{$field['name']}'";
            if ($additional && $additional != '') {
                $column .= ', ' . $additional;
            }
            $column .= ')';

            $index = Arr::get($field, 'index');
            if ($index) {
                $column .= "->{$index}()";
            }

            $hasDefault = isset($field['default']) && $field['default'] !== '';
            if ($hasDefault) {
                $default = "'{$field['default']}'";

                if (is_numeric($field['default'])) {
                    $default = "new \Illuminate\Database\Query\Expression({$default})";
                }

                $column .= "->default({$default})";
            }

            if (Arr::get($field, 'nullable', false)) {
                $column .= '->nullable()';
            } else if (!$hasDefault && $field['type'] === 'string') {
                $column .= "->default('')";
            }

            if (isset($field['comment']) && $field['comment']) {
                $column .= "->comment('{$field['comment']}')";
            }

            $rows[] = $column . ";\n";
        }

        if ($this->needTimestamp) {
            $rows[] = "\$table->timestamps();\n";
        }

        if ($this->needSoftDelete) {
            $rows[] = "\$table->softDeletes();\n";
        }

        return trim(implode(str_repeat(' ', 12), $rows), "\n");
    }

    public function softDelete(bool $need): static
    {
        $this->needSoftDelete = $need;

        return $this;
    }

    public function timestamps(bool $need): static
    {
        $this->needTimestamp = $need;

        return $this;
    }

    protected function getStub($table, $create): string
    {
        $stub = $this->files->exists($customPath = $this->customStubPath . '/migration.stub')
            ? $customPath
            : $this->stubPath() . '/migration.stub';

        return $this->files->get($stub);
    }

    public function stubPath(): string
    {
        return __DIR__ . '/stubs';
    }
}
