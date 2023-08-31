"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[3658],{49109:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var r=t(85893),i=t(11151),s=t(51715),o=t(7626),a=t(91545),l=t(94926);const c={sidebar_position:10,slug:"/api/plugins/@docusaurus/plugin-sitemap"},u="\ud83d\udce6 plugin-sitemap",d={unversionedId:"api/plugins/plugin-sitemap",id:"version-3.0.0-alpha.0/api/plugins/plugin-sitemap",title:"\ud83d\udce6 plugin-sitemap",description:"This plugin creates sitemaps for your site so that search engine crawlers can crawl your site more accurately.",source:"@site/versioned_docs/version-3.0.0-alpha.0/api/plugins/plugin-sitemap.mdx",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-sitemap",permalink:"/docusaurus-docs/en/docs/3.0.0-alpha.0/api/plugins/@docusaurus/plugin-sitemap",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-sitemap.mdx",tags:[],version:"3.0.0-alpha.0",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"Aug 31, 2023",sidebarPosition:10,frontMatter:{sidebar_position:10,slug:"/api/plugins/@docusaurus/plugin-sitemap"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-pwa",permalink:"/docusaurus-docs/en/docs/3.0.0-alpha.0/api/plugins/@docusaurus/plugin-pwa"},next:{title:"Themes overview",permalink:"/docusaurus-docs/en/docs/3.0.0-alpha.0/api/themes"}},p={},h=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}];function f(e){const n=Object.assign({h1:"h1",p:"p",admonition:"admonition",strong:"strong",h2:"h2",pre:"pre",code:"code",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li",h3:"h3"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-plugin-sitemap",children:"\ud83d\udce6 plugin-sitemap"}),"\n","\n","\n",(0,r.jsx)(n.p,{children:"This plugin creates sitemaps for your site so that search engine crawlers can crawl your site more accurately."}),"\n",(0,r.jsx)(n.admonition,{title:"production only",type:"caution",children:(0,r.jsxs)(n.p,{children:["This plugin is always inactive in development and ",(0,r.jsx)(n.strong,{children:"only active in production"})," because it works on the build output."]})}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(o.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-sitemap\n"})})}),(0,r.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-sitemap\n"})})}),(0,r.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-sitemap\n"})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["If you use the preset ",(0,r.jsx)(n.code,{children:"@docusaurus/preset-classic"}),", you don't need to install this plugin as a dependency."]}),(0,r.jsxs)(n.p,{children:["You can configure this plugin through the ",(0,r.jsx)(n.a,{href:"#ex-config-preset",children:"preset options"}),"."]})]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Accepted fields:"}),"\n",(0,r.jsx)(a.Z,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"changefreq"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"'weekly'"})}),(0,r.jsxs)(n.td,{children:["See ",(0,r.jsx)(n.a,{href:"https://www.sitemaps.org/protocol.html#xmlTagDefinitions",children:"sitemap docs"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"priority"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"0.5"})}),(0,r.jsxs)(n.td,{children:["See ",(0,r.jsx)(n.a,{href:"https://www.sitemaps.org/protocol.html#xmlTagDefinitions",children:"sitemap docs"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ignorePatterns"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string[]"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"[]"})}),(0,r.jsx)(n.td,{children:"A list of glob patterns; matching route paths will be filtered from the sitemap. Note that you may need to include the base URL in here."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"filename"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sitemap.xml"})}),(0,r.jsx)(n.td,{children:"The path to the created sitemap file, relative to the output directory. Useful if you have two plugin instances outputting two files."})]})]})]})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"This plugin also respects some site config:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docusaurus-docs/en/docs/3.0.0-alpha.0/api/docusaurus-config#noIndex",children:(0,r.jsx)(n.code,{children:"noIndex"})}),": results in no sitemap generated"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docusaurus-docs/en/docs/3.0.0-alpha.0/api/docusaurus-config#trailingSlash",children:(0,r.jsx)(n.code,{children:"trailingSlash"})}),": determines if the URLs in the sitemap have trailing slashes"]}),"\n"]})]}),"\n",(0,r.jsx)(n.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,r.jsx)(n.p,{children:"You can configure this plugin through preset options or plugin options."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Most Docusaurus users configure this plugin through the preset options."})}),"\n","\n",(0,r.jsx)(l.Z,{pluginName:"@docusaurus/plugin-sitemap",presetOptionName:"sitemap",code:"{\n  changefreq: 'weekly',\n  priority: 0.5,\n  ignorePatterns: ['/tags/**'],\n  filename: 'sitemap.xml',\n}"}),"\n",(0,r.jsxs)(n.p,{children:["You can find your sitemap at ",(0,r.jsx)(n.code,{children:"/sitemap.xml"}),"."]})]})}const g=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(f,e)})):f(e)}},7626:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(85893),i=(t(67294),t(86010));const s={tabItem:"tabItem_Ymn6"};function o({children:e,hidden:n,className:t}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(s.tabItem,t),hidden:n,children:e})}},51715:(e,n,t)=>{t.d(n,{Z:()=>I});var r=t(85893),i=t(67294),s=t(86010),o=t(8241),a=t(16550),l=t(40841),c=t(2834),u=t(35715),d=t(95417);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function f(e){var n,t;return null!==(t=null===(n=i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function g(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=null!=n?n:function(e){return f(e).map((({props:{value:e,label:n,attributes:t,default:r}})=>({value:e,label:n,attributes:t,default:r})))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b({value:e,tabValues:n}){return n.some((n=>n.value===e))}function j({queryString:e=!1,groupId:n}){const t=(0,a.k6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),s=(0,c._X)(r),o=(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace(h(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){p(e,n,t[n])}))}return e}({},t.location),{search:n.toString()}))}),[r,t]);return[s,o]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=g(e),[o,a]=(0,i.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!b({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const r=null!==(t=n.find((e=>e.default)))&&void 0!==t?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=j({queryString:t,groupId:r}),[p,h]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,d.Nk)(n);return[t,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:r}),f=(()=>{const e=null!=c?c:p;return b({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{f&&a(f)}),[f]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),h(e)}),[u,h,s]),tabValues:s}}var y=t(90980);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){v(e,n,t[n])}))}return e}function w(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function P({className:e,block:n,selectedValue:t,selectValue:i,tabValues:a}){const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const n=e.currentTarget,r=l.indexOf(n),s=a[r].value;s!==t&&(c(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;var t;n=null!==(t=l[r])&&void 0!==t?t:l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;var r;n=null!==(r=l[t])&&void 0!==r?r:l[l.length-1];break}}null==n||n.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},e),children:a.map((({value:e,label:n,attributes:i})=>(0,r.jsx)("li",w(O({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>l.push(e),onKeyDown:d,onClick:u},i),{className:(0,s.Z)("tabs__item",x.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===e}),children:null!=n?n:e}),e)))})}function k({lazy:e,children:n,selectedValue:t}){const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=s.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function D(e){const n=m(e);return(0,r.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,r.jsx)(P,O({},e,n)),(0,r.jsx)(k,O({},e,n))]})}function I(e){const n=(0,y.Z)();return(0,r.jsx)(D,w(O({},e),{children:f(e.children)}),String(n))}},91545:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(85893),i=t(67294),s=t(16550);const o={apiTable:"apiTable_e8hp"};function a({name:e,children:n},t){const o=function(e){let n=e;for(;(0,i.isValidElement)(n);)[n]=i.Children.toArray(n.props.children);return n}(n),a=e?`${e}-${o}`:o,l=`#${a}`,c=(0,s.k6)();return(0,r.jsx)("tr",{id:a,tabIndex:0,ref:c.location.hash===l?t:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||c.push(l)},onKeyDown:e=>{"Enter"===e.key&&c.push(l)},children:n.props.children})}const l=i.forwardRef(a);function c({children:e,name:n}){const[t,s]=i.Children.toArray(e.props.children),a=(0,i.useRef)(null);(0,i.useEffect)((()=>{var e;null===(e=a.current)||void 0===e||e.focus()}),[a]);const c=i.Children.map(s.props.children,(e=>(0,r.jsx)(l,{name:n,ref:a,children:e})));return(0,r.jsxs)("table",{className:o.apiTable,children:[t,(0,r.jsx)("tbody",{children:c})]})}},94926:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(85893),i=(t(67294),t(61596)),s=t(97203),o=t(27692),a=t(51715),l=t(7626),c=t(92101);const u=void 0;function d({code:e,pluginName:n,presetOptionName:t}){const d=(0,s.zu)(u).path;return(0,r.jsxs)(a.Z,{groupId:"api-config-ex",children:[(0,r.jsxs)(l.Z,{value:"preset",label:(0,o.I)({message:"Preset options"}),children:[(0,r.jsx)("p",{children:(0,r.jsx)(o.Z,{id:"apiDocs.configTabs.presetOptions.description",values:{presetLink:(0,r.jsx)(i.Z,{to:`${d}/using-plugins#docusauruspreset-classic`,children:(0,r.jsx)(o.Z,{children:"preset options"})})},children:"If you use a preset, configure this plugin through the {presetLink}:"})}),(0,r.jsx)(c.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        // highlight-start\n        ${t}: ${e.replace(/\n/g,"\n        ")},\n        // highlight-end\n      },\n    ],\n  ],\n};`})]}),(0,r.jsxs)(l.Z,{value:"plugin",label:(0,o.I)({message:"Plugin options"}),children:[(0,r.jsx)("p",{children:(0,r.jsx)(o.Z,{children:"If you are using a standalone plugin, provide options directly to the plugin:"})}),(0,r.jsx)(c.Z,{language:"js",title:"docusaurus.config.js",children:`module.exports = {\n  plugins: [\n    [\n      '${n}',\n      // highlight-start\n      ${e.replace(/\n/g,"\n      ")},\n      // highlight-end\n    ],\n  ],\n};`})]})]})}},92101:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(85893),i=(t(67294),t(50191));function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e){return(0,r.jsx)(i.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}({},e))}},5379:(e,n,t)=>{t.d(n,{Z:()=>d});var r={};t.r(r),t.d(r,{ButtonExample:()=>c});var i=t(67294),s=t(85893);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}function l(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function c(e){return(0,s.jsx)("button",l(a({type:"button"},e),{style:a({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const d=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){u(e,n,t[n])}))}return e}({React:i},i,r)}}]);