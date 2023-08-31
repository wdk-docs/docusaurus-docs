"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[37978],{36249:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(85893),s=t(11151),u=t(51715),i=t(7626);const o={sidebar_position:5,slug:"/api/plugins/@docusaurus/plugin-debug"},a="\ud83d\udce6 plugin-debug",l={unversionedId:"api/plugins/plugin-debug",id:"version-3.0.0-alpha.0/api/plugins/plugin-debug",title:"\ud83d\udce6 plugin-debug",description:"The debug plugin will display useful debug information at http3000/docusaurus/debug.",source:"@site/versioned_docs/version-3.0.0-alpha.0/api/plugins/plugin-debug.mdx",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-debug",permalink:"/docusaurus-docs/docs/3.0.0-alpha.0/api/plugins/@docusaurus/plugin-debug",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"3.0.0-alpha.0",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"/api/plugins/@docusaurus/plugin-debug"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-client-redirects",permalink:"/docusaurus-docs/docs/3.0.0-alpha.0/api/plugins/@docusaurus/plugin-client-redirects"},next:{title:"\ud83d\udce6 plugin-google-analytics",permalink:"/docusaurus-docs/docs/3.0.0-alpha.0/api/plugins/@docusaurus/plugin-google-analytics"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"ex-config",level:3}];function p(e){const n=Object.assign({h1:"h1",p:"p",a:"a",code:"code",admonition:"admonition",strong:"strong",pre:"pre",h2:"h2",h3:"h3"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-plugin-debug",children:"\ud83d\udce6 plugin-debug"}),"\n","\n","\n",(0,r.jsxs)(n.p,{children:["The debug plugin will display useful debug information at ",(0,r.jsx)(n.a,{href:"http://localhost:3000/__docusaurus/debug",children:(0,r.jsx)(n.code,{children:"http://localhost:3000/__docusaurus/debug"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["It is mostly useful for plugin authors, that will be able to inspect more easily the content of the ",(0,r.jsx)(n.code,{children:".docusaurus"})," folder (like the creates routes), but also be able to inspect data structures that are never written to disk, like the plugin data loaded through the ",(0,r.jsx)(n.code,{children:"contentLoaded"})," lifecycle."]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["If you use the plugin via the classic preset, the preset will ",(0,r.jsx)(n.strong,{children:"enable the plugin in development and disable it in production"})," by default (",(0,r.jsx)(n.code,{children:"debug: undefined"}),") to avoid exposing potentially sensitive information. You can use ",(0,r.jsx)(n.code,{children:"debug: true"})," to always enable it or ",(0,r.jsx)(n.code,{children:"debug: false"})," to always disable it."]}),(0,r.jsx)(n.p,{children:"If you use a standalone plugin, you may need to achieve the same effect by checking the environment:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  plugins: [\n    // highlight-next-line\n    process.env.NODE_ENV === 'production' && '@docusaurus/plugin-debug',\n  ].filter(Boolean),\n};\n"})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:"If you report a bug, we will probably ask you to have this plugin turned on in the production, so that we can inspect your deployment config more easily."}),(0,r.jsxs)(n.p,{children:["If you don't have any sensitive information, you can keep it on in production ",(0,r.jsx)(n.a,{href:"/__docusaurus/debug",children:"like we do"}),"."]})]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(u.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(i.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-debug\n"})})}),(0,r.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-debug\n"})})}),(0,r.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-debug\n"})})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["If you use the preset ",(0,r.jsx)(n.code,{children:"@docusaurus/preset-classic"}),", you don't need to install this plugin as a dependency."]}),(0,r.jsx)(n.p,{children:"You can configure this plugin through the preset options."})]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsx)(n.p,{children:"This plugin currently has no options."}),"\n",(0,r.jsx)(n.h3,{id:"ex-config",children:"Example configuration"}),"\n",(0,r.jsx)(n.p,{children:"You can configure this plugin through preset options or plugin options."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Most Docusaurus users configure this plugin through the preset options."})}),"\n",(0,r.jsxs)(u.Z,{groupId:"api-config-ex",children:[(0,r.jsxs)(i.Z,{value:"preset",label:"Preset options",children:[(0,r.jsxs)(n.p,{children:["If you use a preset, configure this plugin through the ",(0,r.jsx)(n.a,{href:"/docusaurus-docs/docs/3.0.0-alpha.0/using-plugins#docusauruspreset-classic",children:"preset options"}),":"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        // highlight-next-line\n        debug: true, // This will enable the plugin in production\n      },\n    ],\n  ],\n};\n"})})]}),(0,r.jsxs)(i.Z,{value:"plugin",label:"Plugin Options",children:[(0,r.jsx)(n.p,{children:"If you are using a standalone plugin, provide options directly to the plugin:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  // highlight-next-line\n  plugins: ['@docusaurus/plugin-debug'],\n};\n"})})]})]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(p,e)})):p(e)}},7626:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(85893),s=(t(67294),t(86010));const u={tabItem:"tabItem_Ymn6"};function i({children:e,hidden:n,className:t}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(u.tabItem,t),hidden:n,children:e})}},51715:(e,n,t)=>{t.d(n,{Z:()=>E});var r=t(85893),s=t(67294),u=t(86010),i=t(8241),o=t(16550),a=t(40841),l=t(2834),c=t(35715),d=t(95417);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function g(e){var n,t;return null!==(t=null===(n=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function b(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return g(e).map((({props:{value:e,label:n,attributes:t,default:r}})=>({value:e,label:n,attributes:t,default:r})))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f({value:e,tabValues:n}){return n.some((n=>n.value===e))}function m({queryString:e=!1,groupId:n}){const t=(0,o.k6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),u=(0,l._X)(r),i=(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace(h(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){p(e,n,t[n])}))}return e}({},t.location),{search:n.toString()}))}),[r,t]);return[u,i]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,u=b(e),[i,o]=(0,s.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const r=null!==(t=n.find((e=>e.default)))&&void 0!==t?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:u}))),[l,c]=m({queryString:t,groupId:r}),[p,h]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,d.Nk)(n);return[t,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:r}),g=(()=>{const e=null!=l?l:p;return f({value:e,tabValues:u})?e:null})();(0,a.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!f({value:e,tabValues:u}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),h(e)}),[c,h,u]),tabValues:u}}var y=t(90980);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function x(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){x(e,n,t[n])}))}return e}function O(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function k({className:e,block:n,selectedValue:t,selectValue:s,tabValues:o}){const a=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),c=e=>{const n=e.currentTarget,r=a.indexOf(n),u=o[r].value;u!==t&&(l(n),s(u))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=a.indexOf(e.currentTarget)+1;var t;n=null!==(t=a[r])&&void 0!==t?t:a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;var r;n=null!==(r=a[t])&&void 0!==r?r:a[a.length-1];break}}null==n||n.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":n},e),children:o.map((({value:e,label:n,attributes:s})=>(0,r.jsx)("li",O(w({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>a.push(e),onKeyDown:d,onClick:c},s),{className:(0,u.Z)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===e}),children:null!=n?n:e}),e)))})}function I({lazy:e,children:n,selectedValue:t}){const u=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=u.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:u.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function P(e){const n=j(e);return(0,r.jsxs)("div",{className:(0,u.Z)("tabs-container",v.tabList),children:[(0,r.jsx)(k,w({},e,n)),(0,r.jsx)(I,w({},e,n))]})}function E(e){const n=(0,y.Z)();return(0,r.jsx)(P,O(w({},e),{children:g(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>u});var r=t(67294);const s=r.createContext({});function u(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||i:u(e),r.createElement(s.Provider,{value:o},n)}}}]);