"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[81315],{67766:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=t(85893),o=t(11151),i=t(16212),s=t(51715),a=t(7626),c=t(94042);const l={id:"admonitions",description:"Handling admonitions/callouts in Docusaurus Markdown",slug:"/markdown-features/admonitions"},d="Admonitions",u={unversionedId:"guides/markdown-features/admonitions",id:"version-2.4.1/guides/markdown-features/admonitions",title:"Admonitions",description:"Handling admonitions/callouts in Docusaurus Markdown",source:"@site/versioned_docs/version-2.4.1/guides/markdown-features/markdown-features-admonitions.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/admonitions",permalink:"/docusaurus-docs/en/docs/markdown-features/admonitions",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-admonitions.mdx",tags:[],version:"2.4.1",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{id:"admonitions",description:"Handling admonitions/callouts in Docusaurus Markdown",slug:"/markdown-features/admonitions"},sidebar:"docs",previous:{title:"Code blocks",permalink:"/docusaurus-docs/en/docs/markdown-features/code-blocks"},next:{title:"Headings and Table of contents",permalink:"/docusaurus-docs/en/docs/markdown-features/toc"}},h={},p=[{value:"Usage with Prettier",id:"usage-with-prettier",level:2},{value:"Specifying title",id:"specifying-title",level:2},{value:"Admonitions with MDX",id:"admonitions-with-mdx",level:2},{value:"Usage in JSX",id:"usage-in-jsx",level:2},{value:"Customizing admonitions",id:"customizing-admonitions",level:2},{value:"Customizing rendering behavior",id:"customizing-rendering-behavior",level:3},{value:"Customizing parsing behavior",id:"customizing-parsing-behavior",level:3}];function m(e){const n=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",admonition:"admonition",strong:"strong",em:"em",a:"a",h2:"h2",h3:"h3",ul:"ul",li:"li"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"admonitions",children:"Admonitions"}),"\n","\n","\n",(0,r.jsx)(n.p,{children:"In addition to the basic Markdown syntax, we have a special admonitions syntax by wrapping text with a set of 3 colons, followed by a label denoting its type."}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:":::note\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::tip\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::info\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::caution\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::danger\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n"})}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Some ",(0,r.jsx)(n.strong,{children:"content"})," with ",(0,r.jsx)(n.em,{children:"Markdown"})," ",(0,r.jsx)(n.code,{children:"syntax"}),". Check ",(0,r.jsxs)(n.a,{href:"#",children:["this ",(0,r.jsx)(n.code,{children:"api"})]}),"."]})}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Some ",(0,r.jsx)(n.strong,{children:"content"})," with ",(0,r.jsx)(n.em,{children:"Markdown"})," ",(0,r.jsx)(n.code,{children:"syntax"}),". Check ",(0,r.jsxs)(n.a,{href:"#",children:["this ",(0,r.jsx)(n.code,{children:"api"})]}),"."]})}),(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Some ",(0,r.jsx)(n.strong,{children:"content"})," with ",(0,r.jsx)(n.em,{children:"Markdown"})," ",(0,r.jsx)(n.code,{children:"syntax"}),". Check ",(0,r.jsxs)(n.a,{href:"#",children:["this ",(0,r.jsx)(n.code,{children:"api"})]}),"."]})}),(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Some ",(0,r.jsx)(n.strong,{children:"content"})," with ",(0,r.jsx)(n.em,{children:"Markdown"})," ",(0,r.jsx)(n.code,{children:"syntax"}),". Check ",(0,r.jsxs)(n.a,{href:"#",children:["this ",(0,r.jsx)(n.code,{children:"api"})]}),"."]})}),(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsxs)(n.p,{children:["Some ",(0,r.jsx)(n.strong,{children:"content"})," with ",(0,r.jsx)(n.em,{children:"Markdown"})," ",(0,r.jsx)(n.code,{children:"syntax"}),". Check ",(0,r.jsxs)(n.a,{href:"#",children:["this ",(0,r.jsx)(n.code,{children:"api"})]}),"."]})})]}),"\n",(0,r.jsx)(n.h2,{id:"usage-with-prettier",children:"Usage with Prettier"}),"\n",(0,r.jsxs)(n.p,{children:["If you use ",(0,r.jsx)(n.a,{href:"https://prettier.io",children:"Prettier"})," to format your Markdown files, Prettier might auto-format your code to invalid admonition syntax. To avoid this problem, add empty lines around the starting and ending directives. This is also why the examples we show here all have empty lines around the content."]}),"\n","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:"\x3c!-- Prettier doesn't change this --\x3e\n:::note\n\nHello world\n\n:::\n\n\x3c!-- Prettier changes this --\x3e\n:::note\nHello world\n:::\n\n\x3c!-- to this --\x3e\n::: note Hello world:::\n"})}),"\n",(0,r.jsx)(n.h2,{id:"specifying-title",children:"Specifying title"}),"\n",(0,r.jsx)(n.p,{children:"You may also specify an optional title."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:":::note\xa0Your Title\n\nSome **content** with _Markdown_ `syntax`.\n\n:::\n"})}),"\n",(0,r.jsx)(i.Z,{children:(0,r.jsx)(n.admonition,{title:"Your Title",type:"note",children:(0,r.jsxs)(n.p,{children:["Some ",(0,r.jsx)(n.strong,{children:"content"})," with ",(0,r.jsx)(n.em,{children:"Markdown"})," ",(0,r.jsx)(n.code,{children:"syntax"}),"."]})})}),"\n",(0,r.jsx)(n.h2,{id:"admonitions-with-mdx",children:"Admonitions with MDX"}),"\n",(0,r.jsx)(n.p,{children:"You can use MDX inside admonitions too!"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import Tabs from \'@theme/Tabs\';\n\nimport TabItem from \'@theme/TabItem\';\n\n:::tip\n\nUse tabs in admonitions\n\n<Tabs>\n  <TabItem value="apple" label="Apple">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value="orange" label="Orange">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value="banana" label="Banana">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>\n\n:::\n'})}),"\n",(0,r.jsx)(i.Z,{children:(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"Use tabs in admonitions"}),(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(a.Z,{value:"apple",label:"Apple",children:"This is an apple \ud83c\udf4e"}),(0,r.jsx)(a.Z,{value:"orange",label:"Orange",children:"This is an orange \ud83c\udf4a"}),(0,r.jsx)(a.Z,{value:"banana",label:"Banana",children:"This is a banana \ud83c\udf4c"})]})]})}),"\n",(0,r.jsx)(n.h2,{id:"usage-in-jsx",children:"Usage in JSX"}),"\n",(0,r.jsxs)(n.p,{children:["Outside of Markdown, you can use the ",(0,r.jsx)(n.code,{children:"@theme/Admonition"})," component to get the same output."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:'title="MyReactPage.jsx"',children:"import Admonition from '@theme/Admonition';\n\nexport default function MyReactPage() {\n  return (\n    <div>\n      <Admonition type=\"info\">\n        <p>Some information</p>\n      </Admonition>\n    </div>\n  );\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The types that are accepted are the same as above: ",(0,r.jsx)(n.code,{children:"note"}),", ",(0,r.jsx)(n.code,{children:"tip"}),", ",(0,r.jsx)(n.code,{children:"danger"}),", ",(0,r.jsx)(n.code,{children:"info"}),", ",(0,r.jsx)(n.code,{children:"caution"}),". Optionally, you can specify an icon by passing a JSX element or a string, or a title:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:'title="MyReactPage.jsx"',children:'<Admonition type="tip" icon="\ud83d\udca1" title="Did you know...">\n  <p>\n    Use plugins to introduce shorter syntax for the most commonly used JSX\n    elements in your project.\n  </p>\n</Admonition>\n'})}),"\n",(0,r.jsx)(i.Z,{children:(0,r.jsx)(c.Z,{type:"tip",icon:"\ud83d\udca1",title:"Did you know...",children:(0,r.jsx)(n.p,{children:"Use plugins to introduce shorter syntax for the most commonly used JSX\nelements in your project."})})}),"\n",(0,r.jsx)(n.h2,{id:"customizing-admonitions",children:"Customizing admonitions"}),"\n",(0,r.jsxs)(n.p,{children:["There are two kinds of customizations possible with admonitions: ",(0,r.jsx)(n.strong,{children:"parsing"})," and ",(0,r.jsx)(n.strong,{children:"rendering"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"customizing-rendering-behavior",children:"Customizing rendering behavior"}),"\n",(0,r.jsxs)(n.p,{children:["You can customize how each individual admonition type is rendered through ",(0,r.jsx)(n.a,{href:"/docusaurus-docs/en/docs/swizzling",children:"swizzling"}),". You can often achieve your goal through a simple wrapper. For example, in the follow example, we swap out the icon for ",(0,r.jsx)(n.code,{children:"info"})," admonitions only."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:'title="src/theme/Admonition.js"',children:"import React from 'react';\nimport Admonition from '@theme-original/Admonition';\nimport MyIcon from '@site/static/img/info.svg';\n\nexport default function AdmonitionWrapper(props) {\n  if (props.type !== 'info') {\n    return <Admonition {...props} />;\n  }\n  return <Admonition icon={<MyIcon />} {...props} />;\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"customizing-parsing-behavior",children:"Customizing parsing behavior"}),"\n",(0,r.jsxs)(n.p,{children:["Admonitions are implemented with a ",(0,r.jsx)(n.a,{href:"/docusaurus-docs/en/docs/markdown-features/plugins",children:"Remark plugin"}),". The plugin is designed to be configurable. To customize the Remark plugin for a specific content plugin (docs, blog, pages), pass the options through the ",(0,r.jsx)(n.code,{children:"admonitions"})," key."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          admonitions: {\n            tag: ':::',\n            keywords: ['note', 'tip', 'info', 'caution', 'danger'],\n          },\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"The plugin accepts two options:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"tag"}),": The tag that encloses the admonition. Defaults to ",(0,r.jsx)(n.code,{children:":::"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"keywords"}),": An array of keywords that can be used as the type for the admonition. Note that if you override this, the default values will not be applied."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"keyword"})," will be passed as the ",(0,r.jsx)(n.code,{children:"type"})," prop of the ",(0,r.jsx)(n.code,{children:"Admonition"})," component. If you register more types than the default, you are also responsible for providing their implementation\u2014including the container's style, icon, default title text, etc. You would usually need to ",(0,r.jsx)(n.a,{href:"/docusaurus-docs/en/docs/swizzling#ejecting",children:"eject"})," the ",(0,r.jsx)(n.code,{children:"@theme/Admonition"})," component, so you could re-use the same infrastructure as the other types."]})]})}const b=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(m,e)})):m(e)}},7626:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(85893),o=(t(67294),t(86010));const i={tabItem:"tabItem_Ymn6"};function s({children:e,hidden:n,className:t}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,t),hidden:n,children:e})}},51715:(e,n,t)=>{t.d(n,{Z:()=>T});var r=t(85893),o=t(67294),i=t(86010),s=t(8241),a=t(16550),c=t(40841),l=t(2834),d=t(35715),u=t(95417);function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function m(e){var n,t;return null!==(t=null===(n=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function b(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=null!=n?n:function(e){return m(e).map((({props:{value:e,label:n,attributes:t,default:r}})=>({value:e,label:n,attributes:t,default:r})))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f({value:e,tabValues:n}){return n.some((n=>n.value===e))}function j({queryString:e=!1,groupId:n}){const t=(0,a.k6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),i=(0,l._X)(r),s=(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace(p(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){h(e,n,t[n])}))}return e}({},t.location),{search:n.toString()}))}),[r,t]);return[i,s]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=b(e),[s,a]=(0,o.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const r=null!==(t=n.find((e=>e.default)))&&void 0!==t?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[l,d]=j({queryString:t,groupId:r}),[h,p]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,r]=(0,u.Nk)(n);return[t,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:r}),m=(()=>{const e=null!=l?l:h;return f({value:e,tabValues:i})?e:null})();(0,c.Z)((()=>{m&&a(m)}),[m]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),p(e)}),[d,p,i]),tabValues:i}}var y=t(90980);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){w(e,n,t[n])}))}return e}function O(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function k({className:e,block:n,selectedValue:t,selectValue:o,tabValues:a}){const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),d=e=>{const n=e.currentTarget,r=c.indexOf(n),i=a[r].value;i!==t&&(l(n),o(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;var t;n=null!==(t=c[r])&&void 0!==t?t:c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;var r;n=null!==(r=c[t])&&void 0!==r?r:c[c.length-1];break}}null==n||n.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},e),children:a.map((({value:e,label:n,attributes:o})=>(0,r.jsx)("li",O(v({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>c.push(e),onKeyDown:u,onClick:d},o),{className:(0,i.Z)("tabs__item",x.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===e}),children:null!=n?n:e}),e)))})}function P({lazy:e,children:n,selectedValue:t}){const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===t));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function S(e){const n=g(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container",x.tabList),children:[(0,r.jsx)(k,v({},e,n)),(0,r.jsx)(P,v({},e,n))]})}function T(e){const n=(0,y.Z)();return(0,r.jsx)(S,O(v({},e),{children:m(e.children)}),String(n))}},16212:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(85893),o=(t(67294),t(86010));const i={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}function c(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function l({children:e,minHeight:n,url:t="http://localhost:3000",style:s,bodyStyle:l}){return(0,r.jsxs)("div",{className:i.browserWindow,style:c(a({},s),{minHeight:n}),children:[(0,r.jsxs)("div",{className:i.browserWindowHeader,children:[(0,r.jsxs)("div",{className:i.buttons,children:[(0,r.jsx)("span",{className:i.dot,style:{background:"#f25f58"}}),(0,r.jsx)("span",{className:i.dot,style:{background:"#fbbe3c"}}),(0,r.jsx)("span",{className:i.dot,style:{background:"#58cb42"}})]}),(0,r.jsx)("div",{className:(0,o.Z)(i.browserWindowAddressBar,"text--truncate"),children:t}),(0,r.jsx)("div",{className:i.browserWindowMenuIcon,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:i.bar}),(0,r.jsx)("span",{className:i.bar}),(0,r.jsx)("span",{className:i.bar})]})})]}),(0,r.jsx)("div",{className:i.browserWindowBody,style:l,children:e})]})}},26669:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(85893),o=(t(67294),t(51014)),i=t(24805);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var a,c;const l=(a=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}({},o.Z),c=null!=(c={"my-custom-admonition":function(e){return(0,r.jsxs)("div",{style:{border:"solid red",padding:10},children:[(0,r.jsx)(i.Z,{as:"h5",style:{color:"blue",fontSize:30},children:e.title}),(0,r.jsx)("div",{children:e.children})]})}})?c:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(c)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(c,e))})),a)},11151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>i});var r=t(67294);const o=r.createContext({});function i(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||s:i(e),r.createElement(o.Provider,{value:a},n)}}}]);