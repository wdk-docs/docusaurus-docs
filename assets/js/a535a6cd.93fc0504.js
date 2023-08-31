"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:2},o="\u6269\u5927\u57fa\u7840\u8bbe\u65bd",l={unversionedId:"api/plugin-methods/extend-infrastructure",id:"api/plugin-methods/extend-infrastructure",title:"\u6269\u5927\u57fa\u7840\u8bbe\u65bd",description:"Docusaurus \u6709\u4e00\u4e9b\u57fa\u7840\u8bbe\u65bd\uff0c\u5982\u70ed\u91cd\u65b0\u52a0\u8f7d\u3001CLI \u548c swizzling\uff0c\u53ef\u4ee5\u901a\u8fc7\u5916\u90e8\u63d2\u4ef6\u8fdb\u884c\u6269\u5c55\u3002",source:"@site/docs/api/plugin-methods/extend-infrastructure.mdx",sourceDirName:"api/plugin-methods",slug:"/api/plugin-methods/extend-infrastructure",permalink:"/docs/api/plugin-methods/extend-infrastructure",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/plugin-methods/extend-infrastructure.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"api",previous:{title:"\u751f\u547d\u5468\u671f APIs",permalink:"/docs/api/plugin-methods/lifecycle-apis"},next:{title:"I18n \u751f\u547d\u5468\u671f",permalink:"/docs/api/plugin-methods/i18n-lifecycles"}},p={},s=[{value:"<code>getPathsToWatch()</code>",id:"getPathsToWatch",level:2},{value:"<code>extendCli(cli)</code>",id:"extendCli",level:2},{value:"<code>getThemePath()</code>",id:"getThemePath",level:2},{value:"<code>getTypeScriptThemePath()</code>",id:"getTypeScriptThemePath",level:2},{value:"<code>getSwizzleComponentList()</code>",id:"getSwizzleComponentList",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6269\u5927\u57fa\u7840\u8bbe\u65bd"},"\u6269\u5927\u57fa\u7840\u8bbe\u65bd"),(0,a.kt)("p",null,"Docusaurus \u6709\u4e00\u4e9b\u57fa\u7840\u8bbe\u65bd\uff0c\u5982\u70ed\u91cd\u65b0\u52a0\u8f7d\u3001CLI \u548c swizzling\uff0c\u53ef\u4ee5\u901a\u8fc7\u5916\u90e8\u63d2\u4ef6\u8fdb\u884c\u6269\u5c55\u3002"),(0,a.kt)("h2",{id:"getPathsToWatch"},(0,a.kt)("inlineCode",{parentName:"h2"},"getPathsToWatch()")),(0,a.kt)("p",null,"\u6307\u5b9a\u8981\u76d1\u89c6\u63d2\u4ef6\u548c\u4e3b\u9898\u7684\u8def\u5f84\u3002\u8fd9\u4e9b\u8def\u5f84\u7531\u5f00\u53d1\u670d\u52a1\u5668\u76d1\u89c6\uff0c\u8fd9\u6837\u5f53\u76d1\u89c6\u8def\u5f84\u4e2d\u7684\u5185\u5bb9\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u63d2\u4ef6\u7684\u751f\u547d\u5468\u671f\u5c31\u4f1a\u91cd\u65b0\u52a0\u8f7d\u3002\u8bf7\u6ce8\u610f\uff0c\u63d2\u4ef6\u548c\u4e3b\u9898\u6a21\u5757\u6700\u521d\u662f\u7528 Node \u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"context"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"options"),"\u6765\u8c03\u7528\u7684\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5b83\u4eec\u6765\u67e5\u627e\u6709\u5173\u7ad9\u70b9\u7684\u5fc5\u8981\u76ee\u5f55\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u5c06\u6b64\u7528\u4e8e\u670d\u52a1\u5668\u7aef\u4f7f\u7528\u7684\u6587\u4ef6\uff0c\u56e0\u4e3a\u4e3b\u9898\u6587\u4ef6\u7531 Webpack \u5f00\u53d1\u670d\u52a1\u5668\u81ea\u52a8\u76d1\u89c6\u3002"),(0,a.kt)("p",null,"\u4f8b\u5b50:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',title:'"docusaurus-plugin/src/index.js"'},'const path = require("path");\nmodule.exports = function (context, options) {\n  return {\n    name: "docusaurus-plugin",\n    // highlight-start\n    getPathsToWatch() {\n      const contentPath = path.resolve(context.siteDir, options.path);\n      return [`${contentPath}/**/*.{ts,tsx}`];\n    },\n    // highlight-end\n  };\n};\n')),(0,a.kt)("h2",{id:"extendCli"},(0,a.kt)("inlineCode",{parentName:"h2"},"extendCli(cli)")),(0,a.kt)("p",null,"\u6ce8\u518c\u4e00\u4e2a\u989d\u5916\u7684\u547d\u4ee4\u6765\u589e\u5f3a Docusaurus \u7684 CLI\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"cli"),"\u662f\u4e00\u4e2a",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/commander/v/5.1.0"},"commander"),"\u5bf9\u8c61\u3002"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"commander \u7248\u672c\u5f88\u91cd\u8981!\u6211\u4eec\u4f7f\u7528 commander v5\uff0c\u5e76\u786e\u4fdd\u60a8\u5f15\u7528\u4e86\u6b63\u786e\u7684\u7248\u672c\u6587\u6863\u4ee5\u83b7\u53d6\u53ef\u7528\u7684 api\u3002")),(0,a.kt)("p",null,"\u4f8b\u5b50:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',title:'"docusaurus-plugin/src/index.js"'},'module.exports = function (context, options) {\n  return {\n    name: "docusaurus-plugin",\n    // highlight-start\n    extendCli(cli) {\n      cli\n        .command("roll")\n        .description("Roll a random number between 1 and 1000")\n        .action(() => {\n          console.log(Math.floor(Math.random() * 1000 + 1));\n        });\n    },\n    // highlight-end\n  };\n};\n')),(0,a.kt)("h2",{id:"getThemePath"},(0,a.kt)("inlineCode",{parentName:"h2"},"getThemePath()")),(0,a.kt)("p",null,"\u8fd4\u56de\u4e3b\u9898\u7ec4\u4ef6\u6240\u5728\u76ee\u5f55\u7684\u8def\u5f84\u3002\u5f53\u4f60\u7684\u7528\u6237\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"swizzle"),"\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"getThemePath"),"\u88ab\u8c03\u7528\uff0c\u5b83\u8fd4\u56de\u7684\u8def\u5f84\u88ab\u7528\u6765\u627e\u5230\u4f60\u7684\u4e3b\u9898\u7ec4\u4ef6\u3002\u76f8\u5bf9\u8def\u5f84\u662f\u6839\u636e\u5305\u542b\u5165\u53e3\u70b9\u7684\u6587\u4ef6\u5939\u89e3\u6790\u7684\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u4f60\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"getThemePath"),"\u53ef\u4ee5\u662f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="my-theme/src/index.js"',title:'"my-theme/src/index.js"'},'const path = require("path");\n\nmodule.exports = function (context, options) {\n  return {\n    name: "my-theme",\n    // highlight-start\n    getThemePath() {\n      return "./theme";\n    },\n    // highlight-end\n  };\n};\n')),(0,a.kt)("h2",{id:"getTypeScriptThemePath"},(0,a.kt)("inlineCode",{parentName:"h2"},"getTypeScriptThemePath()")),(0,a.kt)("p",null,"\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"getThemePath()"),"\u7c7b\u4f3c\uff0c\u5b83\u5e94\u8be5\u8fd4\u56de TypeScript \u4e3b\u9898\u7ec4\u4ef6\u6e90\u4ee3\u7801\u6240\u5728\u76ee\u5f55\u7684\u8def\u5f84\u3002\u8fd9\u4e2a\u8def\u5f84\u7eaf\u7cb9\u662f\u7528\u6765\u6df7\u5408 TypeScript \u4e3b\u9898\u7ec4\u4ef6\u7684\uff0c\u5e76\u4e14\u8fd9\u4e2a\u8def\u5f84\u4e0b\u7684\u4e3b\u9898\u7ec4\u4ef6\u4e0d\u4f1a\u88ab Webpack \u89e3\u6790\u3002\u56e0\u6b64\uff0c\u5b83\u4e0d\u80fd\u66ff\u4ee3",(0,a.kt)("inlineCode",{parentName:"p"},"getThemePath()"),"\u3002\u901a\u5e38\uff0c\u4f60\u53ef\u4ee5\u8ba9",(0,a.kt)("inlineCode",{parentName:"p"},"getTypeScriptThemePath()"),"\u8fd4\u56de\u7684\u8def\u5f84\u662f\u4f60\u7684\u6e90\u76ee\u5f55\uff0c\u8ba9",(0,a.kt)("inlineCode",{parentName:"p"},"getThemePath()"),"\u8fd4\u56de\u7684\u8def\u5f84\u662f\u7f16\u8bd1\u540e\u7684 JavaScript \u8f93\u51fa\u3002"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e TypeScript \u4e3b\u9898\u4f5c\u8005:\u5f3a\u70c8\u5efa\u8bae\u4f60\u5c3d\u53ef\u80fd\u8ba9\u7f16\u8bd1\u540e\u7684\u8f93\u51fa\u5177\u6709\u4eba\u7c7b\u53ef\u8bfb\u6027\u3002\u53ea\u5220\u9664\u7c7b\u578b\u6ce8\u91ca\uff0c\u4e0d\u8981\u7ffb\u8bd1\u4efb\u4f55\u8bed\u6cd5\uff0c\u56e0\u4e3a\u5b83\u4eec\u5c06\u7531 Webpack \u7684 Babel \u52a0\u8f7d\u5668\u6839\u636e\u76ee\u6807\u6d4f\u89c8\u5668\u7248\u672c\u6765\u5904\u7406\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u60a8\u8fd8\u5e94\u8be5\u4f7f\u7528 Prettier \u683c\u5f0f\u5316\u8fd9\u4e9b\u6587\u4ef6\u3002\u8bb0\u4f4f\u2014\u2014js \u6587\u4ef6\u53ef\u4ee5\u800c\u4e14\u5c06\u4f1a\u88ab\u4f60\u7684\u7528\u6237\u76f4\u63a5\u4f7f\u7528\u3002")),(0,a.kt)("p",null,"\u4f8b\u5b50:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="my-theme/src/index.js"',title:'"my-theme/src/index.js"'},'const path = require("path");\n\nmodule.exports = function (context, options) {\n  return {\n    name: "my-theme",\n    // highlight-start\n    getThemePath() {\n      // Where compiled JavaScript output lives\n      return "../lib/theme";\n    },\n    getTypeScriptThemePath() {\n      // Where TypeScript source code lives\n      return "../src/theme";\n    },\n    // highlight-end\n  };\n};\n')),(0,a.kt)("h2",{id:"getSwizzleComponentList"},(0,a.kt)("inlineCode",{parentName:"h2"},"getSwizzleComponentList()")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd9\u662f\u4e00\u4e2a\u9759\u6001\u65b9\u6cd5\uff0c\u4e0d\u9644\u52a0\u5230\u4efb\u4f55\u63d2\u4ef6\u5b9e\u4f8b\u3002")),(0,a.kt)("p",null,"\u8fd4\u56de\u88ab\u8ba4\u4e3a\u53ef\u4ee5\u5b89\u5168\u6405\u62cc\u7684\u7a33\u5b9a\u7ec4\u4ef6\u5217\u8868\u3002\u8fd9\u4e9b\u90e8\u4ef6\u5c06\u662f\u53ef\u6405\u62cc\u7684\uff0c\u6ca1\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"--danger"),"\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u7ec4\u4ef6\u90fd\u88ab\u8ba4\u4e3a\u4e0d\u7a33\u5b9a\u3002\u5982\u679c\u8fd4\u56de\u7a7a\u6570\u7ec4\uff0c\u5219\u8ba4\u4e3a\u6240\u6709\u7ec4\u4ef6\u90fd\u4e0d\u7a33\u5b9a\u3002\u5982\u679c\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),"\uff0c\u5219\u8ba4\u4e3a\u6240\u6709\u7ec4\u4ef6\u90fd\u662f\u7a33\u5b9a\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="my-theme/src/index.js"',title:'"my-theme/src/index.js"'},'const swizzleAllowedComponents = [\n  "CodeBlock",\n  "DocSidebar",\n  "Footer",\n  "NotFound",\n  "SearchBar",\n  "hooks/useTheme",\n  "prism-include-languages",\n];\n\nmyTheme.getSwizzleComponentList = () => swizzleAllowedComponents;\n')))}m.isMDXComponent=!0}}]);