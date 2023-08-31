"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9406],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,m=c["".concat(p,".").concat(d)]||c[d]||g[d]||o;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53205:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(67294),r=n(16550);const o={apiTable:"apiTable_e8hp"};function i(e,t){let{name:n,children:o}=e;const i=function(e){let t=e;for(;(0,a.isValidElement)(t);)[t]=a.Children.toArray(t.props.children);return t}(o),l=n?`${n}-${i}`:i,p=`#${l}`,u=(0,r.k6)();return a.createElement("tr",{id:l,tabIndex:0,ref:u.location.hash===p?t:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||u.push(p)},onKeyDown:e=>{"Enter"===e.key&&u.push(p)}},o.props.children)}const l=a.forwardRef(i);function p(e){let{children:t,name:n}=e;const[r,i]=a.Children.toArray(t.props.children),p=(0,a.useRef)(null);(0,a.useEffect)((()=>{p.current?.focus()}),[p]);const u=a.Children.map(i.props.children,(e=>a.createElement(l,{name:n,ref:p},e)));return a.createElement("table",{className:o.apiTable},r,a.createElement("tbody",null,u))}},36411:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905)),o=n(53205);const i={sidebar_position:6,slug:"/api/plugins/@docusaurus/plugin-google-analytics"},l="\ud83d\udce6 plugin-google-analytics(\u5f03)",p={unversionedId:"api/plugins/plugin-google-analytics",id:"api/plugins/plugin-google-analytics",title:"\ud83d\udce6 plugin-google-analytics(\u5f03)",description:"\u9ed8\u8ba4\u7684\u8c37\u6b4c\u5206\u6790\u63d2\u4ef6\u3002\u5b83\u662f\u4e00\u4e2a JavaScript \u5e93\uff0c\u7528\u4e8e\u6d4b\u91cf\u7528\u6237\u5982\u4f55\u5728\u751f\u4ea7\u6784\u5efa\u4e2d\u4e0e\u60a8\u7684\u7f51\u7ad9\u8fdb\u884c\u4ea4\u4e92\u3002\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528 Google Analytics 4\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u8003\u8651\u4f7f\u7528plugin-google-gtag\u3002",source:"@site/docs/api/plugins/plugin-google-analytics.mdx",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-google-analytics",permalink:"/docs/api/plugins/@docusaurus/plugin-google-analytics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/plugins/plugin-google-analytics.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/api/plugins/@docusaurus/plugin-google-analytics"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-debug",permalink:"/docs/api/plugins/@docusaurus/plugin-debug"},next:{title:"\ud83d\udce6 plugin-google-gtag",permalink:"/docs/api/plugins/@docusaurus/plugin-google-gtag"}},u={},s=[{value:"\u5b89\u88c5",id:"installation",level:2},{value:"\u914d\u7f6e",id:"configuration",level:2},{value:"\u793a\u4f8b\u914d\u7f6e",id:"ex-config",level:3}],c={toc:s},g="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-plugin-google-analytics\u5f03"},"\ud83d\udce6 plugin-google-analytics(\u5f03)"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u7684",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/analytics/devguides/collection/analyticsjs/"},"\u8c37\u6b4c\u5206\u6790"),"\u63d2\u4ef6\u3002\u5b83\u662f\u4e00\u4e2a JavaScript \u5e93\uff0c\u7528\u4e8e\u6d4b\u91cf\u7528\u6237\u5982\u4f55\u5728\u751f\u4ea7\u6784\u5efa\u4e2d\u4e0e\u60a8\u7684\u7f51\u7ad9\u8fdb\u884c\u4ea4\u4e92\u3002\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528 Google Analytics 4\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u8003\u8651\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"/docs/api/plugins/@docusaurus/plugin-google-gtag"},"plugin-google-gtag"),"\u3002"),(0,r.kt)("admonition",{title:"Deprecated",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"\u6b64\u63d2\u4ef6",(0,r.kt)("strong",{parentName:"p"},"\u5df2\u5f03\u7528"),"\uff0c\u5e76\u5c06\u4e8e 2023 \u5e74 7 \u6708 1 \u65e5\u5931\u6548\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u8c37\u6b4c\u6b63\u5728",(0,r.kt)("a",{parentName:"p",href:"https://blog.google/products/marketingplatform/analytics/prepare-for-future-with-google-analytics-4/"},"\u8fdc\u79bb\u901a\u7528\u5206\u6790"),"\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u8fd8\u5728\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"UA-*"),"\u8ddf\u8e2a id \u4f7f\u7528\u8fd9\u4e2a\u63d2\u4ef6\uff0c\u4f60\u5e94\u8be5\u5c3d\u5feb\u521b\u5efa\u4e00\u4e2a\u8c37\u6b4c\u5206\u6790 4 \u5e10\u6237\uff0c\u5e76\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"/docs/api/plugins/@docusaurus/plugin-google-gtag"},(0,r.kt)("inlineCode",{parentName:"a"},"@docusaurus/plugin-google-gtag")),"\u4ee3\u66ff\u8fd9\u4e2a\u63d2\u4ef6\u3002\u66f4\u591a\u7ec6\u8282",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/issues/7221"},"\u5728\u8fd9\u91cc"),"\u3002")),(0,r.kt)("admonition",{title:"\u53ea\u751f\u4ea7",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u4e2a\u63d2\u4ef6\u5728\u5f00\u53d1\u4e2d\u603b\u662f\u4e0d\u6d3b\u8dc3\u7684\uff0c\u5e76\u4e14",(0,r.kt)("strong",{parentName:"p"},"\u53ea\u5728\u751f\u4ea7\u4e2d\u6d3b\u8dc3"),"\uff0c\u4ee5\u907f\u514d\u6c61\u67d3\u5206\u6790\u7edf\u8ba1\u3002")),(0,r.kt)("h2",{id:"installation"},"\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install --save @docusaurus/plugin-google-analytics\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you use the preset ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic"),", you don't need to install this plugin as a dependency."),(0,r.kt)("p",{parentName:"admonition"},"You can configure this plugin through the preset options.")),(0,r.kt)("h2",{id:"configuration"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u63a5\u53d7\u5b57\u6bb5:"),(0,r.kt)(o.Z,{mdxType:"APITable"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u5b57"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"trackingID")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"The tracking ID of your analytics service.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"anonymizeIP")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the IP should be anonymized when sending requests."))))),(0,r.kt)("h3",{id:"ex-config"},"\u793a\u4f8b\u914d\u7f6e"),(0,r.kt)("p",null,"You can configure this plugin through preset options or plugin options."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Most Docusaurus users configure this plugin through the preset options.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"config-tabs","config-tabs":!0},'// Preset Options: googleAnalytics\n// Plugin Options: @docusaurus/plugin-google-analytics\n\nconst config = {\n  trackingID: "UA-141789564-1",\n  anonymizeIP: true,\n};\n')))}d.isMDXComponent=!0}}]);