"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[77424],{74599:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>g,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>h,toc:()=>u});var t=s(85893),i=s(11151),a=s(51715),r=s(7626),d=s(16212),o=s(19573);const l={toc_max_heading_level:4,slug:"/sidebar/items"},c="Sidebar items",h={unversionedId:"guides/docs/sidebar/items",id:"version-2.4.1/guides/docs/sidebar/items",title:"Sidebar items",description:"We have introduced three types of item types in the example in the previous section autogenerated, which we will explain in detail later.",source:"@site/versioned_docs/version-2.4.1/guides/docs/sidebar/items.mdx",sourceDirName:"guides/docs/sidebar",slug:"/sidebar/items",permalink:"/docusaurus-docs/en/docs/sidebar/items",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/sidebar/items.mdx",tags:[],version:"2.4.1",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{toc_max_heading_level:4,slug:"/sidebar/items"},sidebar:"docs",previous:{title:"Sidebar",permalink:"/docusaurus-docs/en/docs/sidebar"},next:{title:"Autogenerated",permalink:"/docusaurus-docs/en/docs/sidebar/autogenerated"}},g={},u=[{value:"Doc: link to a doc",id:"sidebar-item-doc",level:2},{value:"Link: link to any page",id:"sidebar-item-link",level:2},{value:"HTML: render custom markup",id:"sidebar-item-html",level:2},{value:"Category: create a hierarchy",id:"sidebar-item-category",level:2},{value:"Category links",id:"category-link",level:3},{value:"Generated index page",id:"generated-index-page",level:4},{value:"Doc link",id:"category-doc-link",level:4},{value:"Embedding generated index in doc page",id:"embedding-generated-index-in-doc-page",level:4},{value:"Collapsible categories",id:"collapsible-categories",level:3},{value:"Expanded categories by default",id:"expanded-categories-by-default",level:3},{value:"Using shorthands",id:"using-shorthands",level:2},{value:"Doc shorthand",id:"doc-shorthand",level:3},{value:"Category shorthand",id:"category-shorthand",level:3}];function p(e){const n=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",strong:"strong",a:"a",h2:"h2",pre:"pre",admonition:"admonition",h3:"h3",h4:"h4"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"sidebar-items",children:"Sidebar items"}),"\n","\n","\n",(0,t.jsxs)(n.p,{children:["We have introduced three types of item types in the example in the previous section: ",(0,t.jsx)(n.code,{children:"doc"}),", ",(0,t.jsx)(n.code,{children:"category"}),", and ",(0,t.jsx)(n.code,{children:"link"}),", whose usages are fairly intuitive. We will formally introduce their APIs. There's also a fourth type: ",(0,t.jsx)(n.code,{children:"autogenerated"}),", which we will explain in detail later."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"#sidebar-item-doc",children:"Doc"})}),": link to a doc page, associating it with the sidebar"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"#sidebar-item-link",children:"Link"})}),": link to any internal or external page"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"#sidebar-item-category",children:"Category"})}),": creates a dropdown of sidebar items"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"/docusaurus-docs/en/docs/sidebar/autogenerated",children:"Autogenerated"})}),": generate a sidebar slice automatically"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"#sidebar-item-html",children:"HTML"})}),": renders pure HTML in the item's position"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"/docusaurus-docs/en/docs/sidebar/multiple-sidebars#sidebar-item-ref",children:"*Ref"})}),": link to a doc page, without making the item take part in navigation generation"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"sidebar-item-doc",children:"Doc: link to a doc"}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"doc"})," type to link to a doc page and assign that doc to a sidebar:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type SidebarItemDoc =\n  // Normal syntax\n  | {\n      type: 'doc';\n      id: string;\n      label: string; // Sidebar label text\n      className?: string; // Class name for sidebar label\n      customProps?: Record<string, unknown>; // Custom props\n    }\n\n  // Shorthand syntax\n  | string; // docId shortcut\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  mySidebar: [\n    // Normal syntax:\n    // highlight-start\n    {\n      type: 'doc',\n      id: 'doc1', // document ID\n      label: 'Getting started', // sidebar label\n    },\n    // highlight-end\n\n    // Shorthand syntax:\n    // highlight-start\n    'doc2', // document ID\n    // highlight-end\n  ],\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you use the doc shorthand or ",(0,t.jsx)(n.a,{href:"#sidebar-item-autogenerated",children:"autogenerated"})," sidebar, you would lose the ability to customize the sidebar label through item definition. You can, however, use the ",(0,t.jsx)(n.code,{children:"sidebar_label"})," Markdown front matter within that doc, which has higher precedence over the ",(0,t.jsx)(n.code,{children:"label"})," key in the sidebar item. Similarly, you can use ",(0,t.jsx)(n.code,{children:"sidebar_custom_props"})," to declare custom metadata for a doc page."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"doc"})," item sets an ",(0,t.jsx)(n.a,{href:"#sidebar-association",children:"implicit sidebar association"}),". Don't assign the same doc to multiple sidebars: change the type to ",(0,t.jsx)(n.code,{children:"ref"})," instead."]})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Sidebar custom props is a useful way to propagate arbitrary doc metadata to the client side, so you can get additional information when using any doc-related hook that fetches a doc object."})}),"\n",(0,t.jsx)(n.h2,{id:"sidebar-item-link",children:"Link: link to any page"}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"link"})," type to link to any page (internal or external) that is not a doc."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type SidebarItemLink = {\n  type: 'link';\n  label: string;\n  href: string;\n  className?: string;\n  description?: string;\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  myLinksSidebar: [\n    // highlight-start\n    // External link\n    {\n      type: 'link',\n      label: 'Facebook', // The link label\n      href: 'https://facebook.com', // The external URL\n    },\n    // highlight-end\n\n    // highlight-start\n    // Internal link\n    {\n      type: 'link',\n      label: 'Home', // The link label\n      href: '/', // The internal path\n    },\n    // highlight-end\n  ],\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"sidebar-item-html",children:"HTML: render custom markup"}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"html"})," type to render custom HTML within the item's ",(0,t.jsx)(n.code,{children:"<li>"})," tag."]}),"\n",(0,t.jsx)(n.p,{children:"This can be useful for inserting custom items such as dividers, section titles, ads, and images."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type SidebarItemHtml = {\n  type: 'html';\n  value: string;\n  defaultStyle?: boolean; // Use default menu item styles\n  className?: string;\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  myHtmlSidebar: [\n    // highlight-start\n    {\n      type: 'html',\n      value: '<img src=\"sponsor.png\" alt=\"Sponsor\" />', // The HTML to be rendered\n      defaultStyle: true, // Use the default menu item styling\n    },\n    // highlight-end\n  ],\n};\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["The menu item is already wrapped in an ",(0,t.jsx)(n.code,{children:"<li>"})," tag, so if your custom item is simple, such as a title, just supply a string as the value and use the ",(0,t.jsx)(n.code,{children:"className"})," property to style it:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  myHtmlSidebar: [\n    {\n      type: 'html',\n      value: 'Core concepts',\n      className: 'sidebar-title',\n    },\n  ],\n};\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"sidebar-item-category",children:"Category: create a hierarchy"}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"category"})," type to create a hierarchy of sidebar items."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"type SidebarItemCategory = {\n  type: 'category';\n  label: string; // Sidebar label text.\n  items: SidebarItem[]; // Array of sidebar items.\n  className?: string;\n  description?: string;\n\n  // Category options:\n  collapsible: boolean; // Set the category to be collapsible\n  collapsed: boolean; // Set the category to be initially collapsed or open by default\n  link: SidebarItemCategoryLinkDoc | SidebarItemCategoryLinkGeneratedIndex;\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      collapsible: true,\n      collapsed: false,\n      items: [\n        'creating-pages',\n        {\n          type: 'category',\n          label: 'Docs',\n          items: ['introduction', 'sidebar', 'markdown-features', 'versioning'],\n        },\n      ],\n    },\n  ],\n};\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.a,{href:"#category-shorthand",children:(0,t.jsx)(n.strong,{children:"shorthand syntax"})})," when you don't need customizations:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  docs: {\n    Guides: [\n      'creating-pages',\n      {\n        Docs: ['introduction', 'sidebar', 'markdown-features', 'versioning'],\n      },\n    ],\n  },\n};\n"})})]}),"\n",(0,t.jsx)(n.h3,{id:"category-link",children:"Category links"}),"\n",(0,t.jsx)(n.p,{children:"With category links, clicking on a category can navigate you to another page."}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"Use category links to introduce a category of documents."}),(0,t.jsxs)(n.p,{children:["Autogenerated categories can use the ",(0,t.jsx)(n.a,{href:"/docusaurus-docs/en/docs/sidebar/autogenerated#category-item-metadata",children:(0,t.jsx)(n.code,{children:"_category_.yml"})})," file to declare the link."]})]}),"\n",(0,t.jsx)(n.h4,{id:"generated-index-page",children:"Generated index page"}),"\n",(0,t.jsxs)(n.p,{children:["You can auto-generate an index page that displays all the direct children of this category. The ",(0,t.jsx)(n.code,{children:"slug"})," allows you to customize the generated page's route, which defaults to ",(0,t.jsx)(n.code,{children:"/category/[categoryName]"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      // highlight-start\n      link: {\n        type: 'generated-index',\n        title: 'Docusaurus Guides',\n        description: 'Learn about the most important Docusaurus concepts!',\n        slug: '/category/docusaurus-guides',\n        keywords: ['guides'],\n        image: '/img/docusaurus.png',\n      },\n      // highlight-end\n      items: ['pages', 'docs', 'blog', 'search'],\n    },\n  ],\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See it in action on the ",(0,t.jsx)(n.a,{href:"/docs/category/guides",children:"Docusaurus Guides page"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"generated-index"})," links as a quick way to get an introductory document."]})}),"\n",(0,t.jsx)(n.h4,{id:"category-doc-link",children:"Doc link"}),"\n",(0,t.jsx)(n.p,{children:"A category can link to an existing document."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      // highlight-start\n      link: {type: 'doc', id: 'introduction'},\n      // highlight-end\n      items: ['pages', 'docs', 'blog', 'search'],\n    },\n  ],\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See it in action on the ",(0,t.jsx)(n.a,{href:"/docusaurus-docs/en/docs/i18n/introduction",children:"i18n introduction page"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"embedding-generated-index-in-doc-page",children:"Embedding generated index in doc page"}),"\n",(0,t.jsxs)(n.p,{children:["You can embed the generated cards list in a normal doc page as well with the ",(0,t.jsx)(n.code,{children:"DocCardList"})," component. It will display all the sidebar items of the parent category of the current document."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",metastring:'title="docs/sidebar/index.md"',children:"import DocCardList from '@theme/DocCardList';\n\n<DocCardList />\n"})}),"\n",(0,t.jsx)(d.Z,{children:(0,t.jsx)(o.Z,{})}),"\n",(0,t.jsx)(n.h3,{id:"collapsible-categories",children:"Collapsible categories"}),"\n",(0,t.jsxs)(n.p,{children:["We support the option to expand/collapse categories. Categories are collapsible by default, but you can disable collapsing with ",(0,t.jsx)(n.code,{children:"collapsible: false"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  docs: [\n    {\n      type: 'category',\n      label: 'Guides',\n      items: [\n        'creating-pages',\n        {\n          type: 'category',\n          // highlight-next-line\n          collapsible: false,\n          label: 'Docs',\n          items: ['introduction', 'sidebar', 'markdown-features', 'versioning'],\n        },\n      ],\n    },\n  ],\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To make all categories non-collapsible by default, set the ",(0,t.jsx)(n.code,{children:"sidebarCollapsible"})," option in ",(0,t.jsx)(n.code,{children:"plugin-content-docs"})," to ",(0,t.jsx)(n.code,{children:"false"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          sidebarCollapsible: false,\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The option in ",(0,t.jsx)(n.code,{children:"sidebars.js"})," takes precedence over plugin configuration, so it is possible to make certain categories collapsible when ",(0,t.jsx)(n.code,{children:"sidebarCollapsible"})," is set to ",(0,t.jsx)(n.code,{children:"false"})," globally."]})}),"\n",(0,t.jsx)(n.h3,{id:"expanded-categories-by-default",children:"Expanded categories by default"}),"\n",(0,t.jsxs)(n.p,{children:["Collapsible categories are collapsed by default. If you want them to be expanded on the first render, you can set ",(0,t.jsx)(n.code,{children:"collapsed"})," to ",(0,t.jsx)(n.code,{children:"false"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  docs: {\n    Guides: [\n      'creating-pages',\n      {\n        type: 'category',\n        label: 'Docs',\n        // highlight-next-line\n        collapsed: false,\n        items: ['markdown-features', 'sidebar', 'versioning'],\n      },\n    ],\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Similar to ",(0,t.jsx)(n.code,{children:"collapsible"}),", you can also set the global configuration ",(0,t.jsx)(n.code,{children:"options.sidebarCollapsed"})," to ",(0,t.jsx)(n.code,{children:"false"}),". Individual ",(0,t.jsx)(n.code,{children:"collapsed"})," options in ",(0,t.jsx)(n.code,{children:"sidebars.js"})," will still take precedence over this configuration."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          sidebarCollapsed: false,\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:["When a category has ",(0,t.jsx)(n.code,{children:"collapsed: true"})," but ",(0,t.jsx)(n.code,{children:"collapsible: false"})," (either through ",(0,t.jsx)(n.code,{children:"sidebars.js"})," or through plugin configuration), the latter takes precedence and the category is still rendered as expanded."]})}),"\n",(0,t.jsx)(n.h2,{id:"using-shorthands",children:"Using shorthands"}),"\n",(0,t.jsxs)(n.p,{children:["You can express typical sidebar items without much customization more concisely with ",(0,t.jsx)(n.strong,{children:"shorthand syntaxes"}),". There are two parts to this: ",(0,t.jsx)(n.a,{href:"#doc-shorthand",children:(0,t.jsx)(n.strong,{children:"doc shorthand"})})," and ",(0,t.jsx)(n.a,{href:"#category-shorthand",children:(0,t.jsx)(n.strong,{children:"category shorthand"})}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"doc-shorthand",children:"Doc shorthand"}),"\n",(0,t.jsxs)(n.p,{children:["An item with type ",(0,t.jsx)(n.code,{children:"doc"})," can be simply a string representing its ID:"]}),"\n",(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(r.Z,{value:"Longhand",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  sidebar: [\n    // highlight-start\n    {\n      type: 'doc',\n      id: 'myDoc',\n    },\n    // highlight-end\n  ],\n};\n"})})}),(0,t.jsx)(r.Z,{value:"Shorthand",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  sidebar: [\n    // highlight-start\n    'myDoc',\n    // highlight-end\n  ],\n};\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"So it's possible to simplify the example above to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  mySidebar: [\n    {\n      type: 'category',\n      label: 'Getting Started',\n      items: [\n        // highlight-next-line\n        'doc1',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Docusaurus',\n      items: [\n        // highlight-start\n        'doc2',\n        'doc3',\n        // highlight-end\n      ],\n    },\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n"})}),"\n",(0,t.jsx)(n.h3,{id:"category-shorthand",children:"Category shorthand"}),"\n",(0,t.jsx)(n.p,{children:"A category item can be represented by an object whose key is its label, and the value is an array of subitems."}),"\n",(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(r.Z,{value:"Longhand",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  sidebar: [\n    // highlight-start\n    {\n      type: 'category',\n      label: 'Getting started',\n      items: ['doc1', 'doc2'],\n    },\n    // highlight-end\n  ],\n};\n"})})}),(0,t.jsx)(r.Z,{value:"Shorthand",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  sidebar: [\n    // highlight-start\n    {\n      'Getting started': ['doc1', 'doc2'],\n    },\n    // highlight-end\n  ],\n};\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"This permits us to simplify that example to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  mySidebar: [\n    // highlight-start\n    {\n      'Getting started': ['doc1'],\n    },\n    {\n      Docusaurus: ['doc2', 'doc3'],\n    },\n    // highlight-end\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"Each shorthand object after this transformation will contain exactly one entry. Now consider the further simplified example below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  mySidebar: [\n    // highlight-start\n    {\n      'Getting started': ['doc1'],\n      Docusaurus: ['doc2', 'doc3'],\n    },\n    // highlight-end\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note how the two consecutive category shorthands are compressed into one object with two entries. This syntax generates a ",(0,t.jsx)(n.strong,{children:"sidebar slice"}),': you shouldn\'t see that object as one bulk item\u2014this object is unwrapped, with each entry becoming a separate item, and they spliced together with the rest of the items (in this case, the "Learn more" link) to form the final sidebar level. Sidebar slices are also important when discussing ',(0,t.jsx)(n.a,{href:"/docusaurus-docs/en/docs/sidebar/autogenerated",children:"autogenerated sidebars"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Wherever you have an array of items that is reduced to one category shorthand, you can omit that enclosing array as well."}),"\n",(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(r.Z,{value:"Before",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  sidebar: [\n    {\n      'Getting started': ['doc1'],\n      Docusaurus: [\n        {\n          'Basic guides': ['doc2', 'doc3'],\n          'Advanced guides': ['doc4', 'doc5'],\n        },\n      ],\n    },\n  ],\n};\n"})})}),(0,t.jsx)(r.Z,{value:"After",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  sidebar: {\n    'Getting started': ['doc1'],\n    Docusaurus: {\n      'Basic guides': ['doc2', 'doc3'],\n      'Advanced guides': ['doc4', 'doc5'],\n    },\n  },\n};\n"})})})]})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(p,e)})):p(e)}},16212:(e,n,s)=>{s.d(n,{Z:()=>l});var t=s(85893),i=(s(67294),s(86010));const a={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function r(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function d(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},t=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),t.forEach((function(n){r(e,n,s[n])}))}return e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,t)}return s}(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})),e}function l({children:e,minHeight:n,url:s="http://localhost:3000",style:r,bodyStyle:l}){return(0,t.jsxs)("div",{className:a.browserWindow,style:o(d({},r),{minHeight:n}),children:[(0,t.jsxs)("div",{className:a.browserWindowHeader,children:[(0,t.jsxs)("div",{className:a.buttons,children:[(0,t.jsx)("span",{className:a.dot,style:{background:"#f25f58"}}),(0,t.jsx)("span",{className:a.dot,style:{background:"#fbbe3c"}}),(0,t.jsx)("span",{className:a.dot,style:{background:"#58cb42"}})]}),(0,t.jsx)("div",{className:(0,i.Z)(a.browserWindowAddressBar,"text--truncate"),children:s}),(0,t.jsx)("div",{className:a.browserWindowMenuIcon,children:(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:a.bar}),(0,t.jsx)("span",{className:a.bar}),(0,t.jsx)("span",{className:a.bar})]})})]}),(0,t.jsx)("div",{className:a.browserWindowBody,style:l,children:e})]})}}}]);