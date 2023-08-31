"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[58725],{61835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var r=n(85893),s=n(11151),i=n(19573);const c={},o="Advanced Tutorials",a={unversionedId:"advanced/index",id:"version-2.4.1/advanced/index",title:"Advanced Tutorials",description:"This section is not going to be very structured, but we will cover the following topics:",source:"@site/versioned_docs/version-2.4.1/advanced/index.mdx",sourceDirName:"advanced",slug:"/advanced/",permalink:"/docusaurus-docs/docs/advanced/",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"2.4.1",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"What's next?",permalink:"/docusaurus-docs/docs/guides/whats-next"},next:{title:"Architecture",permalink:"/docusaurus-docs/docs/advanced/architecture"}},d={},u=[];function l(e){const t=Object.assign({h1:"h1",p:"p",a:"a"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"advanced-tutorials",children:"Advanced Tutorials"}),"\n",(0,r.jsx)(t.p,{children:"This section is not going to be very structured, but we will cover the following topics:"}),"\n","\n","\n",(0,r.jsx)(i.Z,{}),"\n",(0,r.jsxs)(t.p,{children:["We will assume that you have finished the guides, and know the basics like how to configure plugins, how to write React components, etc. These sections will have plugin authors and code contributors in mind, so we may occasionally refer to ",(0,r.jsx)(t.a,{href:"/docusaurus-docs/docs/api/plugin-methods/",children:"plugin APIs"})," or other architecture details. Don't panic if you don't understand everything\ud83d\ude09"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},19573:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(85893),s=(n(67294),n(86010)),i=n(30562),c=n(61596),o=n(85606),a=n(27692),d=n(24805);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function l({href:e,children:t}){return(0,r.jsx)(c.Z,{href:e,className:(0,s.Z)("card padding--lg",u.cardContainer),children:t})}function h({href:e,icon:t,title:n,description:i}){return(0,r.jsxs)(l,{href:e,children:[(0,r.jsxs)(d.Z,{as:"h2",className:(0,s.Z)("text--truncate",u.cardTitle),title:n,children:[t," ",n]}),i&&(0,r.jsx)("p",{className:(0,s.Z)("text--truncate",u.cardDescription),title:i,children:i})]})}function p({item:e}){const t=(0,i.LM)(e);return t?(0,r.jsx)(h,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(n=e.description)&&void 0!==n?n:(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null;var n}function f({item:e}){const t=(0,o.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var n;const s=(0,i.xz)(null!==(n=e.docId)&&void 0!==n?n:void 0);var c;return(0,r.jsx)(h,{href:e.href,icon:t,title:e.label,description:null!==(c=e.description)&&void 0!==c?c:null==s?void 0:s.description})}function m({item:e}){switch(e.type){case"link":return(0,r.jsx)(f,{item:e});case"category":return(0,r.jsx)(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g({className:e}){const t=(0,i.jA)();return(0,r.jsx)(x,{items:t.items,className:e})}function x(e){const{items:t,className:n}=e;if(!t)return(0,r.jsx)(g,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}({},e));const c=(0,i.MN)(t);return(0,r.jsx)("section",{className:(0,s.Z)("row",n),children:c.map(((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(m,{item:e})},t)))})}},11151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>i});var r=n(67294);const s=r.createContext({});function i(e){const t=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||c:i(e),r.createElement(s.Provider,{value:o},t)}}}]);