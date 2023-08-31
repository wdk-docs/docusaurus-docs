"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[77620],{4559:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=r(85893),s=r(11151),u=r(51715),a=r(7626);const l={sidebar_position:5,slug:"/api/plugins/@docusaurus/plugin-debug"},i="\ud83d\udce6 plugin-debug",o={unversionedId:"api/plugins/plugin-debug",id:"api/plugins/plugin-debug",title:"\ud83d\udce6 plugin-debug",description:"\u8c03\u8bd5\u63d2\u4ef6\u5c06\u5728http3000/docusaurus/debug\u4e0a\u663e\u793a\u6709\u7528\u7684\u8c03\u8bd5\u4fe1\u606f\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/plugins/plugin-debug.mdx",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-debug",permalink:"/docusaurus-docs/docs/next/api/plugins/@docusaurus/plugin-debug",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"/api/plugins/@docusaurus/plugin-debug"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-client-redirects",permalink:"/docusaurus-docs/docs/next/api/plugins/@docusaurus/plugin-client-redirects"},next:{title:"\ud83d\udce6 plugin-google-analytics(\u5f03)",permalink:"/docusaurus-docs/docs/next/api/plugins/@docusaurus/plugin-google-analytics"}},c={},d=[{value:"\u5b89\u88c5",id:"installation",level:2},{value:"\u914d\u7f6e",id:"configuration",level:2},{value:"\u793a\u4f8b\u914d\u7f6e",id:"ex-config",level:3}];function p(e){const n=Object.assign({h1:"h1",p:"p",a:"a",code:"code",admonition:"admonition",strong:"strong",pre:"pre",h2:"h2",h3:"h3"},(0,s.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-plugin-debug",children:"\ud83d\udce6 plugin-debug"}),"\n","\n","\n",(0,t.jsxs)(n.p,{children:["\u8c03\u8bd5\u63d2\u4ef6\u5c06\u5728",(0,t.jsx)(n.a,{href:"http://localhost:3000/__docusaurus/debug",children:(0,t.jsx)(n.code,{children:"http://localhost:3000/__docusaurus/debug"})}),"\u4e0a\u663e\u793a\u6709\u7528\u7684\u8c03\u8bd5\u4fe1\u606f\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5b83\u5bf9\u63d2\u4ef6\u4f5c\u8005\u6765\u8bf4\u975e\u5e38\u6709\u7528\uff0c\u53ef\u4ee5\u66f4\u5bb9\u6613\u5730\u68c0\u67e5",(0,t.jsx)(n.code,{children:".docusaurus"}),"\u6587\u4ef6\u5939\u7684\u5185\u5bb9(\u5982\u521b\u5efa\u8def\u7531)\uff0c\u4f46\u4e5f\u53ef\u4ee5\u68c0\u67e5\u4ece\u672a\u5199\u5165\u78c1\u76d8\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5982\u901a\u8fc7",(0,t.jsx)(n.code,{children:"contentLoaded"}),"\u751f\u547d\u5468\u671f\u52a0\u8f7d\u7684\u63d2\u4ef6\u6570\u636e\u3002"]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u901a\u8fc7\u7ecf\u5178\u9884\u8bbe\u4f7f\u7528\u63d2\u4ef6\uff0c\u9884\u8bbe\u5c06",(0,t.jsx)(n.strong,{children:"\u5728\u5f00\u53d1\u4e2d\u542f\u7528\u63d2\u4ef6\uff0c\u5e76\u5728\u751f\u4ea7\u4e2d\u9ed8\u8ba4\u7981\u7528\u5b83"})," (",(0,t.jsx)(n.code,{children:"debug: undefined"}),")\uff0c\u4ee5\u907f\u514d\u66b4\u9732\u6f5c\u5728\u7684\u654f\u611f\u4fe1\u606f\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,t.jsx)(n.code,{children:"debug: true"}),"\u6765\u59cb\u7ec8\u542f\u7528\u5b83\uff0c\u6216",(0,t.jsx)(n.code,{children:"debug: false"}),"\u6765\u59cb\u7ec8\u7981\u7528\u5b83\u3002"]}),(0,t.jsx)(n.p,{children:"\u5982\u679c\u4f60\u4f7f\u7528\u4e00\u4e2a\u72ec\u7acb\u7684\u63d2\u4ef6\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u901a\u8fc7\u68c0\u67e5\u73af\u5883\u6765\u8fbe\u5230\u540c\u6837\u7684\u6548\u679c:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:'module.exports = {\n  plugins: [\n    // highlight-next-line\n    process.env.NODE_ENV === "production" && "@docusaurus/plugin-debug",\n  ].filter(Boolean),\n};\n'})})]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"\u5982\u679c\u4f60\u62a5\u544a\u4e86\u4e00\u4e2a bug\uff0c\u6211\u4eec\u53ef\u80fd\u4f1a\u8981\u6c42\u4f60\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u6253\u5f00\u8fd9\u4e2a\u63d2\u4ef6\uff0c\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u66f4\u5bb9\u6613\u5730\u68c0\u67e5\u4f60\u7684\u90e8\u7f72\u914d\u7f6e\u3002"}),(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u6ca1\u6709\u4efb\u4f55\u654f\u611f\u4fe1\u606f\uff0c\u4f60\u53ef\u4ee5\u5728\u751f\u4ea7\u73af\u5883\u4e2d",(0,t.jsx)(n.a,{href:"/__docusaurus/debug",children:"\u50cf\u6211\u4eec\u4e00\u6837"}),"\u3002"]})]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"\u5b89\u88c5"}),"\n",(0,t.jsxs)(u.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(a.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-debug\n"})})}),(0,t.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-debug\n"})})}),(0,t.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-debug\n"})})})]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4f7f\u7528\u9884\u8bbe\u7684",(0,t.jsx)(n.code,{children:"@docusaurus/preset-classic"}),"\uff0c\u4f60\u4e0d\u9700\u8981\u5c06\u8fd9\u4e2a\u63d2\u4ef6\u4f5c\u4e3a\u4f9d\u8d56\u9879\u5b89\u88c5\u3002"]}),(0,t.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u9884\u8bbe\u9009\u9879\u914d\u7f6e\u6b64\u63d2\u4ef6\u3002"})]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"\u914d\u7f6e"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u4e2a\u63d2\u4ef6\u76ee\u524d\u6ca1\u6709\u9009\u9879\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"ex-config",children:"\u793a\u4f8b\u914d\u7f6e"}),"\n",(0,t.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u901a\u8fc7\u9884\u8bbe\u9009\u9879\u6216\u63d2\u4ef6\u9009\u9879\u6765\u914d\u7f6e\u8fd9\u4e2a\u63d2\u4ef6\u3002"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"\u5927\u591a\u6570 Docusaurus \u7528\u6237\u901a\u8fc7\u9884\u8bbe\u9009\u9879\u914d\u7f6e\u8fd9\u4e2a\u63d2\u4ef6\u3002"})}),"\n",(0,t.jsxs)(u.Z,{groupId:"api-config-ex",children:[(0,t.jsxs)(a.Z,{value:"preset",label:"Preset options",children:[(0,t.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4f7f\u7528\u9884\u8bbe\uff0c\u901a\u8fc7",(0,t.jsx)(n.a,{href:"/docusaurus-docs/docs/next/using-plugins#docusauruspreset-classic",children:"\u9884\u8bbe\u9009\u9879"}),"\u914d\u7f6e\u8fd9\u4e2a\u63d2\u4ef6:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:'module.exports = {\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      {\n        // highlight-next-line\n        debug: true, // This will enable the plugin in production\n      },\n    ],\n  ],\n};\n'})})]}),(0,t.jsxs)(a.Z,{value:"plugin",label:"Plugin Options",children:[(0,t.jsx)(n.p,{children:"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f\u72ec\u7acb\u63d2\u4ef6\uff0c\u76f4\u63a5\u7ed9\u63d2\u4ef6\u63d0\u4f9b\u9009\u9879:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:'module.exports = {\n  // highlight-next-line\n  plugins: ["@docusaurus/plugin-debug"],\n};\n'})})]})]})]})}const g=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(p,e)})):p(e)}},7626:(e,n,r)=>{r.d(n,{Z:()=>a});var t=r(85893),s=(r(67294),r(86010));const u={tabItem:"tabItem_Ymn6"};function a({children:e,hidden:n,className:r}){return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.Z)(u.tabItem,r),hidden:n,children:e})}},51715:(e,n,r)=>{r.d(n,{Z:()=>I});var t=r(85893),s=r(67294),u=r(86010),a=r(8241),l=r(16550),i=r(40841),o=r(2834),c=r(35715),d=r(95417);function p(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function g(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function h(e){var n,r;return null!==(r=null===(n=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==r?r:[]}function b(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return h(e).map((({props:{value:e,label:n,attributes:r,default:t}})=>({value:e,label:n,attributes:r,default:t})))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function f({value:e,tabValues:n}){return n.some((n=>n.value===e))}function j({queryString:e=!1,groupId:n}){const r=(0,l.k6)(),t=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),u=(0,o._X)(t),a=(0,s.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace(g(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){p(e,n,r[n])}))}return e}({},r.location),{search:n.toString()}))}),[t,r]);return[u,a]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,u=b(e),[a,l]=(0,s.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const t=null!==(r=n.find((e=>e.default)))&&void 0!==r?r:n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:u}))),[o,c]=j({queryString:r,groupId:t}),[p,g]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,t]=(0,d.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:t}),h=(()=>{const e=null!=o?o:p;return f({value:e,tabValues:u})?e:null})();(0,i.Z)((()=>{h&&l(h)}),[h]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!f({value:e,tabValues:u}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,u]),tabValues:u}}var x=r(90980);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function O(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){y(e,n,r[n])}))}return e}function w(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function P({className:e,block:n,selectedValue:r,selectValue:s,tabValues:l}){const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.o5)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),u=l[t].value;u!==r&&(o(n),s(u))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;var r;n=null!==(r=i[t])&&void 0!==r?r:i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;var t;n=null!==(t=i[r])&&void 0!==t?t:i[i.length-1];break}}null==n||n.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":n},e),children:l.map((({value:e,label:n,attributes:s})=>(0,t.jsx)("li",w(O({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>i.push(e),onKeyDown:d,onClick:c},s),{className:(0,u.Z)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===e}),children:null!=n?n:e}),e)))})}function k({lazy:e,children:n,selectedValue:r}){const u=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=u.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:u.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function N(e){const n=m(e);return(0,t.jsxs)("div",{className:(0,u.Z)("tabs-container",v.tabList),children:[(0,t.jsx)(P,O({},e,n)),(0,t.jsx)(k,O({},e,n))]})}function I(e){const n=(0,x.Z)();return(0,t.jsx)(N,w(O({},e),{children:h(e.children)}),String(n))}},11151:(e,n,r)=>{r.d(n,{Zo:()=>l,ah:()=>u});var t=r(67294);const s=t.createContext({});function u(e){const n=t.useContext(s);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function l({components:e,children:n,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||a:u(e),t.createElement(s.Provider,{value:l},n)}}}]);