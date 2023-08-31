"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[96169],{74723:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var t=r(85893),s=r(11151),i=r(51715),l=r(7626),o=r(91545),a=r(94926);const c={sidebar_position:10,slug:"/api/plugins/@docusaurus/plugin-sitemap"},u="\ud83d\udce6 plugin-sitemap",d={unversionedId:"api/plugins/plugin-sitemap",id:"api/plugins/plugin-sitemap",title:"\ud83d\udce6 plugin-sitemap",description:"\u8fd9\u4e2a\u63d2\u4ef6\u4e3a\u60a8\u7684\u7f51\u7ad9\u521b\u5efa\u7ad9\u70b9\u5730\u56fe\uff0c\u4ee5\u4fbf\u641c\u7d22\u5f15\u64ce\u722c\u884c\u5668\u53ef\u4ee5\u66f4\u51c6\u786e\u5730\u722c\u884c\u60a8\u7684\u7f51\u7ad9\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/plugins/plugin-sitemap.mdx",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-sitemap",permalink:"/docusaurus-docs/docs/next/api/plugins/@docusaurus/plugin-sitemap",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-sitemap.mdx",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",sidebarPosition:10,frontMatter:{sidebar_position:10,slug:"/api/plugins/@docusaurus/plugin-sitemap"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-pwa",permalink:"/docusaurus-docs/docs/next/api/plugins/@docusaurus/plugin-pwa"},next:{title:"Themes overview",permalink:"/docusaurus-docs/docs/next/api/themes"}},p={},h=[{value:"\u5b89\u88c5",id:"installation",level:2},{value:"\u914d\u7f6e",id:"configuration",level:2},{value:"\u793a\u4f8b\u914d\u7f6e",id:"ex-config",level:3}];function b(e){const n=Object.assign({h1:"h1",p:"p",admonition:"admonition",h2:"h2",pre:"pre",code:"code",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li",h3:"h3"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-plugin-sitemap",children:"\ud83d\udce6 plugin-sitemap"}),"\n","\n","\n",(0,t.jsx)(n.p,{children:"\u8fd9\u4e2a\u63d2\u4ef6\u4e3a\u60a8\u7684\u7f51\u7ad9\u521b\u5efa\u7ad9\u70b9\u5730\u56fe\uff0c\u4ee5\u4fbf\u641c\u7d22\u5f15\u64ce\u722c\u884c\u5668\u53ef\u4ee5\u66f4\u51c6\u786e\u5730\u722c\u884c\u60a8\u7684\u7f51\u7ad9\u3002"}),"\n",(0,t.jsx)(n.admonition,{title:"production only",type:"caution",children:(0,t.jsx)(n.p,{children:"\u8fd9\u4e2a\u63d2\u4ef6\u5728\u5f00\u53d1\u4e2d\u603b\u662f\u4e0d\u6d3b\u8dc3\u7684\uff0c\u53ea\u6709\u5728\u751f\u4ea7\u4e2d\u624d\u6d3b\u8dc3\uff0c\u56e0\u4e3a\u5b83\u5728\u6784\u5efa\u8f93\u51fa\u4e2d\u5de5\u4f5c\u3002"})}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"\u5b89\u88c5"}),"\n",(0,t.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(l.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-sitemap\n"})})}),(0,t.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-sitemap\n"})})}),(0,t.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-sitemap\n"})})})]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4f7f\u7528\u9884\u8bbe\u7684",(0,t.jsx)(n.code,{children:"@docusaurus/preset-classic"}),"\uff0c\u4f60\u4e0d\u9700\u8981\u5c06\u8fd9\u4e2a\u63d2\u4ef6\u4f5c\u4e3a\u4f9d\u8d56\u9879\u5b89\u88c5\u3002"]}),(0,t.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,t.jsx)(n.a,{href:"#ex-config-preset",children:"\u9884\u8bbe\u9009\u9879"}),"\u6765\u914d\u7f6e\u8fd9\u4e2a\u63d2\u4ef6\u3002"]})]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"\u914d\u7f6e"}),"\n",(0,t.jsx)(n.p,{children:"\u63a5\u53d7\u5b57\u6bb5:"}),"\n",(0,t.jsx)(o.Z,{children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u540d\u5b57"}),(0,t.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,t.jsx)(n.th,{children:"\u9ed8\u8ba4"}),(0,t.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"changefreq"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"'weekly'"})}),(0,t.jsxs)(n.td,{children:["\u53c2\u89c1",(0,t.jsx)(n.a,{href:"https://www.sitemaps.org/protocol.html#xmlTagDefinitions",children:"sitemap \u6587\u6863"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"priority"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"0.5"})}),(0,t.jsxs)(n.td,{children:["\u53c2\u89c1",(0,t.jsx)(n.a,{href:"https://www.sitemaps.org/protocol.html#xmlTagDefinitions",children:"sitemap \u6587\u6863"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ignorePatterns"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string[]"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"[]"})}),(0,t.jsx)(n.td,{children:"\u5168\u7403\u6a21\u5f0f\u5217\u8868;\u5339\u914d\u7684\u8def\u7531\u8def\u5f84\u5c06\u4ece\u7ad9\u70b9\u5730\u56fe\u4e2d\u8fc7\u6ee4\u3002\u6ce8\u610f\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u5728\u8fd9\u91cc\u5305\u542b\u57fa URL\u3002"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"filename"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sitemap.xml"})}),(0,t.jsx)(n.td,{children:"\u521b\u5efa\u7684\u7ad9\u70b9\u5730\u56fe\u6587\u4ef6\u7684\u8def\u5f84\uff0c\u76f8\u5bf9\u4e8e\u8f93\u51fa\u76ee\u5f55\u3002\u5982\u679c\u60a8\u6709\u4e24\u4e2a\u63d2\u4ef6\u5b9e\u4f8b\u8f93\u51fa\u4e24\u4e2a\u6587\u4ef6\uff0c\u5219\u975e\u5e38\u6709\u7528\u3002"})]})]})]})}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"\u8fd9\u4e2a\u63d2\u4ef6\u4e5f\u5c0a\u91cd\u4e00\u4e9b\u7ad9\u70b9\u914d\u7f6e:"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docusaurus-docs/docs/next/api/docusaurus-config#noIndex",children:(0,t.jsx)(n.code,{children:"noIndex"})}),": \u7ed3\u679c\u6ca1\u6709\u751f\u6210\u7ad9\u70b9\u5730\u56fe"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docusaurus-docs/docs/next/api/docusaurus-config#trailingSlash",children:(0,t.jsx)(n.code,{children:"trailingSlash"})}),": \u786e\u5b9a\u7ad9\u70b9\u5730\u56fe\u4e2d\u7684 url \u662f\u5426\u6709\u5c3e\u659c\u6760"]}),"\n"]})]}),"\n",(0,t.jsx)(n.h3,{id:"ex-config",children:"\u793a\u4f8b\u914d\u7f6e"}),"\n",(0,t.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u9884\u8bbe\u9009\u9879\u6216\u63d2\u4ef6\u9009\u9879\u6765\u914d\u7f6e\u8fd9\u4e2a\u63d2\u4ef6\u3002"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"\u5927\u591a\u6570 Docusaurus \u7528\u6237\u901a\u8fc7\u9884\u8bbe\u9009\u9879\u914d\u7f6e\u8fd9\u4e2a\u63d2\u4ef6\u3002"})}),"\n","\n",(0,t.jsx)(a.Z,{pluginName:"@docusaurus/plugin-sitemap",presetOptionName:"sitemap",code:'{\n  changefreq: "weekly",\n  priority: 0.5,\n  ignorePatterns: ["/tags/**"],\n  filename: "sitemap.xml",\n}'}),"\n",(0,t.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u5728",(0,t.jsx)(n.code,{children:"/sitemap.xml"}),"\u627e\u5230\u4f60\u7684\u7ad9\u70b9\u5730\u56fe\u3002"]})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(b,e)})):b(e)}},7626:(e,n,r)=>{r.d(n,{Z:()=>l});var t=r(85893),s=(r(67294),r(86010));const i={tabItem:"tabItem_Ymn6"};function l({children:e,hidden:n,className:r}){return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.Z)(i.tabItem,r),hidden:n,children:e})}},51715:(e,n,r)=>{r.d(n,{Z:()=>S});var t=r(85893),s=r(67294),i=r(86010),l=r(8241),o=r(16550),a=r(40841),c=r(2834),u=r(35715),d=r(95417);function p(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function h(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function b(e){var n,r;return null!==(r=null===(n=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==r?r:[]}function f(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return b(e).map((({props:{value:e,label:n,attributes:r,default:t}})=>({value:e,label:n,attributes:r,default:t})))}(r);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function g({value:e,tabValues:n}){return n.some((n=>n.value===e))}function j({queryString:e=!1,groupId:n}){const r=(0,o.k6)(),t=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),i=(0,c._X)(t),l=(0,s.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace(h(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){p(e,n,r[n])}))}return e}({},r.location),{search:n.toString()}))}),[t,r]);return[i,l]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,i=f(e),[l,o]=(0,s.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const t=null!==(r=n.find((e=>e.default)))&&void 0!==r?r:n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[c,u]=j({queryString:r,groupId:t}),[p,h]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,t]=(0,d.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:t}),b=(()=>{const e=null!=c?c:p;return g({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var x=r(90980);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function O(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){v(e,n,r[n])}))}return e}function w(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function P({className:e,block:n,selectedValue:r,selectValue:s,tabValues:o}){const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const n=e.currentTarget,t=a.indexOf(n),i=o[t].value;i!==r&&(c(n),s(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;var r;n=null!==(r=a[t])&&void 0!==r?r:a[0];break}case"ArrowLeft":{const r=a.indexOf(e.currentTarget)-1;var t;n=null!==(t=a[r])&&void 0!==t?t:a[a.length-1];break}}null==n||n.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},e),children:o.map((({value:e,label:n,attributes:s})=>(0,t.jsx)("li",w(O({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>a.push(e),onKeyDown:d,onClick:u},s),{className:(0,i.Z)("tabs__item",y.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===e}),children:null!=n?n:e}),e)))})}function k({lazy:e,children:n,selectedValue:r}){const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function D(e){const n=m(e);return(0,t.jsxs)("div",{className:(0,i.Z)("tabs-container",y.tabList),children:[(0,t.jsx)(P,O({},e,n)),(0,t.jsx)(k,O({},e,n))]})}function S(e){const n=(0,x.Z)();return(0,t.jsx)(D,w(O({},e),{children:b(e.children)}),String(n))}},91545:(e,n,r)=>{r.d(n,{Z:()=>c});var t=r(85893),s=r(67294),i=r(16550);const l={apiTable:"apiTable_e8hp"};function o({name:e,children:n},r){const l=function(e){let n=e;for(;(0,s.isValidElement)(n);)[n]=s.Children.toArray(n.props.children);return n}(n),o=e?`${e}-${l}`:l,a=`#${o}`,c=(0,i.k6)();return(0,t.jsx)("tr",{id:o,tabIndex:0,ref:c.location.hash===a?r:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||c.push(a)},onKeyDown:e=>{"Enter"===e.key&&c.push(a)},children:n.props.children})}const a=s.forwardRef(o);function c({children:e,name:n}){const[r,i]=s.Children.toArray(e.props.children),o=(0,s.useRef)(null);(0,s.useEffect)((()=>{var e;null===(e=o.current)||void 0===e||e.focus()}),[o]);const c=s.Children.map(i.props.children,(e=>(0,t.jsx)(a,{name:n,ref:o,children:e})));return(0,t.jsxs)("table",{className:l.apiTable,children:[r,(0,t.jsx)("tbody",{children:c})]})}},94926:(e,n,r)=>{r.d(n,{Z:()=>d});var t=r(85893),s=(r(67294),r(61596)),i=r(97203),l=r(27692),o=r(51715),a=r(7626),c=r(92101);const u=void 0;function d({code:e,pluginName:n,presetOptionName:r}){const d=(0,i.zu)(u).path;return(0,t.jsxs)(o.Z,{groupId:"api-config-ex",children:[(0,t.jsxs)(a.Z,{value:"preset",label:(0,l.I)({message:"Preset options"}),children:[(0,t.jsx)("p",{children:(0,t.jsx)(l.Z,{id:"apiDocs.configTabs.presetOptions.description",values:{presetLink:(0,t.jsx)(s.Z,{to:`${d}/using-plugins#docusauruspreset-classic`,children:(0,t.jsx)(l.Z,{children:"preset options"})})},children:"If you use a preset, configure this plugin through the {presetLink}:"})}),(0,t.jsx)(c.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        // highlight-start\n        ${r}: ${e.replace(/\n/g,"\n        ")},\n        // highlight-end\n      },\n    ],\n  ],\n};`})]}),(0,t.jsxs)(a.Z,{value:"plugin",label:(0,l.I)({message:"Plugin options"}),children:[(0,t.jsx)("p",{children:(0,t.jsx)(l.Z,{children:"If you are using a standalone plugin, provide options directly to the plugin:"})}),(0,t.jsx)(c.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {\n  plugins: [\n    [\n      '${n}',\n      // highlight-start\n      ${e.replace(/\n/g,"\n      ")},\n      // highlight-end\n    ],\n  ],\n};`})]})]})}},92101:(e,n,r)=>{r.d(n,{Z:()=>l});var t=r(85893),s=(r(67294),r(50191));function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e){return(0,t.jsx)(s.Z,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){i(e,n,r[n])}))}return e}({},e))}},5379:(e,n,r)=>{r.d(n,{Z:()=>d});var t={};r.r(t),r.d(t,{ButtonExample:()=>c});var s=r(67294),i=r(85893);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){l(e,n,r[n])}))}return e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function c(e){return(0,i.jsx)("button",a(o({type:"button"},e),{style:o({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}function u(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}const d=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){u(e,n,r[n])}))}return e}({React:s},s,t)}}]);