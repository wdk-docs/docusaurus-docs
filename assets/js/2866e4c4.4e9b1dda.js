"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[93390,41396,41888,33656,81686,40849,42017,33646],{84069:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var o=t(85893),s=t(11151),i=t(53058);const r={description:"Configuring your site's behavior through docusaurus.config.js and more."},c="Configuration",a={unversionedId:"configuration",id:"version-2.3.1/configuration",title:"Configuration",description:"Configuring your site's behavior through docusaurus.config.js and more.",source:"@site/versioned_docs/version-2.3.1/configuration.mdx",sourceDirName:".",slug:"/configuration",permalink:"/docusaurus-docs/docs/2.3.1/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/configuration.mdx",tags:[],version:"2.3.1",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",frontMatter:{description:"Configuring your site's behavior through docusaurus.config.js and more."},sidebar:"docs",previous:{title:"Installation",permalink:"/docusaurus-docs/docs/2.3.1/installation"},next:{title:"Playground",permalink:"/docusaurus-docs/docs/2.3.1/playground"}},l={},u=[{value:"What goes into a <code>docusaurus.config.js</code>?",id:"what-goes-into-a-docusaurusconfigjs",level:2},{value:"Site metadata",id:"site-metadata",level:3},{value:"Deployment configurations",id:"deployment-configurations",level:3},{value:"Theme, plugin, and preset configurations",id:"theme-plugin-and-preset-configurations",level:3},{value:"Custom configurations",id:"custom-configurations",level:3},{value:"Accessing configuration from components",id:"accessing-configuration-from-components",level:2},{value:"Customizing Babel Configuration",id:"customizing-babel-configuration",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",a:"a",strong:"strong",h3:"h3",pre:"pre",admonition:"admonition"},(0,s.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n","\n","\n",(0,o.jsx)(n.p,{children:"Docusaurus has a unique take on configurations. We encourage you to congregate information about your site into one place. We guard the fields of this file and facilitate making this data object accessible across your site."}),"\n",(0,o.jsxs)(n.p,{children:["Keeping a well-maintained ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"})," helps you, your collaborators, and your open source contributors to be able to focus on documentation while still being able to customize the site."]}),"\n",(0,o.jsxs)(n.h2,{id:"what-goes-into-a-docusaurusconfigjs",children:["What goes into a ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"}),"?"]}),"\n",(0,o.jsxs)(n.p,{children:["You should not have to write your ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"})," from scratch even if you are developing your site. All templates come with a ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"})," that includes defaults for the common options."]}),"\n",(0,o.jsx)(n.p,{children:"However, it can be helpful if you have a high-level understanding of how the configurations are designed and implemented."}),"\n",(0,o.jsx)(n.p,{children:"The high-level overview of Docusaurus configuration can be categorized into:"}),"\n",(0,o.jsx)(i.Z,{toc:u,minHeadingLevel:3,maxHeadingLevel:3}),"\n",(0,o.jsxs)(n.p,{children:["For exact reference to each of the configurable fields, you may refer to ",(0,o.jsx)(n.a,{href:"/docusaurus-docs/docs/2.3.1/api/docusaurus-config",children:(0,o.jsxs)(n.strong,{children:[(0,o.jsx)(n.code,{children:"docusaurus.config.js"})," API reference"]})}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"site-metadata",children:"Site metadata"}),"\n",(0,o.jsxs)(n.p,{children:["Site metadata contains the essential global metadata such as ",(0,o.jsx)(n.code,{children:"title"}),", ",(0,o.jsx)(n.code,{children:"url"}),", ",(0,o.jsx)(n.code,{children:"baseUrl"}),", and ",(0,o.jsx)(n.code,{children:"favicon"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"They are used in several places such as your site's title and headings, browser tab icon, social sharing (Facebook, Twitter) information or even to generate the correct path to serve your static files."}),"\n",(0,o.jsx)(n.h3,{id:"deployment-configurations",children:"Deployment configurations"}),"\n",(0,o.jsxs)(n.p,{children:["Deployment configurations such as ",(0,o.jsx)(n.code,{children:"projectName"}),", ",(0,o.jsx)(n.code,{children:"organizationName"}),", and optionally ",(0,o.jsx)(n.code,{children:"deploymentBranch"})," are used when you deploy your site with the ",(0,o.jsx)(n.code,{children:"deploy"})," command."]}),"\n",(0,o.jsxs)(n.p,{children:["It is recommended to check the ",(0,o.jsx)(n.a,{href:"/docusaurus-docs/docs/2.3.1/deployment",children:"deployment docs"})," for more information."]}),"\n",(0,o.jsx)(n.h3,{id:"theme-plugin-and-preset-configurations",children:"Theme, plugin, and preset configurations"}),"\n",(0,o.jsxs)(n.p,{children:["List the ",(0,o.jsx)(n.a,{href:"/docusaurus-docs/docs/2.3.1/using-plugins#using-themes",children:"themes"}),", ",(0,o.jsx)(n.a,{href:"/docusaurus-docs/docs/2.3.1/using-plugins",children:"plugins"}),", and ",(0,o.jsx)(n.a,{href:"/docusaurus-docs/docs/2.3.1/using-plugins#using-presets",children:"presets"})," for your site in the ",(0,o.jsx)(n.code,{children:"themes"}),", ",(0,o.jsx)(n.code,{children:"plugins"}),", and ",(0,o.jsx)(n.code,{children:"presets"})," fields, respectively. These are typically npm packages:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  // ...\n  plugins: [\n    '@docusaurus/plugin-content-blog',\n    '@docusaurus/plugin-content-pages',\n  ],\n  themes: ['@docusaurus/theme-classic'],\n};\n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.p,{children:["Docusaurus supports ",(0,o.jsx)(n.a,{href:"/docusaurus-docs/docs/2.3.1/using-plugins#module-shorthands",children:(0,o.jsx)(n.strong,{children:"module shorthands"})}),", allowing you to simplify the above configuration as:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  // ...\n  plugins: ['content-blog', 'content-pages'],\n  themes: ['classic'],\n};\n"})})]}),"\n",(0,o.jsx)(n.p,{children:"They can also be loaded from local directories:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"const path = require('path');\n\nmodule.exports = {\n  // ...\n  themes: [path.resolve(__dirname, '/path/to/docusaurus-local-theme')],\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"To specify options for a plugin or theme, replace the name of the plugin or theme in the config file with an array containing the name and an options object:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  // ...\n  plugins: [\n    [\n      'content-blog',\n      {\n        path: 'blog',\n        routeBasePath: 'blog',\n        include: ['*.md', '*.mdx'],\n        // ...\n      },\n    ],\n    'content-pages',\n  ],\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To specify options for a plugin or theme that is bundled in a preset, pass the options through the ",(0,o.jsx)(n.code,{children:"presets"})," field. In this example, ",(0,o.jsx)(n.code,{children:"docs"})," refers to ",(0,o.jsx)(n.code,{children:"@docusaurus/plugin-content-docs"})," and ",(0,o.jsx)(n.code,{children:"theme"})," refers to ",(0,o.jsx)(n.code,{children:"@docusaurus/theme-classic"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          sidebarPath: require.resolve('./sidebars.js'),\n        },\n        theme: {\n          customCss: [require.resolve('./src/css/custom.css')],\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"presets: [['classic', {...}]]"})," shorthand works as well."]})}),"\n",(0,o.jsxs)(n.p,{children:["For further help configuring themes, plugins, and presets, see ",(0,o.jsx)(n.a,{href:"/docusaurus-docs/docs/2.3.1/using-plugins",children:"Using Plugins"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"custom-configurations",children:"Custom configurations"}),"\n",(0,o.jsxs)(n.p,{children:["Docusaurus guards ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"})," from unknown fields. To add custom fields, define them in ",(0,o.jsx)(n.code,{children:"customFields"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  // ...\n  // highlight-start\n  customFields: {\n    image: '',\n    keywords: [],\n  },\n  // highlight-end\n  // ...\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"accessing-configuration-from-components",children:"Accessing configuration from components"}),"\n",(0,o.jsxs)(n.p,{children:["Your configuration object will be made available to all the components of your site. And you may access them via React context as ",(0,o.jsx)(n.code,{children:"siteConfig"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Basic example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\n// highlight-next-line\nimport useDocusaurusContext from '@docusaurus/useDocusaurusContext';\n\nconst Hello = () => {\n  // highlight-start\n  const {siteConfig} = useDocusaurusContext();\n  // highlight-end\n  const {title, tagline} = siteConfig;\n\n  return <div>{`${title} \xb7 ${tagline}`}</div>;\n};\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["If you just want to use those fields on the client side, you could create your own JS files and import them as ES6 modules, there is no need to put them in ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"customizing-babel-configuration",children:"Customizing Babel Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["For new Docusaurus projects, we automatically generated a ",(0,o.jsx)(n.code,{children:"babel.config.js"})," in the project root."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="babel.config.js"',children:"module.exports = {\n  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"Most of the time, this configuration will work just fine. If you want to customize your Babel configuration (e.g. to add support for Flow), you can directly edit this file. For your changes to take effect, you need to restart the Docusaurus dev server."})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(d,e)})):d(e)}},53058:(e,n,t)=>{t.d(n,{Z:()=>r});var o=t(85893),s=(t(67294),t(13096));const i={tableOfContentsInline:"tableOfContentsInline_prmo"};function r({toc:e,minHeadingLevel:n,maxHeadingLevel:t}){return(0,o.jsx)("div",{className:i.tableOfContentsInline,children:(0,o.jsx)(s.Z,{toc:e,minHeadingLevel:n,maxHeadingLevel:t,className:"table-of-contents",linkClassName:null})})}},13096:(e,n,t)=>{t.d(n,{Z:()=>y});var o=t(85893),s=t(67294),i=t(66757);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){r(e,n,t[n])}))}return e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function l(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function u(e){const n=e.map((e=>a(c({},e),{parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const o=t.slice(2,e.level);e.parentIndex=Math.max(...o),t[e.level]=n}));const o=[];return n.forEach((e=>{const{parentIndex:t}=e,s=l(e,["parentIndex"]);t>=0?n[t].children.push(s):o.push(s)})),o}function d({toc:e,minHeadingLevel:n,maxHeadingLevel:t}){return e.flatMap((e=>{const o=d({toc:e.children,minHeadingLevel:n,maxHeadingLevel:t});return function(e){return e.level>=n&&e.level<=t}(e)?[a(c({},e),{children:o})]:o}))}function h(e){const n=e.getBoundingClientRect();return n.top===n.bottom?h(e.parentNode):n}function g(e,{anchorTopOffset:n}){const t=e.find((e=>h(e).top>=n));if(t){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(h(t))?t:null!==(o=e[e.indexOf(t)-1])&&void 0!==o?o:null;var o}var s;return null!==(s=e[e.length-1])&&void 0!==s?s:null}function f(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.L)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){const n=(0,s.useRef)(void 0),t=f();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:o,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:r}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(o),c=function({minHeadingLevel:e,maxHeadingLevel:n}){const t=[];for(let o=e;o<=n;o+=1)t.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(t.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),a=g(c,{anchorTopOffset:t.current}),l=e.find((e=>a&&a.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(s),e.classList.add(s),n.current=e):e.classList.remove(s)}(e,e===l)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}var p=t(61596);function j({toc:e,className:n,linkClassName:t,isChild:s}){return e.length?(0,o.jsx)("ul",{className:s?void 0:n,children:e.map((e=>(0,o.jsxs)("li",{children:[(0,o.jsx)(p.Z,{to:`#${e.id}`,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,o.jsx)(j,{isChild:!0,toc:e.children,className:n,linkClassName:t})]},e.id)))}):null}const x=s.memo(j);function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}function y(e){var{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:a,maxHeadingLevel:l}=e,h=b(e,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const g=(0,i.L)(),f=null!=a?a:g.tableOfContents.minHeadingLevel,p=null!=l?l:g.tableOfContents.maxHeadingLevel,j=function({toc:e,minHeadingLevel:n,maxHeadingLevel:t}){return(0,s.useMemo)((()=>d({toc:u(e),minHeadingLevel:n,maxHeadingLevel:t})),[e,n,t])}({toc:n,minHeadingLevel:f,maxHeadingLevel:p});return m((0,s.useMemo)((()=>{if(r&&c)return{linkClassName:r,linkActiveClassName:c,minHeadingLevel:f,maxHeadingLevel:p}}),[r,c,f,p])),(0,o.jsx)(x,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){v(e,n,t[n])}))}return e}({toc:j,className:t,linkClassName:r},h))}},11151:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>i});var o=t(67294);const s=o.createContext({});function i(e){const n=o.useContext(s);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||r:i(e),o.createElement(s.Provider,{value:c},n)}}}]);