(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{337:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},355:function(e,t,a){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"a",function(){return n})},411:function(e,t,a){"use strict";var n=a(1),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},c=a(260),l=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:r}))};l.displayName="DeleteOutlined";t.a=n.forwardRef(l)},571:function(e,t,a){"use strict";a.r(t);var n=a(293),r=a(286),c=a(262),l=a.n(c),o=a(263),i=a(284),s=a(1),u=a.n(s),m=a(321),d=a(573),f=a(540),p=a(400),b=a(312),h=a(313),v=a(570),g=a(572),O=a(306),y=a(569),j=a(415),E=a(411),x=a(279),w=a(355),k=a(401),C=a.n(k),S=a(404),N=a(267),z=a(36),P=a(256),A=a(257),I=a(261),T=a(255),L=a.n(T),M=a(351),D=a(338),R=a(308),K=a(403),H=a(546),_=a(383),W=a(283),F=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},U=function(e){var t=e.prefixCls,a=e.children,n=e.actions,r=e.extra,c=e.className,l=e.colStyle,o=F(e,["prefixCls","children","actions","extra","className","colStyle"]),i=s.useContext(Y),u=i.grid,m=i.itemLayout,d=s.useContext(R.b).getPrefixCls,f=d("list",t),p=n&&n.length>0&&s.createElement("ul",{className:"".concat(f,"-item-action"),key:"actions"},n.map(function(e,t){return s.createElement("li",{key:"".concat(f,"-item-action-").concat(t)},e,t!==n.length-1&&s.createElement("em",{className:"".concat(f,"-item-action-split")}))})),b=u?"div":"li",h=s.createElement(b,Object(z.a)({},o,{className:L()("".concat(f,"-item"),Object(P.a)({},"".concat(f,"-item-no-flex"),!("vertical"===m?r:!function(){var e;return s.Children.forEach(a,function(t){"string"===typeof t&&(e=!0)}),e&&s.Children.count(a)>1}())),c)}),"vertical"===m&&r?[s.createElement("div",{className:"".concat(f,"-item-main"),key:"content"},a,p),s.createElement("div",{className:"".concat(f,"-item-extra"),key:"extra"},r)]:[a,p,Object(W.a)(r,{key:"extra"})]);return u?s.createElement(_.a,{flex:1,style:l},h):h};U.Meta=function(e){var t=e.prefixCls,a=e.className,n=e.avatar,r=e.title,c=e.description,l=F(e,["prefixCls","className","avatar","title","description"]),o=(0,s.useContext(R.b).getPrefixCls)("list",t),i=L()("".concat(o,"-item-meta"),a),u=s.createElement("div",{className:"".concat(o,"-item-meta-content")},r&&s.createElement("h4",{className:"".concat(o,"-item-meta-title")},r),c&&s.createElement("div",{className:"".concat(o,"-item-meta-description")},c));return s.createElement("div",Object(z.a)({},l,{className:i}),n&&s.createElement("div",{className:"".concat(o,"-item-meta-avatar")},n),(r||c)&&u)};var B=U,J=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},Y=s.createContext({});Y.Consumer;function q(e){var t,a=e.pagination,n=void 0!==a&&a,r=e.prefixCls,c=e.bordered,l=void 0!==c&&c,o=e.split,i=void 0===o||o,u=e.className,m=e.children,d=e.itemLayout,f=e.loadMore,b=e.grid,h=e.dataSource,v=void 0===h?[]:h,g=e.size,O=e.header,y=e.footer,j=e.loading,E=void 0!==j&&j,x=e.rowKey,w=e.renderItem,k=e.locale,C=J(e,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),S=n&&"object"===Object(I.a)(n)?n:{},T=s.useState(S.defaultCurrent||1),_=Object(A.a)(T,2),W=_[0],F=_[1],U=s.useState(S.defaultPageSize||10),B=Object(A.a)(U,2),q=B[0],G=B[1],V=s.useContext(R.b),Q=V.getPrefixCls,X=V.renderEmpty,Z=V.direction,$={},ee=function(e){return function(t,a){F(t),G(a),n&&n[e]&&n[e](t,a)}},te=ee("onChange"),ae=ee("onShowSizeChange"),ne=Q("list",r),re=E;"boolean"===typeof re&&(re={spinning:re});var ce=re&&re.spinning,le="";switch(g){case"large":le="lg";break;case"small":le="sm"}var oe=L()(ne,(t={},Object(P.a)(t,"".concat(ne,"-vertical"),"vertical"===d),Object(P.a)(t,"".concat(ne,"-").concat(le),le),Object(P.a)(t,"".concat(ne,"-split"),i),Object(P.a)(t,"".concat(ne,"-bordered"),l),Object(P.a)(t,"".concat(ne,"-loading"),ce),Object(P.a)(t,"".concat(ne,"-grid"),b),Object(P.a)(t,"".concat(ne,"-something-after-last-item"),!!(f||n||y)),Object(P.a)(t,"".concat(ne,"-rtl"),"rtl"===Z),t),u),ie=Object(z.a)(Object(z.a)(Object(z.a)({},{current:1,total:0}),{total:v.length,current:W,pageSize:q}),n||{}),se=Math.ceil(ie.total/ie.pageSize);ie.current>se&&(ie.current=se);var ue=n?s.createElement("div",{className:"".concat(ne,"-pagination")},s.createElement(K.a,Object(z.a)({},ie,{onChange:te,onShowSizeChange:ae}))):null,me=Object(N.a)(v);n&&v.length>(ie.current-1)*ie.pageSize&&(me=Object(N.a)(v).splice((ie.current-1)*ie.pageSize,ie.pageSize));var de=Object(M.a)(),fe=s.useMemo(function(){for(var e=0;e<D.b.length;e+=1){var t=D.b[e];if(de[t])return t}},[de]),pe=s.useMemo(function(){if(b){var e=fe&&b[fe]?b[fe]:b.column;return e?{width:"".concat(100/e,"%"),maxWidth:"".concat(100/e,"%")}:void 0}},[null===b||void 0===b?void 0:b.column,fe]),be=ce&&s.createElement("div",{style:{minHeight:53}});if(me.length>0){var he=me.map(function(e,t){return function(e,t){return w?((a="function"===typeof x?x(e):"string"===typeof x?e[x]:e.key)||(a="list-item-".concat(t)),$[t]=a,w(e,t)):null;var a}(e,t)}),ve=s.Children.map(he,function(e,t){return s.createElement("div",{key:$[t],style:pe},e)});be=b?s.createElement(H.a,{gutter:b.gutter},ve):s.createElement("ul",{className:"".concat(ne,"-items")},he)}else m||ce||(be=function(e,t){return s.createElement("div",{className:"".concat(e,"-empty-text")},k&&k.emptyText||t("List"))}(ne,X));var ge=ie.position||"bottom";return s.createElement(Y.Provider,{value:{grid:b,itemLayout:d}},s.createElement("div",Object(z.a)({className:oe},C),("top"===ge||"both"===ge)&&ue,O&&s.createElement("div",{className:"".concat(ne,"-header")},O),s.createElement(p.a,re,be,m),y&&s.createElement("div",{className:"".concat(ne,"-footer")},y),f||("bottom"===ge||"both"===ge)&&ue))}q.Item=B;var G=q,V=a(271),Q=a(296),X=a(287),Z=s.forwardRef(function(e,t){var a,n=e.prefixCls,r=void 0===n?"rc-switch":n,c=e.className,l=e.checked,o=e.defaultChecked,i=e.disabled,u=e.loadingIcon,m=e.checkedChildren,d=e.unCheckedChildren,f=e.onClick,p=e.onChange,b=e.onKeyDown,h=Object(V.a)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),v=Object(Q.a)(!1,{value:l,defaultValue:o}),g=Object(A.a)(v,2),O=g[0],y=g[1];function j(e,t){var a=O;return i||(y(a=e),null===p||void 0===p||p(a,t)),a}var E=L()(r,c,(a={},Object(P.a)(a,"".concat(r,"-checked"),O),Object(P.a)(a,"".concat(r,"-disabled"),i),a));return s.createElement("button",Object.assign({},h,{type:"button",role:"switch","aria-checked":O,disabled:i,className:E,ref:t,onKeyDown:function(e){e.which===X.a.LEFT?j(!1,e):e.which===X.a.RIGHT&&j(!0,e),null===b||void 0===b||b(e)},onClick:function(e){var t=j(!O,e);null===f||void 0===f||f(t,e)}}),u,s.createElement("span",{className:"".concat(r,"-inner")},O?m:d))});Z.displayName="Switch";var $=Z,ee=a(309),te=a(409),ae=a(278),ne=a(276),re=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},ce=s.forwardRef(function(e,t){var a,n=e.prefixCls,r=e.size,c=e.loading,l=e.className,o=void 0===l?"":l,i=e.disabled,u=re(e,["prefixCls","size","loading","className","disabled"]);Object(ne.a)("checked"in u||!("value"in u),"Switch","`value` is not a valid prop, do you mean `checked`?");var m=s.useContext(R.b),d=m.getPrefixCls,f=m.direction,p=s.useContext(ae.b),b=d("switch",n),h=s.createElement("div",{className:"".concat(b,"-handle")},c&&s.createElement(ee.a,{className:"".concat(b,"-loading-icon")})),v=L()((a={},Object(P.a)(a,"".concat(b,"-small"),"small"===(r||p)),Object(P.a)(a,"".concat(b,"-loading"),c),Object(P.a)(a,"".concat(b,"-rtl"),"rtl"===f),a),o);return s.createElement(te.a,{insertExtraNode:!0},s.createElement($,Object(z.a)({},u,{prefixCls:b,className:v,disabled:i||c,ref:t,loadingIcon:h})))});ce.__ANT_SWITCH=!0,ce.displayName="Switch";var le=ce,oe=a(269),ie=a(0),se=a.n(ie),ue=a(337),me=a.n(ue),de=a(270),fe=se.a.oneOfType([se.a.number,se.a.string]),pe=se.a.oneOfType([se.a.string,se.a.number,se.a.shape({size:fe,push:Object(de.a)(fe,'Please use the prop "order"'),pull:Object(de.a)(fe,'Please use the prop "order"'),order:fe,offset:fe})]),be={children:se.a.node,hidden:se.a.bool,check:se.a.bool,size:se.a.string,for:se.a.string,tag:de.e,className:se.a.string,cssModule:se.a.object,xs:pe,sm:pe,md:pe,lg:pe,xl:pe,widths:se.a.array},he={tag:"label",widths:["xs","sm","md","lg","xl"]},ve=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},ge=function(e){var t=e.className,a=e.cssModule,n=e.hidden,r=e.widths,c=e.tag,l=e.check,o=e.size,i=e.for,s=Object(oe.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),m=[];r.forEach(function(t,n){var r=e[t];if(delete s[t],r||""===r){var c,l=!n;if(me()(r)){var o,i=l?"-":"-"+t+"-";c=ve(l,t,r.size),m.push(Object(de.c)(L()(((o={})[c]=r.size||""===r.size,o["order"+i+r.order]=r.order||0===r.order,o["offset"+i+r.offset]=r.offset||0===r.offset,o))),a)}else c=ve(l,t,r),m.push(c)}});var d=Object(de.c)(L()(t,!!n&&"sr-only",!!l&&"form-check-label",!!o&&"col-form-label-"+o,m,!!m.length&&"col-form-label"),a);return u.a.createElement(c,Object(z.a)({htmlFor:i},s,{className:d}))};ge.propTypes=be,ge.defaultProps=he;var Oe=ge;f.b.config({top:50});var ye=function(e){var t=e.roleData,a=e.fetchRoles,c=e.isLoading,m=Object(s.useState)([]),d=Object(i.a)(m,2),p=d[0],y=d[1],j=Object(s.useState)({}),E=Object(i.a)(j,2),k=E[0],N=E[1],z=Object(s.useState)(""),P=Object(i.a)(z,2),A=P[0],I=P[1],T=Object(s.useState)(!1),L=Object(i.a)(T,2),M=(L[0],L[1]),D=Object(s.useState)([]),R=Object(i.a)(D,2),K=R[0],H=R[1];Object(s.useEffect)(function(){_()},[]);var _=function(){var e=Object(o.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.next=3,Object(x.q)();case 3:(t=e.sent)&&t.data?(H(t.data),M(!1)):f.b.error("Something Went Wrong");case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(o.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.next=3,Object(x.z)(k);case 3:if(!(t=e.sent)||!t.data||t.error){e.next=12;break}if(!t.success){e.next=10;break}return f.b.success("Successfully Updated!"),e.next=9,a();case 9:M(!1);case 10:e.next=14;break;case 12:M(!1),f.b.error(t.error);case 14:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(o.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.next=3,Object(x.e)(A);case 3:(t=e.sent)&&t.data&&!t.error?t.success&&(f.b.success("Successfully inserted Permission!"),M(!1)):(M(!1),f.b.error(t.error));case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(v.a,{layout:"vertical"},u.a.createElement(b.a,null,u.a.createElement(h.a,{span:6},u.a.createElement(Oe,{className:"font-bold"},"Enter Permissions :"),u.a.createElement(b.a,null,u.a.createElement(h.a,{span:12},u.a.createElement(v.a.Item,null,u.a.createElement(g.a,{onChange:function(e){I({});var t=e.target,a=t.name,c=t.value;I(Object(r.a)({},A,Object(n.a)({},a,c)))},placeholder:"Enter Permissions",name:"permission"}))),u.a.createElement(h.a,{offset:1},u.a.createElement(O.a,{onClick:F,disabled:!A,type:"primary"},"Add"))),u.a.createElement(v.a.Item,{label:"User Type",className:"font-bold"},u.a.createElement(S.a,{onChange:function(e){!function(e){N({});var a=e.target,c=a.name,l=a.value;y(Object(r.a)({},p,Object(n.a)({},c,l)));var o=Array.isArray(t)&&t.find(function(e){return e.role===l});N(o||{})}({target:{name:"role",value:e}})},placeholder:"Select User Type"},(t||[]).map(function(e,t){return u.a.createElement(S.a.Option,{key:t,value:e.role},e.role)})))),u.a.createElement(h.a,{span:14,offset:1},u.a.createElement(Oe,{className:"font-bold"},"Permissions :"),u.a.createElement(G,{size:"large",bordered:!0,style:{width:"75%"},dataSource:K,renderItem:function(e){return u.a.createElement(G.Item,{style:{padding:"9px 24px"},"aria-disabled":"true"},u.a.createElement(b.a,null,u.a.createElement(h.a,{style:{width:350}},e.permission),u.a.createElement(h.a,null,u.a.createElement(le,{disabled:C.a.isEmpty(k),checked:(!C.a.isEmpty(k)&&k.permission||[]).includes(e.permission),onChange:function(t){!function(e){if(k.permission.includes(e.permission)){var t=k.permission.filter(function(t){return t!==e.permission});N(Object(r.a)({},k,{permission:t}))}else N(Object(r.a)({},k,{permission:[].concat(Object(w.a)(k.permission),[e.permission])}))}(e)}}))))}})),u.a.createElement(h.a,{span:3},u.a.createElement(O.a,{onClick:W,type:"primary",disabled:C.a.isEmpty(k),loading:c},"Save")))))},je={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.8-1.7-203.2 89.2-203.2 200 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.8-1.1 6.4-4.8 5.9-8.8zM824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200zm-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4-.1 34.2-13.4 66.3-37.6 90.5z"}}]},name:"usergroup-add",theme:"outlined"},Ee=a(260),xe=function(e,t){return s.createElement(Ee.a,Object.assign({},e,{ref:t,icon:je}))};xe.displayName="UsergroupAddOutlined";var we=s.forwardRef(xe),ke=a(545),Ce={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"}}]},name:"setting",theme:"outlined"},Se=function(e,t){return s.createElement(Ee.a,Object.assign({},e,{ref:t,icon:Ce}))};Se.displayName="SettingOutlined";var Ne=s.forwardRef(Se),ze=d.a.confirm,Pe=function(e){var t=e.roleData,a=e.fetchRoles,n=e.setLoading,r=Object(s.useState)(""),c=Object(i.a)(r,2),m=c[0],d=c[1],p=function(){var e=Object(o.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.j)(t._id);case 2:if(!(n=e.sent)){e.next=10;break}if(!n.success){e.next=9;break}return d(""),f.b.success("App successfully deleted!"),e.next=9,a();case 9:n.error&&f.b.error(n.error);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),w=[{title:"Role ",key:"role",dataIndex:"role"},{title:"Action",key:"action",render:function(e){return u.a.createElement("span",null,u.a.createElement(E.a,{theme:"filled",className:"cus-btn",onClick:function(){return function(e){ze({title:"Do you Want to delete this App?",icon:u.a.createElement(j.a,null),okText:"Yes",okType:"danger",cancelText:"No",onOk:function(){p(e)},onCancel:function(){}})}(e)},style:{color:"red"}}))}}],k=function(){var e=Object(o.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.next=3,Object(x.f)({role:m});case 3:if(!(t=e.sent)||!t.data){e.next=11;break}return f.b.success("Created"),e.next=8,a();case 8:n(!1),e.next=13;break;case 11:f.b.error("something went wrong"),n(!1);case 13:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(b.a,null,u.a.createElement(h.a,{span:6},u.a.createElement(v.a.Item,null,u.a.createElement(g.a,{value:m,placeholder:"Enter Roles",onChange:function(e){d(e.target.value)},name:"role"}))),u.a.createElement(h.a,{span:3},u.a.createElement(O.a,{type:"primary",disabled:!m,onClick:k},"Submit"))),u.a.createElement(y.a,{rowKey:function(e){return e._id},dataSource:t,columns:w,pagination:{pageSize:5}}))},Ae=m.a.TabPane;t.default=function(){var e=Object(s.useState)({}),t=Object(i.a)(e,2),a=t[0],c=t[1],w=Object(s.useState)([]),k=Object(i.a)(w,2),C=k[0],S=k[1],N=Object(s.useState)([]),z=Object(i.a)(N,2),P=z[0],A=z[1],I=Object(s.useState)(!1),T=Object(i.a)(I,2),L=T[0],M=T[1];Object(s.useEffect)(function(){R(),D()},[]);var D=function(){var e=Object(o.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.next=3,Object(x.r)();case 3:(t=e.sent)&&t.data?(A(t.data||[]),M(!1)):M(!1);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(o.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.s)();case 2:(t=e.sent)&&t.data&&S(t.data||[]);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(o.a)(l.a.mark(function e(t){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.k)(t._id);case 2:if(!(a=e.sent)||!a.success){e.next=7;break}return e.next=6,R();case 6:f.b.success("App successfully deleted!");case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),H=[{title:"Setting Data",key:"key",dataIndex:"key"},{title:"Action",key:"action",render:function(e){return u.a.createElement("span",null,u.a.createElement(E.a,{theme:"filled",className:"cus-btn",onClick:function(){return function(e){d.a.confirm({title:"Do you Want to delete this App?",icon:u.a.createElement(j.a,null),okText:"Yes",okType:"danger",cancelText:"No",onOk:function(){K(e)},onCancel:function(){}})}(e)},style:{color:"red"}}))}}],_=function(){var e=Object(o.a)(l.a.mark(function e(){var t,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.g)(a);case 2:return(t=e.sent)&&t.data?f.b.success("success"):f.b.error("something went wrong"),e.next=6,Object(x.s)();case 6:(n=e.sent)&&n.data&&S(n.data),c({});case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{spinning:L},u.a.createElement(m.a,{defaultActiveKey:"1"},u.a.createElement(Ae,{tab:u.a.createElement("span",null,u.a.createElement(we,null),"Roles"),key:"1"},u.a.createElement(Pe,{roleData:P,fetchRoles:D,setLoading:M,isLoading:L})),u.a.createElement(Ae,{tab:u.a.createElement("span",null,u.a.createElement(ke.a,null),"Permission"),key:"2"},u.a.createElement(ye,{roleData:P,fetchRoles:D,setLoading:M,isLoading:L})),u.a.createElement(Ae,{tab:u.a.createElement("span",null,u.a.createElement(Ne,null),"Settings"),key:"3",setLoading:M,isLoading:L},u.a.createElement("div",null,u.a.createElement(b.a,null,u.a.createElement(h.a,{md:6},u.a.createElement(v.a.Item,null,u.a.createElement(g.a,{value:a.searchData,placeholder:"Enter Data...",onChange:function(e){c(Object(r.a)({},a,Object(n.a)({},e.target.name,e.target.value)))},name:"searchData"}))),u.a.createElement(h.a,{md:2},u.a.createElement(O.a,{type:"primary",disabled:!a.searchData,onClick:_},"Submit")))),u.a.createElement(y.a,{rowKey:function(e){return e._id},dataSource:C,columns:H,pagination:{pageSize:5}})))))}}}]);
//# sourceMappingURL=12.8143d66c.chunk.js.map