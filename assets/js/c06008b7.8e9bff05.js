"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[94076],{98829:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>p});var t=s(85893),i=s(11151),r=s(19573),a=s(30562),o=s(92101);const d={slug:"/sidebar"},c="Sidebar",l={unversionedId:"guides/docs/sidebar/index",id:"version-2.0.1/guides/docs/sidebar/index",title:"Sidebar",description:"Creating a sidebar is useful to:",source:"@site/versioned_docs/version-2.0.1/guides/docs/sidebar/index.mdx",sourceDirName:"guides/docs/sidebar",slug:"/sidebar",permalink:"/docusaurus-docs/docs/2.0.1/sidebar",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/sidebar/index.mdx",tags:[],version:"2.0.1",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",frontMatter:{slug:"/sidebar"},sidebar:"docs",previous:{title:"Create a doc",permalink:"/docusaurus-docs/docs/2.0.1/create-doc"},next:{title:"Sidebar items",permalink:"/docusaurus-docs/docs/2.0.1/sidebar/items"}},u={},p=[{value:"Default sidebar",id:"default-sidebar",level:2},{value:"Sidebar object",id:"sidebar-object",level:2},{value:"Theme configuration",id:"theme-configuration",level:2},{value:"Hideable sidebar",id:"hideable-sidebar",level:3},{value:"Auto-collapse sidebar categories",id:"auto-collapse-sidebar-categories",level:3},{value:"Passing custom props",id:"passing-custom-props",level:2},{value:"Sidebar Breadcrumbs",id:"sidebar-breadcrumbs",level:2},{value:"Complex sidebars example",id:"complex-sidebars-example",level:2}];function g(e){const n=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",strong:"strong",ol:"ol",a:"a",code:"code",pre:"pre",h2:"h2",h3:"h3"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"sidebar",children:"Sidebar"}),"\n",(0,t.jsx)(n.p,{children:"Creating a sidebar is useful to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Group multiple ",(0,t.jsx)(n.strong,{children:"related documents"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Display a sidebar"})," on each of those documents"]}),"\n",(0,t.jsxs)(n.li,{children:["Provide ",(0,t.jsx)(n.strong,{children:"paginated navigation"}),", with next/previous button"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"To use sidebars on your Docusaurus site:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Define a file that exports a dictionary of ",(0,t.jsx)(n.a,{href:"#sidebar-object",children:"sidebar objects"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Pass this object into the ",(0,t.jsx)(n.code,{children:"@docusaurus/plugin-docs"})," plugin directly or via ",(0,t.jsx)(n.code,{children:"@docusaurus/preset-classic"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          sidebarPath: require.resolve('./sidebars.js'),\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"This section serves as an overview of miscellaneous features of the doc sidebar. In the following sections, we will more systematically introduce the following concepts:"}),"\n","\n",(0,t.jsx)(r.Z,{items:(0,a.jA)().items}),"\n",(0,t.jsx)(n.h2,{id:"default-sidebar",children:"Default sidebar"}),"\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.code,{children:"sidebarPath"})," is unspecified, Docusaurus ",(0,t.jsx)(n.a,{href:"/docusaurus-docs/docs/2.0.1/sidebar/autogenerated",children:"automatically generates a sidebar"})," for you, by using the filesystem structure of the ",(0,t.jsx)(n.code,{children:"docs"})," folder:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  mySidebar: [\n    {\n      type: 'autogenerated',\n      dirName: '.', // generate sidebar from the docs folder (or versioned_docs/<version>)\n    },\n  ],\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also define your sidebars explicitly."}),"\n",(0,t.jsx)(n.h2,{id:"sidebar-object",children:"Sidebar object"}),"\n",(0,t.jsx)(n.p,{children:"A sidebar at its crux is a hierarchy of categories, doc links, and other hyperlinks."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type Sidebar =\n  // Normal syntax\n  | SidebarItem[]\n  // Shorthand syntax\n  | {[categoryLabel: string]: SidebarItem[]};\n"})}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  mySidebar: [\n    {\n      type: 'category',\n      label: 'Getting Started',\n      items: [\n        {\n          type: 'doc',\n          id: 'doc1',\n        },\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Docusaurus',\n      items: [\n        {\n          type: 'doc',\n          id: 'doc2',\n        },\n        {\n          type: 'doc',\n          id: 'doc3',\n        },\n      ],\n    },\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This is a sidebars file that exports one sidebar, called ",(0,t.jsx)(n.code,{children:"mySidebar"}),". It has three top-level items: two categories and one external link. Within each category, there are a few doc links."]}),"\n",(0,t.jsxs)(n.p,{children:["A sidebars file can contain ",(0,t.jsx)(n.a,{href:"/docusaurus-docs/docs/2.0.1/sidebar/multiple-sidebars",children:(0,t.jsx)(n.strong,{children:"multiple sidebar objects"})}),", identified by their object keys."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type SidebarsFile = {\n  [sidebarID: string]: Sidebar;\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"theme-configuration",children:"Theme configuration"}),"\n",(0,t.jsx)(n.h3,{id:"hideable-sidebar",children:"Hideable sidebar"}),"\n",(0,t.jsxs)(n.p,{children:["By enabling the ",(0,t.jsx)(n.code,{children:"themeConfig.docs.sidebar.hideable"})," option, you can make the entire sidebar hideable, allowing users to better focus on the content. This is especially useful when content is consumed on medium-sized screens (e.g. tablets)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  themeConfig: {\n    // highlight-start\n    docs: {\n      sidebar: {\n        hideable: true,\n      },\n    },\n    // highlight-end\n  },\n};\n"})}),"\n",(0,t.jsx)(n.h3,{id:"auto-collapse-sidebar-categories",children:"Auto-collapse sidebar categories"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"themeConfig.docs.sidebar.autoCollapseCategories"})," option would collapse all sibling categories when expanding one category. This saves the user from having too many categories open and helps them focus on the selected section."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  themeConfig: {\n    // highlight-start\n    docs: {\n      sidebar: {\n        autoCollapseCategories: true,\n      },\n    },\n    // highlight-end\n  },\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"passing-custom-props",children:"Passing custom props"}),"\n",(0,t.jsxs)(n.p,{children:["To pass in custom props to a sidebar item, add the optional ",(0,t.jsx)(n.code,{children:"customProps"})," object to any of the items. This is useful to apply site customizations by swizzling React components rendering sidebar items."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"{\n  type: 'doc',\n  id: 'doc1',\n  // highlight-start\n  customProps: {\n    badges: ['new', 'green'],\n    featured: true,\n  },\n  // highlight-end\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"sidebar-breadcrumbs",children:"Sidebar Breadcrumbs"}),"\n",(0,t.jsx)(n.p,{children:'By default, breadcrumbs are rendered at the top, using the "sidebar path" of the current page.'}),"\n",(0,t.jsx)(n.p,{children:"This behavior can be disabled with plugin options:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          breadcrumbs: false,\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"complex-sidebars-example",children:"Complex sidebars example"}),"\n",(0,t.jsx)(n.p,{children:"A real-world example from the Docusaurus site:"}),"\n","\n","\n",(0,t.jsx)(o.Z,{language:"js",title:"sidebars.js",children:s(76322).Z.split("\n").map((e=>!["//","/*","*"].some((n=>e.trim().startsWith(n)))&&e)).filter(Boolean).join("\n")})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(g,e)})):g(e)}},76322:(e,n,s)=>{s.d(n,{Z:()=>t});const t="/**\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n// @ts-check\n\n/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */\nconst sidebars = {\n  docs: [\n    'introduction',\n    {\n      type: 'category',\n      label: 'Getting Started',\n      link: {\n        type: 'generated-index',\n      },\n      collapsed: false,\n      items: [\n        'installation',\n        'configuration',\n        'playground',\n        'typescript-support',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Guides',\n      link: {\n        type: 'generated-index',\n        title: 'Docusaurus Guides',\n        description:\n          \"Let's learn about the most important Docusaurus concepts!\",\n        keywords: ['guides'],\n        image: '/img/docusaurus.png',\n      },\n      items: [\n        'guides/creating-pages',\n        {\n          type: 'category',\n          label: 'Docs',\n          link: {\n            type: 'doc',\n            id: 'guides/docs/introduction',\n          },\n          items: [\n            'guides/docs/create-doc',\n            {\n              type: 'category',\n              label: 'Sidebar',\n              link: {\n                type: 'doc',\n                id: 'guides/docs/sidebar/index',\n              },\n              items: [\n                'guides/docs/sidebar/items',\n                'guides/docs/sidebar/autogenerated',\n                'guides/docs/sidebar/multiple-sidebars',\n              ],\n            },\n            'guides/docs/versioning',\n            'guides/docs/multi-instance',\n          ],\n        },\n        'blog',\n        {\n          type: 'category',\n          label: 'Markdown Features',\n          link: {\n            type: 'doc',\n            id: 'guides/markdown-features/introduction',\n          },\n          items: [\n            'guides/markdown-features/react',\n            'guides/markdown-features/tabs',\n            'guides/markdown-features/code-blocks',\n            'guides/markdown-features/admonitions',\n            'guides/markdown-features/toc',\n            'guides/markdown-features/assets',\n            'guides/markdown-features/links',\n            'guides/markdown-features/plugins',\n            'guides/markdown-features/math-equations',\n            'guides/markdown-features/diagrams',\n            'guides/markdown-features/head-metadata',\n          ],\n        },\n        'styling-layout',\n        'swizzling',\n        'static-assets',\n        'search',\n        'browser-support',\n        'seo',\n        'using-plugins',\n        'deployment',\n        {\n          type: 'category',\n          label: 'Internationalization',\n          link: {type: 'doc', id: 'i18n/introduction'},\n          items: [\n            {\n              type: 'doc',\n              id: 'i18n/tutorial',\n              label: 'Tutorial',\n            },\n            {\n              type: 'doc',\n              id: 'i18n/git',\n              label: 'Using Git',\n            },\n            {\n              type: 'doc',\n              id: 'i18n/crowdin',\n              label: 'Using Crowdin',\n            },\n          ],\n        },\n        'guides/whats-next',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Advanced Guides',\n      link: {type: 'doc', id: 'advanced/index'},\n      items: [\n        'advanced/architecture',\n        'advanced/plugins',\n        'advanced/routing',\n        'advanced/ssg',\n        'advanced/client',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Migrating from v1 to v2',\n      items: [\n        'migration/migration-overview',\n        'migration/migration-automated',\n        'migration/migration-manual',\n        'migration/migration-versioned-sites',\n        'migration/migration-translated-sites',\n      ],\n    },\n  ],\n  api: [\n    'cli',\n    'docusaurus-core',\n    {\n      type: 'autogenerated',\n      dirName: 'api',\n    },\n  ],\n};\n\nmodule.exports = sidebars;\n"},19573:(e,n,s)=>{s.d(n,{Z:()=>j});var t=s(85893),i=(s(67294),s(86010)),r=s(30562),a=s(61596),o=s(85606),d=s(27692),c=s(24805);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u({href:e,children:n}){return(0,t.jsx)(a.Z,{href:e,className:(0,i.Z)("card padding--lg",l.cardContainer),children:n})}function p({href:e,icon:n,title:s,description:r}){return(0,t.jsxs)(u,{href:e,children:[(0,t.jsxs)(c.Z,{as:"h2",className:(0,i.Z)("text--truncate",l.cardTitle),title:s,children:[n," ",s]}),r&&(0,t.jsx)("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:r,children:r})]})}function g({item:e}){const n=(0,r.LM)(e);return n?(0,t.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(s=e.description)&&void 0!==s?s:(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null;var s}function h({item:e}){const n=(0,o.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var s;const i=(0,r.xz)(null!==(s=e.docId)&&void 0!==s?s:void 0);var a;return(0,t.jsx)(p,{href:e.href,icon:n,title:e.label,description:null!==(a=e.description)&&void 0!==a?a:null==i?void 0:i.description})}function b({item:e}){switch(e.type){case"link":return(0,t.jsx)(h,{item:e});case"category":return(0,t.jsx)(g,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function m(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function f({className:e}){const n=(0,r.jA)();return(0,t.jsx)(j,{items:n.items,className:e})}function j(e){const{items:n,className:s}=e;if(!n)return(0,t.jsx)(f,function(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},t=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),t.forEach((function(n){m(e,n,s[n])}))}return e}({},e));const a=(0,r.MN)(n);return(0,t.jsx)("section",{className:(0,i.Z)("row",s),children:a.map(((e,n)=>(0,t.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,t.jsx)(b,{item:e})},n)))})}},92101:(e,n,s)=>{s.d(n,{Z:()=>a});var t=s(85893),i=(s(67294),s(50191));function r(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function a(e){return(0,t.jsx)(i.Z,function(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},t=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),t.forEach((function(n){r(e,n,s[n])}))}return e}({},e))}},5379:(e,n,s)=>{s.d(n,{Z:()=>u});var t={};s.r(t),s.d(t,{ButtonExample:()=>c});var i=s(67294),r=s(85893);function a(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function o(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},t=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),t.forEach((function(n){a(e,n,s[n])}))}return e}function d(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})),e}function c(e){return(0,r.jsx)("button",d(o({type:"button"},e),{style:o({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}function l(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}const u=function(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},t=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),t.forEach((function(n){l(e,n,s[n])}))}return e}({React:i},i,t)}}]);