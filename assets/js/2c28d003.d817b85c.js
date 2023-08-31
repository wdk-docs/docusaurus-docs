"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[13104],{54262:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>r});var s=t(85893),o=t(11151);const i={description:"Docusaurus\u5ba2\u6237\u7aef\u662f\u5982\u4f55\u6784\u5efa\u7684"},c="\u5ba2\u6237\u7aef\u67b6\u6784",l={unversionedId:"advanced/client",id:"advanced/client",title:"\u5ba2\u6237\u7aef\u67b6\u6784",description:"Docusaurus\u5ba2\u6237\u7aef\u662f\u5982\u4f55\u6784\u5efa\u7684",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/advanced/client.mdx",sourceDirName:"advanced",slug:"/advanced/client",permalink:"/docusaurus-docs/docs/next/advanced/client",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/advanced/client.mdx",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",frontMatter:{description:"Docusaurus\u5ba2\u6237\u7aef\u662f\u5982\u4f55\u6784\u5efa\u7684"},sidebar:"docs",previous:{title:"\u9759\u6001\u7ad9\u70b9\u751f\u6210",permalink:"/docusaurus-docs/docs/next/advanced/ssg"},next:{title:"\u79fb\u6c11\u6982\u8ff0",permalink:"/docusaurus-docs/docs/next/migration"}},a={},r=[{value:"\u4e3b\u9898\u7684\u522b\u540d",id:"theme-aliases",level:2},{value:"\u5ba2\u6237\u7aef\u6a21\u5757",id:"client-modules",level:2},{value:"\u5ba2\u6237\u7aef\u6a21\u5757\u751f\u547d\u5468\u671f",id:"client-module-lifecycles",level:3}];function d(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",ol:"ol",li:"li",em:"em",a:"a",admonition:"admonition",h3:"h3"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u5ba2\u6237\u7aef\u67b6\u6784",children:"\u5ba2\u6237\u7aef\u67b6\u6784"}),"\n",(0,s.jsx)(n.h2,{id:"theme-aliases",children:"\u4e3b\u9898\u7684\u522b\u540d"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e3b\u9898\u901a\u8fc7\u5bfc\u51fa\u4e00\u7ec4\u7ec4\u4ef6\u6765\u5de5\u4f5c\uff0c\u4f8b\u5982:",(0,s.jsx)(n.code,{children:"Navbar"}),", ",(0,s.jsx)(n.code,{children:"Layout"}),", ",(0,s.jsx)(n.code,{children:"Footer"}),"\uff0c\u6e32\u67d3\u4ece\u63d2\u4ef6\u4f20\u9012\u4e0b\u6765\u7684\u6570\u636e\u3002\nDocusaurus \u548c\u7528\u6237\u901a\u8fc7\u4f7f\u7528",(0,s.jsx)(n.code,{children:"@theme"})," webpack \u522b\u540d\u5bfc\u5165\u8fd9\u4e9b\u7ec4\u4ef6\u6765\u4f7f\u7528\u5b83\u4eec:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import Navbar from "@theme/Navbar";\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u522b\u540d",(0,s.jsx)(n.code,{children:"@theme"}),"\u53ef\u4ee5\u5f15\u7528\u51e0\u4e2a\u76ee\u5f55\uff0c\u4f18\u5148\u7ea7\u5982\u4e0b:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["A user's ",(0,s.jsx)(n.code,{children:"website/src/theme"})," directory, which is a special directory that has the higher precedence."]}),"\n",(0,s.jsxs)(n.li,{children:["A Docusaurus theme package's ",(0,s.jsx)(n.code,{children:"theme"})," directory."]}),"\n",(0,s.jsx)(n.li,{children:"Fallback components provided by Docusaurus core (usually not needed)."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This is called a ",(0,s.jsx)(n.em,{children:"layered architecture"}),": a higher-priority layer providing the component would shadow a lower-priority layer, making swizzling possible. Given the following structure:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"website\n\u251c\u2500\u2500 node_modules\n\u2502   \u2514\u2500\u2500 @docusaurus/theme-classic\n\u2502       \u2514\u2500\u2500 theme\n\u2502           \u2514\u2500\u2500 Navbar.js\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 theme\n        \u2514\u2500\u2500 Navbar.js\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"website/src/theme/Navbar.js"})," takes precedence whenever ",(0,s.jsx)(n.code,{children:"@theme/Navbar"})," is imported. This behavior is called component swizzling. If you are familiar with Objective C where a function's implementation can be swapped during runtime, it's the exact same concept here with changing the target ",(0,s.jsx)(n.code,{children:"@theme/Navbar"})," is pointing to!"]}),"\n",(0,s.jsxs)(n.p,{children:['We already talked about how the "userland theme" in ',(0,s.jsx)(n.code,{children:"src/theme"})," can re-use a theme component through the ",(0,s.jsx)(n.a,{href:"#wrapping",children:(0,s.jsx)(n.code,{children:"@theme-original"})})," alias. One theme package can also wrap a component from another theme, by importing the component from the initial theme, using the ",(0,s.jsx)(n.code,{children:"@theme-init"})," import."]}),"\n",(0,s.jsxs)(n.p,{children:["Here's an example of using this feature to enhance the default theme ",(0,s.jsx)(n.code,{children:"CodeBlock"})," component with a ",(0,s.jsx)(n.code,{children:"react-live"})," playground feature."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import InitialCodeBlock from "@theme-init/CodeBlock";\nimport React from "react";\n\nexport default function CodeBlock(props) {\n  return props.live ? <ReactLivePlayground {...props} /> : <InitialCodeBlock {...props} />;\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Check the code of ",(0,s.jsx)(n.code,{children:"@docusaurus/theme-live-codeblock"})," for details."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:['Unless you want to publish a re-usable "theme enhancer" (like ',(0,s.jsx)(n.code,{children:"@docusaurus/theme-live-codeblock"}),"), you likely don't need ",(0,s.jsx)(n.code,{children:"@theme-init"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:'It can be quite hard to wrap your mind around these aliases. Let\'s imagine the following case with a super convoluted setup with three themes/plugins and the site itself all trying to define the same component. Internally, Docusaurus loads these themes as a "stack".'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+-------------------------------------------------+\n|        `website/src/theme/CodeBlock.js`         | <-- `@theme/CodeBlock` always points to the top\n+-------------------------------------------------+\n| `theme-live-codeblock/theme/CodeBlock/index.js` | <-- `@theme-original/CodeBlock` points to the topmost non-swizzled component\n+-------------------------------------------------+\n|  `plugin-awesome-codeblock/theme/CodeBlock.js`  |\n+-------------------------------------------------+\n|     `theme-classic/theme/CodeBlock/index.js`    | <-- `@theme-init/CodeBlock` always points to the bottom\n+-------------------------------------------------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:['The components in this "stack" are pushed in the order of ',(0,s.jsx)(n.code,{children:"preset plugins > preset themes > plugins > themes > site"}),", so the swizzled component in ",(0,s.jsx)(n.code,{children:"website/src/theme"})," always comes out on top because it's loaded last."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"@theme/*"})," always points to the topmost component\u2014when ",(0,s.jsx)(n.code,{children:"CodeBlock"})," is swizzled, all other components requesting ",(0,s.jsx)(n.code,{children:"@theme/CodeBlock"})," receive the swizzled version."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"@theme-original/*"})," always points to the topmost non-swizzled component. That's why you can import ",(0,s.jsx)(n.code,{children:"@theme-original/CodeBlock"}),' in the swizzled component\u2014it points to the next one in the "component stack", a theme-provided one. Plugin authors should not try to use this because your component could be the topmost component and cause a self-import.']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"@theme-init/*"})," always points to the bottommost component\u2014usually, this comes from the theme or plugin that first provides this component. Individual plugins / themes trying to enhance code block can safely use ",(0,s.jsx)(n.code,{children:"@theme-init/CodeBlock"})," to get its basic version. Site creators should generally not use this because you likely want to enhance the ",(0,s.jsx)(n.em,{children:"topmost"})," instead of the ",(0,s.jsx)(n.em,{children:"bottommost"})," component. It's also possible that the ",(0,s.jsx)(n.code,{children:"@theme-init/CodeBlock"})," alias does not exist at all\u2014Docusaurus only creates it when it points to a different one from ",(0,s.jsx)(n.code,{children:"@theme-original/CodeBlock"}),", i.e. when it's provided by more than one theme. We don't waste aliases!"]}),"\n",(0,s.jsx)(n.h2,{id:"client-modules",children:"\u5ba2\u6237\u7aef\u6a21\u5757"}),"\n",(0,s.jsxs)(n.p,{children:["Client modules are part of your site's bundle, just like theme components. However, they are usually side-effect-ful. Client modules are anything that can be ",(0,s.jsx)(n.code,{children:"import"}),"ed by Webpack\u2014CSS, JS, etc. JS scripts usually work on the global context, like registering event listeners, creating global variables..."]}),"\n",(0,s.jsx)(n.p,{children:"These modules are imported globally before React even renders the initial UI."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="@docusaurus/core/App.tsx"',children:'// How it works under the hood\nimport "@generated/client-modules";\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Plugins and sites can both declare client modules, through ",(0,s.jsx)(n.a,{href:"/docusaurus-docs/docs/next/api/plugin-methods/lifecycle-apis#getClientModules",children:(0,s.jsx)(n.code,{children:"getClientModules"})})," and ",(0,s.jsx)(n.a,{href:"/docusaurus-docs/docs/next/api/docusaurus-config#clientModules",children:(0,s.jsx)(n.code,{children:"siteConfig.clientModules"})}),", respectively."]}),"\n",(0,s.jsxs)(n.p,{children:["Client modules are called during server-side rendering as well, so remember to check the ",(0,s.jsx)(n.a,{href:"/docusaurus-docs/docs/next/advanced/ssg#escape-hatches",children:"execution environment"})," before accessing client-side globals."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="mySiteGlobalJs.js"',children:'import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";\n\nif (ExecutionEnvironment.canUseDOM) {\n  // As soon as the site loads in the browser, register a global event listener\n  window.addEventListener("keydown", (e) => {\n    if (e.code === "Period") {\n      location.assign(location.href.replace(".com", ".dev"));\n    }\n  });\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["CSS stylesheets imported as client modules are ",(0,s.jsx)(n.a,{href:"/docusaurus-docs/docs/next/styling-layout#global-styles",children:"global"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",metastring:'title="mySiteGlobalCss.css"',children:"/* This stylesheet is global. */\n.globalSelector {\n  color: red;\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"client-module-lifecycles",children:"\u5ba2\u6237\u7aef\u6a21\u5757\u751f\u547d\u5468\u671f"}),"\n",(0,s.jsxs)(n.p,{children:["\u9664\u4e86\u5f15\u5165\u526f\u4f5c\u7528\uff0c\u5ba2\u6237\u7aef\u6a21\u5757\u8fd8\u53ef\u4ee5\u9009\u62e9\u5bfc\u51fa\u4e24\u4e2a\u751f\u547d\u5468\u671f\u51fd\u6570:",(0,s.jsx)(n.code,{children:"onRouteUpdate"}),"\u548c",(0,s.jsx)(n.code,{children:"onroutediduupdate"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u56e0\u4e3a Docusaurus \u6784\u5efa\u7684\u662f\u5355\u9875\u9762\u5e94\u7528\u7a0b\u5e8f\uff0c\u6240\u4ee5",(0,s.jsx)(n.code,{children:"script"}),"\u6807\u7b7e\u53ea\u4f1a\u5728\u9875\u9762\u7b2c\u4e00\u6b21\u52a0\u8f7d\u65f6\u6267\u884c\uff0c\u800c\u4e0d\u4f1a\u5728\u9875\u9762\u8f6c\u6362\u65f6\u91cd\u65b0\u6267\u884c\u3002\u8fd9\u4e9b\u751f\u547d\u5468\u671f\u662f\u6709\u7528\u7684\uff0c\u5982\u679c\u4f60\u6709\u4e00\u4e9b\u547d\u4ee4\u5f0f\u7684 JS \u903b\u8f91\uff0c\u5e94\u8be5\u5728\u6bcf\u6b21\u52a0\u8f7d\u65b0\u9875\u9762\u65f6\u6267\u884c\uff0c\u4f8b\u5982\uff0c\u64cd\u4f5c DOM \u5143\u7d20\uff0c\u53d1\u9001\u5206\u6790\u6570\u636e\u7b49\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8e\u6bcf\u4e2a\u8def\u7ebf\u8f6c\u6362\uff0c\u5c06\u6709\u51e0\u4e2a\u91cd\u8981\u7684\u65f6\u95f4\u5b89\u6392:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u7528\u6237\u5355\u51fb\u94fe\u63a5\uff0c\u5bfc\u81f4\u8def\u7531\u5668\u6539\u53d8\u5176\u5f53\u524d\u4f4d\u7f6e\u3002"}),"\n",(0,s.jsx)(n.li,{children:"Docusaurus \u9884\u52a0\u8f7d\u4e0b\u4e00\u4e2a\u8def\u7531\u7684\u8d44\u6e90\uff0c\u540c\u65f6\u4fdd\u6301\u663e\u793a\u5f53\u524d\u9875\u9762\u7684\u5185\u5bb9\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4e0b\u4e00\u6761\u8def\u7531\u7684\u8d44\u6e90\u5df2\u7ecf\u52a0\u8f7d\u5b8c\u6bd5\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u65b0\u4f4d\u7f6e\u7684\u8def\u7531\u7ec4\u4ef6\u88ab\u6e32\u67d3\u5230 DOM\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"onRouteUpdate"})," will be called at event (2), and ",(0,s.jsx)(n.code,{children:"onRouteDidUpdate"})," will be called at (4). They both receive the current location and the previous location (which can be ",(0,s.jsx)(n.code,{children:"null"}),", if this is the first screen)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"onRouteUpdate"}),' can optionally return a "cleanup" callback, which will be called at (3). For example, if you want to display a progress bar, you can start a timeout in ',(0,s.jsx)(n.code,{children:"onRouteUpdate"}),", and clear the timeout in the callback. (The classic theme already provides an ",(0,s.jsx)(n.code,{children:"nprogress"})," integration this way.)"]}),"\n",(0,s.jsxs)(n.p,{children:["Note that the new page's DOM is only available during event (4). If you need to manipulate the new page's DOM, you'll likely want to use ",(0,s.jsx)(n.code,{children:"onRouteDidUpdate"}),", which will be fired as soon as the DOM on the new page has mounted."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="myClientModule.js"',children:'export function onRouteDidUpdate({ location, previousLocation }) {\n  // Don\'t execute if we are still on the same page; the lifecycle may be fired\n  // because the hash changes (e.g. when navigating between headings)\n  if (location.pathname !== previousLocation?.pathname) {\n    const title = document.getElementsByTagName("h1")[0];\n    if (title) {\n      title.innerText += "\u2764\ufe0f";\n    }\n  }\n}\n\nexport function onRouteUpdate({ location, previousLocation }) {\n  if (location.pathname !== previousLocation?.pathname) {\n    const progressBarTimeout = window.setTimeout(() => {\n      nprogress.start();\n    }, delay);\n    return () => window.clearTimeout(progressBarTimeout);\n  }\n  return undefined;\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Or, if you are using TypeScript and you want to leverage contextual typing:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="myClientModule.ts"',children:'import type { ClientModule } from "@docusaurus/types";\n\nconst module: ClientModule = {\n  onRouteUpdate({ location, previousLocation }) {\n    // ...\n  },\n  onRouteDidUpdate({ location, previousLocation }) {\n    // ...\n  },\n};\nexport default module;\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u4e24\u4e2a\u751f\u547d\u5468\u671f\u90fd\u5c06\u5728\u7b2c\u4e00\u6b21\u6e32\u67d3\u65f6\u89e6\u53d1\uff0c\u4f46\u4e0d\u4f1a\u5728\u670d\u52a1\u5668\u7aef\u89e6\u53d1\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u5b89\u5168\u5730\u5728\u5176\u4e2d\u8bbf\u95ee\u6d4f\u89c8\u5668\u5168\u5c40\u53d8\u91cf\u3002"}),"\n",(0,s.jsx)(n.admonition,{title:"Prefer using React",type:"tip",children:(0,s.jsxs)(n.p,{children:["\u5ba2\u6237\u7aef\u6a21\u5757\u7684\u751f\u547d\u5468\u671f\u662f\u5b8c\u5168\u547d\u4ee4\u5f0f\u7684\uff0c\u4f60\u4e0d\u80fd\u5728\u5176\u4e2d\u4f7f\u7528 React \u94a9\u5b50\u6216\u8bbf\u95ee React \u4e0a\u4e0b\u6587\u3002\u5982\u679c\u60a8\u7684\u64cd\u4f5c\u662f\u72b6\u6001\u9a71\u52a8\u7684\u6216\u6d89\u53ca\u590d\u6742\u7684 DOM \u64cd\u4f5c\uff0c\u5219\u5e94\u8be5\u8003\u8651\u4f7f\u7528",(0,s.jsx)(n.a,{href:"/docusaurus-docs/docs/next/swizzling",children:"\u6405\u62cc\u7ec4\u4ef6"}),"\u3002"]})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>i});var s=t(67294);const o=s.createContext({});function i(e){const n=s.useContext(o);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||c:i(e),s.createElement(o.Provider,{value:l},n)}}}]);