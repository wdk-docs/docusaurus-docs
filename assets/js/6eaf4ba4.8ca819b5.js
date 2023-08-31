"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[18742],{68837:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=t(85893),s=t(11151),a=t(51715),l=t(7626);const i={sidebar_position:1,slug:"/api/misc/@docusaurus/eslint-plugin"},o="\ud83d\udce6 eslint-plugin",u={unversionedId:"api/misc/eslint-plugin/README",id:"version-2.1.0/api/misc/eslint-plugin/README",title:"\ud83d\udce6 eslint-plugin",description:"ESLint is a tool that statically analyzes your code and reports problems or suggests best practices through editor hints and command line. Docusaurus provides an ESLint plugin to enforce best Docusaurus practices.",source:"@site/versioned_docs/version-2.1.0/api/misc/eslint-plugin/README.mdx",sourceDirName:"api/misc/eslint-plugin",slug:"/api/misc/@docusaurus/eslint-plugin",permalink:"/docusaurus-docs/docs/2.1.0/api/misc/@docusaurus/eslint-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/misc/eslint-plugin/README.mdx",tags:[],version:"2.1.0",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/api/misc/@docusaurus/eslint-plugin"},sidebar:"api",previous:{title:"\ud83d\udce6 create-docusaurus",permalink:"/docusaurus-docs/docs/2.1.0/api/misc/create-docusaurus"},next:{title:"no-untranslated-text",permalink:"/docusaurus-docs/docs/2.1.0/api/misc/@docusaurus/eslint-plugin/no-untranslated-text"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Supported Configs",id:"supported-configs",level:2},{value:"Supported Rules",id:"supported-rules",level:2},{value:"Example configuration",id:"example-configuration",level:2}];function p(e){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",strong:"strong",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-eslint-plugin",children:"\ud83d\udce6 eslint-plugin"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://eslint.org/",children:"ESLint"})," is a tool that statically analyzes your code and reports problems or suggests best practices through editor hints and command line. Docusaurus provides an ESLint plugin to enforce best Docusaurus practices."]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(l.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev @docusaurus/eslint-plugin\n"})})}),(0,r.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add --dev @docusaurus/eslint-plugin\n"})})}),(0,r.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev @docusaurus/eslint-plugin\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["Add ",(0,r.jsx)(n.code,{children:"@docusaurus"})," to the plugins section of your ",(0,r.jsx)(n.code,{children:".eslintrc"})," configuration file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title=".eslintrc"',children:'{\n  "plugins": ["@docusaurus"]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Then, you can extend one of the configs (e.g. the ",(0,r.jsx)(n.code,{children:"recommended"})," config):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title=".eslintrc"',children:'{\n  "extends": ["plugin:@docusaurus/recommended"]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Each config contains a set of rules. For more fine-grained control, you can also configure the rules you want to use directly:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title=".eslintrc"',children:'{\n  "rules": {\n    "@docusaurus/string-literal-i18n-messages": "error",\n    "@docusaurus/no-untranslated-text": "warn"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"supported-configs",children:"Supported Configs"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Recommended: recommended rule set for most Docusaurus sites that should be extended from."}),"\n",(0,r.jsxs)(n.li,{children:["All: ",(0,r.jsx)(n.strong,{children:"all"})," rules enabled. This will change between minor versions, so you should not use this if you want to avoid unexpected breaking changes."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"supported-rules",children:"Supported Rules"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docusaurus-docs/docs/2.1.0/api/misc/@docusaurus/eslint-plugin/no-untranslated-text",children:(0,r.jsx)(n.code,{children:"@docusaurus/no-untranslated-text"})})}),(0,r.jsx)(n.td,{children:"Enforce text labels in JSX to be wrapped by translate calls"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docusaurus-docs/docs/2.1.0/api/misc/@docusaurus/eslint-plugin/string-literal-i18n-messages",children:(0,r.jsx)(n.code,{children:"@docusaurus/string-literal-i18n-messages"})})}),(0,r.jsx)(n.td,{children:"Enforce translate APIs to be called on plain text labels"}),(0,r.jsx)(n.td,{children:"\u2705"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"\u2705 = recommended"}),"\n",(0,r.jsx)(n.h2,{id:"example-configuration",children:"Example configuration"}),"\n",(0,r.jsx)(n.p,{children:"Here's an example configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title=".eslintrc.js"',children:"module.exports = {\n  extends: ['plugin:@docusaurus/recommended'],\n  plugins: ['@docusaurus'],\n  rules: {\n    '@docusaurus/no-untranslated-text': [\n      'warn',\n      {ignoredStrings: ['\xb7', '\u2014', '\xd7']},\n    ],\n  },\n};\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(p,e)})):p(e)}},7626:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(85893),s=(t(67294),t(86010));const a={tabItem:"tabItem_Ymn6"};function l({children:e,hidden:n,className:t}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a.tabItem,t),hidden:n,children:e})}},51715:(e,n,t)=>{t.d(n,{Z:()=>D});var r=t(85893),s=t(67294),a=t(86010),l=t(8241),i=t(16550),o=t(40841),u=t(2834),c=t(35715),d=t(95417);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function b(e){var n,t;return null!==(t=null===(n=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function g(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return b(e).map((({props:{value:e,label:n,attributes:t,default:r}})=>({value:e,label:n,attributes:t,default:r})))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f({value:e,tabValues:n}){return n.some((n=>n.value===e))}function m({queryString:e=!1,groupId:n}){const t=(0,i.k6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),a=(0,u._X)(r),l=(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace(h(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){p(e,n,t[n])}))}return e}({},t.location),{search:n.toString()}))}),[r,t]);return[a,l]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=g(e),[l,i]=(0,s.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const r=null!==(t=n.find((e=>e.default)))&&void 0!==t?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[u,c]=m({queryString:t,groupId:r}),[p,h]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,d.Nk)(n);return[t,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:r}),b=(()=>{const e=null!=u?u:p;return f({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,a]),tabValues:a}}var x=t(90980);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){y(e,n,t[n])}))}return e}function w(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function E({className:e,block:n,selectedValue:t,selectValue:s,tabValues:i}){const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const n=e.currentTarget,r=o.indexOf(n),a=i[r].value;a!==t&&(u(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;var t;n=null!==(t=o[r])&&void 0!==t?t:o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;var r;n=null!==(r=o[t])&&void 0!==r?r:o[o.length-1];break}}null==n||n.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},e),children:i.map((({value:e,label:n,attributes:s})=>(0,r.jsx)("li",w(O({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>o.push(e),onKeyDown:d,onClick:c},s),{className:(0,a.Z)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===e}),children:null!=n?n:e}),e)))})}function P({lazy:e,children:n,selectedValue:t}){const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function S(e){const n=j(e);return(0,r.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,r.jsx)(E,O({},e,n)),(0,r.jsx)(P,O({},e,n))]})}function D(e){const n=(0,x.Z)();return(0,r.jsx)(S,w(O({},e),{children:b(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>a});var r=t(67294);const s=r.createContext({});function a(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||l:a(e),r.createElement(s.Provider,{value:i},n)}}}]);