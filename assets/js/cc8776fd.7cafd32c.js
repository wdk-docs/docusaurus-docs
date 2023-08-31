"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[79889],{64759:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>b,frontMatter:()=>u,metadata:()=>d,toc:()=>g});var r=t(85893),o=t(11151),i=t(51715),s=t(7626),a=t(91545),l=t(94926);const u={sidebar_position:6,slug:"/api/plugins/@docusaurus/plugin-google-analytics"},c="\ud83d\udce6 plugin-google-analytics",d={unversionedId:"api/plugins/plugin-google-analytics",id:"version-3.0.0-alpha.0/api/plugins/plugin-google-analytics",title:"\ud83d\udce6 plugin-google-analytics",description:"The default Google Analytics plugin. It is a JavaScript library for measuring how users interact with your website in the production build. If you are using Google Analytics 4 you might need to consider using plugin-google-gtag instead.",source:"@site/versioned_docs/version-3.0.0-alpha.0/api/plugins/plugin-google-analytics.mdx",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-google-analytics",permalink:"/docusaurus-docs/docs/3.0.0-alpha.0/api/plugins/@docusaurus/plugin-google-analytics",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"3.0.0-alpha.0",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",sidebarPosition:6,frontMatter:{sidebar_position:6,slug:"/api/plugins/@docusaurus/plugin-google-analytics"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-debug",permalink:"/docusaurus-docs/docs/3.0.0-alpha.0/api/plugins/@docusaurus/plugin-debug"},next:{title:"\ud83d\udce6 plugin-google-gtag",permalink:"/docusaurus-docs/docs/3.0.0-alpha.0/api/plugins/@docusaurus/plugin-google-gtag"}},p={},g=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}];function h(e){const n=Object.assign({h1:"h1",p:"p",a:"a",strong:"strong",admonition:"admonition",code:"code",h2:"h2",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-plugin-google-analytics",children:"\ud83d\udce6 plugin-google-analytics"}),"\n","\n","\n",(0,r.jsxs)(n.p,{children:["The default ",(0,r.jsx)(n.a,{href:"https://developers.google.com/analytics/devguides/collection/analyticsjs/",children:"Google Analytics"})," plugin. It is a JavaScript library for measuring how users interact with your website ",(0,r.jsx)(n.strong,{children:"in the production build"}),". If you are using Google Analytics 4 you might need to consider using ",(0,r.jsx)(n.a,{href:"/docusaurus-docs/docs/3.0.0-alpha.0/api/plugins/@docusaurus/plugin-google-gtag",children:"plugin-google-gtag"})," instead."]}),"\n",(0,r.jsxs)(n.admonition,{title:"Deprecated",type:"danger",children:[(0,r.jsxs)(n.p,{children:["This plugin is ",(0,r.jsx)(n.strong,{children:"deprecated"}),", and will become useless on July 1, 2023."]}),(0,r.jsxs)(n.p,{children:["Google is ",(0,r.jsx)(n.a,{href:"https://blog.google/products/marketingplatform/analytics/prepare-for-future-with-google-analytics-4/",children:"moving away from Universal Analytics"}),"."]}),(0,r.jsxs)(n.p,{children:["If you are still using this plugin with a ",(0,r.jsx)(n.code,{children:"UA-*"})," tracking id, you should create a Google Analytics 4 account as soon as possible, and use ",(0,r.jsx)(n.a,{href:"/docusaurus-docs/docs/3.0.0-alpha.0/api/plugins/@docusaurus/plugin-google-gtag",children:(0,r.jsx)(n.code,{children:"@docusaurus/plugin-google-gtag"})})," instead of this plugin. More details ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/issues/7221",children:"here"}),"."]})]}),"\n",(0,r.jsx)(n.admonition,{title:"production only",type:"caution",children:(0,r.jsxs)(n.p,{children:["This plugin is always inactive in development and ",(0,r.jsx)(n.strong,{children:"only active in production"})," to avoid polluting the analytics statistics."]})}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(s.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-google-analytics\n"})})}),(0,r.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-google-analytics\n"})})}),(0,r.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-google-analytics\n"})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["If you use the preset ",(0,r.jsx)(n.code,{children:"@docusaurus/preset-classic"}),", you don't need to install this plugin as a dependency."]}),(0,r.jsx)(n.p,{children:"You can configure this plugin through the preset options."})]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Accepted fields:"}),"\n",(0,r.jsx)(a.Z,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"trackingID"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Required"})}),(0,r.jsx)(n.td,{children:"The tracking ID of your analytics service."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"anonymizeIP"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsx)(n.td,{children:"Whether the IP should be anonymized when sending requests."})]})]})]})}),"\n",(0,r.jsx)(n.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,r.jsx)(n.p,{children:"You can configure this plugin through preset options or plugin options."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Most Docusaurus users configure this plugin through the preset options."})}),"\n","\n",(0,r.jsx)(l.Z,{pluginName:"@docusaurus/plugin-google-analytics",presetOptionName:"googleAnalytics",code:"{\n  trackingID: 'UA-141789564-1',\n  anonymizeIP: true,\n}"})]})}const b=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},7626:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(85893),o=(t(67294),t(86010));const i={tabItem:"tabItem_Ymn6"};function s({children:e,hidden:n,className:t}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,t),hidden:n,children:e})}},51715:(e,n,t)=>{t.d(n,{Z:()=>D});var r=t(85893),o=t(67294),i=t(86010),s=t(8241),a=t(16550),l=t(40841),u=t(2834),c=t(35715),d=t(95417);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function g(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function h(e){var n,t;return null!==(t=null===(n=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function b(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=null!=n?n:function(e){return h(e).map((({props:{value:e,label:n,attributes:t,default:r}})=>({value:e,label:n,attributes:t,default:r})))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f({value:e,tabValues:n}){return n.some((n=>n.value===e))}function y({queryString:e=!1,groupId:n}){const t=(0,a.k6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),i=(0,u._X)(r),s=(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace(g(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){p(e,n,t[n])}))}return e}({},t.location),{search:n.toString()}))}),[r,t]);return[i,s]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=b(e),[s,a]=(0,o.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const r=null!==(t=n.find((e=>e.default)))&&void 0!==t?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[u,c]=y({queryString:t,groupId:r}),[p,g]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,d.Nk)(n);return[t,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:r}),h=(()=>{const e=null!=u?u:p;return f({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{h&&a(h)}),[h]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),c(e),g(e)}),[c,g,i]),tabValues:i}}var m=t(90980);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){x(e,n,t[n])}))}return e}function w(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function P({className:e,block:n,selectedValue:t,selectValue:o,tabValues:a}){const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const n=e.currentTarget,r=l.indexOf(n),i=a[r].value;i!==t&&(u(n),o(i))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;var t;n=null!==(t=l[r])&&void 0!==t?t:l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;var r;n=null!==(r=l[t])&&void 0!==r?r:l[l.length-1];break}}null==n||n.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},e),children:a.map((({value:e,label:n,attributes:o})=>(0,r.jsx)("li",w(O({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>l.push(e),onKeyDown:d,onClick:c},o),{className:(0,i.Z)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===e}),children:null!=n?n:e}),e)))})}function k({lazy:e,children:n,selectedValue:t}){const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===t));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function I(e){const n=j(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container",v.tabList),children:[(0,r.jsx)(P,O({},e,n)),(0,r.jsx)(k,O({},e,n))]})}function D(e){const n=(0,m.Z)();return(0,r.jsx)(I,w(O({},e),{children:h(e.children)}),String(n))}},91545:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(85893),o=t(67294),i=t(16550);const s={apiTable:"apiTable_e8hp"};function a({name:e,children:n},t){const s=function(e){let n=e;for(;(0,o.isValidElement)(n);)[n]=o.Children.toArray(n.props.children);return n}(n),a=e?`${e}-${s}`:s,l=`#${a}`,u=(0,i.k6)();return(0,r.jsx)("tr",{id:a,tabIndex:0,ref:u.location.hash===l?t:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||u.push(l)},onKeyDown:e=>{"Enter"===e.key&&u.push(l)},children:n.props.children})}const l=o.forwardRef(a);function u({children:e,name:n}){const[t,i]=o.Children.toArray(e.props.children),a=(0,o.useRef)(null);(0,o.useEffect)((()=>{var e;null===(e=a.current)||void 0===e||e.focus()}),[a]);const u=o.Children.map(i.props.children,(e=>(0,r.jsx)(l,{name:n,ref:a,children:e})));return(0,r.jsxs)("table",{className:s.apiTable,children:[t,(0,r.jsx)("tbody",{children:u})]})}},94926:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(85893),o=(t(67294),t(61596)),i=t(97203),s=t(27692),a=t(51715),l=t(7626),u=t(92101);const c=void 0;function d({code:e,pluginName:n,presetOptionName:t}){const d=(0,i.zu)(c).path;return(0,r.jsxs)(a.Z,{groupId:"api-config-ex",children:[(0,r.jsxs)(l.Z,{value:"preset",label:(0,s.I)({message:"Preset options"}),children:[(0,r.jsx)("p",{children:(0,r.jsx)(s.Z,{id:"apiDocs.configTabs.presetOptions.description",values:{presetLink:(0,r.jsx)(o.Z,{to:`${d}/using-plugins#docusauruspreset-classic`,children:(0,r.jsx)(s.Z,{children:"preset options"})})},children:"If you use a preset, configure this plugin through the {presetLink}:"})}),(0,r.jsx)(u.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        // highlight-start\n        ${t}: ${e.replace(/\n/g,"\n        ")},\n        // highlight-end\n      },\n    ],\n  ],\n};`})]}),(0,r.jsxs)(l.Z,{value:"plugin",label:(0,s.I)({message:"Plugin options"}),children:[(0,r.jsx)("p",{children:(0,r.jsx)(s.Z,{children:"If you are using a standalone plugin, provide options directly to the plugin:"})}),(0,r.jsx)(u.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {\n  plugins: [\n    [\n      '${n}',\n      // highlight-start\n      ${e.replace(/\n/g,"\n      ")},\n      // highlight-end\n    ],\n  ],\n};`})]})]})}},92101:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(85893),o=(t(67294),t(50191));function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e){return(0,r.jsx)(o.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}({},e))}},5379:(e,n,t)=>{t.d(n,{Z:()=>d});var r={};t.r(r),t.d(r,{ButtonExample:()=>u});var o=t(67294),i=t(85893);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}function l(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function u(e){return(0,i.jsx)("button",l(a({type:"button"},e),{style:a({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const d=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){c(e,n,t[n])}))}return e}({React:o},o,r)}}]);