"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[196],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=a.createContext({}),l=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||r;return t?a.createElement(g,s(s({ref:n},c),{},{components:t})):a.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68839:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(67294),o=t(2728);const r={tableOfContentsInline:"tableOfContentsInline_prmo"};function s(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return a.createElement("div",{className:r.tableOfContentsInline},a.createElement(o.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:s,className:"table-of-contents",linkClassName:null}))}},2728:(e,n,t)=>{t.d(n,{Z:()=>g});var a=t(87462),o=t(67294),r=t(20107);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...o}=e;t>=0?n[t].children.push(o):a.push(o)})),a}function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=i({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function u(e){const n=e.getBoundingClientRect();return n.top===n.bottom?u(e.parentNode):n}function l(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>u(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:n}}=(0,r.L)();return(0,o.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function p(e){const n=(0,o.useRef)(void 0),t=c();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:o,minHeadingLevel:r,maxHeadingLevel:s}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let o=n;o<=t;o+=1)a.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),u=l(i,{anchorTopOffset:t.current}),c=e.find((e=>u&&u.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(o),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===c)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,t])}function d(e){let{toc:n,className:t,linkClassName:a,isChild:r}=e;return n.length?o.createElement("ul",{className:r?void 0:t},n.map((e=>o.createElement("li",{key:e.id},o.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(d,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}const m=o.memo(d);function g(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:u="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:d,...g}=e;const f=(0,r.L)(),k=c??f.tableOfContents.minHeadingLevel,N=d??f.tableOfContents.maxHeadingLevel,h=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,o.useMemo)((()=>i({toc:s(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:k,maxHeadingLevel:N});return p((0,o.useMemo)((()=>{if(u&&l)return{linkClassName:u,linkActiveClassName:l,minHeadingLevel:k,maxHeadingLevel:N}}),[u,l,k,N])),o.createElement(m,(0,a.Z)({toc:h,className:t,linkClassName:u},g))}},20471:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=t(87462),o=(t(67294),t(3905)),r=t(68839);const s={description:"\u901a\u8fc7docusaurus.config.js\u7b49\u914d\u7f6e\u7ad9\u70b9\u7684\u884c\u4e3a\u3002"},i="\u914d\u7f6e",u={unversionedId:"configuration",id:"configuration",title:"\u914d\u7f6e",description:"\u901a\u8fc7docusaurus.config.js\u7b49\u914d\u7f6e\u7ad9\u70b9\u7684\u884c\u4e3a\u3002",source:"@site/docs/configuration.mdx",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/configuration.mdx",tags:[],version:"current",frontMatter:{description:"\u901a\u8fc7docusaurus.config.js\u7b49\u914d\u7f6e\u7ad9\u70b9\u7684\u884c\u4e3a\u3002"},sidebar:"docs",previous:{title:"\u5b89\u88c5",permalink:"/docs/installation"},next:{title:"Playgrounds",permalink:"/docs/playground"}},l={},c=[{value:"\u8981\u58f0\u660e\u7684\u8bed\u6cd5 <code>docusaurus.config.js</code>",id:"syntax-to-declare-docusaurus-config",level:2},{value:"<code>docusaurus.config.js</code>\u5305\u542b\u4ec0\u4e48?",id:"what-goes-into-a-docusaurusconfigjs",level:2},{value:"\u7f51\u7ad9\u7684\u5143\u6570\u636e",id:"site-metadata",level:3},{value:"\u90e8\u7f72\u914d\u7f6e",id:"deployment-configurations",level:3},{value:"\u4e3b\u9898\u3001\u63d2\u4ef6\u548c\u9884\u8bbe\u914d\u7f6e",id:"theme-plugin-and-preset-configurations",level:3},{value:"\u81ea\u5b9a\u4e49\u914d\u7f6e",id:"custom-configurations",level:3},{value:"\u4ece\u7ec4\u4ef6\u8bbf\u95ee\u914d\u7f6e",id:"accessing-configuration-from-components",level:2},{value:"\u81ea\u5b9a\u4e49 Babel \u914d\u7f6e",id:"customizing-babel-configuration",level:2}],p={toc:c},d="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u67e5\u770b",(0,o.kt)("a",{parentName:"p",href:"/docs/api/docusaurus-config"},(0,o.kt)("strong",{parentName:"a"},(0,o.kt)("inlineCode",{parentName:"strong"},"docusaurus.config.js")," API \u53c2\u8003")),"\u4ee5\u83b7\u53d6\u8be6\u5c3d\u7684\u9009\u9879\u5217\u8868\u3002")),(0,o.kt)("p",null,"Docusaurus \u6709\u7740\u72ec\u7279\u7684\u6784\u9020\u3002\u6211\u4eec\u9f13\u52b1\u60a8\u5c06\u6709\u5173\u60a8\u7f51\u7ad9\u7684\u4fe1\u606f\u96c6\u4e2d\u5230\u4e00\u4e2a\u5730\u65b9\u3002\u6211\u4eec\u4fdd\u62a4\u8be5\u6587\u4ef6\u7684\u5b57\u6bb5\uff0c\u5e76\u4f7f\u8be5\u6570\u636e\u5bf9\u8c61\u53ef\u4ee5\u5728\u6574\u4e2a\u7ad9\u70b9\u4e0a\u8bbf\u95ee\u3002"),(0,o.kt)("p",null,"\u4fdd\u6301\u4e00\u4e2a\u7ef4\u62a4\u826f\u597d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"\u53ef\u4ee5\u5e2e\u52a9\u60a8\u3001\u60a8\u7684\u5408\u4f5c\u8005\u548c\u60a8\u7684\u5f00\u6e90\u8d21\u732e\u8005\u80fd\u591f\u4e13\u6ce8\u4e8e\u6587\u6863\uff0c\u540c\u65f6\u4ecd\u7136\u80fd\u591f\u81ea\u5b9a\u4e49\u7ad9\u70b9\u3002"),(0,o.kt)("h2",{id:"syntax-to-declare-docusaurus-config"},"\u8981\u58f0\u660e\u7684\u8bed\u6cd5 ",(0,o.kt)("inlineCode",{parentName:"h2"},"docusaurus.config.js")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"\u6587\u4ef6\u5728 Node.js \u4e2d\u8fd0\u884c\uff0c\u5e94\u8be5\u5bfc\u51fa:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4e00\u4e2a",(0,o.kt)("strong",{parentName:"li"},"\u914d\u7f6e\u5bf9\u8c61")),(0,o.kt)("li",{parentName:"ul"},"\u4e00\u4e2a",(0,o.kt)("strong",{parentName:"li"},"\u51fd\u6570"),"\uff0c\u7528\u4e8e\u521b\u5efa\u914d\u7f6e\u5bf9\u8c61")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," \u6587\u4ef6\u53ea\u652f\u6301",(0,o.kt)("a",{parentName:"p",href:"https://flaviocopes.com/commonjs/"},(0,o.kt)("strong",{parentName:"a"},"CommonJS")),"\u6a21\u5757\u7cfb\u7edf:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u8981\u6c42:")," \u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"module.exports = /* your config*/")," \u5bfc\u51fa Docusaurus \u914d\u7f6e"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u53ef\u9009:")," \u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},'require("lib")')," \u5bfc\u5165 Node.js \u5305"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u53ef\u9009:")," \u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},'await import("lib")')," (\u52a8\u6001\u5bfc\u5165) \u5728 async \u51fd\u6570\u4e2d\u5bfc\u5165\u4ec5 esm \u7684 Node.js \u5305"))),(0,o.kt)("p",null,"Node.js \u4f7f\u6211\u4eec\u80fd\u591f\u4ee5\u5404\u79cd",(0,o.kt)("strong",{parentName:"p"},"\u7b49\u6548\u7684\u65b9\u5f0f"),"\u58f0\u660e Docusaurus \u914d\u7f6e\uff0c\u5e76\u4e14\u4ee5\u4e0b\u6240\u6709\u914d\u7f6e\u793a\u4f8b\u90fd\u4f1a\u5bfc\u81f4\u5b8c\u5168\u76f8\u540c\u7684\u7ed3\u679c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  title: "Docusaurus",\n  url: "https://docusaurus.io",\n  // your site config ...\n};\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'const config = {\n  title: "Docusaurus",\n  url: "https://docusaurus.io",\n  // your site config ...\n};\n\nmodule.exports = config;\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = function configCreator() {\n  return {\n    title: "Docusaurus",\n    url: "https://docusaurus.io",\n    // your site config ...\n  };\n};\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = async function createConfigAsync() {\n  return {\n    title: "Docusaurus",\n    url: "https://docusaurus.io",\n    // your site config ...\n  };\n};\n')),(0,o.kt)("admonition",{title:"\u53ea\u4f7f\u7528 esm \u5305",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u4f7f\u7528\u5f02\u6b65\u914d\u7f6e\u521b\u5efa\u5668\u5bfc\u5165\u53ea\u652f\u6301 esm \u7684\u6a21\u5757(\u5c24\u5176\u662f\u5927\u591a\u6570 Remark \u63d2\u4ef6)\u975e\u5e38\u6709\u7528\u3002\n\u901a\u8fc7\u52a8\u6001\u5bfc\u5165\uff0c\u53ef\u4ee5\u5bfc\u5165\u8fd9\u6837\u7684\u6a21\u5757:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = async function createConfigAsync() {\n  // Use a dynamic import instead of require(\'esm-lib\')\n  // highlight-next-line\n  const lib = await import("lib");\n\n  return {\n    title: "Docusaurus",\n    url: "https://docusaurus.io",\n    // rest of your site config...\n  };\n};\n'))),(0,o.kt)("h2",{id:"what-goes-into-a-docusaurusconfigjs"},(0,o.kt)("inlineCode",{parentName:"h2"},"docusaurus.config.js"),"\u5305\u542b\u4ec0\u4e48?"),(0,o.kt)("p",null,"\u5373\u4f7f\u4f60\u6b63\u5728\u5f00\u53d1\u4f60\u7684\u7f51\u7ad9\uff0c\u4f60\u4e5f\u4e0d\u5e94\u8be5\u4ece\u5934\u5f00\u59cb\u7f16\u5199\u4f60\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"\u3002\n\u6240\u6709\u6a21\u677f\u90fd\u5e26\u6709\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u5e38\u7528\u9009\u9879\u7684\u9ed8\u8ba4\u503c\u3002"),(0,o.kt)("p",null,"\u4f46\u662f\uff0c\u5982\u679c\u60a8\u5bf9\u914d\u7f6e\u7684\u8bbe\u8ba1\u548c\u5b9e\u73b0\u65b9\u5f0f\u6709\u4e00\u4e2a\u9ad8\u5c42\u6b21\u7684\u7406\u89e3\uff0c\u90a3\u4e48\u5b83\u53ef\u80fd\u4f1a\u6709\u6240\u5e2e\u52a9\u3002"),(0,o.kt)("p",null,"Docusaurus \u914d\u7f6e\u7684\u9ad8\u7ea7\u6982\u8ff0\u53ef\u4ee5\u5206\u4e3a:"),(0,o.kt)(r.Z,{toc:c,minHeadingLevel:3,maxHeadingLevel:3,mdxType:"TOCInline"}),(0,o.kt)("h3",{id:"site-metadata"},"\u7f51\u7ad9\u7684\u5143\u6570\u636e"),(0,o.kt)("p",null,"\u7ad9\u70b9\u5143\u6570\u636e\u5305\u542b\u5fc5\u8981\u7684\u5168\u5c40\u5143\u6570\u636e\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"baseUrl"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"favicon"),"."),(0,o.kt)("p",null,"\u5b83\u4eec\u88ab\u7528\u5728\u51e0\u4e2a\u5730\u65b9\uff0c\u6bd4\u5982\u4f60\u7684\u7f51\u7ad9\u6807\u9898\u548c\u6807\u9898\uff0c\u6d4f\u89c8\u5668\u6807\u7b7e\u56fe\u6807\uff0c\u793e\u4ea4\u5206\u4eab(Facebook, Twitter)\u4fe1\u606f\uff0c\u751a\u81f3\u662f\u751f\u6210\u6b63\u786e\u7684\u8def\u5f84\u6765\u4e3a\u4f60\u7684\u9759\u6001\u6587\u4ef6\u670d\u52a1\u3002"),(0,o.kt)("h3",{id:"deployment-configurations"},"\u90e8\u7f72\u914d\u7f6e"),(0,o.kt)("p",null,"\u5f53\u60a8\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"deploy"),"\u547d\u4ee4\u90e8\u7f72\u7ad9\u70b9\u65f6\uff0c\u4f1a\u4f7f\u7528\u8bf8\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"projectName"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"organizationName"),"\u548c\u53ef\u9009\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"deploymentBranch"),"\u7b49\u90e8\u7f72\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\u5efa\u8bae\u67e5\u770b",(0,o.kt)("a",{parentName:"p",href:"/docs/deployment"},"\u90e8\u7f72\u6587\u6863"),"\u4ee5\u83b7\u53d6\u66f4\u591a\u4fe1\u606f\u3002"),(0,o.kt)("h3",{id:"theme-plugin-and-preset-configurations"},"\u4e3b\u9898\u3001\u63d2\u4ef6\u548c\u9884\u8bbe\u914d\u7f6e"),(0,o.kt)("p",null,"\u5206\u522b\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"themes"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins"),", \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"presets"),"\u5b57\u6bb5\u4e2d\u5217\u51fa\u4f60\u7f51\u7ad9\u7684",(0,o.kt)("a",{parentName:"p",href:"/docs/using-plugins#using-themes"},"themes"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"/docs/using-plugins"},"plugins"),"\u548c",(0,o.kt)("a",{parentName:"p",href:"/docs/using-plugins#using-presets"},"presets"),"\u3002\u8fd9\u4e9b\u662f\u5178\u578b\u7684 npm \u5305:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // ...\n  plugins: ["@docusaurus/plugin-content-blog", "@docusaurus/plugin-content-pages"],\n  themes: ["@docusaurus/theme-classic"],\n};\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Docusaurus \u652f\u6301",(0,o.kt)("a",{parentName:"p",href:"/docs/using-plugins#module-shorthands"},(0,o.kt)("strong",{parentName:"a"},"\u6a21\u5757\u901f\u8bb0")),"\uff0c\u5141\u8bb8\u60a8\u5c06\u4e0a\u8ff0\u914d\u7f6e\u7b80\u5316\u4e3a:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // ...\n  plugins: ["content-blog", "content-pages"],\n  themes: ["classic"],\n};\n'))),(0,o.kt)("p",null,"\u5b83\u4eec\u4e5f\u53ef\u4ee5\u4ece\u672c\u5730\u76ee\u5f55\u52a0\u8f7d:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'const path = require("path");\n\nmodule.exports = {\n  // ...\n  themes: [path.resolve(__dirname, "/path/to/docusaurus-local-theme")],\n};\n')),(0,o.kt)("p",null,"\u8981\u6307\u5b9a\u63d2\u4ef6\u6216\u4e3b\u9898\u7684\u9009\u9879\uff0c\u8bf7\u5c06\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u63d2\u4ef6\u6216\u4e3b\u9898\u540d\u79f0\u66ff\u6362\u4e3a\u5305\u542b\u540d\u79f0\u548c\u9009\u9879\u5bf9\u8c61\u7684\u6570\u7ec4:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // ...\n  plugins: [\n    [\n      "content-blog",\n      {\n        path: "blog",\n        routeBasePath: "blog",\n        include: ["*.md", "*.mdx"],\n        // ...\n      },\n    ],\n    "content-pages",\n  ],\n};\n')),(0,o.kt)("p",null,"\u8981\u6307\u5b9a\u5728\u9884\u8bbe\u4e2d\u6346\u7ed1\u7684\u63d2\u4ef6\u6216\u4e3b\u9898\u7684\u9009\u9879\uff0c\u8bf7\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"presets"),"\u5b57\u6bb5\u4f20\u9012\u8fd9\u4e9b\u9009\u9879\u3002\n\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"docs"),"\u6307\u7684\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"@docusaurus/plugin-content-docs"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"theme"),"\u6307\u7684\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-classic"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // ...\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      {\n        docs: {\n          sidebarPath: require.resolve("./sidebars.js"),\n        },\n        theme: {\n          customCss: [require.resolve("./src/css/custom.css")],\n        },\n      },\n    ],\n  ],\n};\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"presets: [['classic', {...}]]")," \u901f\u8bb0\u4e5f\u53ef\u4ee5\u3002")),(0,o.kt)("p",null,"\u6709\u5173\u914d\u7f6e\u4e3b\u9898\u3001\u63d2\u4ef6\u548c\u9884\u8bbe\u7684\u8fdb\u4e00\u6b65\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"/docs/using-plugins"},"\u4f7f\u7528\u63d2\u4ef6"),"."),(0,o.kt)("h3",{id:"custom-configurations"},"\u81ea\u5b9a\u4e49\u914d\u7f6e"),(0,o.kt)("p",null,"Docusaurus \u4fdd\u62a4",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"\u4e0d\u53d7\u672a\u77e5\u5b57\u6bb5\u7684\u5f71\u54cd\u3002\u8981\u6dfb\u52a0\u81ea\u5b9a\u4e49\u5b57\u6bb5\uff0c\u8bf7\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"customFields"),"\u4e2d\u5b9a\u4e49\u5b83\u4eec\u3002"),(0,o.kt)("p",null,"\u4f8b\u5b50:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // ...\n  // highlight-start\n  customFields: {\n    image: "",\n    keywords: [],\n  },\n  // highlight-end\n  // ...\n};\n')),(0,o.kt)("h2",{id:"accessing-configuration-from-components"},"\u4ece\u7ec4\u4ef6\u8bbf\u95ee\u914d\u7f6e"),(0,o.kt)("p",null,"\u60a8\u7684\u914d\u7f6e\u5bf9\u8c61\u5c06\u5bf9\u7ad9\u70b9\u7684\u6240\u6709\u7ec4\u4ef6\u53ef\u7528\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7 React context \u8bbf\u95ee\u5b83\u4eec\u4f5c\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"siteConfig"),"\u3002"),(0,o.kt)("p",null,"Basic example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\n// highlight-next-line\nimport useDocusaurusContext from "@docusaurus/useDocusaurusContext";\n\nconst Hello = () => {\n  // highlight-start\n  const { siteConfig } = useDocusaurusContext();\n  // highlight-end\n  const { title, tagline } = siteConfig;\n\n  return <div>{`${title} \xb7 ${tagline}`}</div>;\n};\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u53ea\u662f\u60f3\u5728\u5ba2\u6237\u7aef\u4f7f\u7528\u8fd9\u4e9b\u5b57\u6bb5\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u81ea\u5df1\u7684 JS \u6587\u4ef6\uff0c\u5e76\u5c06\u5b83\u4eec\u4f5c\u4e3a ES6 \u6a21\u5757\u5bfc\u5165\uff0c\u4e0d\u9700\u8981\u628a\u5b83\u4eec\u653e\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"\u4e2d\u3002")),(0,o.kt)("h2",{id:"customizing-babel-configuration"},"\u81ea\u5b9a\u4e49 Babel \u914d\u7f6e"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u65b0\u7684 Docusaurus \u9879\u76ee\uff0c\u6211\u4eec\u4f1a\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u81ea\u52a8\u751f\u6210\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"babel.config.js"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="babel.config.js"',title:'"babel.config.js"'},'module.exports = {\n  presets: [require.resolve("@docusaurus/core/lib/babel/preset")],\n};\n')),(0,o.kt)("p",null,"\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u8fd9\u79cd\u914d\u7f6e\u5de5\u4f5c\u5f97\u5f88\u597d\u3002\u5982\u679c\u4f60\u60f3\u81ea\u5b9a\u4e49 Babel \u914d\u7f6e(\u4f8b\u5982\u6dfb\u52a0\u5bf9 Flow \u7684\u652f\u6301)\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u7f16\u8f91\u8fd9\u4e2a\u6587\u4ef6\u3002\u8981\u4f7f\u66f4\u6539\u751f\u6548\uff0c\u9700\u8981\u91cd\u65b0\u542f\u52a8 Docusaurus \u5f00\u53d1\u670d\u52a1\u5668\u3002"))}m.isMDXComponent=!0}}]);