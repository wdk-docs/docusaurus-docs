"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[12816],{97366:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var r=t(85893),s=t(11151),i=t(51715),c=t(7626),l=t(91545);const o={sidebar_position:4,slug:"/api/plugins/@docusaurus/plugin-client-redirects"},a="\ud83d\udce6 plugin-client-redirects",u={unversionedId:"api/plugins/plugin-client-redirects",id:"api/plugins/plugin-client-redirects",title:"\ud83d\udce6 plugin-client-redirects",description:"Docusaurus \u63d2\u4ef6\u751f\u6210\u5ba2\u6237\u7aef\u91cd\u5b9a\u5411\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/plugins/plugin-client-redirects.mdx",sourceDirName:"api/plugins",slug:"/api/plugins/@docusaurus/plugin-client-redirects",permalink:"/docusaurus-docs/docs/next/api/plugins/@docusaurus/plugin-client-redirects",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugins/plugin-client-redirects.mdx",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/api/plugins/@docusaurus/plugin-client-redirects"},sidebar:"api",previous:{title:"\ud83d\udce6 plugin-content-pages",permalink:"/docusaurus-docs/docs/next/api/plugins/@docusaurus/plugin-content-pages"},next:{title:"\ud83d\udce6 plugin-debug",permalink:"/docusaurus-docs/docs/next/api/plugins/@docusaurus/plugin-debug"}},d={},h=[{value:"\u5b89\u88c5",id:"installation",level:2},{value:"\u914d\u7f6e",id:"configuration",level:2},{value:"Types",id:"types",level:3},{value:"<code>RedirectRule</code>",id:"RedirectRule",level:4},{value:"<code>CreateRedirectsFn</code>",id:"CreateRedirectsFn",level:4},{value:"\u793a\u4f8b\u914d\u7f6e",id:"ex-config",level:3}];function p(e){const n=Object.assign({h1:"h1",p:"p",strong:"strong",admonition:"admonition",h2:"h2",pre:"pre",code:"code",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",h3:"h3",h4:"h4",em:"em"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-plugin-client-redirects",children:"\ud83d\udce6 plugin-client-redirects"}),"\n","\n","\n",(0,r.jsxs)(n.p,{children:["Docusaurus \u63d2\u4ef6\u751f\u6210",(0,r.jsx)(n.strong,{children:"\u5ba2\u6237\u7aef\u91cd\u5b9a\u5411"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u4e2a\u63d2\u4ef6\u5c06\u7f16\u5199\u989d\u5916\u7684 HTML \u9875\u9762\u5230\u60a8\u7684\u9759\u6001\u7ad9\u70b9\uff0c\u5c06\u7528\u6237\u91cd\u5b9a\u5411\u5230\u60a8\u73b0\u6709\u7684 Docusaurus \u9875\u9762\u4e0e JavaScript\u3002"}),"\n",(0,r.jsx)(n.admonition,{title:"\u53ea\u751f\u4ea7",type:"caution",children:(0,r.jsxs)(n.p,{children:["\u8fd9\u4e2a\u63d2\u4ef6\u5728\u5f00\u53d1\u4e2d\u603b\u662f\u4e0d\u6d3b\u8dc3\u7684\uff0c",(0,r.jsx)(n.strong,{children:"\u53ea\u6709\u5728\u751f\u4ea7\u4e2d\u624d\u6d3b\u8dc3"}),"\uff0c\u56e0\u4e3a\u5b83\u5728\u6784\u5efa\u8f93\u51fa\u4e2d\u5de5\u4f5c\u3002"]})}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsx)(n.p,{children:"\u6700\u597d\u5c3d\u53ef\u80fd\u4f7f\u7528\u670d\u52a1\u5668\u7aef\u91cd\u5b9a\u5411\u3002"}),(0,r.jsx)(n.p,{children:"\u5728\u4f7f\u7528\u8fd9\u4e2a\u63d2\u4ef6\u4e4b\u524d\uff0c\u4f60\u5e94\u8be5\u770b\u770b\u4f60\u7684\u4e3b\u673a\u63d0\u4f9b\u5546\u662f\u5426\u63d0\u4f9b\u8fd9\u4e2a\u529f\u80fd\u3002"})]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"\u5b89\u88c5"}),"\n",(0,r.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(c.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/plugin-client-redirects\n"})})}),(0,r.jsx)(c.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/plugin-client-redirects\n"})})}),(0,r.jsx)(c.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/plugin-client-redirects\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"\u914d\u7f6e"}),"\n",(0,r.jsx)(n.p,{children:"\u63a5\u53d7\u5b57\u6bb5:"}),"\n",(0,r.jsx)(l.Z,{children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u9009\u9879"}),(0,r.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(n.th,{children:"\u9ed8\u8ba4\u7684"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"fromExtensions"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string[]"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"[]"})}),(0,r.jsx)(n.td,{children:"\u91cd\u5b9a\u5411\u540e\u8981\u4ece\u8def\u7531\u4e2d\u5220\u9664\u7684\u6269\u5c55\u540d\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"toExtensions"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string[]"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"[]"})}),(0,r.jsx)(n.td,{children:"\u91cd\u5b9a\u5411\u540e\u8981\u9644\u52a0\u5230\u8def\u7531\u7684\u6269\u5c55\u540d\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"redirects"})}),(0,r.jsx)(n.td,{children:(0,r.jsxs)("code",{children:[(0,r.jsx)("a",{href:"#RedirectRule",children:"RedirectRule"}),"[]"]})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"[]"})}),(0,r.jsx)(n.td,{children:"\u91cd\u5b9a\u5411\u89c4\u5219\u5217\u8868\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"createRedirects"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"#CreateRedirectsFn",children:"CreateRedirectsFn"})})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"undefined"})}),(0,r.jsx)(n.td,{children:"\u521b\u5efa\u91cd\u5b9a\u5411\u89c4\u5219\u7684\u56de\u8c03\u3002Docusaurus \u9488\u5bf9\u5b83\u521b\u5efa\u7684\u6bcf\u4e2a\u8def\u5f84\u67e5\u8be2\u8fd9\u4e2a\u56de\u8c03\uff0c\u5e76\u4f7f\u7528\u5b83\u7684\u8fd4\u56de\u503c\u8f93\u51fa\u66f4\u591a\u8def\u5f84\u3002"})]})]})]})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u8fd9\u4e2a\u63d2\u4ef6\u8fd8\u5c06\u8bfb\u53d6",(0,r.jsx)(n.a,{href:"/docusaurus-docs/docs/next/api/docusaurus-config#onDuplicateRoutes",children:(0,r.jsx)(n.code,{children:"siteConfig.onDuplicateRoutes"})}),"\u914d\u7f6e\uff0c\u4ee5\u5728\u591a\u4e2a\u6587\u4ef6\u5c06\u88ab\u53d1\u9001\u5230\u540c\u4e00\u4f4d\u7f6e\u65f6\u8c03\u6574\u5176\u65e5\u5fd7\u7ea7\u522b\u3002"]})}),"\n",(0,r.jsx)(n.h3,{id:"types",children:"Types"}),"\n",(0,r.jsx)(n.h4,{id:"RedirectRule",children:(0,r.jsx)(n.code,{children:"RedirectRule"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"type RedirectRule = {\n  to: string;\n  from: string | string[];\n};\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"from"}),"\u548c",(0,r.jsx)(n.code,{children:"to"}),'\u7684\u6982\u5ff5\u662f\u8fd9\u4e2a\u63d2\u4ef6\u7684\u6838\u5fc3\u3002\n"From"\u610f\u5473\u7740\u4f60\u60f3\u8981',(0,r.jsx)(n.em,{children:"\u521b\u5efa"}),'\u7684\u8def\u5f84\uff0c\u5373\u4e00\u4e2a\u989d\u5916\u7684 HTML \u6587\u4ef6\u5c06\u88ab\u5199\u5165;\n"to"\u8868\u793a\u60f3\u8981\u91cd\u5b9a\u5411',(0,r.jsx)(n.em,{children:"\u7684"}),"\u8def\u5f84\uff0c\u901a\u5e38\u662f Docusaurus \u5df2\u7ecf\u77e5\u9053\u7684\u8def\u5f84\u3002"]}),(0,r.jsxs)(n.p,{children:["\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u540c\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"to"}),"\u53ef\u4ee5\u6709\u591a\u4e2a",(0,r.jsx)(n.code,{children:"from"}),":\u6211\u4eec\u5c06\u521b\u5efa\u591a\u4e2a HTML \u6587\u4ef6\uff0c\u5b83\u4eec\u90fd\u91cd\u5b9a\u5411\u5230\u76f8\u540c\u7684\u76ee\u7684\u5730\u3002\n\u53e6\u4e00\u65b9\u9762\uff0c\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"from"}),"\u6c38\u8fdc\u4e0d\u80fd\u6709\u591a\u4e2a",(0,r.jsx)(n.code,{children:"to"}),":\u7f16\u5199\u7684 HTML \u6587\u4ef6\u9700\u8981\u6709\u4e00\u4e2a\u786e\u5b9a\u7684\u76ee\u7684\u5730\u3002"]})]}),"\n",(0,r.jsx)(n.h4,{id:"CreateRedirectsFn",children:(0,r.jsx)(n.code,{children:"CreateRedirectsFn"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'// The parameter `path` is a route that Docusaurus has already created. It can\n// be seen as the "to", and your return value is the "from". Returning a falsy\n// value will not create any redirect pages for this particular path.\ntype CreateRedirectsFn = (path: string) => string[] | string | null | undefined;\n'})}),"\n",(0,r.jsx)(n.h3,{id:"ex-config",children:"\u793a\u4f8b\u914d\u7f6e"}),"\n",(0,r.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\u914d\u7f6e:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:'module.exports = {\n  plugins: [\n    [\n      "@docusaurus/plugin-client-redirects",\n      // highlight-start\n      {\n        fromExtensions: ["html", "htm"], // /myPage.html -> /myPage\n        toExtensions: ["exe", "zip"], // /myAsset -> /myAsset.zip (if latter exists)\n        redirects: [\n          // /docs/oldDoc -> /docs/newDoc\n          {\n            to: "/docs/newDoc",\n            from: "/docs/oldDoc",\n          },\n          // Redirect from multiple old paths to the new path\n          {\n            to: "/docs/newDoc2",\n            from: ["/docs/oldDocFrom2019", "/docs/legacyDocFrom2016"],\n          },\n        ],\n        createRedirects(existingPath) {\n          if (existingPath.includes("/community")) {\n            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X\n            return [\n              existingPath.replace("/community", "/docs/team"),\n              existingPath.replace("/community", "/docs/support"),\n            ];\n          }\n          return undefined; // Return a falsy value: no redirect created\n        },\n      },\n      // highlight-end\n    ],\n  ],\n};\n'})})]})}const f=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(p,e)})):p(e)}},7626:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(85893),s=(t(67294),t(86010));const i={tabItem:"tabItem_Ymn6"};function c({children:e,hidden:n,className:t}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(i.tabItem,t),hidden:n,children:e})}},51715:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(85893),s=t(67294),i=t(86010),c=t(8241),l=t(16550),o=t(40841),a=t(2834),u=t(35715),d=t(95417);function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function f(e){var n,t;return null!==(t=null===(n=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function j(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return f(e).map((({props:{value:e,label:n,attributes:t,default:r}})=>({value:e,label:n,attributes:t,default:r})))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g({value:e,tabValues:n}){return n.some((n=>n.value===e))}function m({queryString:e=!1,groupId:n}){const t=(0,l.k6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),i=(0,a._X)(r),c=(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace(p(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){h(e,n,t[n])}))}return e}({},t.location),{search:n.toString()}))}),[r,t]);return[i,c]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=j(e),[c,l]=(0,s.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const r=null!==(t=n.find((e=>e.default)))&&void 0!==t?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[a,u]=m({queryString:t,groupId:r}),[h,p]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,d.Nk)(n);return[t,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:r}),f=(()=>{const e=null!=a?a:h;return g({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:c,selectValue:(0,s.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),p(e)}),[u,p,i]),tabValues:i}}var x=t(90980);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){v(e,n,t[n])}))}return e}function w(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function P({className:e,block:n,selectedValue:t,selectValue:s,tabValues:l}){const o=[],{blockElementScrollPositionUntilNextRender:a}=(0,c.o5)(),u=e=>{const n=e.currentTarget,r=o.indexOf(n),i=l[r].value;i!==t&&(a(n),s(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;var t;n=null!==(t=o[r])&&void 0!==t?t:o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;var r;n=null!==(r=o[t])&&void 0!==r?r:o[o.length-1];break}}null==n||n.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},e),children:l.map((({value:e,label:n,attributes:s})=>(0,r.jsx)("li",w(O({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>o.push(e),onKeyDown:d,onClick:u},s),{className:(0,i.Z)("tabs__item",y.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===e}),children:null!=n?n:e}),e)))})}function D({lazy:e,children:n,selectedValue:t}){const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function R(e){const n=b(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container",y.tabList),children:[(0,r.jsx)(P,O({},e,n)),(0,r.jsx)(D,O({},e,n))]})}function k(e){const n=(0,x.Z)();return(0,r.jsx)(R,w(O({},e),{children:f(e.children)}),String(n))}},91545:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(85893),s=t(67294),i=t(16550);const c={apiTable:"apiTable_e8hp"};function l({name:e,children:n},t){const c=function(e){let n=e;for(;(0,s.isValidElement)(n);)[n]=s.Children.toArray(n.props.children);return n}(n),l=e?`${e}-${c}`:c,o=`#${l}`,a=(0,i.k6)();return(0,r.jsx)("tr",{id:l,tabIndex:0,ref:a.location.hash===o?t:void 0,onClick:e=>{"A"===e.target.tagName.toUpperCase()||a.push(o)},onKeyDown:e=>{"Enter"===e.key&&a.push(o)},children:n.props.children})}const o=s.forwardRef(l);function a({children:e,name:n}){const[t,i]=s.Children.toArray(e.props.children),l=(0,s.useRef)(null);(0,s.useEffect)((()=>{var e;null===(e=l.current)||void 0===e||e.focus()}),[l]);const a=s.Children.map(i.props.children,(e=>(0,r.jsx)(o,{name:n,ref:l,children:e})));return(0,r.jsxs)("table",{className:c.apiTable,children:[t,(0,r.jsx)("tbody",{children:a})]})}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>i});var r=t(67294);const s=r.createContext({});function i(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||c:i(e),r.createElement(s.Provider,{value:l},n)}}}]);