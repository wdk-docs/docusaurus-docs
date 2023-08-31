"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[2468],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),u=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(m.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),l=n,h=p["".concat(m,".").concat(l)]||p[l]||d[l]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=l;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},44922:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:5,slug:"/api/themes/@docusaurus/theme-mermaid"},i="\ud83d\udce6 theme-mermaid",s={unversionedId:"api/themes/theme-mermaid",id:"api/themes/theme-mermaid",title:"\ud83d\udce6 theme-mermaid",description:"\u8fd9\u4e2a\u4e3b\u9898\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7531Mermaid\u63d0\u4f9b\u652f\u6301\u7684@theme/Mermaid\u7ec4\u4ef6\u3002\u60a8\u53ef\u4ee5\u5728\u56fe\u8868\u6587\u6863\u4e2d\u9605\u8bfb\u66f4\u591a\u4fe1\u606f\u3002",source:"@site/docs/api/themes/theme-mermaid.mdx",sourceDirName:"api/themes",slug:"/api/themes/@docusaurus/theme-mermaid",permalink:"/docs/api/themes/@docusaurus/theme-mermaid",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/themes/theme-mermaid.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"/api/themes/@docusaurus/theme-mermaid"},sidebar:"api",previous:{title:"\ud83d\udce6 theme-search-algolia",permalink:"/docs/api/themes/@docusaurus/theme-search-algolia"},next:{title:"\ud83d\udce6 create-docusaurus",permalink:"/docs/api/misc/create-docusaurus"}},m={},u=[{value:"\u914d\u7f6e",id:"configuration",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-theme-mermaid"},"\ud83d\udce6 theme-mermaid"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u4e3b\u9898\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7531",(0,n.kt)("a",{parentName:"p",href:"https://mermaid-js.github.io/"},"Mermaid"),"\u63d0\u4f9b\u652f\u6301\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"@theme/Mermaid"),"\u7ec4\u4ef6\u3002\u60a8\u53ef\u4ee5\u5728",(0,n.kt)("a",{parentName:"p",href:"/docs/markdown-features/diagrams"},"\u56fe\u8868"),"\u6587\u6863\u4e2d\u9605\u8bfb\u66f4\u591a\u4fe1\u606f\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install --save @docusaurus/theme-mermaid\n")),(0,n.kt)("h2",{id:"configuration"},"\u914d\u7f6e"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  themes: ["@docusaurus/theme-mermaid"],\n  // In order for Mermaid code blocks in Markdown to work,\n  // you also need to enable the Remark plugin with this option\n  markdown: {\n    mermaid: true,\n  },\n};\n')))}d.isMDXComponent=!0}}]);