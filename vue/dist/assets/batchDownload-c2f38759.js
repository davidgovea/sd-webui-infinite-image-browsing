import{d as v,c0 as C,bO as I,o as i,y as _,p as f,c,n as r,x as h,v as d,r as e,m as F,L as x,c1 as z,c2 as B,V as $,X as R}from"./index-8fdc787e.js";import{u as S,b as V,k as E,F as A,g as L}from"./FileItem-1b8c703b.js";import"./db-6dd4eb01.js";import"./shortcut-3f34d136.js";const T={class:"actions-panel actions"},N={key:0,class:"file-list"},U={class:"hint"},H=v({__name:"batchDownload",props:{tabIdx:{},paneIdx:{},id:{}},setup(O){const{stackViewEl:w}=S().toRefs(),{itemSize:p,gridItems:k,cellWidth:y}=V(),l=E(),{selectdFiles:n}=C(l),u=I(),D=async t=>{const s=z(t);s&&l.addFiles(s.nodes)},b=async()=>{u.pushAction(async()=>{const t=await B.value.post("/zip",{paths:n.value.map(a=>a.fullpath)},{responseType:"blob"}),s=window.URL.createObjectURL(new Blob([t.data])),o=document.createElement("a");o.href=s,o.setAttribute("download",`iib_${new Date().toLocaleString()}.zip`),document.body.appendChild(o),o.click()})},g=t=>{n.value.splice(t,1)};return(t,s)=>{const o=$;return i(),_("div",{class:"container",ref_key:"stackViewEl",ref:w,onDrop:D},[f("div",T,[c(o,{onClick:s[0]||(s[0]=a=>e(l).selectdFiles=[])},{default:r(()=>[h(d(t.$t("clear")),1)]),_:1}),c(o,{onClick:b,type:"primary",loading:!e(u).isIdle},{default:r(()=>[h(d(t.$t("zipDownload")),1)]),_:1},8,["loading"])]),e(n).length?(i(),F(e(L),{key:1,ref:"scroller",class:"file-list",items:e(n).slice(),"item-size":e(p).first,"key-field":"fullpath","item-secondary-size":e(p).second,gridItems:e(k)},{default:r(({item:a,index:m})=>[c(A,{idx:m,file:a,"cell-width":e(y),"enable-close-icon":"",onCloseIconClick:j=>g(m),"full-screen-preview-image-url":e(x)(a),"enable-right-click-menu":!1},null,8,["idx","file","cell-width","onCloseIconClick","full-screen-preview-image-url"])]),_:1},8,["items","item-size","item-secondary-size","gridItems"])):(i(),_("div",N,[f("p",U,d(t.$t("batchDownloaDDragAndDropHint")),1)]))],544)}}});const G=R(H,[["__scopeId","data-v-16c4c9dd"]]);export{G as default};
