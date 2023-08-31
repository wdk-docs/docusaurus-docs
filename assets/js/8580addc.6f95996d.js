"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[94635],{84399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(85893),i=n(11151);const r={sidebar_position:2},o="Extending infrastructure",a={unversionedId:"api/plugin-methods/extend-infrastructure",id:"version-2.2.0/api/plugin-methods/extend-infrastructure",title:"Extending infrastructure",description:"Docusaurus has some infrastructure like hot reloading, CLI, and swizzling, that can be extended by external plugins.",source:"@site/versioned_docs/version-2.2.0/api/plugin-methods/extend-infrastructure.mdx",sourceDirName:"api/plugin-methods",slug:"/api/plugin-methods/extend-infrastructure",permalink:"/docusaurus-docs/docs/2.2.0/api/plugin-methods/extend-infrastructure",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugin-methods/extend-infrastructure.mdx",tags:[],version:"2.2.0",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"api",previous:{title:"Lifecycle APIs",permalink:"/docusaurus-docs/docs/2.2.0/api/plugin-methods/lifecycle-apis"},next:{title:"I18n lifecycles",permalink:"/docusaurus-docs/docs/2.2.0/api/plugin-methods/i18n-lifecycles"}},c={},d=[{value:"<code>getPathsToWatch()</code>",id:"getPathsToWatch",level:2},{value:"<code>extendCli(cli)</code>",id:"extendCli",level:2},{value:"<code>getThemePath()</code>",id:"getThemePath",level:2},{value:"<code>getTypeScriptThemePath()</code>",id:"getTypeScriptThemePath",level:2},{value:"<code>getSwizzleComponentList()</code>",id:"getSwizzleComponentList",level:2}];function h(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre",a:"a",admonition:"admonition",strong:"strong"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"extending-infrastructure",children:"Extending infrastructure"}),"\n",(0,s.jsx)(t.p,{children:"Docusaurus has some infrastructure like hot reloading, CLI, and swizzling, that can be extended by external plugins."}),"\n",(0,s.jsx)(t.h2,{id:"getPathsToWatch",children:(0,s.jsx)(t.code,{children:"getPathsToWatch()"})}),"\n",(0,s.jsxs)(t.p,{children:["Specifies the paths to watch for plugins and themes. The paths are watched by the dev server so that the plugin lifecycles are reloaded when contents in the watched paths change. Note that the plugins and themes modules are initially called with ",(0,s.jsx)(t.code,{children:"context"})," and ",(0,s.jsx)(t.code,{children:"options"})," from Node, which you may use to find the necessary directory information about the site."]}),"\n",(0,s.jsx)(t.p,{children:"Use this for files that are consumed server-side, because theme files are automatically watched by Webpack dev server."}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',children:"const path = require('path');\nmodule.exports = function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // highlight-start\n    getPathsToWatch() {\n      const contentPath = path.resolve(context.siteDir, options.path);\n      return [`${contentPath}/**/*.{ts,tsx}`];\n    },\n    // highlight-end\n  };\n};\n"})}),"\n",(0,s.jsx)(t.h2,{id:"extendCli",children:(0,s.jsx)(t.code,{children:"extendCli(cli)"})}),"\n",(0,s.jsxs)(t.p,{children:["Register an extra command to enhance the CLI of Docusaurus. ",(0,s.jsx)(t.code,{children:"cli"})," is a ",(0,s.jsx)(t.a,{href:"https://www.npmjs.com/package/commander/v/5.1.0",children:"commander"})," object."]}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsx)(t.p,{children:"The commander version matters! We use commander v5, and make sure you are referring to the right version documentation for available APIs."})}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',children:"module.exports = function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // highlight-start\n    extendCli(cli) {\n      cli\n        .command('roll')\n        .description('Roll a random number between 1 and 1000')\n        .action(() => {\n          console.log(Math.floor(Math.random() * 1000 + 1));\n        });\n    },\n    // highlight-end\n  };\n};\n"})}),"\n",(0,s.jsx)(t.h2,{id:"getThemePath",children:(0,s.jsx)(t.code,{children:"getThemePath()"})}),"\n",(0,s.jsxs)(t.p,{children:["Returns the path to the directory where the theme components can be found. When your users call ",(0,s.jsx)(t.code,{children:"swizzle"}),", ",(0,s.jsx)(t.code,{children:"getThemePath"})," is called and its returned path is used to find your theme components. Relative paths are resolved against the folder containing the entry point."]}),"\n",(0,s.jsxs)(t.p,{children:["For example, your ",(0,s.jsx)(t.code,{children:"getThemePath"})," can be:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'title="my-theme/src/index.js"',children:"const path = require('path');\n\nmodule.exports = function (context, options) {\n  return {\n    name: 'my-theme',\n    // highlight-start\n    getThemePath() {\n      return './theme';\n    },\n    // highlight-end\n  };\n};\n"})}),"\n",(0,s.jsx)(t.h2,{id:"getTypeScriptThemePath",children:(0,s.jsx)(t.code,{children:"getTypeScriptThemePath()"})}),"\n",(0,s.jsxs)(t.p,{children:["Similar to ",(0,s.jsx)(t.code,{children:"getThemePath()"}),", it should return the path to the directory where the source code of TypeScript theme components can be found. This path is purely for swizzling TypeScript theme components, and theme components under this path will ",(0,s.jsx)(t.strong,{children:"not"})," be resolved by Webpack. Therefore, it is not a replacement for ",(0,s.jsx)(t.code,{children:"getThemePath()"}),". Typically, you can make the path returned by ",(0,s.jsx)(t.code,{children:"getTypeScriptThemePath()"})," be your source directory, and make the path returned by ",(0,s.jsx)(t.code,{children:"getThemePath()"})," be the compiled JavaScript output."]}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsx)(t.p,{children:"For TypeScript theme authors: you are strongly advised to make your compiled output as human-readable as possible. Only strip type annotations and don't transpile any syntaxes, because they will be handled by Webpack's Babel loader based on the targeted browser versions."}),(0,s.jsx)(t.p,{children:"You should also format these files with Prettier. Remember\u2014JS files can and will be directly consumed by your users."})]}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'title="my-theme/src/index.js"',children:"const path = require('path');\n\nmodule.exports = function (context, options) {\n  return {\n    name: 'my-theme',\n    // highlight-start\n    getThemePath() {\n      // Where compiled JavaScript output lives\n      return '../lib/theme';\n    },\n    getTypeScriptThemePath() {\n      // Where TypeScript source code lives\n      return '../src/theme';\n    },\n    // highlight-end\n  };\n};\n"})}),"\n",(0,s.jsx)(t.h2,{id:"getSwizzleComponentList",children:(0,s.jsx)(t.code,{children:"getSwizzleComponentList()"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"This is a static method, not attached to any plugin instance."})}),"\n",(0,s.jsxs)(t.p,{children:["Returns a list of stable components that are considered safe for swizzling. These components will be swizzlable without ",(0,s.jsx)(t.code,{children:"--danger"}),". All components are considered unstable by default. If an empty array is returned, all components are considered unstable. If ",(0,s.jsx)(t.code,{children:"undefined"})," is returned, all components are considered stable."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",metastring:'title="my-theme/src/index.js"',children:"const swizzleAllowedComponents = [\n  'CodeBlock',\n  'DocSidebar',\n  'Footer',\n  'NotFound',\n  'SearchBar',\n  'hooks/useTheme',\n  'prism-include-languages',\n];\n\nmyTheme.getSwizzleComponentList = () => swizzleAllowedComponents;\n"})})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}},11151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>r});var s=n(67294);const i=s.createContext({});function r(e){const t=s.useContext(i);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||o:r(e),s.createElement(i.Provider,{value:a},t)}}}]);