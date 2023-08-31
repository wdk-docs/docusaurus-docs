"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[96639],{71665:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=n(85893),d=n(11151);const a={slug:"/sidebar/multiple-sidebars"},t="Using multiple sidebars",o={unversionedId:"guides/docs/sidebar/multiple-sidebars",id:"version-2.1.0/guides/docs/sidebar/multiple-sidebars",title:"Using multiple sidebars",description:"You can create a sidebar for each set of Markdown files that you want to group together.",source:"@site/versioned_docs/version-2.1.0/guides/docs/sidebar/multiple-sidebars.mdx",sourceDirName:"guides/docs/sidebar",slug:"/sidebar/multiple-sidebars",permalink:"/docusaurus-docs/docs/2.1.0/sidebar/multiple-sidebars",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/sidebar/multiple-sidebars.mdx",tags:[],version:"2.1.0",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",frontMatter:{slug:"/sidebar/multiple-sidebars"},sidebar:"docs",previous:{title:"Autogenerated",permalink:"/docusaurus-docs/docs/2.1.0/sidebar/autogenerated"},next:{title:"Versioning",permalink:"/docusaurus-docs/docs/2.1.0/versioning"}},r={},l=[{value:"Understanding sidebar association",id:"sidebar-association",level:2},{value:"Generating pagination",id:"generating-pagination",level:2},{value:"The <code>ref</code> item",id:"sidebar-item-ref",level:2}];function c(e){const i=Object.assign({h1:"h1",p:"p",strong:"strong",admonition:"admonition",ul:"ul",li:"li",a:"a",pre:"pre",code:"code",h2:"h2",ol:"ol",em:"em"},(0,d.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"using-multiple-sidebars",children:"Using multiple sidebars"}),"\n",(0,s.jsxs)(i.p,{children:["You can create a sidebar for each ",(0,s.jsx)(i.strong,{children:"set of Markdown files"})," that you want to ",(0,s.jsx)(i.strong,{children:"group together"}),"."]}),"\n",(0,s.jsxs)(i.admonition,{type:"tip",children:[(0,s.jsx)(i.p,{children:"The Docusaurus site is a good example of using multiple sidebars:"}),(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docusaurus-docs/docs/2.1.0/",children:"Docs"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"/docusaurus-docs/docs/2.1.0/cli",children:"API"})}),"\n"]})]}),"\n",(0,s.jsx)(i.p,{children:"Consider this example:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  tutorialSidebar: {\n    'Category A': ['doc1', 'doc2'],\n  },\n  apiSidebar: ['doc3', 'doc4'],\n};\n"})}),"\n",(0,s.jsxs)(i.p,{children:["When browsing ",(0,s.jsx)(i.code,{children:"doc1"})," or ",(0,s.jsx)(i.code,{children:"doc2"}),", the ",(0,s.jsx)(i.code,{children:"tutorialSidebar"})," will be displayed; when browsing ",(0,s.jsx)(i.code,{children:"doc3"})," or ",(0,s.jsx)(i.code,{children:"doc4"}),", the ",(0,s.jsx)(i.code,{children:"apiSidebar"})," will be displayed."]}),"\n",(0,s.jsx)(i.h2,{id:"sidebar-association",children:"Understanding sidebar association"}),"\n",(0,s.jsxs)(i.p,{children:["Following the example above, if a ",(0,s.jsx)(i.code,{children:"commonDoc"})," is included in both sidebars:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  tutorialSidebar: {\n    'Category A': ['doc1', 'doc2', 'commonDoc'],\n  },\n  apiSidebar: ['doc3', 'doc4', 'commonDoc'],\n};\n"})}),"\n",(0,s.jsxs)(i.p,{children:["How does Docusaurus know which sidebar to display when browsing ",(0,s.jsx)(i.code,{children:"commonDoc"}),"? Answer: it doesn't, and we don't guarantee which sidebar it will pick."]}),"\n",(0,s.jsx)(i.p,{children:"When you add doc Y to sidebar X, it creates a two-way binding: sidebar X contains a link to doc Y, and when browsing doc Y, sidebar X will be displayed. But sometimes, we want to break either implicit binding:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.em,{children:"How do I generate a link to doc Y in sidebar X without making sidebar X displayed on Y?"})," For example, when I include doc Y in multiple sidebars as in the example above, and I want to explicitly tell Docusaurus to display one sidebar?"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.em,{children:"How do I make sidebar X displayed when browsing doc Y, but sidebar X shouldn't contain the link to Y?"}),' For example, when Y is a "doc home page" and the sidebar is purely used for navigation?']}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Front matter option ",(0,s.jsx)(i.code,{children:"displayed_sidebar"})," will forcibly set the sidebar association. For the same example, you can still use doc shorthands without any special configuration:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  tutorialSidebar: {\n    'Category A': ['doc1', 'doc2'],\n  },\n  apiSidebar: ['doc3', 'doc4'],\n};\n"})}),"\n",(0,s.jsx)(i.p,{children:"And then add a front matter:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-md",metastring:'title="commonDoc.md"',children:"---\ndisplayed_sidebar: apiSidebar\n---\n"})}),"\n",(0,s.jsxs)(i.p,{children:["Which explicitly tells Docusaurus to display ",(0,s.jsx)(i.code,{children:"apiSidebar"})," when browsing ",(0,s.jsx)(i.code,{children:"commonDoc"}),". Using the same method, you can make sidebar X which doesn't contain doc Y appear on doc Y:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-md",metastring:'title="home.md"',children:"---\ndisplayed_sidebar: tutorialSidebar\n---\n"})}),"\n",(0,s.jsxs)(i.p,{children:["Even when ",(0,s.jsx)(i.code,{children:"tutorialSidebar"})," doesn't contain a link to ",(0,s.jsx)(i.code,{children:"home"}),", it will still be displayed when viewing ",(0,s.jsx)(i.code,{children:"home"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["If you set ",(0,s.jsx)(i.code,{children:"displayed_sidebar: null"}),", no sidebar will be displayed whatsoever on this page, and subsequently, no pagination either."]}),"\n",(0,s.jsx)(i.h2,{id:"generating-pagination",children:"Generating pagination"}),"\n",(0,s.jsxs)(i.p,{children:['Docusaurus uses the sidebar to generate the "next" and "previous" pagination links at the bottom of each doc page. It strictly uses the sidebar that is displayed: if no sidebar is associated, it doesn\'t generate pagination either. However, the docs linked as "next" and "previous" are not guaranteed to display the same sidebar: they are included in this sidebar, but in their front matter, they may have a different ',(0,s.jsx)(i.code,{children:"displayed_sidebar"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["If a sidebar is displayed by setting ",(0,s.jsx)(i.code,{children:"displayed_sidebar"})," front matter, and this sidebar doesn't contain the doc itself, no pagination is displayed."]}),"\n",(0,s.jsxs)(i.p,{children:["You can customize pagination with front matter ",(0,s.jsx)(i.code,{children:"pagination_next"})," and ",(0,s.jsx)(i.code,{children:"pagination_prev"}),". Consider this sidebar:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  tutorial: [\n    'introduction',\n    {\n      installation: ['windows', 'linux', 'macos'],\n    },\n    'getting-started',\n  ],\n};\n"})}),"\n",(0,s.jsx)(i.p,{children:'The pagination next link on "windows" points to "linux", but that doesn\'t make sense: you would want readers to proceed to "getting started" after installation. In this case, you can set the pagination manually:'}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-md",metastring:'title="windows.md"',children:"---\n# highlight-next-line\npagination_next: getting-started\n---\n\n# Installation on Windows\n"})}),"\n",(0,s.jsxs)(i.p,{children:["You can also disable displaying a pagination link with ",(0,s.jsx)(i.code,{children:"pagination_next: null"})," or ",(0,s.jsx)(i.code,{children:"pagination_prev: null"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["The pagination label by default is the sidebar label. You can use the front matter ",(0,s.jsx)(i.code,{children:"pagination_label"})," to customize how this doc appears in the pagination."]}),"\n",(0,s.jsxs)(i.h2,{id:"sidebar-item-ref",children:["The ",(0,s.jsx)(i.code,{children:"ref"})," item"]}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"ref"})," type is identical to the ",(0,s.jsxs)(i.a,{href:"#sidebar-item-doc",children:[(0,s.jsx)(i.code,{children:"doc"})," type"]})," in every way, except that it doesn't participate in generating navigation metadata. It only registers itself as a link. When ",(0,s.jsx)(i.a,{href:"#generating-pagination",children:"generating pagination"})," and ",(0,s.jsx)(i.a,{href:"#sidebar-association",children:"displaying sidebar"}),", ",(0,s.jsx)(i.code,{children:"ref"})," items are completely ignored."]}),"\n",(0,s.jsxs)(i.p,{children:["It is particularly useful where you wish to link to the same document from multiple sidebars. The document only belongs to one sidebar (the one where it's registered as ",(0,s.jsx)(i.code,{children:"type: 'doc'"})," or from an autogenerated directory), but its link will appear in all sidebars that it's registered in."]}),"\n",(0,s.jsx)(i.p,{children:"Consider this example:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-js",metastring:'title="sidebars.js"',children:"module.exports = {\n  tutorialSidebar: {\n    'Category A': [\n      'doc1',\n      'doc2',\n      // highlight-next-line\n      {type: 'ref', id: 'commonDoc'},\n      'doc5',\n    ],\n  },\n  apiSidebar: ['doc3', 'doc4', 'commonDoc'],\n};\n}\n"})}),"\n",(0,s.jsxs)(i.p,{children:["You can think of the ",(0,s.jsx)(i.code,{children:"ref"})," type as the equivalent to doing the following:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Setting ",(0,s.jsx)(i.code,{children:"displayed_sidebar: tutorialSidebar"})," for ",(0,s.jsx)(i.code,{children:"commonDoc"})," (",(0,s.jsx)(i.code,{children:"ref"})," is ignored in sidebar association)"]}),"\n",(0,s.jsxs)(i.li,{children:["Setting ",(0,s.jsx)(i.code,{children:"pagination_next: doc5"})," for ",(0,s.jsx)(i.code,{children:"doc2"})," and setting ",(0,s.jsx)(i.code,{children:"pagination_prev: doc2"})," for ",(0,s.jsx)(i.code,{children:"doc5"})," (",(0,s.jsx)(i.code,{children:"ref"})," is ignored in pagination generation)"]}),"\n"]})]})}const h=function(e={}){const{wrapper:i}=Object.assign({},(0,d.ah)(),e.components);return i?(0,s.jsx)(i,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},11151:(e,i,n)=>{n.d(i,{Zo:()=>o,ah:()=>a});var s=n(67294);const d=s.createContext({});function a(e){const i=s.useContext(d);return s.useMemo((()=>"function"==typeof e?e(i):{...i,...e}),[i,e])}const t={};function o({components:e,children:i,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||t:a(e),s.createElement(d.Provider,{value:o},i)}}}]);