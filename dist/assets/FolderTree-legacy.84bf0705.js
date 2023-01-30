!function(){function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return e};var e={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(O){l=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new S(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return C()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=L(a,e);if(u){if(u===s)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=h(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(O){return{type:"throw",arg:O}}}e.wrap=f;var s={};function d(){}function p(){}function g(){}var y={};l(y,a,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(k([])));m&&m!==n&&o.call(m,a)&&(y=m);var b=g.prototype=d.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function x(r,e){function n(i,a,u,c){var l=h(r[i],r,a);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==t(s)&&o.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):e.resolve(s).then((function(t){f.value=t,u(f)}),(function(t){return n("throw",t,u,c)}))}c(l.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}}function L(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,L(t,r),"throw"===r.method))return s;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=h(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,s;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,s):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,s)}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function E(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function k(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(o.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:C}}function C(){return{value:void 0,done:!0}}return p.prototype=g,l(b,"constructor",g),l(g,"constructor",p),p.displayName=l(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,u,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new x(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),l(b,c,"Generator"),l(b,a,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),s},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),s}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:k(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),s}},e}function e(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void e(l)}u.done?r(c):Promise.resolve(c).then(n,o)}function n(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var n,o,i=[],a=!0,u=!1;try{for(e=e.call(t);!(a=(n=e.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==e.return||e.return()}finally{if(u)throw o}}return i}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return o(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}System.register(["./index-legacy.c28bb798.js","./index-legacy.bb7b89a9.js","./api-legacy.0166999b.js"],(function(t){"use strict";var o,i,a,u,c,l,f,h,s,d,p,g,y,v,m,b,w,x,L,_,E,S,k,C,O,j,$,F,P,I,A,G,N;return{setters:[function(t){o=t.as,i=t.d,a=t.f,u=t.I,c=t.m,l=t.B,f=t.a0,h=t.M,s=t.i,d=t.aP,p=t.j,g=t.k,y=t.q,v=t.r,m=t.e,b=t.Y,w=t.az,x=t.a,L=t._,_=t.ba,E=t.a7,S=t.ah,k=t.bb,C=t.z,O=t.aB,j=t.b1,$=t.W,F=t.v,P=t.p,I=t.au,A=t.bc},function(t){G=t.f},function(t){N=t.k}],execute:function(){var T=I(),z=function(t){var r=n(m("/"),2),e=r[0],o=r[1];return a(b,{class:"folder-tree-box",w:"$full",overflowX:"auto",get children(){return a(T.Provider,{get value(){var r;return{value:e,onChange:function(r){o(r),t.onChange(r)},forceRoot:null!==(r=t.forceRoot)&&void 0!==r&&r}},get children(){return a(M,{path:"/"})}})}})},M=function t(i){var u=n(m([]),2),l=u[0],h=u[1],s=w(T),d=s.value,p=s.onChange,g=s.forceRoot,y=n(x((function(){return N(i.path,L(),g)})),2),v=y[0],I=y[1],z=function(){var t,n=(t=r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(l().length>0)){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,I();case 4:e=t.sent,A(e,h);case 6:case"end":return t.stop()}}),t)})),function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function u(t){e(a,o,i,u,c,"next",t)}function c(t){e(a,o,i,u,c,"throw",t)}u(void 0)}))});return function(){return n.apply(this,arguments)}}(),M=o(),R=M.isOpen,Y=M.onToggle,B=function(){return d()===i.path};return a(b,{get children(){return[a(f,{spacing:"$2",get children(){return[a(c,{get when(){return!v()},get fallback(){return a(_,{size:"sm",get color(){return E()}})},get children(){return a(S,{get color(){return E()},as:G,get transform(){return R()?"rotate(90deg)":"none"},transition:"transform 0.2s",cursor:"pointer",onClick:function(){Y(),R()&&z()}})}}),a(k,{css:{whiteSpace:"nowrap"},fontSize:"$md",cursor:"pointer",px:"$1",rounded:"$md",get bgColor(){return B()?"$info8":"transparent"},get _hover(){return{bgColor:B()?"$info8":C()}},onClick:function(){p(i.path)},get children(){return O((function(){return"/"===i.path}),!0)()?"root":j(i.path)}})]}}),a(c,{get when(){return R()},get children(){return a($,{mt:"$1",pl:"$4",alignItems:"start",spacing:"$1",get children(){return a(F,{get each(){return l()},children:function(r){return a(t,{get path(){return P(i.path,r.name)}})}})}})}})]}})};t("M",(function(t){var r,e=i(),o=n(m(null!==(r=t.defaultValue)&&void 0!==r?r:""),2),u=o[0],c=o[1];return a(v,{size:"xl",blockScrollOnMount:!1,get opened(){return t.opened},get onClose(){return t.onClose},get children(){return[a(h,{}),a(s,{get children(){return[a(p,{get children(){return e("home.toolbar.choose_dst_folder")}}),a(g,{get children(){return a(z,{onChange:c})}}),a(y,{display:"flex",gap:"$2",get children(){return[a(l,{get onClick(){return t.onClose},colorScheme:"neutral",get children(){return e("global.cancel")}}),a(l,{get loading(){return t.loading},onClick:function(){var r;return null===(r=t.onSubmit)||void 0===r?void 0:r.call(t,u())},get children(){return e("global.ok")}})]}})]}})]}})})),t("F",(function(t){var r=o(),e=r.isOpen,n=r.onOpen,m=r.onClose,b=i();return[a(f,{w:"$full",spacing:"$2",get children(){return[a(u,{get id(){return t.id},get value(){return t.value},onInput:function(r){return t.onChange(r.currentTarget.value)},get readOnly(){return t.onlyFolder},get onClick(){return t.onlyFolder?n:function(){}},get placeholder(){return b("global.".concat(t.onlyFolder?"choose_folder":"choose_or_input_path"))}}),a(c,{get when(){return!t.onlyFolder},get children(){return a(l,{onClick:n,get children(){return b("global.choose")}})}})]}}),a(v,{size:"xl",get opened(){return e()},onClose:m,get children(){return[a(h,{}),a(s,{get children(){return[a(d,{}),a(p,{get children(){return b("global.choose_folder")}}),a(g,{get children(){return a(z,{forceRoot:!0,get onChange(){return t.onChange}})}}),a(y,{get children(){return a(l,{onClick:m,get children(){return b("global.confirm")}})}})]}})]}})]}))}}}))}();
