import{f as t,v as z,W as k,t as B,a2 as $,a3 as T,bd as u,U as A,R as V,u as p,d as g,L as y,z as C,m as _,ah as h,be as d,e as x,bf as E,a0 as m,Y as s,ak as L,G as n,H as r,bg as M,bh as U,as as H,J as R,a6 as b,bi as W,bj as Y,n as j,aY as N,aQ as F,aR as X,aS as J,aT as q,aU as G,aj as f,aW as w,aX as D,bk as Q,bl as K,bm as Z}from"./index.26e2de3a.js";import{b as e1,a as t1}from"./useTitle.d7ca4301.js";import{A as n1,f as r1,g as o1,h as a1,i as i1,j as s1,k as c1,l as l1,m as m1,n as u1,o as g1,p as d1,q as _1,r as h1,b as p1,s as E1,t as f1,u as I1}from"./index.e83eac77.js";var i=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.GITHUB=7]="GITHUB",e))(i||{}),v1=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(v1||{});const $1=e=>{const o=B(()=>{if(!$.is_admin(T())){if(e.role===void 0)return!1;if(e.role===u.GENERAL&&!$.is_general(T()))return!1}return!0});return t(V,{get fallback(){return t(T1,e)},get children(){return[t(A,{get when(){return!o()},children:null}),t(A,{get when(){return e.children},get children(){return t(A1,e)}})]}})},T1=e=>{const{pathname:o}=p(),a=g(),c=()=>o()===e.to;return t(n1,{display:"flex",as:y,get href(){return e.to},onClick:()=>{S()},w:"$full",alignItems:"center",get _hover(){return{bgColor:c()?"$info4":C(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return c()?"$info4":""},get color(){return c()?"$info11":""},get external(){return e.external},get children(){return[t(_,{get when(){return e.icon},get children(){return t(h,{mr:"$2",get as(){return e.icon}})}}),t(d,{get children(){return a(e.title)}})]}})},A1=e=>{const{pathname:o}=p(),[a,c]=x(o().includes(e.to)),O=g();return t(s,{w:"$full",get children(){return[t(E,{justifyContent:"space-between",onClick:()=>{c(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:C()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(m,{get children(){return[t(_,{get when(){return e.icon},get children(){return t(h,{mr:"$2",get as(){return e.icon}})}}),t(d,{get children(){return O(e.title)}})]}}),t(h,{as:r1,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(_,{get when(){return a()},get children(){return t(s,{pl:"$2",get children(){return t(I,{get items(){return e.children}})}})}})]}})},I=e=>t(k,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(z,{get each(){return e.items},children:o=>t($1,o)})}});function b1(e){return L({a:{viewBox:"0 0 24 24"},c:'<path d="M5.385 6.136c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-1.438 2.63c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465-2.63c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.499-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm-1.088 5.592c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.643 1.461 1.438 1.461zm5.464-5.592c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 7.247 12 7.247s1.088-.498 1.088-1.111zm.35-4.675c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461S11.206 0 12 0s1.438.654 1.438 1.461zm-.35 0C13.088.848 12.6.35 12 .35s-1.088.498-1.088 1.111S11.4 2.572 12 2.572s1.088-.498 1.088-1.111zm.35 8.806c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.499 1.088-1.111zm4.376-4.131c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939 1.461c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.644 1.461 1.438 1.461zm-4.027 1.209c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.643-1.461-1.438-1.461zm4.027 0c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 12.857a1.45 1.45 0 00-1.438 1.461c0 .807.644 1.461 1.438 1.461s1.438-.654 1.438-1.461a1.45 1.45 0 00-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zM12 12.896c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.464 1.461c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 16.948c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm4.376 0c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm.35 4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 23.65 12 23.65s1.088-.498 1.088-1.111zm4.376-4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461z"/>'},e)}function z1(e){return L({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const l=n(()=>r(()=>import("./Common.b33124d0.js"),["assets/Common.b33124d0.js","assets/index.26e2de3a.js","assets/index.659f4289.css","assets/useTitle.d7ca4301.js","assets/SettingItem.35e8eaa3.js","assets/item_type.be442da4.js","assets/index.e83eac77.js","assets/ResponsiveGrid.9fe7ed83.js"])),v=[{title:"manage.sidemenu.profile",icon:o1,to:"/@manage",role:u.GUEST,component:n(()=>r(()=>import("./Profile.c01b091b.js"),["assets/Profile.c01b091b.js","assets/index.26e2de3a.js","assets/index.659f4289.css","assets/useTitle.d7ca4301.js","assets/index.e83eac77.js"]))},{title:"manage.sidemenu.settings",icon:a1,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:i1,to:"/@manage/settings/site",component:()=>t(l,{get group(){return i.SITE}})},{title:"manage.sidemenu.style",icon:s1,to:"/@manage/settings/style",component:()=>t(l,{get group(){return i.STYLE}})},{title:"manage.sidemenu.preview",icon:c1,to:"/@manage/settings/preview",component:()=>t(l,{get group(){return i.PREVIEW}})},{title:"manage.sidemenu.global",icon:l1,to:"/@manage/settings/global",component:()=>t(l,{get group(){return i.GLOBAL}})},{title:"manage.sidemenu.github",icon:m1,to:"/@manage/settings/github",component:()=>t(l,{get group(){return i.GITHUB}})},{title:"manage.sidemenu.other",icon:u1,to:"/@manage/settings/other",component:n(()=>r(()=>import("./Other.8f33df99.js"),["assets/Other.8f33df99.js","assets/index.26e2de3a.js","assets/index.659f4289.css","assets/useTitle.d7ca4301.js","assets/useUtil.eb90c4c9.js","assets/api.f6a2d8a0.js","assets/SettingItem.35e8eaa3.js","assets/item_type.be442da4.js","assets/index.e83eac77.js"]))}]},{title:"manage.sidemenu.tasks",icon:z1,to:"/@manage/tasks",children:[{title:"manage.sidemenu.aria2",icon:g1,to:"/@manage/tasks/aria2",component:n(()=>r(()=>import("./Aria2.afb9def9.js"),["assets/Aria2.afb9def9.js","assets/index.26e2de3a.js","assets/index.659f4289.css","assets/useTitle.d7ca4301.js","assets/Tasks.f2f28855.js"]))},{title:"manage.sidemenu.upload",icon:d1,to:"/@manage/tasks/upload",component:n(()=>r(()=>import("./Upload.d853d5db.js"),["assets/Upload.d853d5db.js","assets/index.26e2de3a.js","assets/index.659f4289.css","assets/useTitle.d7ca4301.js","assets/Tasks.f2f28855.js"]))},{title:"manage.sidemenu.copy",icon:M,to:"/@manage/tasks/copy",component:n(()=>r(()=>import("./Copy.f0f3461a.js"),["assets/Copy.f0f3461a.js","assets/index.26e2de3a.js","assets/index.659f4289.css","assets/useTitle.d7ca4301.js","assets/Tasks.f2f28855.js"]))}]},{title:"manage.sidemenu.users",icon:_1,to:"/@manage/users",component:n(()=>r(()=>import("./Users.2013702b.js"),["assets/Users.2013702b.js","assets/index.26e2de3a.js","assets/index.659f4289.css","assets/useTitle.d7ca4301.js","assets/DeletePopover.7378500d.js"]))},{title:"manage.sidemenu.storages",icon:h1,to:"/@manage/storages",component:n(()=>r(()=>import("./Storages.dbcdcd3a.js"),["assets/Storages.dbcdcd3a.js","assets/index.26e2de3a.js","assets/index.659f4289.css","assets/useTitle.d7ca4301.js","assets/DeletePopover.7378500d.js"]))},{title:"manage.sidemenu.metas",icon:b1,to:"/@manage/metas",component:n(()=>r(()=>import("./Metas.49aae4cf.js"),["assets/Metas.49aae4cf.js","assets/index.26e2de3a.js","assets/index.659f4289.css","assets/useTitle.d7ca4301.js","assets/DeletePopover.7378500d.js"]))},{title:"manage.sidemenu.indexes",icon:p1,to:"/@manage/indexes",component:n(()=>r(()=>import("./indexes.7234e73c.js"),["assets/indexes.7234e73c.js","assets/index.26e2de3a.js","assets/index.659f4289.css","assets/api.f6a2d8a0.js","assets/Common.b33124d0.js","assets/useTitle.d7ca4301.js","assets/SettingItem.35e8eaa3.js","assets/item_type.be442da4.js","assets/index.e83eac77.js","assets/ResponsiveGrid.9fe7ed83.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:E1,component:n(()=>r(()=>import("./backup-restore.e46b25e8.js"),["assets/backup-restore.e46b25e8.js","assets/index.26e2de3a.js","assets/index.659f4289.css"]))},{title:"manage.sidemenu.about",icon:f1,to:"/@manage/about",role:u.GUEST,component:n(()=>r(()=>import("./About.39061c41.js"),["assets/About.39061c41.js","assets/index.26e2de3a.js","assets/index.659f4289.css","assets/Markdown.d06e4e4b.js"]))},{title:"manage.sidemenu.home",icon:U,to:"/",role:u.GUEST,external:!0}],{isOpen:C1,onOpen:L1,onClose:S}=H(),R1=()=>{const e=g(),{to:o}=p();return t(s,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return R("$background","$neutral2")()},get children(){return[t(E,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(m,{spacing:"$2",get children(){return[t(b,{"aria-label":"menu",get icon(){return t(I1,{})},display:{"@sm":"none"},onClick:L1,size:"sm"}),t(d,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{o("/@manage")},get children(){return e("manage.title")}})]}}),t(m,{spacing:"$1",get children(){return t(b,{"aria-label":"logout",get icon(){return t(W,{})},onClick:()=>{Y(),j.success(e("manage.logout_success")),o(`/@login?redirect=${encodeURIComponent(location.pathname)}`)},size:"sm"})}})]}}),t(N,{get opened(){return C1()},placement:"left",onClose:S,get children(){return[t(F,{}),t(X,{get children(){return[t(J,{}),t(q,{color:"$info9",get children(){return e("manage.title")}}),t(G,{get children(){return[t(I,{items:v}),t(f,{get children(){return t(m,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(w,{}),t(D,{})]}})}})]}})]}})]}})]}})},w1=[{to:"/storages/add",component:n(()=>r(()=>import("./AddOrEdit.2ad9124f.js"),["assets/AddOrEdit.2ad9124f.js","assets/index.26e2de3a.js","assets/index.659f4289.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.9fe7ed83.js"]))},{to:"/storages/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.2ad9124f.js"),["assets/AddOrEdit.2ad9124f.js","assets/index.26e2de3a.js","assets/index.659f4289.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.9fe7ed83.js"]))},{to:"/users/add",component:n(()=>r(()=>import("./AddOrEdit.520d8477.js"),["assets/AddOrEdit.520d8477.js","assets/index.26e2de3a.js","assets/index.659f4289.css","assets/FolderTree.5943ddd1.js","assets/index.e83eac77.js","assets/api.f6a2d8a0.js"]))},{to:"/users/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.520d8477.js"),["assets/AddOrEdit.520d8477.js","assets/index.26e2de3a.js","assets/index.659f4289.css","assets/FolderTree.5943ddd1.js","assets/index.e83eac77.js","assets/api.f6a2d8a0.js"]))},{to:"/metas/add",component:n(()=>r(()=>import("./AddOrEdit.71b4b0c7.js"),["assets/AddOrEdit.71b4b0c7.js","assets/index.26e2de3a.js","assets/index.659f4289.css","assets/FolderTree.5943ddd1.js","assets/index.e83eac77.js","assets/api.f6a2d8a0.js"]))},{to:"/metas/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.71b4b0c7.js"),["assets/AddOrEdit.71b4b0c7.js","assets/index.26e2de3a.js","assets/index.659f4289.css","assets/FolderTree.5943ddd1.js","assets/index.e83eac77.js","assets/api.f6a2d8a0.js"]))},{to:"/2fa",component:n(()=>r(()=>import("./2fa.b5d01de1.js"),["assets/2fa.b5d01de1.js","assets/index.26e2de3a.js","assets/index.659f4289.css"]))},{to:"/messenger",component:n(()=>r(()=>import("./Messenger.321b30a3.js"),["assets/Messenger.321b30a3.js","assets/index.26e2de3a.js","assets/index.659f4289.css"]))}],D1=e=>(e1(e.title),t(f,{h:"$full",get children(){return t(d,{get children(){return e.title}})}})),P=(e,o=[])=>(e.forEach(a=>{a.children?P(a.children,o):o.push({to:Q(a.to,"/@manage"),component:a.component||(()=>t(D1,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),o),S1=P(v).concat(w1),P1=()=>{const e=g();return t1(()=>e("manage.title")),t(s,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(R1,{}),t(E,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(s,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return R("$background","$neutral2")()},overflowY:"auto",get children(){return[t(I,{items:v}),t(f,{get children(){return t(m,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(w,{}),t(D,{})]}})}})]}}),t(s,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(K,{get children(){return t(z,{each:S1,children:o=>t(Z,{get path(){return o.to},get component(){return o.component}})})}})}})]}})]}})},V1=Object.freeze(Object.defineProperty({__proto__:null,default:P1},Symbol.toStringTag,{value:"Module"}));export{v1 as F,i as G,V1 as i};
