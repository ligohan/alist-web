!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy.c28bb798.js","./Folder-legacy.fcbf272b.js","./Layout-legacy.f760794c.js","./useUtil-legacy.7b8881ef.js","./index-legacy.bb7b89a9.js","./ImageWithError-legacy.dfea3baf.js","./icon-legacy.b1e21950.js","./api-legacy.0166999b.js","./useTitle-legacy.1118f8c3.js","./Markdown-legacy.86c52c5e.js","./index-legacy.0755a262.js","./FolderTree-legacy.84bf0705.js"],(function(t){"use strict";var n,r,o,a,i,l,u,c,f,s,g,b,d,h,y,m,p,j,v,w,x,$,A,S,k,M,E,I;return{setters:[function(e){n=e.f,r=e.a7,o=e.ah,a=e.e,i=e.t,l=e.aF,u=e.W,c=e.z,f=e.aE,s=e.aH,g=e.ci,b=e.aj,d=e.ag,h=e.m,y=e.br,m=e.af,p=e.bb,j=e.v,v=e.o,w=e.bY},function(e){x=e.b},function(e){$=e.a,A=e.M},function(e){S=e.c},function(e){k=e.U},function(e){M=e.I},function(e){E=e.g,I=e.O},function(){},function(){},function(){},function(){},function(){}],execute:function(){var z=function(t){if((0,S().isHide)(t.obj))return null;var j=$().setPathAs,v=n(o,{get color(){return r()},boxSize:"$12",get as(){return E(t.obj)}}),w=e(a(!1),2),z=w[0],C=w[1],O=i((function(){return l()&&(z()||t.obj.selected)})),F=x({id:1}).show;return n(A.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return n(u,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:c()}},as:k,get href(){return t.obj.name},onMouseEnter:function(){C(!0),j(t.obj.name,t.obj.is_dir,!0)},onMouseLeave:function(){C(!1)},onContextMenu:function(e){f((function(){s(!1),g(t.index,!0,!0)})),F(e,{props:t.obj})},get children(){return[n(b,{class:"item-thumbnail",h:"70px",w:"$full","on:click":function(e){t.obj.type===I.IMAGE&&(e.stopPropagation(),e.preventDefault(),d.emit("gallery",t.obj.name))},pos:"relative",get children(){return[n(h,{get when(){return O()},get children(){return n(y,{pos:"absolute",left:"$1",top:"$1","on:click":function(e){e.stopPropagation()},get checked(){return t.obj.selected},onChange:function(e){g(t.index,e.target.checked)}})}}),n(h,{get when(){return t.obj.thumb},fallback:v,get children(){return n(M,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return n(m,{size:"lg"})},fallbackErr:v,get src(){return t.obj.thumb},loading:"lazy"})}})]}}),n(p,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return t.obj.name},get children(){return t.obj.name}})]}})}})};t("default",(function(){return n(w,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",get children(){return n(j,{get each(){return v.objs},children:function(e,t){return n(z,{obj:e,get index(){return t()}})}})}})}))}}}))}();
