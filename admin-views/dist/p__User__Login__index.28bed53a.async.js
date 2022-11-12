"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[9366],{69285:function(ee,S,e){e.r(S),e.d(S,{default:function(){return J}});var B=e(15009),l=e.n(B),z=e(97857),j=e.n(z),A=e(99289),p=e.n(A),V=e(5574),Z=e.n(V),f=e(1413),c=e(67294),w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},C=w,x=e(84089),y=function(o,t){return c.createElement(x.Z,(0,f.Z)((0,f.Z)({},o),{},{ref:t,icon:C}))};y.displayName="UserOutlined";var N=c.forwardRef(y),H={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},R=H,L=function(o,t){return c.createElement(x.Z,(0,f.Z)((0,f.Z)({},o),{},{ref:t,icon:R}))};L.displayName="LockOutlined";var E=c.forwardRef(L),v=e(54542),d=e(90905),P=e(14670),T=e(12461),$=e(73935),m={container:"container___REQAy",content:"content___IkUx1",icon:"icon___fqAhh"},Q=e(60253),G=e(19084),U=e(91978),n=e(85893),D=function(o){var t=o.content;return(0,n.jsx)(P.Z,{style:{marginBottom:24},message:t,type:"error",showIcon:!0})},k=function(){var o=(0,c.useState)(""),t=Z()(o,2),O=t[0],K=t[1],I=(0,d.useModel)("@@initialState"),h=I.initialState,W=I.setInitialState,F=(0,d.useIntl)(),X=function(){var g=p()(l()().mark(function i(){var r,s;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h==null||(r=h.fetchUserInfo)===null||r===void 0?void 0:r.call(h);case 2:s=a.sent,s&&(0,$.flushSync)(function(){W(function(_){return j()(j()({},_),{},{currentUser:s})})});case 4:case"end":return a.stop()}},i)}));return function(){return g.apply(this,arguments)}}(),Y=function(){var g=p()(l()().mark(function i(r){var s;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Q.d.login(r);case 3:if(s=a.sent,s.status!=1){a.next=7;break}return K(s.msg),a.abrupt("return");case 7:return(0,G.o)(s.data.token,r.autoLogin),a.next=10,X();case 10:window.location.href=window.slowAdminConfig.loginSuccessRedirect,a.next=17;break;case 13:a.prev=13,a.t0=a.catch(0),console.log(a.t0),T.ZP.error("\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01");case 17:case"end":return a.stop()}},i,null,[[0,13]])}));return function(r){return g.apply(this,arguments)}}(),b=(0,U.Hx)("logo"),q=(0,U.Hx)("app_name");return(0,n.jsx)("div",{className:m.container,style:{backgroundImage:"url(".concat(window.slowAdminConfig.loginBackground,")")},children:(0,n.jsx)("div",{className:m.content,children:(0,n.jsxs)(v.U0H,{logo:(0,n.jsx)("img",{alt:"logo",src:b}),title:q,subTitle:" ",initialValues:{autoLogin:!0},actions:[],onFinish:function(){var g=p()(l()().mark(function i(r){return l()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Y(r);case 2:case"end":return u.stop()}},i)}));return function(i){return g.apply(this,arguments)}}(),children:[O&&(0,n.jsx)(D,{content:O}),(0,n.jsx)(v.VaQ,{name:"username",fieldProps:{size:"large",prefix:(0,n.jsx)(N,{className:m.prefixIcon})},placeholder:F.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}),rules:[{required:!0,message:(0,n.jsx)(d.FormattedMessage,{id:"pages.login.username.required",defaultMessage:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"})}]}),(0,n.jsx)(v.VaQ.Password,{name:"password",fieldProps:{size:"large",prefix:(0,n.jsx)(E,{className:m.prefixIcon})},placeholder:F.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801"}),rules:[{required:!0,message:(0,n.jsx)(d.FormattedMessage,{id:"pages.login.password.required",defaultMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"})}]}),(0,n.jsx)("div",{style:{marginBottom:24},children:(0,n.jsx)(v.V2E,{noStyle:!0,name:"autoLogin",children:(0,n.jsx)(d.FormattedMessage,{id:"pages.login.rememberMe",defaultMessage:"\u8BB0\u4F4F\u6211"})})})]})})})},J=k}}]);
