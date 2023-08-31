"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[45641],{8437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=n(85893),s=n(11151),c=n(19573);const i={},o="\u9ad8\u7ea7\u6559\u7a0b",a={unversionedId:"advanced/index",id:"advanced/index",title:"\u9ad8\u7ea7\u6559\u7a0b",description:"This section is not going to be very structured, but we will cover the following topics:",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/advanced/index.mdx",sourceDirName:"advanced",slug:"/advanced/",permalink:"/docusaurus-docs/docs/next/advanced/",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"\u63a5\u4e0b\u6765\u662f\u4ec0\u4e48?",permalink:"/docusaurus-docs/docs/next/guides/whats-next"},next:{title:"\u4f53\u7cfb\u67b6\u6784",permalink:"/docusaurus-docs/docs/next/advanced/architecture"}},d={},u=[];function l(e){const t=Object.assign({h1:"h1",p:"p",a:"a"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"\u9ad8\u7ea7\u6559\u7a0b",children:"\u9ad8\u7ea7\u6559\u7a0b"}),"\n",(0,r.jsx)(t.p,{children:"This section is not going to be very structured, but we will cover the following topics:"}),"\n","\n","\n",(0,r.jsx)(c.Z,{}),"\n",(0,r.jsxs)(t.p,{children:["We will assume that you have finished the guides, and know the basics like how to configure plugins, how to write React components, etc. These sections will have plugin authors and code contributors in mind, so we may occasionally refer to ",(0,r.jsx)(t.a,{href:"/docusaurus-docs/docs/next/api/plugin-methods/",children:"plugin APIs"})," or other architecture details. Don't panic if you don't understand everything\ud83d\ude09"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},19573:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(85893),s=(n(67294),n(86010)),c=n(30562),i=n(61596),o=n(85606),a=n(27692),d=n(24805);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function l({href:e,children:t}){return(0,r.jsx)(i.Z,{href:e,className:(0,s.Z)("card padding--lg",u.cardContainer),children:t})}function h({href:e,icon:t,title:n,description:c}){return(0,r.jsxs)(l,{href:e,children:[(0,r.jsxs)(d.Z,{as:"h2",className:(0,s.Z)("text--truncate",u.cardTitle),title:n,children:[t," ",n]}),c&&(0,r.jsx)("p",{className:(0,s.Z)("text--truncate",u.cardDescription),title:c,children:c})]})}function p({item:e}){const t=(0,c.LM)(e);return t?(0,r.jsx)(h,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(n=e.description)&&void 0!==n?n:(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null;var n}function f({item:e}){const t=(0,o.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var n;const s=(0,c.xz)(null!==(n=e.docId)&&void 0!==n?n:void 0);var i;return(0,r.jsx)(h,{href:e.href,icon:t,title:e.label,description:null!==(i=e.description)&&void 0!==i?i:null==s?void 0:s.description})}function m({item:e}){switch(e.type){case"link":return(0,r.jsx)(f,{item:e});case"category":return(0,r.jsx)(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x({className:e}){const t=(0,c.jA)();return(0,r.jsx)(v,{items:t.items,className:e})}function v(e){const{items:t,className:n}=e;if(!t)return(0,r.jsx)(x,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){g(e,t,n[t])}))}return e}({},e));const i=(0,c.MN)(t);return(0,r.jsx)("section",{className:(0,s.Z)("row",n),children:i.map(((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(m,{item:e})},t)))})}},11151:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>c});var r=n(67294);const s=r.createContext({});function c(e){const t=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:c(e),r.createElement(s.Provider,{value:o},t)}}}]);