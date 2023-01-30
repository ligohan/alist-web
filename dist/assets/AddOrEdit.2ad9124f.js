import{d as _,f as t,aZ as E,R as P,aj as G,U as s,I as C,bN as H,T as J,bO as M,bP as U,bQ as Z,bR as Q,bS as W,bT as X,bU as z,v as S,bV as K,bW as Y,bX as p,m as I,F as ee,a$ as te,u as ne,a as v,b5 as f,e as re,bs as T,be as ae,ch as ie,ao as x,B as de,n as O,A as ue,bc as y,Z as ge}from"./index.26e2de3a.js";import{T as u}from"./item_type.be442da4.js";import{R as ce}from"./ResponsiveGrid.9fe7ed83.js";const b=e=>{const d=_();return t(te,{w:"$full",display:"flex",flexDirection:"column",get required(){return e.required},get children(){return[t(E,{get for(){return e.name},display:"flex",alignItems:"center",get children(){var n;return d(((n=e.full_name_path)!=null?n:e.driver==="common")?`storages.common.${e.name}`:`drivers.${e.driver}.${e.name}`)}}),t(P,{get fallback(){return t(G,{get children(){return d("settings.unknown_type")}})},get children(){return[t(s,{get when(){return e.type===u.String},get children(){return t(C,{get id(){return e.name},get type(){return e.name=="password"?"password":"text"},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===u.String?n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.value)}:void 0}})}}),t(s,{get when(){return e.type===u.Number},get children(){return t(C,{type:"number",get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===u.Number?n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,parseInt(n.currentTarget.value))}:void 0}})}}),t(s,{get when(){return e.type===u.Bool},get children(){return t(H,{get id(){return e.name},get readOnly(){return e.readonly},get defaultChecked(){return e.value},get onChange(){return e.type===u.Bool?n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.checked)}:void 0}})}}),t(s,{get when(){return e.type===u.Text},get children(){return t(J,{get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onChange(){return e.type===u.Text?n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.value)}:void 0}})}}),t(s,{get when(){return e.type===u.Select},get children(){return t(M,{get id(){return e.name},get readOnly(){return e.readonly},get defaultValue(){return e.value},get onChange(){return e.type===u.Select?n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n)}:void 0},get children(){return[t(U,{get children(){return[t(Z,{get children(){return d("global.choose")}}),t(Q,{}),t(W,{})]}}),t(X,{get children(){return t(z,{get children(){return t(S,{get each(){var n;return(n=e.options)==null?void 0:n.split(",")},children:n=>t(K,{value:n,get children(){return[t(Y,{get children(){var r;return d(((r=e.options_prefix)!=null?r:e.driver==="common"?`storages.common.${e.name}s`:`drivers.${e.driver}.${e.name}s`)+`.${n}`)}}),t(p,{})]}})})}})}})]}})}})]}}),t(I,{get when(){return e.help},get children(){return t(ee,{get children(){return d(e.driver==="common"?`storages.common.${e.name}-tips`:`drivers.${e.driver}.${e.name}-tips`)}})}})]}})};function k(e,d){switch(e){case u.Bool:return d?d==="true":!1;case u.Number:return d?parseInt(d):0;default:return d||""}}const he=()=>{const e=_(),{params:d,back:n,to:r}=ne(),{id:c}=d,[R,L]=v(()=>f.get("/admin/driver/list"),!0),[l,w]=re({}),B=async()=>{const a=await L();y(a,w)},[F,N]=v(()=>f.get(`/admin/storage/get?id=${c}`),!0),[j,A]=v(()=>f.get(`/admin/driver/info?driver=${g.driver}`),!0);c?(async()=>{const a=await N();y(a,async i=>{o(i),m(JSON.parse(i.addition));const h=await A();y(h,q=>w({[g.driver]:q}))})})():B();const[g,o]=T({}),[$,m]=T({}),[D,V]=v(()=>(o("addition",JSON.stringify($)),f.post(`/admin/storage/${c?"update":"create"}`,g)));return t(ge,{get loading(){return c?F()||j():R()},get children(){return[t(ae,{mb:"$2",get children(){return e(`global.${c?"edit":"add"}`)}}),t(ce,{get children(){return[t(b,{name:"driver",default:"",readonly:c!==void 0,required:!0,get type(){return u.Select},get options(){return c?g.driver:Object.keys(l()).join(",")},get value(){return g.driver},full_name_path:"storages.common.driver",options_prefix:"drivers.drivers",driver:"drivers",onChange:a=>{for(const i of l()[a].common)o(i.name,k(i.type,i.default));m(ie(i=>{for(const h in i)delete i[h]}));for(const i of l()[a].additional)m(i.name,k(i.type,i.default));o("driver",a)}}),t(I,{get when(){return l()[g.driver]},get children(){return[t(S,{get each(){return l()[g.driver].common},children:a=>t(b,x(a,{driver:"common",get value(){return g[a.name]},onChange:i=>{o(a.name,i)}}))}),t(S,{get each(){return l()[g.driver].additional},children:a=>t(b,x(a,{get driver(){return g.driver},get value(){return $[a.name]},onChange:i=>{m(a.name,i)}}))})]}})]}}),t(de,{mt:"$2",get loading(){return D()},onClick:async()=>{l()[g.driver].config.need_ms&&(O.info(e("manage.add_storage-tips")),window.open(ue("/@manage/messenger"),"_blank"));const a=await V();y(a,()=>{O.success(e("global.save_success")),n()},(i,h)=>{a.data.id&&r(`/@manage/storages/edit/${a.data.id}`)})},get children(){return e(`global.${c?"save":"add"}`)}})]}})};export{he as default};
