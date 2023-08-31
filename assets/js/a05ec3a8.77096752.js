"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[4098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=c(n),m=p,y=l["".concat(o,".").concat(m)]||l[m]||d[m]||i;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function y(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[l]="string"==typeof e?e:p,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),p=(n(67294),n(3905));const i={description:"Docusaurus is written in TypeScript and provides first-class TypeScript support."},a="TypeScript \u7684\u652f\u6301",s={unversionedId:"typescript-support",id:"typescript-support",title:"TypeScript \u7684\u652f\u6301",description:"Docusaurus is written in TypeScript and provides first-class TypeScript support.",source:"@site/docs/typescript-support.mdx",sourceDirName:".",slug:"/typescript-support",permalink:"/docs/typescript-support",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/typescript-support.mdx",tags:[],version:"current",frontMatter:{description:"Docusaurus is written in TypeScript and provides first-class TypeScript support."},sidebar:"docs",previous:{title:"Playgrounds",permalink:"/docs/playground"},next:{title:"\u6307\u5357",permalink:"/docs/category/\u6307\u5357"}},o={},c=[{value:"\u521d\u59cb\u5316",id:"initialization",level:2},{value:"\u8bbe\u7f6e",id:"setup",level:2},{value:"\u8f93\u5165\u914d\u7f6e\u6587\u4ef6",id:"typing-config",level:2},{value:"\u6df7\u5408 TypeScript \u4e3b\u9898\u7ec4\u4ef6",id:"swizzling-typescript-theme-components",level:2}],u={toc:c},l="wrapper";function d(e){let{components:t,...n}=e;return(0,p.kt)(l,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"typescript-\u7684\u652f\u6301"},"TypeScript \u7684\u652f\u6301"),(0,p.kt)("p",null,"Docusaurus \u662f\u7528 TypeScript \u7f16\u5199\u7684\uff0c\u5e76\u63d0\u4f9b\u4e00\u6d41\u7684 TypeScript \u652f\u6301\u3002"),(0,p.kt)("h2",{id:"initialization"},"\u521d\u59cb\u5316"),(0,p.kt)("p",null,"Docusaurus \u652f\u6301\u7f16\u5199\u548c\u4f7f\u7528 TypeScript \u4e3b\u9898\u7ec4\u4ef6\u3002\u5982\u679c init \u6a21\u677f\u63d0\u4f9b\u4e86\u4e00\u4e2a TypeScript \u53d8\u4f53\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528",(0,p.kt)("inlineCode",{parentName:"p"},"--typescript"),"\u6807\u5fd7\u76f4\u63a5\u521d\u59cb\u5316\u4e00\u4e2a\u5b8c\u5168\u652f\u6301 TypeScript \u7684\u7ad9\u70b9\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-docusaurus@latest my-website classic --typescript\n")),(0,p.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e9b\u5982\u4f55\u5c06\u73b0\u6709\u9879\u76ee\u8fc1\u79fb\u5230 TypeScript \u7684\u6307\u5357\u3002"),(0,p.kt)("h2",{id:"setup"},"\u8bbe\u7f6e"),(0,p.kt)("p",null,"\u8981\u5f00\u59cb\u4f7f\u7528 TypeScript\uff0c\u5728\u4f60\u7684\u9879\u76ee\u4e2d\u6dfb\u52a0",(0,p.kt)("inlineCode",{parentName:"p"},"@docusaurus/module-type-aliases"),"\u548c\u57fa\u672c TS \u914d\u7f6e:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install --save-dev typescript @docusaurus/module-type-aliases @docusaurus/tsconfig\n")),(0,p.kt)("p",null,"\u7136\u540e\u5c06",(0,p.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"\u6dfb\u52a0\u5230\u4f60\u7684\u9879\u76ee\u6839\u76ee\u5f55\uff0c\u5185\u5bb9\u5982\u4e0b:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'},'{\n  "extends": "@docusaurus/tsconfig",\n  "compilerOptions": {\n    "baseUrl": "."\n  }\n}\n')),(0,p.kt)("p",null,"Docusaurus \u4e0d\u4f1a\u4f7f\u7528\u8fd9\u4e2a",(0,p.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"\u6765\u7f16\u8bd1\u4f60\u7684\u9879\u76ee\u3002\u6dfb\u52a0\u5b83\u53ea\u662f\u4e3a\u4e86\u66f4\u597d\u7684\u7f16\u8f91\u5668\u4f53\u9a8c\uff0c\u5c3d\u7ba1\u60a8\u53ef\u4ee5\u9009\u62e9\u8fd0\u884c",(0,p.kt)("inlineCode",{parentName:"p"},"tsc"),"\u6765\u4e3a\u81ea\u5df1\u6216\u5728 CI \u4e0a\u952e\u5165\u68c0\u67e5\u4ee3\u7801\u3002"),(0,p.kt)("p",null,"\u73b0\u5728\u4f60\u53ef\u4ee5\u5f00\u59cb\u7f16\u5199 TypeScript \u4e3b\u9898\u7ec4\u4ef6\u4e86\u3002"),(0,p.kt)("h2",{id:"typing-config"},"\u8f93\u5165\u914d\u7f6e\u6587\u4ef6"),(0,p.kt)("p",null,"\u5728 Docusaurus \u4e2d",(0,p.kt)("strong",{parentName:"p"},"\u4e0d\u53ef\u80fd"),"\u4f7f\u7528 TypeScript \u914d\u7f6e\u6587\u4ef6\uff0c\u9664\u975e\u4f60\u81ea\u5df1\u628a\u5b83\u7f16\u8bd1\u6210 JavaScript\u3002"),(0,p.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u4f7f\u7528",(0,p.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html"},"JSDoc \u7c7b\u578b\u6ce8\u91ca"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'// highlight-next-line\n// @ts-check\n\n// highlight-next-line\n/** @type {import(\'@docusaurus/types\').Plugin} */\nfunction MyPlugin(context, options) {\n  return {\n    name: "my-plugin",\n  };\n}\n\n// highlight-next-line\n/** @type {import(\'@docusaurus/types\').Config} */\nconst config = {\n  title: "Docusaurus",\n  tagline: "Build optimized websites quickly, focus on your content",\n  organizationName: "facebook",\n  projectName: "docusaurus",\n  plugins: [MyPlugin],\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      // highlight-next-line\n      /** @type {import(\'@docusaurus/preset-classic\').Options} */\n      ({\n        docs: {\n          path: "docs",\n          sidebarPath: "sidebars.js",\n        },\n        blog: {\n          path: "blog",\n          postsPerPage: 5,\n        },\n      }),\n    ],\n  ],\n  themeConfig:\n    // highlight-next-line\n    /** @type {import(\'@docusaurus/preset-classic\').ThemeConfig} */\n    ({\n      colorMode: {\n        defaultMode: "dark",\n      },\n      navbar: {\n        hideOnScroll: true,\n        title: "Docusaurus",\n        logo: {\n          alt: "Docusaurus Logo",\n          src: "img/docusaurus.svg",\n          srcDark: "img/docusaurus_keytar.svg",\n        },\n      },\n    }),\n};\n\nmodule.exports = config;\n')),(0,p.kt)("admonition",{type:"tip"},(0,p.kt)("p",{parentName:"admonition"},"\u7c7b\u578b\u6ce8\u91ca\u975e\u5e38\u6709\u7528\uff0c\u53ef\u4ee5\u5e2e\u52a9\u60a8\u7684 IDE \u7406\u89e3\u914d\u7f6e\u5bf9\u8c61\u7684\u7c7b\u578b!"),(0,p.kt)("p",{parentName:"admonition"},"\u6700\u597d\u7684 IDEs (VS Code, WebStorm, IntelliJ...)\u4f1a\u63d0\u4f9b\u5f88\u597d\u7684\u81ea\u52a8\u5b8c\u6210\u4f53\u9a8c\u3002")),(0,p.kt)("admonition",{type:"info"},(0,p.kt)("p",{parentName:"admonition"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cDocusaurus TypeScript \u914d\u7f6e\u4e0d\u4f1a\u5bf9 JavaScript \u6587\u4ef6\u8fdb\u884c\u7c7b\u578b\u68c0\u67e5\u3002"),(0,p.kt)("p",{parentName:"admonition"},(0,p.kt)("inlineCode",{parentName:"p"},"// @ts-check"),"\u6ce8\u91ca\u786e\u4fdd\u5728\u8fd0\u884c",(0,p.kt)("inlineCode",{parentName:"p"},"npx tsc"),"\u65f6\u6b63\u786e\u68c0\u67e5\u914d\u7f6e\u6587\u4ef6\u7684\u7c7b\u578b\u3002")),(0,p.kt)("h2",{id:"swizzling-typescript-theme-components"},"\u6df7\u5408 TypeScript \u4e3b\u9898\u7ec4\u4ef6"),(0,p.kt)("p",null,"\u5bf9\u4e8e\u652f\u6301 TypeScript \u4e3b\u9898\u7ec4\u4ef6\u7684\u4e3b\u9898\uff0c\u4f60\u53ef\u4ee5\u5728",(0,p.kt)("inlineCode",{parentName:"p"},"swizzle"),"\u547d\u4ee4\u540e\u9762\u52a0\u4e0a",(0,p.kt)("inlineCode",{parentName:"p"},"--typescript"),"\u6807\u5fd7\u6765\u83b7\u53d6 TypeScript \u7684\u6e90\u4ee3\u7801\u3002\n\u4f8b\u5982\uff0c\u4e0b\u9762\u7684\u547d\u4ee4\u5c06\u751f\u6210",(0,p.kt)("inlineCode",{parentName:"p"},"index.tsx"),"\u548c",(0,p.kt)("inlineCode",{parentName:"p"},"styles.module.css"),"\u5230",(0,p.kt)("inlineCode",{parentName:"p"},"src/theme/Footer"),"\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm run swizzle @docusaurus/theme-classic Footer -- --typescript\n")),(0,p.kt)("p",null,"\u6240\u6709\u5b98\u65b9 Docusaurus \u4e3b\u9898\u90fd\u652f\u6301 TypeScript \u4e3b\u9898\u7ec4\u4ef6\uff0c\u5305\u62ec",(0,p.kt)("a",{parentName:"p",href:"/docs/api/themes/@docusaurus/theme-classic"},(0,p.kt)("inlineCode",{parentName:"a"},"theme-classic")),"\uff0c ",(0,p.kt)("a",{parentName:"p",href:"/docs/api/themes/@docusaurus/theme-live-codeblock"},(0,p.kt)("inlineCode",{parentName:"a"},"theme-live-codeblock")),"\u548c",(0,p.kt)("a",{parentName:"p",href:"/docs/api/themes/@docusaurus/theme-search-algolia"},(0,p.kt)("inlineCode",{parentName:"a"},"theme-search-algolia")),"\u3002\u5982\u679c\u4f60\u662f Docusaurus \u4e3b\u9898\u5305\u7684\u4f5c\u8005\uff0c\u60f3\u8981\u6dfb\u52a0 TypeScript \u652f\u6301\uff0c\u8bf7\u53c2\u9605",(0,p.kt)("a",{parentName:"p",href:"/docs/api/plugin-methods/extend-infrastructure#getTypeScriptThemePath"},"\u751f\u547d\u5468\u671f api \u6587\u6863"),"\u3002"))}d.isMDXComponent=!0}}]);