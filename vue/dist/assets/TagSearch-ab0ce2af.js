import{d as b,V as T,aV as N,a_ as V,r as h,A,ab as D,p as U,K as o,L as l,$ as r,x as y,T as d,c as $,O as c,a2 as q,W as u,N as f,Y as p,U as g,Z as G,a4 as F,cj as L,a8 as M}from"./index-8bb7713e.js";/* empty css              */import{a as k,u as O}from"./db-94066177.js";import{B as j}from"./button-37307691.js";const z={class:"container"},E={class:"search-bar"},K={class:"tag-list"},Q=["onClick"],R=b({__name:"TagSearch",props:{tabIdx:null,paneIdx:null},setup(x){const I=x,S=T(),i=N(new V),a=h(),t=h(new Set),m=A(()=>a.value?a.value.tags.slice().sort((s,n)=>n.count-s.count):[]),C=D();U(async()=>{a.value=await k()});const B=async()=>{i.pushAction(async()=>{await O(),a.value=await k()})},w=()=>{S.openTagSearchMatchedImageGridInRight(I.tabIdx,C,Array.from(t.value))},_=s=>s.display_name?`${s.display_name} : ${s.name}`:s.name;return(s,n)=>{const v=j;return o(),l("div",z,[r("",!0),a.value?(o(),l(y,{key:1},[d("div",null,[d("div",E,[$(c(q),{conv:{value:e=>e.id,text:_},mode:"multiple",style:{width:"100%"},options:c(m),value:Array.from(t.value),placeholder:"Select tags to match images","onUpdate:value":n[0]||(n[0]=e=>t.value=new Set(e))},null,8,["conv","options","value"]),a.value.expired||!a.value.img_count?(o(),u(v,{key:0,onClick:B,loading:!i.isIdle,type:"primary"},{default:f(()=>[p(g(a.value.img_count===0?"Generate index for search image":"Update index"),1)]),_:1},8,["loading"])):(o(),u(v,{key:1,type:"primary",onClick:w,loading:!i.isIdle},{default:f(()=>[p("Search")]),_:1},8,["loading"]))])]),d("ul",K,[(o(!0),l(y,null,G(c(m),e=>(o(),l("li",{key:e.id,class:F(["tag",{selected:t.value.has(e.id)}]),onClick:W=>t.value.has(e.id)?t.value.delete(e.id):t.value.add(e.id)},[t.value.has(e.id)?(o(),u(c(L),{key:0})):r("",!0),p(" "+g(_(e)),1)],10,Q))),128))])],64)):r("",!0)])}}});const P=M(R,[["__scopeId","data-v-ffc944e7"]]);export{P as default};
