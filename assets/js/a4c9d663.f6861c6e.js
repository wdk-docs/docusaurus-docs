"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[7666],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var u=a.createContext({}),r=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=r(e.components);return a.createElement(u.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=r(t),g=s,m=d["".concat(u,".").concat(g)]||d[g]||c[g]||i;return t?a.createElement(m,l(l({ref:n},p),{},{components:t})):a.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[d]="string"==typeof e?e:s,l[1]=o;for(var r=2;r<i;r++)l[r]=t[r];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},42706:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>r});var a=t(87462),s=(t(67294),t(3905));const i={},l="\u4f7f\u7528\u63d2\u4ef6",o={unversionedId:"using-plugins",id:"using-plugins",title:"\u4f7f\u7528\u63d2\u4ef6",description:"Docusaurus \u6838\u5fc3\u5e76\u6ca1\u6709\u63d0\u4f9b\u4efb\u4f55\u81ea\u5df1\u7684\u7279\u6027\u3002 All features are delegated to individual plugins: the docs feature provided by the docs plugin; the blog feature provided by the blog plugin; or individual pages provided by the pages plugin. If there are no plugins installed, the site won't contain any routes.",source:"@site/docs/using-plugins.mdx",sourceDirName:".",slug:"/using-plugins",permalink:"/docs/using-plugins",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/using-plugins.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"SEO",permalink:"/docs/seo"},next:{title:"\u90e8\u7f72",permalink:"/docs/deployment"}},u={},r=[{value:"Installing a plugin",id:"installing-a-plugin",level:2},{value:"Configuring plugins",id:"configuring-plugins",level:2},{value:"Multi-instance plugins and plugin IDs",id:"multi-instance-plugins-and-plugin-ids",level:2},{value:"Using themes",id:"using-themes",level:2},{value:"Using presets",id:"using-presets",level:2},{value:"<code>@docusaurus/preset-classic</code>",id:"docusauruspreset-classic",level:3},{value:"Installing presets",id:"installing-presets",level:3},{value:"Creating presets",id:"creating-presets",level:3},{value:"Module shorthands",id:"module-shorthands",level:2}],p={toc:r},d="wrapper";function c(e){let{components:n,...t}=e;return(0,s.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u4f7f\u7528\u63d2\u4ef6"},"\u4f7f\u7528\u63d2\u4ef6"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Docusaurus \u6838\u5fc3\u5e76\u6ca1\u6709\u63d0\u4f9b\u4efb\u4f55\u81ea\u5df1\u7684\u7279\u6027\u3002")," All features are delegated to individual plugins: the ",(0,s.kt)("a",{parentName:"p",href:"/docs/docs-introduction"},"docs")," feature provided by the ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/plugins/@docusaurus/plugin-content-docs"},"docs plugin"),"; the ",(0,s.kt)("a",{parentName:"p",href:"/docs/blog"},"blog")," feature provided by the ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/plugins/@docusaurus/plugin-content-blog"},"blog plugin"),"; or individual ",(0,s.kt)("a",{parentName:"p",href:"/docs/creating-pages"},"pages")," provided by the ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/plugins/@docusaurus/plugin-content-pages"},"pages plugin"),". If there are no plugins installed, the site won't contain any routes."),(0,s.kt)("p",null,"You may not need to install common plugins one-by-one though: they can be distributed as a bundle in a ",(0,s.kt)("a",{parentName:"p",href:"#using-presets"},"preset"),". For most users, plugins are configured through the preset configuration."),(0,s.kt)("p",null,"We maintain a ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/plugins"},"list of official plugins"),", but the community has also created some ",(0,s.kt)("a",{parentName:"p",href:"/community/resources#community-plugins"},"unofficial plugins"),". If you want to add any feature: autogenerating doc pages, executing custom scripts, integrating other services... be sure to check out the list: someone may have implemented it for you!"),(0,s.kt)("p",null,"If you are feeling energetic, you can also read ",(0,s.kt)("a",{parentName:"p",href:"/docs/advanced/plugins"},"the plugin guide")," or ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/plugin-methods/"},"plugin method references")," for how to make a plugin yourself."),(0,s.kt)("h2",{id:"installing-a-plugin"},"Installing a plugin"),(0,s.kt)("p",null,"A plugin is usually an npm package, so you install them like other npm packages using npm."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install --save docusaurus-plugin-name\n")),(0,s.kt)("p",null,"Then you add it in your site's ",(0,s.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"'s ",(0,s.kt)("inlineCode",{parentName:"p"},"plugins")," option:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // ...\n  // highlight-next-line\n  plugins: ["@docusaurus/plugin-content-pages"],\n};\n')),(0,s.kt)("p",null,"Docusaurus can also load plugins from your local directory, with something like the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // ...\n  // highlight-next-line\n  plugins: ["./src/plugins/docusaurus-local-plugin"],\n};\n')),(0,s.kt)("p",null,"Paths should be absolute or relative to the config file."),(0,s.kt)("h2",{id:"configuring-plugins"},"Configuring plugins"),(0,s.kt)("p",null,"For the most basic usage of plugins, you can provide just the plugin name or the path to the plugin."),(0,s.kt)("p",null,'However, plugins can have options specified by wrapping the name and an options object in a two-member tuple inside your config. This style is usually called "Babel Style".'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // ...\n  plugins: [\n    // highlight-start\n    [\n      "@docusaurus/plugin-xxx",\n      {\n        /* options */\n      },\n    ],\n    // highlight-end\n  ],\n};\n')),(0,s.kt)("p",null,"\u4f8b\u5b50:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  plugins: [\n    // Basic usage.\n    "@docusaurus/plugin-debug",\n\n    // With options object (babel style)\n    [\n      "@docusaurus/plugin-sitemap",\n      {\n        changefreq: "weekly",\n      },\n    ],\n  ],\n};\n')),(0,s.kt)("h2",{id:"multi-instance-plugins-and-plugin-ids"},"Multi-instance plugins and plugin IDs"),(0,s.kt)("p",null,"All Docusaurus content plugins can support multiple plugin instances. For example, it may be useful to have ",(0,s.kt)("a",{parentName:"p",href:"/docs/docs-multi-instance"},"multiple docs plugin instances")," or ",(0,s.kt)("a",{parentName:"p",href:"/docs/blog#multiple-blogs"},"multiple blogs"),". It is required to assign a unique ID to each plugin instance, and by default, the plugin ID is ",(0,s.kt)("inlineCode",{parentName:"p"},"default"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  plugins: [\n    [\n      "@docusaurus/plugin-content-docs",\n      {\n        // highlight-next-line\n        id: "docs-1",\n        // other options\n      },\n    ],\n    [\n      "@docusaurus/plugin-content-docs",\n      {\n        // highlight-next-line\n        id: "docs-2",\n        // other options\n      },\n    ],\n  ],\n};\n')),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},'At most one plugin instance can be the "default plugin instance", by omitting the ',(0,s.kt)("inlineCode",{parentName:"p"},"id")," attribute, or using ",(0,s.kt)("inlineCode",{parentName:"p"},"id: 'default'"),".")),(0,s.kt)("h2",{id:"using-themes"},"Using themes"),(0,s.kt)("p",null,"Themes are loaded in the exact same way as plugins. From the consumer perspective, the ",(0,s.kt)("inlineCode",{parentName:"p"},"themes")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"plugins")," entries are interchangeable when installing and configuring a plugin. The only nuance is that themes are loaded after plugins, and it's possible for ",(0,s.kt)("a",{parentName:"p",href:"/docs/swizzling#theme-aliases"},"a theme to override a plugin's default theme components"),"."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"The ",(0,s.kt)("inlineCode",{parentName:"p"},"themes")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"plugins")," options lead to different ",(0,s.kt)("a",{parentName:"p",href:"#module-shorthands"},"shorthand resolutions"),", so if you want to take advantage of shorthands, be sure to use the right entry!")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // ...\n  // highlight-next-line\n  themes: ["@docusaurus/theme-classic", "@docusaurus/theme-live-codeblock"],\n};\n')),(0,s.kt)("h2",{id:"using-presets"},"Using presets"),(0,s.kt)("p",null,"Presets are bundles of plugins and themes. For example, instead of letting you register and configure ",(0,s.kt)("inlineCode",{parentName:"p"},"@docusaurus/plugin-content-docs"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"@docusaurus/plugin-content-blog"),", etc. one after the other in the config file, we have ",(0,s.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic")," preset allows you to configure them in one centralized place."),(0,s.kt)("h3",{id:"docusauruspreset-classic"},(0,s.kt)("inlineCode",{parentName:"h3"},"@docusaurus/preset-classic")),(0,s.kt)("p",null,"The classic preset is shipped by default to new Docusaurus websites created with ",(0,s.kt)("a",{parentName:"p",href:"/docs/installation#scaffold-project-website"},(0,s.kt)("inlineCode",{parentName:"a"},"create-docusaurus")),". It contains the following themes and plugins:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/themes/configuration"},(0,s.kt)("inlineCode",{parentName:"a"},"@docusaurus/theme-classic"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/themes/@docusaurus/theme-search-algolia"},(0,s.kt)("inlineCode",{parentName:"a"},"@docusaurus/theme-search-algolia"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/plugins/@docusaurus/plugin-content-docs"},(0,s.kt)("inlineCode",{parentName:"a"},"@docusaurus/plugin-content-docs"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/plugins/@docusaurus/plugin-content-blog"},(0,s.kt)("inlineCode",{parentName:"a"},"@docusaurus/plugin-content-blog"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/plugins/@docusaurus/plugin-content-pages"},(0,s.kt)("inlineCode",{parentName:"a"},"@docusaurus/plugin-content-pages"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/plugins/@docusaurus/plugin-debug"},(0,s.kt)("inlineCode",{parentName:"a"},"@docusaurus/plugin-debug"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/plugins/@docusaurus/plugin-google-gtag"},(0,s.kt)("inlineCode",{parentName:"a"},"@docusaurus/plugin-google-gtag"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/plugins/@docusaurus/plugin-google-tag-manager"},(0,s.kt)("inlineCode",{parentName:"a"},"@docusaurus/plugin-google-tag-manager"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/plugins/@docusaurus/plugin-google-analytics"},(0,s.kt)("inlineCode",{parentName:"a"},"@docusaurus/plugin-google-analytics"))," (",(0,s.kt)("strong",{parentName:"li"},"deprecated"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/api/plugins/@docusaurus/plugin-sitemap"},(0,s.kt)("inlineCode",{parentName:"a"},"@docusaurus/plugin-sitemap")))),(0,s.kt)("p",null,"The classic preset will relay each option entry to the respective plugin/theme."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  presets: [\n    [\n      "@docusaurus/preset-classic",\n      {\n        // Debug defaults to true in dev, false in prod\n        debug: undefined,\n        // Will be passed to @docusaurus/theme-classic.\n        theme: {\n          customCss: [require.resolve("./src/css/custom.css")],\n        },\n        // Will be passed to @docusaurus/plugin-content-docs (false to disable)\n        docs: {},\n        // Will be passed to @docusaurus/plugin-content-blog (false to disable)\n        blog: {},\n        // Will be passed to @docusaurus/plugin-content-pages (false to disable)\n        pages: {},\n        // Will be passed to @docusaurus/plugin-sitemap (false to disable)\n        sitemap: {},\n        // Will be passed to @docusaurus/plugin-google-gtag (only enabled when explicitly specified)\n        gtag: {},\n        // Will be passed to @docusaurus/plugin-google-tag-manager (only enabled when explicitly specified)\n        googleTagManager: {},\n        // DEPRECATED: Will be passed to @docusaurus/plugin-google-analytics (only enabled when explicitly specified)\n        googleAnalytics: {},\n      },\n    ],\n  ],\n};\n')),(0,s.kt)("h3",{id:"installing-presets"},"Installing presets"),(0,s.kt)("p",null,"A preset is usually an npm package, so you install them like other npm packages using npm."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install --save @docusaurus/preset-classic\n")),(0,s.kt)("p",null,"Then, add it in your site's ",(0,s.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),"'s ",(0,s.kt)("inlineCode",{parentName:"p"},"presets")," option:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // ...\n  // highlight-next-line\n  presets: ["@docusaurus/preset-classic"],\n};\n')),(0,s.kt)("p",null,"Preset paths can be relative to the config file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  // ...\n  // highlight-next-line\n  presets: ["./src/presets/docusaurus-local-preset"],\n};\n')),(0,s.kt)("h3",{id:"creating-presets"},"Creating presets"),(0,s.kt)("p",null,"A preset is a function with the same shape as the ",(0,s.kt)("a",{parentName:"p",href:"/docs/api/plugin-methods/#plugin-constructor"},"plugin constructor"),". It should return an object of ",(0,s.kt)("inlineCode",{parentName:"p"},"{ plugins: PluginConfig[], themes: PluginConfig[] }"),", in the same as how they are accepted in the site config. For example, you can specify a preset that includes the following themes and plugins:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/presets/docusaurus-preset-multi-docs.js"',title:'"src/presets/docusaurus-preset-multi-docs.js"'},'module.exports = function preset(context, opts = {}) {\n  return {\n    themes: [["docusaurus-theme-awesome", opts.theme]],\n    plugins: [\n      // Using three docs plugins at the same time!\n      // Assigning a unique ID for each without asking the user to do it\n      ["@docusaurus/plugin-content-docs", { ...opts.docs1, id: "docs1" }],\n      ["@docusaurus/plugin-content-docs", { ...opts.docs2, id: "docs2" }],\n      ["@docusaurus/plugin-content-docs", { ...opts.docs3, id: "docs3" }],\n    ],\n  };\n};\n')),(0,s.kt)("p",null,"Then in your Docusaurus config, you may configure the preset:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  presets: [\n    // highlight-start\n    [\n      "./src/presets/docusaurus-preset-multi-docs.js",\n      {\n        theme: { hello: "world" },\n        docs1: { path: "/docs" },\n        docs2: { path: "/community" },\n        docs3: { path: "/api" },\n      },\n    ],\n    // highlight-end\n  ],\n};\n')),(0,s.kt)("p",null,"This is equivalent of doing:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  themes: [["docusaurus-theme-awesome", { hello: "world" }]],\n  plugins: [\n    ["@docusaurus/plugin-content-docs", { id: "docs1", path: "/docs" }],\n    ["@docusaurus/plugin-content-docs", { id: "docs2", path: "/community" }],\n    ["@docusaurus/plugin-content-docs", { id: "docs3", path: "/api" }],\n  ],\n};\n')),(0,s.kt)("p",null,"This is especially useful when some plugins and themes are intended to be used together. You can even link their options together, e.g. pass one option to multiple plugins."),(0,s.kt)("h2",{id:"module-shorthands"},"Module shorthands"),(0,s.kt)("p",null,"Docusaurus supports shorthands for plugins, themes, and presets. When it sees a plugin/theme/preset name, it tries to load one of the following, in that order:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"[name]")," (like ",(0,s.kt)("inlineCode",{parentName:"li"},"content-docs"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"@docusaurus/[moduleType]-[name]")," (like ",(0,s.kt)("inlineCode",{parentName:"li"},"@docusaurus/plugin-content-docs"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"docusaurus-[moduleType]-[name]")," (like ",(0,s.kt)("inlineCode",{parentName:"li"},"docusaurus-plugin-content-docs"),")")),(0,s.kt)("p",null,"where ",(0,s.kt)("inlineCode",{parentName:"p"},"moduleType")," is one of ",(0,s.kt)("inlineCode",{parentName:"p"},"'preset'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'theme'"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"'plugin'"),", depending on which field the module name is declared in. The first module name that's successfully found is loaded."),(0,s.kt)("p",null,"If the name is scoped (beginning with ",(0,s.kt)("inlineCode",{parentName:"p"},"@"),"), the name is first split into scope and package name by the first slash:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"@scope\n^----^\n scope  (no name!)\n\n@scope/awesome\n^----^ ^-----^\n scope   name\n\n@scope/awesome/main\n^----^ ^----------^\n scope     name\n")),(0,s.kt)("p",null,"If there is no name (like ",(0,s.kt)("inlineCode",{parentName:"p"},"@jquery"),"), ",(0,s.kt)("inlineCode",{parentName:"p"},"[scope]/docusaurus-[moduleType]")," (i.e. ",(0,s.kt)("inlineCode",{parentName:"p"},"@jquery/docusaurus-plugin"),") is loaded. Otherwise, the following are attempted:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"[scope]/[name]")," (like ",(0,s.kt)("inlineCode",{parentName:"li"},"@jquery/content-docs"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"[scope]/docusaurus-[moduleType]-[name]")," (like ",(0,s.kt)("inlineCode",{parentName:"li"},"@jquery/docusaurus-plugin-content-docs"),")")),(0,s.kt)("p",null,"Below are some examples, for a plugin registered in the ",(0,s.kt)("inlineCode",{parentName:"p"},"plugins")," field. Note that unlike ",(0,s.kt)("a",{parentName:"p",href:"https://eslint.org/docs/user-guide/configuring/plugins#configuring-plugins"},"ESLint")," or ",(0,s.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/options#name-normalization"},"Babel")," where a consistent naming convention for plugins is mandated, Docusaurus permits greater naming freedom, so the resolutions are not certain, but follows the priority defined above."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Declaration"),(0,s.kt)("th",{parentName:"tr",align:null},"May be resolved as"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"awesome")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"docusaurus-plugin-awesome"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"sitemap")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/docs/api/plugins/@docusaurus/plugin-sitemap"},(0,s.kt)("inlineCode",{parentName:"a"},"@docusaurus/plugin-sitemap")))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"@my-company")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"@my-company/docusaurus-plugin")," (the only possible resolution!)")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"@my-company/awesome")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"@my-company/docusaurus-plugin-awesome"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"@my-company/awesome/web")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"@my-company/docusaurus-plugin-awesome/web"))))))}c.isMDXComponent=!0}}]);