"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[4733],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,g=m["".concat(o,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},53205:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(16550);const i={apiTable:"apiTable_e8hp"};function l(e,t){let{name:n,children:i}=e;const l=function(e){let t=e;for(;(0,a.isValidElement)(t);)[t]=a.Children.toArray(t.props.children);return t}(i),p=n?`${n}-${l}`:l,o=`#${p}`,s=(0,r.k6)();return a.createElement("tr",{id:p,tabIndex:0,ref:s.location.hash===o?t:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||s.push(o)},onKeyDown:e=>{"Enter"===e.key&&s.push(o)}},i.props.children)}const p=a.forwardRef(l);function o(e){let{children:t,name:n}=e;const[r,l]=a.Children.toArray(t.props.children),o=(0,a.useRef)(null);(0,a.useEffect)((()=>{o.current?.focus()}),[o]);const s=a.Children.map(l.props.children,(e=>a.createElement(p,{name:n,ref:o},e)));return a.createElement("table",{className:i.apiTable},r,a.createElement("tbody",null,s))}},9604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),i=n(53205);const l={sidebar_position:10,slug:"/api/plugins/@docusaurus/plugin-sitemap"},p="\ud83d\udce6 plugin-sitemap",o={unversionedId:"api/plugins/plugin-sitemap",id:"api/plugins/plugin-sitemap",title:"\ud83d\udce6 plugin-sitemap",description:"\u8fd9\u4e2a\u63d2\u4ef6\u4e3a\u60a8\u7684\u7f51\u7ad9\u521b\u5efa\u7ad9\u70b9\u5730\u56fe\uff0c\u4ee5\u4fbf\u641c\u7d22\u5f15\u64ce\u722c\u884c\u5668\u53ef\u4ee5\u66f4\u51c6\u786e\u5730\u722c\u884c\u60a8\u7684\u7f51\u7ad9\u3002",source:"@site/docs/api/plugins/plugin-sitemap.mdx",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-sitemap",permalink:"/docs/api/plugins/@docusaurus/plugin-sitemap",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/plugins/plugin-sitemap.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,slug:"/api/plugins/@docusaurus/plugin-sitemap"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-pwa",permalink:"/docs/api/plugins/@docusaurus/plugin-pwa"},next:{title:"Themes overview",permalink:"/docs/api/themes"}},s={},u=[{value:"\u5b89\u88c5",id:"installation",level:2},{value:"\u914d\u7f6e",id:"configuration",level:2},{value:"\u793a\u4f8b\u914d\u7f6e",id:"ex-config",level:3}],m={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-plugin-sitemap"},"\ud83d\udce6 plugin-sitemap"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u63d2\u4ef6\u4e3a\u60a8\u7684\u7f51\u7ad9\u521b\u5efa\u7ad9\u70b9\u5730\u56fe\uff0c\u4ee5\u4fbf\u641c\u7d22\u5f15\u64ce\u722c\u884c\u5668\u53ef\u4ee5\u66f4\u51c6\u786e\u5730\u722c\u884c\u60a8\u7684\u7f51\u7ad9\u3002"),(0,r.kt)("admonition",{title:"production only",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u4e2a\u63d2\u4ef6\u5728\u5f00\u53d1\u4e2d\u603b\u662f\u4e0d\u6d3b\u8dc3\u7684\uff0c\u53ea\u6709\u5728\u751f\u4ea7\u4e2d\u624d\u6d3b\u8dc3\uff0c\u56e0\u4e3a\u5b83\u5728\u6784\u5efa\u8f93\u51fa\u4e2d\u5de5\u4f5c\u3002")),(0,r.kt)("h2",{id:"installation"},"\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install --save @docusaurus/plugin-sitemap\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u4f7f\u7528\u9884\u8bbe\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),"\uff0c\u4f60\u4e0d\u9700\u8981\u5c06\u8fd9\u4e2a\u63d2\u4ef6\u4f5c\u4e3a\u4f9d\u8d56\u9879\u5b89\u88c5\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"#ex-config-preset"},"\u9884\u8bbe\u9009\u9879"),"\u6765\u914d\u7f6e\u8fd9\u4e2a\u63d2\u4ef6\u3002")),(0,r.kt)("h2",{id:"configuration"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u63a5\u53d7\u5b57\u6bb5:"),(0,r.kt)(i.Z,{mdxType:"APITable"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u5b57"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"changefreq")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'weekly'")),(0,r.kt)("td",{parentName:"tr",align:null},"\u53c2\u89c1",(0,r.kt)("a",{parentName:"td",href:"https://www.sitemaps.org/protocol.html#xmlTagDefinitions"},"sitemap \u6587\u6863"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"priority")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0.5")),(0,r.kt)("td",{parentName:"tr",align:null},"\u53c2\u89c1",(0,r.kt)("a",{parentName:"td",href:"https://www.sitemaps.org/protocol.html#xmlTagDefinitions"},"sitemap \u6587\u6863"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ignorePatterns")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5168\u7403\u6a21\u5f0f\u5217\u8868;\u5339\u914d\u7684\u8def\u7531\u8def\u5f84\u5c06\u4ece\u7ad9\u70b9\u5730\u56fe\u4e2d\u8fc7\u6ee4\u3002\u6ce8\u610f\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u5728\u8fd9\u91cc\u5305\u542b\u57fa URL\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"filename")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sitemap.xml")),(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u7684\u7ad9\u70b9\u5730\u56fe\u6587\u4ef6\u7684\u8def\u5f84\uff0c\u76f8\u5bf9\u4e8e\u8f93\u51fa\u76ee\u5f55\u3002\u5982\u679c\u60a8\u6709\u4e24\u4e2a\u63d2\u4ef6\u5b9e\u4f8b\u8f93\u51fa\u4e24\u4e2a\u6587\u4ef6\uff0c\u5219\u975e\u5e38\u6709\u7528\u3002"))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u4e2a\u63d2\u4ef6\u4e5f\u5c0a\u91cd\u4e00\u4e9b\u7ad9\u70b9\u914d\u7f6e:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/docusaurus-config#noIndex"},(0,r.kt)("inlineCode",{parentName:"a"},"noIndex")),": \u7ed3\u679c\u6ca1\u6709\u751f\u6210\u7ad9\u70b9\u5730\u56fe"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/docusaurus-config#trailingSlash"},(0,r.kt)("inlineCode",{parentName:"a"},"trailingSlash")),": \u786e\u5b9a\u7ad9\u70b9\u5730\u56fe\u4e2d\u7684 url \u662f\u5426\u6709\u5c3e\u659c\u6760"))),(0,r.kt)("h3",{id:"ex-config"},"\u793a\u4f8b\u914d\u7f6e"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u9884\u8bbe\u9009\u9879\u6216\u63d2\u4ef6\u9009\u9879\u6765\u914d\u7f6e\u8fd9\u4e2a\u63d2\u4ef6\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5927\u591a\u6570 Docusaurus \u7528\u6237\u901a\u8fc7\u9884\u8bbe\u9009\u9879\u914d\u7f6e\u8fd9\u4e2a\u63d2\u4ef6\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"config-tabs","config-tabs":!0},'// Preset Options: sitemap\n// Plugin Options: @docusaurus/plugin-sitemap\n\nconst config = {\n  changefreq: "weekly",\n  priority: 0.5,\n  ignorePatterns: ["/tags/**"],\n  filename: "sitemap.xml",\n};\n')),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"/sitemap.xml"),"\u627e\u5230\u4f60\u7684\u7ad9\u70b9\u5730\u56fe\u3002"))}c.isMDXComponent=!0}}]);