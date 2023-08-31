"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[2176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60232:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={description:"Docusaurus\u5ba2\u6237\u7aef\u662f\u5982\u4f55\u6784\u5efa\u7684"},l="\u5ba2\u6237\u7aef\u67b6\u6784",r={unversionedId:"advanced/client",id:"advanced/client",title:"\u5ba2\u6237\u7aef\u67b6\u6784",description:"Docusaurus\u5ba2\u6237\u7aef\u662f\u5982\u4f55\u6784\u5efa\u7684",source:"@site/docs/advanced/client.mdx",sourceDirName:"advanced",slug:"/advanced/client",permalink:"/docs/advanced/client",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/advanced/client.mdx",tags:[],version:"current",frontMatter:{description:"Docusaurus\u5ba2\u6237\u7aef\u662f\u5982\u4f55\u6784\u5efa\u7684"},sidebar:"docs",previous:{title:"\u9759\u6001\u7ad9\u70b9\u751f\u6210",permalink:"/docs/advanced/ssg"},next:{title:"\u79fb\u6c11\u6982\u8ff0",permalink:"/docs/migration"}},s={},p=[{value:"\u4e3b\u9898\u7684\u522b\u540d",id:"theme-aliases",level:2},{value:"\u5ba2\u6237\u7aef\u6a21\u5757",id:"client-modules",level:2},{value:"\u5ba2\u6237\u7aef\u6a21\u5757\u751f\u547d\u5468\u671f",id:"client-module-lifecycles",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5ba2\u6237\u7aef\u67b6\u6784"},"\u5ba2\u6237\u7aef\u67b6\u6784"),(0,o.kt)("h2",{id:"theme-aliases"},"\u4e3b\u9898\u7684\u522b\u540d"),(0,o.kt)("p",null,"\u4e3b\u9898\u901a\u8fc7\u5bfc\u51fa\u4e00\u7ec4\u7ec4\u4ef6\u6765\u5de5\u4f5c\uff0c\u4f8b\u5982:",(0,o.kt)("inlineCode",{parentName:"p"},"Navbar"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Layout"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Footer"),"\uff0c\u6e32\u67d3\u4ece\u63d2\u4ef6\u4f20\u9012\u4e0b\u6765\u7684\u6570\u636e\u3002\nDocusaurus \u548c\u7528\u6237\u901a\u8fc7\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"@theme")," webpack \u522b\u540d\u5bfc\u5165\u8fd9\u4e9b\u7ec4\u4ef6\u6765\u4f7f\u7528\u5b83\u4eec:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import Navbar from "@theme/Navbar";\n')),(0,o.kt)("p",null,"\u522b\u540d",(0,o.kt)("inlineCode",{parentName:"p"},"@theme"),"\u53ef\u4ee5\u5f15\u7528\u51e0\u4e2a\u76ee\u5f55\uff0c\u4f18\u5148\u7ea7\u5982\u4e0b:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A user's ",(0,o.kt)("inlineCode",{parentName:"li"},"website/src/theme")," directory, which is a special directory that has the higher precedence."),(0,o.kt)("li",{parentName:"ol"},"A Docusaurus theme package's ",(0,o.kt)("inlineCode",{parentName:"li"},"theme")," directory."),(0,o.kt)("li",{parentName:"ol"},"Fallback components provided by Docusaurus core (usually not needed).")),(0,o.kt)("p",null,"This is called a ",(0,o.kt)("em",{parentName:"p"},"layered architecture"),": a higher-priority layer providing the component would shadow a lower-priority layer, making swizzling possible. Given the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"website\n\u251c\u2500\u2500 node_modules\n\u2502   \u2514\u2500\u2500 @docusaurus/theme-classic\n\u2502       \u2514\u2500\u2500 theme\n\u2502           \u2514\u2500\u2500 Navbar.js\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 theme\n        \u2514\u2500\u2500 Navbar.js\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"website/src/theme/Navbar.js")," takes precedence whenever ",(0,o.kt)("inlineCode",{parentName:"p"},"@theme/Navbar")," is imported. This behavior is called component swizzling. If you are familiar with Objective C where a function's implementation can be swapped during runtime, it's the exact same concept here with changing the target ",(0,o.kt)("inlineCode",{parentName:"p"},"@theme/Navbar")," is pointing to!"),(0,o.kt)("p",null,'We already talked about how the "userland theme" in ',(0,o.kt)("inlineCode",{parentName:"p"},"src/theme")," can re-use a theme component through the ",(0,o.kt)("a",{parentName:"p",href:"#wrapping"},(0,o.kt)("inlineCode",{parentName:"a"},"@theme-original"))," alias. One theme package can also wrap a component from another theme, by importing the component from the initial theme, using the ",(0,o.kt)("inlineCode",{parentName:"p"},"@theme-init")," import."),(0,o.kt)("p",null,"Here's an example of using this feature to enhance the default theme ",(0,o.kt)("inlineCode",{parentName:"p"},"CodeBlock")," component with a ",(0,o.kt)("inlineCode",{parentName:"p"},"react-live")," playground feature."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import InitialCodeBlock from "@theme-init/CodeBlock";\nimport React from "react";\n\nexport default function CodeBlock(props) {\n  return props.live ? <ReactLivePlayground {...props} /> : <InitialCodeBlock {...props} />;\n}\n')),(0,o.kt)("p",null,"Check the code of ",(0,o.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-live-codeblock")," for details."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},'Unless you want to publish a re-usable "theme enhancer" (like ',(0,o.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-live-codeblock"),"), you likely don't need ",(0,o.kt)("inlineCode",{parentName:"p"},"@theme-init"),".")),(0,o.kt)("p",null,'It can be quite hard to wrap your mind around these aliases. Let\'s imagine the following case with a super convoluted setup with three themes/plugins and the site itself all trying to define the same component. Internally, Docusaurus loads these themes as a "stack".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"+-------------------------------------------------+\n|        `website/src/theme/CodeBlock.js`         | <-- `@theme/CodeBlock` always points to the top\n+-------------------------------------------------+\n| `theme-live-codeblock/theme/CodeBlock/index.js` | <-- `@theme-original/CodeBlock` points to the topmost non-swizzled component\n+-------------------------------------------------+\n|  `plugin-awesome-codeblock/theme/CodeBlock.js`  |\n+-------------------------------------------------+\n|     `theme-classic/theme/CodeBlock/index.js`    | <-- `@theme-init/CodeBlock` always points to the bottom\n+-------------------------------------------------+\n")),(0,o.kt)("p",null,'The components in this "stack" are pushed in the order of ',(0,o.kt)("inlineCode",{parentName:"p"},"preset plugins > preset themes > plugins > themes > site"),", so the swizzled component in ",(0,o.kt)("inlineCode",{parentName:"p"},"website/src/theme")," always comes out on top because it's loaded last."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@theme/*")," always points to the topmost component\u2014when ",(0,o.kt)("inlineCode",{parentName:"p"},"CodeBlock")," is swizzled, all other components requesting ",(0,o.kt)("inlineCode",{parentName:"p"},"@theme/CodeBlock")," receive the swizzled version."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@theme-original/*")," always points to the topmost non-swizzled component. That's why you can import ",(0,o.kt)("inlineCode",{parentName:"p"},"@theme-original/CodeBlock"),' in the swizzled component\u2014it points to the next one in the "component stack", a theme-provided one. Plugin authors should not try to use this because your component could be the topmost component and cause a self-import.'),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@theme-init/*")," always points to the bottommost component\u2014usually, this comes from the theme or plugin that first provides this component. Individual plugins / themes trying to enhance code block can safely use ",(0,o.kt)("inlineCode",{parentName:"p"},"@theme-init/CodeBlock")," to get its basic version. Site creators should generally not use this because you likely want to enhance the ",(0,o.kt)("em",{parentName:"p"},"topmost")," instead of the ",(0,o.kt)("em",{parentName:"p"},"bottommost")," component. It's also possible that the ",(0,o.kt)("inlineCode",{parentName:"p"},"@theme-init/CodeBlock")," alias does not exist at all\u2014Docusaurus only creates it when it points to a different one from ",(0,o.kt)("inlineCode",{parentName:"p"},"@theme-original/CodeBlock"),", i.e. when it's provided by more than one theme. We don't waste aliases!"),(0,o.kt)("h2",{id:"client-modules"},"\u5ba2\u6237\u7aef\u6a21\u5757"),(0,o.kt)("p",null,"Client modules are part of your site's bundle, just like theme components. However, they are usually side-effect-ful. Client modules are anything that can be ",(0,o.kt)("inlineCode",{parentName:"p"},"import"),"ed by Webpack\u2014CSS, JS, etc. JS scripts usually work on the global context, like registering event listeners, creating global variables..."),(0,o.kt)("p",null,"These modules are imported globally before React even renders the initial UI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="@docusaurus/core/App.tsx"',title:'"@docusaurus/core/App.tsx"'},'// How it works under the hood\nimport "@generated/client-modules";\n')),(0,o.kt)("p",null,"Plugins and sites can both declare client modules, through ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/plugin-methods/lifecycle-apis#getClientModules"},(0,o.kt)("inlineCode",{parentName:"a"},"getClientModules"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/docusaurus-config#clientModules"},(0,o.kt)("inlineCode",{parentName:"a"},"siteConfig.clientModules")),", respectively."),(0,o.kt)("p",null,"Client modules are called during server-side rendering as well, so remember to check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/ssg#escape-hatches"},"execution environment")," before accessing client-side globals."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="mySiteGlobalJs.js"',title:'"mySiteGlobalJs.js"'},'import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";\n\nif (ExecutionEnvironment.canUseDOM) {\n  // As soon as the site loads in the browser, register a global event listener\n  window.addEventListener("keydown", (e) => {\n    if (e.code === "Period") {\n      location.assign(location.href.replace(".com", ".dev"));\n    }\n  });\n}\n')),(0,o.kt)("p",null,"CSS stylesheets imported as client modules are ",(0,o.kt)("a",{parentName:"p",href:"/docs/styling-layout#global-styles"},"global"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="mySiteGlobalCss.css"',title:'"mySiteGlobalCss.css"'},"/* This stylesheet is global. */\n.globalSelector {\n  color: red;\n}\n")),(0,o.kt)("h3",{id:"client-module-lifecycles"},"\u5ba2\u6237\u7aef\u6a21\u5757\u751f\u547d\u5468\u671f"),(0,o.kt)("p",null,"\u9664\u4e86\u5f15\u5165\u526f\u4f5c\u7528\uff0c\u5ba2\u6237\u7aef\u6a21\u5757\u8fd8\u53ef\u4ee5\u9009\u62e9\u5bfc\u51fa\u4e24\u4e2a\u751f\u547d\u5468\u671f\u51fd\u6570:",(0,o.kt)("inlineCode",{parentName:"p"},"onRouteUpdate"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"onroutediduupdate"),"\u3002"),(0,o.kt)("p",null,"\u56e0\u4e3a Docusaurus \u6784\u5efa\u7684\u662f\u5355\u9875\u9762\u5e94\u7528\u7a0b\u5e8f\uff0c\u6240\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"script"),"\u6807\u7b7e\u53ea\u4f1a\u5728\u9875\u9762\u7b2c\u4e00\u6b21\u52a0\u8f7d\u65f6\u6267\u884c\uff0c\u800c\u4e0d\u4f1a\u5728\u9875\u9762\u8f6c\u6362\u65f6\u91cd\u65b0\u6267\u884c\u3002\u8fd9\u4e9b\u751f\u547d\u5468\u671f\u662f\u6709\u7528\u7684\uff0c\u5982\u679c\u4f60\u6709\u4e00\u4e9b\u547d\u4ee4\u5f0f\u7684 JS \u903b\u8f91\uff0c\u5e94\u8be5\u5728\u6bcf\u6b21\u52a0\u8f7d\u65b0\u9875\u9762\u65f6\u6267\u884c\uff0c\u4f8b\u5982\uff0c\u64cd\u4f5c DOM \u5143\u7d20\uff0c\u53d1\u9001\u5206\u6790\u6570\u636e\u7b49\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u6bcf\u4e2a\u8def\u7ebf\u8f6c\u6362\uff0c\u5c06\u6709\u51e0\u4e2a\u91cd\u8981\u7684\u65f6\u95f4\u5b89\u6392:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7528\u6237\u5355\u51fb\u94fe\u63a5\uff0c\u5bfc\u81f4\u8def\u7531\u5668\u6539\u53d8\u5176\u5f53\u524d\u4f4d\u7f6e\u3002"),(0,o.kt)("li",{parentName:"ol"},"Docusaurus \u9884\u52a0\u8f7d\u4e0b\u4e00\u4e2a\u8def\u7531\u7684\u8d44\u6e90\uff0c\u540c\u65f6\u4fdd\u6301\u663e\u793a\u5f53\u524d\u9875\u9762\u7684\u5185\u5bb9\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4e0b\u4e00\u6761\u8def\u7531\u7684\u8d44\u6e90\u5df2\u7ecf\u52a0\u8f7d\u5b8c\u6bd5\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u65b0\u4f4d\u7f6e\u7684\u8def\u7531\u7ec4\u4ef6\u88ab\u6e32\u67d3\u5230 DOM\u3002")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"onRouteUpdate")," will be called at event (2), and ",(0,o.kt)("inlineCode",{parentName:"p"},"onRouteDidUpdate")," will be called at (4). They both receive the current location and the previous location (which can be ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", if this is the first screen)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"onRouteUpdate"),' can optionally return a "cleanup" callback, which will be called at (3). For example, if you want to display a progress bar, you can start a timeout in ',(0,o.kt)("inlineCode",{parentName:"p"},"onRouteUpdate"),", and clear the timeout in the callback. (The classic theme already provides an ",(0,o.kt)("inlineCode",{parentName:"p"},"nprogress")," integration this way.)"),(0,o.kt)("p",null,"Note that the new page's DOM is only available during event (4). If you need to manipulate the new page's DOM, you'll likely want to use ",(0,o.kt)("inlineCode",{parentName:"p"},"onRouteDidUpdate"),", which will be fired as soon as the DOM on the new page has mounted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="myClientModule.js"',title:'"myClientModule.js"'},'export function onRouteDidUpdate({ location, previousLocation }) {\n  // Don\'t execute if we are still on the same page; the lifecycle may be fired\n  // because the hash changes (e.g. when navigating between headings)\n  if (location.pathname !== previousLocation?.pathname) {\n    const title = document.getElementsByTagName("h1")[0];\n    if (title) {\n      title.innerText += "\u2764\ufe0f";\n    }\n  }\n}\n\nexport function onRouteUpdate({ location, previousLocation }) {\n  if (location.pathname !== previousLocation?.pathname) {\n    const progressBarTimeout = window.setTimeout(() => {\n      nprogress.start();\n    }, delay);\n    return () => window.clearTimeout(progressBarTimeout);\n  }\n  return undefined;\n}\n')),(0,o.kt)("p",null,"Or, if you are using TypeScript and you want to leverage contextual typing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="myClientModule.ts"',title:'"myClientModule.ts"'},'import type { ClientModule } from "@docusaurus/types";\n\nconst module: ClientModule = {\n  onRouteUpdate({ location, previousLocation }) {\n    // ...\n  },\n  onRouteDidUpdate({ location, previousLocation }) {\n    // ...\n  },\n};\nexport default module;\n')),(0,o.kt)("p",null,"\u8fd9\u4e24\u4e2a\u751f\u547d\u5468\u671f\u90fd\u5c06\u5728\u7b2c\u4e00\u6b21\u6e32\u67d3\u65f6\u89e6\u53d1\uff0c\u4f46\u4e0d\u4f1a\u5728\u670d\u52a1\u5668\u7aef\u89e6\u53d1\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u5b89\u5168\u5730\u5728\u5176\u4e2d\u8bbf\u95ee\u6d4f\u89c8\u5668\u5168\u5c40\u53d8\u91cf\u3002"),(0,o.kt)("admonition",{title:"Prefer using React",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5ba2\u6237\u7aef\u6a21\u5757\u7684\u751f\u547d\u5468\u671f\u662f\u5b8c\u5168\u547d\u4ee4\u5f0f\u7684\uff0c\u4f60\u4e0d\u80fd\u5728\u5176\u4e2d\u4f7f\u7528 React \u94a9\u5b50\u6216\u8bbf\u95ee React \u4e0a\u4e0b\u6587\u3002\u5982\u679c\u60a8\u7684\u64cd\u4f5c\u662f\u72b6\u6001\u9a71\u52a8\u7684\u6216\u6d89\u53ca\u590d\u6742\u7684 DOM \u64cd\u4f5c\uff0c\u5219\u5e94\u8be5\u8003\u8651\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"/docs/swizzling"},"\u6405\u62cc\u7ec4\u4ef6"),"\u3002")))}d.isMDXComponent=!0}}]);