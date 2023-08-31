"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[42931],{89707:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=s(85893),i=s(11151),t=s(37585);const o={},c="Release process",a={unversionedId:"release-process",id:"release-process",title:"Release process",description:"Let's see how Docusaurus handles versioning, releases and breaking changes.",source:"@site/community/5-release-process.mdx",sourceDirName:".",slug:"/release-process",permalink:"/docusaurus-docs/en/community/release-process",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/community/5-release-process.mdx",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"Aug 31, 2023",sidebarPosition:5,frontMatter:{},sidebar:"community",previous:{title:"Canary releases",permalink:"/docusaurus-docs/en/community/canary"}},l={},u=[{value:"Semantic versioning",id:"semantic-versioning",level:2},{value:"Major versions",id:"major-versions",level:3},{value:"Minor versions",id:"minor-versions",level:3},{value:"Patch versions",id:"patch-versions",level:3},{value:"Versions",id:"versions",level:2},{value:"Stable version",id:"stable-version",level:3},{value:"Next version",id:"next-version",level:3},{value:"Public API surface",id:"public-api-surface",level:2},{value:"Core public API",id:"core-public-api",level:3},{value:"Theming public API",id:"theming-public-api",level:3}];function h(e){const n=Object.assign({h1:"h1",p:"p",strong:"strong",admonition:"admonition",h2:"h2",code:"code",a:"a",ul:"ul",li:"li",h3:"h3"},(0,i.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"release-process",children:"Release process"}),"\n",(0,r.jsxs)(n.p,{children:["Let's see how Docusaurus handles ",(0,r.jsx)(n.strong,{children:"versioning, releases and breaking changes"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"This topic is particularly important for highly customized sites that may have difficulties to upgrade."})}),"\n",(0,r.jsx)(n.h2,{id:"semantic-versioning",children:"Semantic versioning"}),"\n",(0,r.jsxs)(n.p,{children:["Docusaurus versioning is based on the ",(0,r.jsx)(n.code,{children:"major.minor.patch"})," scheme and respects ",(0,r.jsx)(n.a,{href:"https://semver.org/",children:"Semantic Versioning"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Respecting Semantic Versioning is important for multiple reasons:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["It ",(0,r.jsx)(n.strong,{children:"guarantees simple minor version upgrades"}),", as long as you only use the ",(0,r.jsx)(n.a,{href:"/community/release-process#public-api-surface",children:"public API"})]}),"\n",(0,r.jsx)(n.li,{children:"It follows front-end ecosystem conventions"}),"\n",(0,r.jsx)(n.li,{children:"A new major version is an opportunity to thoroughly document breaking changes"}),"\n",(0,r.jsx)(n.li,{children:"A new major/minor version is an opportunity to communicate new features through a blog post"}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["Releasing Docusaurus 2.0 took a very long time. From now on, Docusaurus will ",(0,r.jsx)(n.strong,{children:"release new major versions more regularly"}),". In practice, you can expect a new major version every 2\u20134 months."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://tom.preston-werner.com/2022/05/23/major-version-numbers-are-not-sacred.html",children:"Major version numbers are not sacred"}),", but we still group breaking changes together and avoid releasing major versions too often."]})]}),"\n",(0,r.jsx)(n.h3,{id:"major-versions",children:"Major versions"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"major"})," version number is incremented on ",(0,r.jsx)(n.strong,{children:"every breaking change"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Whenever a new major version is released, we publish:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["a blog post with feature highlights, major bug fixes, ",(0,r.jsx)(n.strong,{children:"breaking changes, and upgrade instructions"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"an exhaustive changelog entry"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Read our ",(0,r.jsx)(n.a,{href:"#public-api-surface",children:"public API surface"})," section to clearly understand what we consider as a breaking change."]})}),"\n",(0,r.jsx)(n.h3,{id:"minor-versions",children:"Minor versions"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"minor"})," version number is incremented on every significant retro-compatible change."]}),"\n",(0,r.jsx)(n.p,{children:"Whenever a new minor version is released, we publish:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"a blog post with a list of feature highlights and major bug fixes"}),"\n",(0,r.jsx)(n.li,{children:"an exhaustive changelog entry"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["If you only use our ",(0,r.jsx)(n.a,{href:"#public-api-surface",children:"public API surface"}),", you should be able to upgrade in no time!"]})}),"\n",(0,r.jsx)(n.h3,{id:"patch-versions",children:"Patch versions"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"patch"})," version number is incremented on bugfixes releases."]}),"\n",(0,r.jsx)(n.p,{children:"Whenever a new patch version is released, we publish:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"an exhaustive changelog entry"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"versions",children:"Versions"}),"\n","\n","\n",(0,r.jsx)(n.p,{children:"The Docusaurus team is usually working on 2 major versions at the same time:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["Docusaurus ",(0,r.jsx)(t.Fr,{})]}),": the ",(0,r.jsx)(n.strong,{children:"stable"})," version, on the ",(0,r.jsx)(t.Zl,{})," branch"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:["Docusaurus ",(0,r.jsx)(t.CW,{})]}),": the ",(0,r.jsx)(n.strong,{children:"next"})," version, on the ",(0,r.jsx)(t.mq,{})," branch"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(t.Zl,{})," branch is created just before releasing the first v",(0,r.jsx)(t.Fr,{})," release candidate."]})}),"\n",(0,r.jsx)(n.h3,{id:"stable-version",children:"Stable version"}),"\n",(0,r.jsxs)(n.p,{children:["The stable version (v",(0,r.jsx)(t.Fr,{}),", on ",(0,r.jsx)(t.Zl,{}),") is recommended for most Docusaurus users."]}),"\n",(0,r.jsxs)(n.p,{children:["We regularly backport retro-compatible features, bug and security fixes from ",(0,r.jsx)(t.mq,{})," to ",(0,r.jsx)(t.Zl,{})," with ",(0,r.jsx)(n.code,{children:"git cherry-pick"})," to make them available to those not ready for the next version."]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["After a new stable version has been released, the former stable version will continue to receive support only for ",(0,r.jsx)(n.strong,{children:"major security issues"})," for ",(0,r.jsx)(n.strong,{children:"3 months"}),". Otherwise, all features will be frozen and non-critical bugs will not be fixed."]}),(0,r.jsx)(n.p,{children:"It is recommended to upgrade within that time frame to the new stable version."})]}),"\n",(0,r.jsx)(n.h3,{id:"next-version",children:"Next version"}),"\n",(0,r.jsxs)(n.p,{children:["The next version (v",(0,r.jsx)(t.CW,{}),", on ",(0,r.jsx)(t.mq,{}),") is the version the Docusaurus team is currently working on."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(t.mq,{})," branch is the ",(0,r.jsx)(n.strong,{children:"default target branch"})," for all pull requests, including core team and external contributions."]}),"\n",(0,r.jsxs)(n.p,{children:["This version is recommended for ",(0,r.jsx)(n.strong,{children:"early adopters"})," that want to use the latest Docusaurus features as soon as possible. It is also a good way to help us by reporting bugs and giving some feedback."]}),"\n",(0,r.jsx)(n.p,{children:"There are 3 ways to use the next version:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["with an ",(0,r.jsx)(n.code,{children:"alpha"}),", ",(0,r.jsx)(n.code,{children:"beta"})," or ",(0,r.jsx)(n.code,{children:"rc"})," pre-release"]}),"\n",(0,r.jsxs)(n.li,{children:["with the ",(0,r.jsx)(n.code,{children:"@next"})," npm dist tag for the latest pre-release"]}),"\n",(0,r.jsxs)(n.li,{children:["with a ",(0,r.jsx)(n.a,{href:"/docusaurus-docs/en/community/canary",children:"canary release"})," for the very latest features"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"The next version passes all our automated tests and is used by the Docusaurus site itself. It is relatively safe: don't be afraid to give it a try."})}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsx)(n.p,{children:"Breaking changes can happen on the next version: detailed upgrade instructions are available in the changelog and pull requests."}),(0,r.jsxs)(n.p,{children:["At the ",(0,r.jsx)(n.code,{children:"beta"})," and ",(0,r.jsx)(n.code,{children:"rc"})," (release candidate) phases, we avoid introducing major breaking changes."]})]}),"\n",(0,r.jsx)(n.h2,{id:"public-api-surface",children:"Public API surface"}),"\n",(0,r.jsxs)(n.p,{children:["Docusaurus commits to respecting Semantic Versioning. This means that whenever changes occur in Docusaurus public APIs and break backward compatibility, we will increment the ",(0,r.jsx)(n.code,{children:"major"})," version number."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Docusaurus guarantees public API retro-compatibility across ",(0,r.jsx)(n.code,{children:"minor"})," versions. Unless you use internal APIs, ",(0,r.jsx)(n.code,{children:"minor"})," version upgrades should be easy."]})}),"\n",(0,r.jsx)(n.p,{children:"We will outline what accounts as the public API surface."}),"\n",(0,r.jsx)(n.h3,{id:"core-public-api",children:"Core public API"}),"\n",(0,r.jsx)(n.p,{children:"\u2705 Our public API includes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Docusaurus config"}),"\n",(0,r.jsx)(n.li,{children:"Docusaurus client APIs"}),"\n",(0,r.jsx)(n.li,{children:"Docusaurus CLI"}),"\n",(0,r.jsx)(n.li,{children:"Preset options"}),"\n",(0,r.jsx)(n.li,{children:"Plugin options"}),"\n",(0,r.jsx)(n.li,{children:"Plugin lifecycle APIs"}),"\n",(0,r.jsx)(n.li,{children:"Theme config"}),"\n",(0,r.jsx)(n.li,{children:"Core plugins route component props"}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"@docusaurus/types"})," TypeScript types","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"We still retain the freedom to make types stricter (which may break type-checking)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"For non-theme APIs, any documented API is considered public (and will be stable); any undocumented API is considered internal."})}),"\n",(0,r.jsxs)(n.p,{children:['An API being "stable" means if you increment the patch or minor version of your Docusaurus installation without any other change, running ',(0,r.jsx)(n.code,{children:"docusaurus start"})," or ",(0,r.jsx)(n.code,{children:"docusaurus build"})," should not throw an error."]}),"\n",(0,r.jsx)(n.h3,{id:"theming-public-api",children:"Theming public API"}),"\n",(0,r.jsx)(n.p,{children:"Docusaurus has a very flexible theming system:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"You can use custom CSS"}),"\n",(0,r.jsxs)(n.li,{children:["You can ",(0,r.jsx)(n.a,{href:"/docs/swizzling",children:"swizzle"})," any React theme component"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This system also implicitly creates a very large API surface. To be able to move fast and improve Docusaurus, we can't guarantee retro-compatibility."}),"\n",(0,r.jsx)(n.p,{children:"\u2705 Our public theming API includes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/styling-layout#theme-class-names",children:"Theme class names"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/styling-layout#styling-your-site-with-infima",children:"Infima"})," class names and CSS variables"]}),"\n",(0,r.jsxs)(n.li,{children:["React components that are ",(0,r.jsx)(n.a,{href:"/docs/swizzling#what-is-safe-to-swizzle",children:"safe to swizzle"})]}),"\n",(0,r.jsx)(n.li,{children:"The theme user experience"}),"\n",(0,r.jsx)(n.li,{children:"Browser support"}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"You may not be able to achieve your site customization through this public API."}),(0,r.jsxs)(n.p,{children:["In this case, please ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/discussions/5468",children:"report your customization use case"})," and we will figure out how to expand our public API."]})]}),"\n",(0,r.jsxs)(n.p,{children:["\u274c Our public theming API ",(0,r.jsx)(n.strong,{children:"excludes"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The DOM structure"}),"\n",(0,r.jsxs)(n.li,{children:["CSS module class names with a hash suffix (usually targeted with ",(0,r.jsx)(n.code,{children:"[class*='myClassName']"})," selectors)"]}),"\n",(0,r.jsxs)(n.li,{children:["React components that are ",(0,r.jsx)(n.a,{href:"/docs/swizzling#what-is-safe-to-swizzle",children:"unsafe or forbidden to swizzle"})]}),"\n",(0,r.jsxs)(n.li,{children:["React components that import from ",(0,r.jsx)(n.code,{children:"@docusaurus/theme-common/internal"})]}),"\n",(0,r.jsx)(n.li,{children:"The exact visual appearance of the theme"}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["When ",(0,r.jsx)(n.a,{href:"/docs/swizzling",children:"swizzling"})," safe components, you might encounter components that import undocumented APIs from ",(0,r.jsx)(n.code,{children:"@docusaurus/theme-common"})," (without the ",(0,r.jsx)(n.code,{children:"/internal"})," subpath)."]}),(0,r.jsx)(n.p,{children:'We still maintain retro-compatibility on those APIs (hence they are marked as "safe"), but we don\'t encourage a direct usage.'})]})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},37585:(e,n,s)=>{s.d(n,{CW:()=>m,FS:()=>y,Fr:()=>x,Hc:()=>w,I1:()=>p,SR:()=>j,UM:()=>v,Zl:()=>g,mC:()=>h,mq:()=>f,rv:()=>P});var r=s(85893),i=s(67294),t=s(25662),o=s(97203),c=s(27692),a=s(61596),l=s(92101);const u=i.createContext(null);function h({children:e}){const[n,s]=(0,i.useState)(null),t=(0,i.useRef)(!0);return(0,i.useEffect)((()=>(t.current=!0,()=>{t.current=!1})),[]),(0,i.useEffect)((()=>{fetch("https://registry.npmjs.org/@docusaurus/core").then((e=>e.json())).then((e=>{if(!t.current)return;const n=Object.keys(e.versions).at(-1),r=e.time[n];s({name:n,time:r})}))}),[]),(0,r.jsx)(u.Provider,{value:n,children:e})}function d(){var e;const n=null===(e=(0,t.J)("default").preferredVersion)||void 0===e?void 0:e.name,s=(0,o.gB)("default");var r;const i=(null!==(r=s.find((e=>"current"!==e.name)))&&void 0!==r?r:s[0]).name;return n&&"current"!==n?n:i}function p(){const e=(0,i.useContext)(u);return e?(0,r.jsx)("span",{children:(0,r.jsx)(c.Z,{description:"The hint text for the current canary version tag.",values:{canaryVersionName:(0,r.jsx)("b",{children:e.name})},children:"Current: {canaryVersionName}"})}):(0,r.jsx)("span",{children:(0,r.jsx)(c.Z,{description:"An example canary version tag when the actual version can't be fetched.",children:"Example: 0.0.0-4922"})})}function j(){const e=d();return(0,r.jsx)("span",{children:e})}function m(){return(0,r.jsx)("span",{children:3})}function x(){return(0,r.jsx)("span",{children:2})}function b({branch:e}){return(0,r.jsx)(a.Z,{to:`https://github.com/facebook/docusaurus/tree/${e}`,children:(0,r.jsx)("code",{children:e})})}function g(){return(0,r.jsx)(b,{branch:"docusaurus-v2"})}function f(){return(0,r.jsx)(b,{branch:"main"})}function v({children:e}){return(0,i.useContext)(u)?null:e}function y({children:e}){return(0,i.useContext)(u)?e:null}function w(){var e,n;const s=null!==(n=null===(e=(0,i.useContext)(u))||void 0===e?void 0:e.name)&&void 0!==n?n:"0.0.0-4922",t=d();return(0,r.jsx)(l.Z,{language:"diff",children:`-  "@docusaurus/core": "^${t}",\n-  "@docusaurus/preset-classic": "^${t}",\n+  "@docusaurus/core": "${s}",\n+  "@docusaurus/preset-classic": "${s}",\n`})}function P(){var e;const n=null===(e=(0,i.useContext)(u))||void 0===e?void 0:e.time;return n?(0,r.jsx)(c.Z,{values:{time:(0,r.jsx)("b",{children:new Date(n).toLocaleString()})},children:"The latest canary version that's available on npm is published at {time}."}):null}},92101:(e,n,s)=>{s.d(n,{Z:()=>o});var r=s(85893),i=(s(67294),s(50191));function t(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function o(e){return(0,r.jsx)(i.Z,function(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},r=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),r.forEach((function(n){t(e,n,s[n])}))}return e}({},e))}},5379:(e,n,s)=>{s.d(n,{Z:()=>h});var r={};s.r(r),s.d(r,{ButtonExample:()=>l});var i=s(67294),t=s(85893);function o(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function c(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},r=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),r.forEach((function(n){o(e,n,s[n])}))}return e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,r)}return s}(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})),e}function l(e){return(0,t.jsx)("button",a(c({type:"button"},e),{style:c({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}function u(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}const h=function(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},r=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),r.forEach((function(n){u(e,n,s[n])}))}return e}({React:i},i,r)}}]);