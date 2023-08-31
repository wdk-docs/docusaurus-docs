"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[56948],{92980:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>b,frontMatter:()=>u,metadata:()=>d,toc:()=>g});var r=t(85893),o=t(11151),s=t(51715),i=t(7626),l=t(91545),a=t(94926);const u={sidebar_position:6,slug:"/api/plugins/@docusaurus/plugin-google-analytics"},c="\ud83d\udce6 plugin-google-analytics(\u5f03)",d={unversionedId:"api/plugins/plugin-google-analytics",id:"api/plugins/plugin-google-analytics",title:"\ud83d\udce6 plugin-google-analytics(\u5f03)",description:"\u9ed8\u8ba4\u7684\u8c37\u6b4c\u5206\u6790\u63d2\u4ef6\u3002\u5b83\u662f\u4e00\u4e2a JavaScript \u5e93\uff0c\u7528\u4e8e\u6d4b\u91cf\u7528\u6237\u5982\u4f55\u5728\u751f\u4ea7\u6784\u5efa\u4e2d\u4e0e\u60a8\u7684\u7f51\u7ad9\u8fdb\u884c\u4ea4\u4e92\u3002\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528 Google Analytics 4\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u8003\u8651\u4f7f\u7528plugin-google-gtag\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/plugins/plugin-google-analytics.mdx",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-google-analytics",permalink:"/docusaurus-docs/docs/next/api/plugins/@docusaurus/plugin-google-analytics",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/api/plugins/@docusaurus/plugin-google-analytics"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-debug",permalink:"/docusaurus-docs/docs/next/api/plugins/@docusaurus/plugin-debug"},next:{title:"\ud83d\udce6 plugin-google-gtag",permalink:"/docusaurus-docs/docs/next/api/plugins/@docusaurus/plugin-google-gtag"}},p={},g=[{value:"\u5b89\u88c5",id:"installation",level:2},{value:"\u914d\u7f6e",id:"configuration",level:2},{value:"\u793a\u4f8b\u914d\u7f6e",id:"ex-config",level:3}];function h(e){const n=Object.assign({h1:"h1",p:"p",a:"a",admonition:"admonition",strong:"strong",code:"code",h2:"h2",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-plugin-google-analytics\u5f03",children:"\ud83d\udce6 plugin-google-analytics(\u5f03)"}),"\n","\n","\n",(0,r.jsxs)(n.p,{children:["\u9ed8\u8ba4\u7684",(0,r.jsx)(n.a,{href:"https://developers.google.com/analytics/devguides/collection/analyticsjs/",children:"\u8c37\u6b4c\u5206\u6790"}),"\u63d2\u4ef6\u3002\u5b83\u662f\u4e00\u4e2a JavaScript \u5e93\uff0c\u7528\u4e8e\u6d4b\u91cf\u7528\u6237\u5982\u4f55\u5728\u751f\u4ea7\u6784\u5efa\u4e2d\u4e0e\u60a8\u7684\u7f51\u7ad9\u8fdb\u884c\u4ea4\u4e92\u3002\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528 Google Analytics 4\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u8003\u8651\u4f7f\u7528",(0,r.jsx)(n.a,{href:"/docusaurus-docs/docs/next/api/plugins/@docusaurus/plugin-google-gtag",children:"plugin-google-gtag"}),"\u3002"]}),"\n",(0,r.jsxs)(n.admonition,{title:"Deprecated",type:"danger",children:[(0,r.jsxs)(n.p,{children:["\u6b64\u63d2\u4ef6",(0,r.jsx)(n.strong,{children:"\u5df2\u5f03\u7528"}),"\uff0c\u5e76\u5c06\u4e8e 2023 \u5e74 7 \u6708 1 \u65e5\u5931\u6548\u3002"]}),(0,r.jsxs)(n.p,{children:["\u8c37\u6b4c\u6b63\u5728",(0,r.jsx)(n.a,{href:"https://blog.google/products/marketingplatform/analytics/prepare-for-future-with-google-analytics-4/",children:"\u8fdc\u79bb\u901a\u7528\u5206\u6790"}),"\u3002"]}),(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u8fd8\u5728\u7528",(0,r.jsx)(n.code,{children:"UA-*"}),"\u8ddf\u8e2a id \u4f7f\u7528\u8fd9\u4e2a\u63d2\u4ef6\uff0c\u4f60\u5e94\u8be5\u5c3d\u5feb\u521b\u5efa\u4e00\u4e2a\u8c37\u6b4c\u5206\u6790 4 \u5e10\u6237\uff0c\u5e76\u4f7f\u7528",(0,r.jsx)(n.a,{href:"/docusaurus-docs/docs/next/api/plugins/@docusaurus/plugin-google-gtag",children:(0,r.jsx)(n.code,{children:"@docusaurus/plugin-google-gtag"})}),"\u4ee3\u66ff\u8fd9\u4e2a\u63d2\u4ef6\u3002\u66f4\u591a\u7ec6\u8282",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/7221",children:"\u5728\u8fd9\u91cc"}),"\u3002"]})]}),"\n",(0,r.jsx)(n.admonition,{title:"\u53ea\u751f\u4ea7",type:"caution",children:(0,r.jsxs)(n.p,{children:["\u8fd9\u4e2a\u63d2\u4ef6\u5728\u5f00\u53d1\u4e2d\u603b\u662f\u4e0d\u6d3b\u8dc3\u7684\uff0c\u5e76\u4e14",(0,r.jsx)(n.strong,{children:"\u53ea\u5728\u751f\u4ea7\u4e2d\u6d3b\u8dc3"}),"\uff0c\u4ee5\u907f\u514d\u6c61\u67d3\u5206\u6790\u7edf\u8ba1\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"\u5b89\u88c5"}),"\n",(0,r.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(i.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-google-analytics\n"})})}),(0,r.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-google-analytics\n"})})}),(0,r.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-google-analytics\n"})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["If you use the preset ",(0,r.jsx)(n.code,{children:"@docusaurus/preset-classic"}),", you don't need to install this plugin as a dependency."]}),(0,r.jsx)(n.p,{children:"You can configure this plugin through the preset options."})]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"\u914d\u7f6e"}),"\n",(0,r.jsx)(n.p,{children:"\u63a5\u53d7\u5b57\u6bb5:"}),"\n",(0,r.jsx)(l.Z,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u540d\u5b57"}),(0,r.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(n.th,{children:"\u9ed8\u8ba4"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"trackingID"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Required"})}),(0,r.jsx)(n.td,{children:"The tracking ID of your analytics service."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"anonymizeIP"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsx)(n.td,{children:"Whether the IP should be anonymized when sending requests."})]})]})]})}),"\n",(0,r.jsx)(n.h3,{id:"ex-config",children:"\u793a\u4f8b\u914d\u7f6e"}),"\n",(0,r.jsx)(n.p,{children:"You can configure this plugin through preset options or plugin options."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Most Docusaurus users configure this plugin through the preset options."})}),"\n","\n",(0,r.jsx)(a.Z,{pluginName:"@docusaurus/plugin-google-analytics",presetOptionName:"googleAnalytics",code:'{\n  trackingID: "UA-141789564-1",\n  anonymizeIP: true,\n}'})]})}const b=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},7626:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(85893),o=(t(67294),t(86010));const s={tabItem:"tabItem_Ymn6"};function i({children:e,hidden:n,className:t}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(s.tabItem,t),hidden:n,children:e})}},51715:(e,n,t)=>{t.d(n,{Z:()=>D});var r=t(85893),o=t(67294),s=t(86010),i=t(8241),l=t(16550),a=t(40841),u=t(2834),c=t(35715),d=t(95417);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function g(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function h(e){var n,t;return null!==(t=null===(n=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function b(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=null!=n?n:function(e){return h(e).map((({props:{value:e,label:n,attributes:t,default:r}})=>({value:e,label:n,attributes:t,default:r})))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f({value:e,tabValues:n}){return n.some((n=>n.value===e))}function j({queryString:e=!1,groupId:n}){const t=(0,l.k6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),s=(0,u._X)(r),i=(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace(g(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){p(e,n,t[n])}))}return e}({},t.location),{search:n.toString()}))}),[r,t]);return[s,i]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=b(e),[i,l]=(0,o.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const r=null!==(t=n.find((e=>e.default)))&&void 0!==t?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,c]=j({queryString:t,groupId:r}),[p,g]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,d.Nk)(n);return[t,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:r}),h=(()=>{const e=null!=u?u:p;return f({value:e,tabValues:s})?e:null})();(0,a.Z)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,s]),tabValues:s}}var m=t(90980);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){v(e,n,t[n])}))}return e}function w(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function P({className:e,block:n,selectedValue:t,selectValue:o,tabValues:l}){const a=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{const n=e.currentTarget,r=a.indexOf(n),s=l[r].value;s!==t&&(u(n),o(s))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;var t;n=null!==(t=a[r])&&void 0!==t?t:a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;var r;n=null!==(r=a[t])&&void 0!==r?r:a[a.length-1];break}}null==n||n.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},e),children:l.map((({value:e,label:n,attributes:o})=>(0,r.jsx)("li",w(O({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>a.push(e),onKeyDown:d,onClick:c},o),{className:(0,s.Z)("tabs__item",x.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===e}),children:null!=n?n:e}),e)))})}function k({lazy:e,children:n,selectedValue:t}){const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=s.find((e=>e.props.value===t));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function I(e){const n=y(e);return(0,r.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,r.jsx)(P,O({},e,n)),(0,r.jsx)(k,O({},e,n))]})}function D(e){const n=(0,m.Z)();return(0,r.jsx)(I,w(O({},e),{children:h(e.children)}),String(n))}},91545:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(85893),o=t(67294),s=t(16550);const i={apiTable:"apiTable_e8hp"};function l({name:e,children:n},t){const i=function(e){let n=e;for(;(0,o.isValidElement)(n);)[n]=o.Children.toArray(n.props.children);return n}(n),l=e?`${e}-${i}`:i,a=`#${l}`,u=(0,s.k6)();return(0,r.jsx)("tr",{id:l,tabIndex:0,ref:u.location.hash===a?t:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||u.push(a)},onKeyDown:e=>{"Enter"===e.key&&u.push(a)},children:n.props.children})}const a=o.forwardRef(l);function u({children:e,name:n}){const[t,s]=o.Children.toArray(e.props.children),l=(0,o.useRef)(null);(0,o.useEffect)((()=>{var e;null===(e=l.current)||void 0===e||e.focus()}),[l]);const u=o.Children.map(s.props.children,(e=>(0,r.jsx)(a,{name:n,ref:l,children:e})));return(0,r.jsxs)("table",{className:i.apiTable,children:[t,(0,r.jsx)("tbody",{children:u})]})}},94926:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(85893),o=(t(67294),t(61596)),s=t(97203),i=t(27692),l=t(51715),a=t(7626),u=t(92101);const c=void 0;function d({code:e,pluginName:n,presetOptionName:t}){const d=(0,s.zu)(c).path;return(0,r.jsxs)(l.Z,{groupId:"api-config-ex",children:[(0,r.jsxs)(a.Z,{value:"preset",label:(0,i.I)({message:"Preset options"}),children:[(0,r.jsx)("p",{children:(0,r.jsx)(i.Z,{id:"apiDocs.configTabs.presetOptions.description",values:{presetLink:(0,r.jsx)(o.Z,{to:`${d}/using-plugins#docusauruspreset-classic`,children:(0,r.jsx)(i.Z,{children:"preset options"})})},children:"If you use a preset, configure this plugin through the {presetLink}:"})}),(0,r.jsx)(u.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        // highlight-start\n        ${t}: ${e.replace(/\n/g,"\n        ")},\n        // highlight-end\n      },\n    ],\n  ],\n};`})]}),(0,r.jsxs)(a.Z,{value:"plugin",label:(0,i.I)({message:"Plugin options"}),children:[(0,r.jsx)("p",{children:(0,r.jsx)(i.Z,{children:"If you are using a standalone plugin, provide options directly to the plugin:"})}),(0,r.jsx)(u.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {\n  plugins: [\n    [\n      '${n}',\n      // highlight-start\n      ${e.replace(/\n/g,"\n      ")},\n      // highlight-end\n    ],\n  ],\n};`})]})]})}},92101:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(85893),o=(t(67294),t(50191));function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e){return(0,r.jsx)(o.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}({},e))}},5379:(e,n,t)=>{t.d(n,{Z:()=>d});var r={};t.r(r),t.d(r,{ButtonExample:()=>u});var o=t(67294),s=t(85893);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function u(e){return(0,s.jsx)("button",a(l({type:"button"},e),{style:l({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const d=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){c(e,n,t[n])}))}return e}({React:o},o,r)}}]);