"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[66143],{67276:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>j,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var o=t(85893),i=t(11151),r=t(16212),s=t(51715),a=t(7626),c=t(94042);const l={id:"admonitions",description:"Handling admonitions/callouts in Docusaurus Markdown",slug:"/markdown-features/admonitions"},d="Admonitions",u={unversionedId:"guides/markdown-features/admonitions",id:"version-3.0.0-alpha.0/guides/markdown-features/admonitions",title:"Admonitions",description:"Handling admonitions/callouts in Docusaurus Markdown",source:"@site/versioned_docs/version-3.0.0-alpha.0/guides/markdown-features/markdown-features-admonitions.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/admonitions",permalink:"/docusaurus-docs/docs/3.0.0-alpha.0/markdown-features/admonitions",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"3.0.0-alpha.0",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",frontMatter:{id:"admonitions",description:"Handling admonitions/callouts in Docusaurus Markdown",slug:"/markdown-features/admonitions"},sidebar:"docs",previous:{title:"Code blocks",permalink:"/docusaurus-docs/docs/3.0.0-alpha.0/markdown-features/code-blocks"},next:{title:"Headings and Table of contents",permalink:"/docusaurus-docs/docs/3.0.0-alpha.0/markdown-features/toc"}},h={},m=[{value:"Usage with Prettier",id:"usage-with-prettier",level:2},{value:"Specifying title",id:"specifying-title",level:2},{value:"Nested admonitions",id:"nested-admonitions",level:2},{value:"Admonitions with MDX",id:"admonitions-with-mdx",level:2},{value:"Usage in JSX",id:"usage-in-jsx",level:2},{value:"Customizing admonitions",id:"customizing-admonitions",level:2},{value:"Customizing rendering behavior",id:"customizing-rendering-behavior",level:3},{value:"Customizing parsing behavior",id:"customizing-parsing-behavior",level:3},{value:"Custom admonition type components",id:"custom-admonition-type-components",level:3}];function p(e){const n=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",admonition:"admonition",strong:"strong",em:"em",a:"a",h2:"h2",mdxAdmonitionTitle:"mdxAdmonitionTitle",h3:"h3",ul:"ul",li:"li"},(0,i.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"admonitions",children:"Admonitions"}),"\n","\n","\n",(0,o.jsx)(n.p,{children:"In addition to the basic Markdown syntax, we have a special admonitions syntax by wrapping text with a set of 3 colons, followed by a label denoting its type."}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:":::note\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::tip\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::info\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::caution\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::danger\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n"})}),"\n",(0,o.jsxs)(r.Z,{children:[(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Some ",(0,o.jsx)(n.strong,{children:"content"})," with ",(0,o.jsx)(n.em,{children:"Markdown"})," ",(0,o.jsx)(n.code,{children:"syntax"}),". Check ",(0,o.jsxs)(n.a,{href:"#",children:["this ",(0,o.jsx)(n.code,{children:"api"})]}),"."]})}),(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Some ",(0,o.jsx)(n.strong,{children:"content"})," with ",(0,o.jsx)(n.em,{children:"Markdown"})," ",(0,o.jsx)(n.code,{children:"syntax"}),". Check ",(0,o.jsxs)(n.a,{href:"#",children:["this ",(0,o.jsx)(n.code,{children:"api"})]}),"."]})}),(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Some ",(0,o.jsx)(n.strong,{children:"content"})," with ",(0,o.jsx)(n.em,{children:"Markdown"})," ",(0,o.jsx)(n.code,{children:"syntax"}),". Check ",(0,o.jsxs)(n.a,{href:"#",children:["this ",(0,o.jsx)(n.code,{children:"api"})]}),"."]})}),(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["Some ",(0,o.jsx)(n.strong,{children:"content"})," with ",(0,o.jsx)(n.em,{children:"Markdown"})," ",(0,o.jsx)(n.code,{children:"syntax"}),". Check ",(0,o.jsxs)(n.a,{href:"#",children:["this ",(0,o.jsx)(n.code,{children:"api"})]}),"."]})}),(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsxs)(n.p,{children:["Some ",(0,o.jsx)(n.strong,{children:"content"})," with ",(0,o.jsx)(n.em,{children:"Markdown"})," ",(0,o.jsx)(n.code,{children:"syntax"}),". Check ",(0,o.jsxs)(n.a,{href:"#",children:["this ",(0,o.jsx)(n.code,{children:"api"})]}),"."]})})]}),"\n",(0,o.jsx)(n.h2,{id:"usage-with-prettier",children:"Usage with Prettier"}),"\n",(0,o.jsxs)(n.p,{children:["If you use ",(0,o.jsx)(n.a,{href:"https://prettier.io",children:"Prettier"})," to format your Markdown files, Prettier might auto-format your code to invalid admonition syntax. To avoid this problem, add empty lines around the starting and ending directives. This is also why the examples we show here all have empty lines around the content."]}),"\n","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:"\x3c!-- Prettier doesn't change this --\x3e\n:::note\n\nHello world\n\n:::\n\n\x3c!-- Prettier changes this --\x3e\n:::note\nHello world\n:::\n\n\x3c!-- to this --\x3e\n::: note Hello world:::\n"})}),"\n",(0,o.jsx)(n.h2,{id:"specifying-title",children:"Specifying title"}),"\n",(0,o.jsx)(n.p,{children:"You may also specify an optional title."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:":::note[Your Title **with** some _Markdown_ `syntax`!]\n\nSome **content** with some _Markdown_ `syntax`.\n\n:::\n"})}),"\n",(0,o.jsx)(r.Z,{children:(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsxs)(n.mdxAdmonitionTitle,{children:["Your Title ",(0,o.jsx)(n.strong,{children:"with"})," some ",(0,o.jsx)(n.em,{children:"Markdown"})," ",(0,o.jsx)(n.code,{children:"syntax"}),"!"]}),(0,o.jsxs)(n.p,{children:["Some ",(0,o.jsx)(n.strong,{children:"content"})," with some ",(0,o.jsx)(n.em,{children:"Markdown"})," ",(0,o.jsx)(n.code,{children:"syntax"}),"."]})]})}),"\n",(0,o.jsx)(n.h2,{id:"nested-admonitions",children:"Nested admonitions"}),"\n",(0,o.jsxs)(n.p,{children:["Admonitions can be nested. Use more colons ",(0,o.jsx)(n.code,{children:":"})," for each parent admonition level."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:":::::info[Parent]\n\nParent content\n\n::::danger[Child]\n\nChild content\n\n:::tip[Deep Child]\n\nDeep child content\n\n:::\n\n::::\n\n:::::\n"})}),"\n",(0,o.jsx)(r.Z,{children:(0,o.jsxs)(n.admonition,{title:"Parent",type:"info",children:[(0,o.jsx)(n.p,{children:"Parent content"}),(0,o.jsxs)(n.admonition,{title:"Child",type:"danger",children:[(0,o.jsx)(n.p,{children:"Child content"}),(0,o.jsx)(n.admonition,{title:"Deep Child",type:"tip",children:(0,o.jsx)(n.p,{children:"Deep child content"})})]})]})}),"\n",(0,o.jsx)(n.h2,{id:"admonitions-with-mdx",children:"Admonitions with MDX"}),"\n",(0,o.jsx)(n.p,{children:"You can use MDX inside admonitions too!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'import Tabs from \'@theme/Tabs\';\n\nimport TabItem from \'@theme/TabItem\';\n\n:::tip[Use tabs in admonitions]\n\n<Tabs>\n  <TabItem value="apple" label="Apple">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value="orange" label="Orange">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value="banana" label="Banana">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>\n\n:::\n'})}),"\n",(0,o.jsx)(r.Z,{children:(0,o.jsx)(n.admonition,{title:"Use tabs in admonitions",type:"tip",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(a.Z,{value:"apple",label:"Apple",children:"This is an apple \ud83c\udf4e"}),(0,o.jsx)(a.Z,{value:"orange",label:"Orange",children:"This is an orange \ud83c\udf4a"}),(0,o.jsx)(a.Z,{value:"banana",label:"Banana",children:"This is a banana \ud83c\udf4c"})]})})}),"\n",(0,o.jsx)(n.h2,{id:"usage-in-jsx",children:"Usage in JSX"}),"\n",(0,o.jsxs)(n.p,{children:["Outside of Markdown, you can use the ",(0,o.jsx)(n.code,{children:"@theme/Admonition"})," component to get the same output."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="MyReactPage.jsx"',children:"import Admonition from '@theme/Admonition';\n\nexport default function MyReactPage() {\n  return (\n    <div>\n      <Admonition type=\"info\">\n        <p>Some information</p>\n      </Admonition>\n    </div>\n  );\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The types that are accepted are the same as above: ",(0,o.jsx)(n.code,{children:"note"}),", ",(0,o.jsx)(n.code,{children:"tip"}),", ",(0,o.jsx)(n.code,{children:"danger"}),", ",(0,o.jsx)(n.code,{children:"info"}),", ",(0,o.jsx)(n.code,{children:"caution"}),". Optionally, you can specify an icon by passing a JSX element or a string, or a title:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="MyReactPage.jsx"',children:'<Admonition type="tip" icon="\ud83d\udca1" title="Did you know...">\n  Use plugins to introduce shorter syntax for the most commonly used JSX\n  elements in your project.\n</Admonition>\n'})}),"\n",(0,o.jsx)(r.Z,{children:(0,o.jsx)(c.Z,{type:"tip",icon:"\ud83d\udca1",title:"Did you know...",children:(0,o.jsx)(n.p,{children:"Use plugins to introduce shorter syntax for the most commonly used JSX\nelements in your project."})})}),"\n",(0,o.jsx)(n.h2,{id:"customizing-admonitions",children:"Customizing admonitions"}),"\n",(0,o.jsxs)(n.p,{children:["There are two kinds of customizations possible with admonitions: ",(0,o.jsx)(n.strong,{children:"parsing"})," and ",(0,o.jsx)(n.strong,{children:"rendering"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"customizing-rendering-behavior",children:"Customizing rendering behavior"}),"\n",(0,o.jsxs)(n.p,{children:["You can customize how each individual admonition type is rendered through ",(0,o.jsx)(n.a,{href:"/docusaurus-docs/docs/3.0.0-alpha.0/swizzling",children:"swizzling"}),". You can often achieve your goal through a simple wrapper. For example, in the follow example, we swap out the icon for ",(0,o.jsx)(n.code,{children:"info"})," admonitions only."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="src/theme/Admonition.js"',children:"import React from 'react';\nimport Admonition from '@theme-original/Admonition';\nimport MyCustomNoteIcon from '@site/static/img/info.svg';\n\nexport default function AdmonitionWrapper(props) {\n  if (props.type !== 'info') {\n    return <Admonition title=\"My Custom Admonition Title\" {...props} />;\n  }\n  return <Admonition icon={<MyCustomNoteIcon />} {...props} />;\n}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"customizing-parsing-behavior",children:"Customizing parsing behavior"}),"\n",(0,o.jsxs)(n.p,{children:["Admonitions are implemented with a ",(0,o.jsx)(n.a,{href:"/docusaurus-docs/docs/3.0.0-alpha.0/markdown-features/plugins",children:"Remark plugin"}),". The plugin is designed to be configurable. To customize the Remark plugin for a specific content plugin (docs, blog, pages), pass the options through the ",(0,o.jsx)(n.code,{children:"admonitions"})," key."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          admonitions: {\n            keywords: ['note', 'tip', 'info', 'caution', 'danger'],\n            extendDefaults: true,\n          },\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"The plugin accepts the following options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"keywords"}),": An array of keywords that can be used as the type for the admonition."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"extendDefaults"}),": Should the provided options (such as ",(0,o.jsx)(n.code,{children:"keywords"}),") be merged into the existing defaults. Defaults to ",(0,o.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"keyword"})," will be passed as the ",(0,o.jsx)(n.code,{children:"type"})," prop of the ",(0,o.jsx)(n.code,{children:"Admonition"})," component."]}),"\n",(0,o.jsx)(n.h3,{id:"custom-admonition-type-components",children:"Custom admonition type components"}),"\n",(0,o.jsxs)(n.p,{children:["By default, the theme doesn't know what do to with custom admonition keywords such as ",(0,o.jsx)(n.code,{children:":::my-custom-admonition"}),". It is your responsibility to map each admonition keyword to a React component so that the theme knows how to render them."]}),"\n",(0,o.jsxs)(n.p,{children:["If you registered a new admonition type ",(0,o.jsx)(n.code,{children:"my-custom-admonition"})," via the following config:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  // ...\n  presets: [\n    [\n      'classic',\n      {\n        // ...\n        docs: {\n          admonitions: {\n            keywords: ['my-custom-admonition'],\n            extendDefaults: true,\n          },\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can provide the corresponding React component for ",(0,o.jsx)(n.code,{children:":::my-custom-admonition"})," by creating the following file (unfortunately, since it's not a React component file, it's not swizzlable):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="src/theme/Admonition/Types.js"',children:"import React from 'react';\nimport DefaultAdmonitionTypes from '@theme-original/Admonition/Types';\n\nfunction MyCustomAdmonition(props) {\n  return (\n    <div style={{border: 'solid red', padding: 10}}>\n      <h5 style={{color: 'blue', fontSize: 30}}>{props.title}</h5>\n      <div>{props.children}</div>\n    </div>\n  );\n}\n\nconst AdmonitionTypes = {\n  ...DefaultAdmonitionTypes,\n\n  // Add all your custom admonition types here...\n  // You can also override the default ones if you want\n  'my-custom-admonition': MyCustomAdmonition,\n};\n\nexport default AdmonitionTypes;\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now you can use your new admonition keyword in a Markdown file, and it will be parsed and rendered with your custom logic:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-md",children:":::my-custom-admonition[My Title]\n\nIt works!\n\n:::\n"})}),"\n",(0,o.jsx)(r.Z,{children:(0,o.jsx)(n.admonition,{title:"My Title",type:"my-custom-admonition",children:(0,o.jsx)(n.p,{children:"It works!"})})})]})}const j=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(p,e)})):p(e)}},7626:(e,n,t)=>{t.d(n,{Z:()=>s});var o=t(85893),i=(t(67294),t(86010));const r={tabItem:"tabItem_Ymn6"};function s({children:e,hidden:n,className:t}){return(0,o.jsx)("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,t),hidden:n,children:e})}},51715:(e,n,t)=>{t.d(n,{Z:()=>S});var o=t(85893),i=t(67294),r=t(86010),s=t(8241),a=t(16550),c=t(40841),l=t(2834),d=t(35715),u=t(95417);function h(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function p(e){var n,t;return null!==(t=null===(n=i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function j(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=null!=n?n:function(e){return p(e).map((({props:{value:e,label:n,attributes:t,default:o}})=>({value:e,label:n,attributes:t,default:o})))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f({value:e,tabValues:n}){return n.some((n=>n.value===e))}function b({queryString:e=!1,groupId:n}){const t=(0,a.k6)(),o=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),r=(0,l._X)(o),s=(0,i.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace(m(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){h(e,n,t[n])}))}return e}({},t.location),{search:n.toString()}))}),[o,t]);return[r,s]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=j(e),[s,a]=(0,i.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const o=null!==(t=n.find((e=>e.default)))&&void 0!==t?t:n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:r}))),[l,d]=b({queryString:t,groupId:o}),[h,m]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,o]=(0,u.Nk)(n);return[t,(0,i.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:o}),p=(()=>{const e=null!=l?l:h;return f({value:e,tabValues:r})?e:null})();(0,c.Z)((()=>{p&&a(p)}),[p]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var g=t(90980);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){w(e,n,t[n])}))}return e}function O(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function k({className:e,block:n,selectedValue:t,selectValue:i,tabValues:a}){const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),d=e=>{const n=e.currentTarget,o=c.indexOf(n),r=a[o].value;r!==t&&(l(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=c.indexOf(e.currentTarget)+1;var t;n=null!==(t=c[o])&&void 0!==t?t:c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;var o;n=null!==(o=c[t])&&void 0!==o?o:c[c.length-1];break}}null==n||n.focus()};return(0,o.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},e),children:a.map((({value:e,label:n,attributes:i})=>(0,o.jsx)("li",O(v({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>c.push(e),onKeyDown:u,onClick:d},i),{className:(0,r.Z)("tabs__item",x.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===e}),children:null!=n?n:e}),e)))})}function P({lazy:e,children:n,selectedValue:t}){const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=r.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,o.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function T(e){const n=y(e);return(0,o.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,o.jsx)(k,v({},e,n)),(0,o.jsx)(P,v({},e,n))]})}function S(e){const n=(0,g.Z)();return(0,o.jsx)(T,O(v({},e),{children:p(e.children)}),String(n))}},16212:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(85893),i=(t(67294),t(86010));const r={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){s(e,n,t[n])}))}return e}function c(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function l({children:e,minHeight:n,url:t="http://localhost:3000",style:s,bodyStyle:l}){return(0,o.jsxs)("div",{className:r.browserWindow,style:c(a({},s),{minHeight:n}),children:[(0,o.jsxs)("div",{className:r.browserWindowHeader,children:[(0,o.jsxs)("div",{className:r.buttons,children:[(0,o.jsx)("span",{className:r.dot,style:{background:"#f25f58"}}),(0,o.jsx)("span",{className:r.dot,style:{background:"#fbbe3c"}}),(0,o.jsx)("span",{className:r.dot,style:{background:"#58cb42"}})]}),(0,o.jsx)("div",{className:(0,i.Z)(r.browserWindowAddressBar,"text--truncate"),children:t}),(0,o.jsx)("div",{className:r.browserWindowMenuIcon,children:(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:r.bar}),(0,o.jsx)("span",{className:r.bar}),(0,o.jsx)("span",{className:r.bar})]})})]}),(0,o.jsx)("div",{className:r.browserWindowBody,style:l,children:e})]})}},26669:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(85893),i=(t(67294),t(51014)),r=t(24805);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var a,c;const l=(a=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){s(e,n,t[n])}))}return e}({},i.Z),c=null!=(c={"my-custom-admonition":function(e){return(0,o.jsxs)("div",{style:{border:"solid red",padding:10},children:[(0,o.jsx)(r.Z,{as:"h5",style:{color:"blue",fontSize:30},children:e.title}),(0,o.jsx)("div",{children:e.children})]})}})?c:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}(Object(c)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(c,e))})),a)},11151:(e,n,t)=>{t.d(n,{Zo:()=>a,ah:()=>r});var o=t(67294);const i=o.createContext({});function r(e){const n=o.useContext(i);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function a({components:e,children:n,disableParentContext:t}){let a;return a=t?"function"==typeof e?e({}):e||s:r(e),o.createElement(i.Provider,{value:a},n)}}}]);