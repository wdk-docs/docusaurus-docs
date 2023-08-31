"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[15286],{92105:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>v,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var r=s(85893),o=s(11151),i=s(51715),t=s(7626);const l={slug:"/versioning"},d="\u7248\u672c\u63a7\u5236",c={unversionedId:"guides/docs/versioning",id:"guides/docs/versioning",title:"\u7248\u672c\u63a7\u5236",description:"You can use the versioning CLI to create a new documentation version based on the latest content in the docs directory. That specific set of documentation will then be preserved and accessible even as the documentation in the docs directory continues to evolve.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/docs/versioning.mdx",sourceDirName:"guides/docs",slug:"/versioning",permalink:"/docusaurus-docs/docs/next/versioning",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/docusaurus-v2/zh-CN",tags:[],version:"current",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",frontMatter:{slug:"/versioning"},sidebar:"docs",previous:{title:"\u4f7f\u7528\u591a\u4e2a\u4fa7\u8fb9\u680f",permalink:"/docusaurus-docs/docs/next/sidebar/multiple-sidebars"},next:{title:"\u6587\u6863\u591a\u5b9e\u4f8b",permalink:"/docusaurus-docs/docs/next/docs-multi-instance"}},a={},h=[{value:"\u6982\u8ff0",id:"overview",level:2},{value:"\u672f\u8bed",id:"terminology",level:3},{value:"\u6559\u7a0b",id:"tutorials",level:2},{value:"\u6807\u8bb0\u65b0\u7248\u672c",id:"tagging-a-new-version",level:3},{value:"\u521b\u5efa\u65b0\u6587\u6863",id:"creating-new-docs",level:3},{value:"\u66f4\u65b0\u73b0\u6709\u7248\u672c",id:"updating-an-existing-version",level:3},{value:"\u5220\u9664\u73b0\u6709\u7248\u672c",id:"deleting-an-existing-version",level:3},{value:"\u914d\u7f6e\u7248\u672c\u63a7\u5236\u884c\u4e3a",id:"configuring-versioning-behavior",level:2},{value:"\u5bfc\u822a\u6761\u9879\u76ee",id:"navbar-items",level:2},{value:"\u5efa\u8bae\u5b9e\u8df5",id:"recommended-practices",level:2},{value:"\u4ec5\u5728\u9700\u8981\u65f6\u624d\u5bf9\u6587\u6863\u8fdb\u884c\u7248\u672c\u5316",id:"version-your-documentation-only-when-needed",level:3},{value:"\u5c3d\u91cf\u51cf\u5c11\u7248\u672c\u7684\u6570\u91cf",id:"keep-the-number-of-versions-small",level:3},{value:"\u5728\u6587\u6863\u4e2d\u4f7f\u7528\u7edd\u5bf9\u5bfc\u5165",id:"use-absolute-import-within-the-docs",level:3},{value:"\u901a\u8fc7\u6587\u4ef6\u8def\u5f84\u94fe\u63a5\u6587\u6863",id:"link-docs-by-file-paths",level:3},{value:"\u5168\u5c40\u6216\u7248\u672c\u5316\u7684\u5e76\u7f6e\u8d44\u4ea7",id:"global-or-versioned-collocated-assets",level:3}];function u(e){const n=Object.assign({h1:"h1",p:"p",code:"code",admonition:"admonition",strong:"strong",h2:"h2",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",ol:"ol",li:"li",ul:"ul",a:"a"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u7248\u672c\u63a7\u5236",children:"\u7248\u672c\u63a7\u5236"}),"\n",(0,r.jsxs)(n.p,{children:["You can use the versioning CLI to create a new documentation version based on the latest content in the ",(0,r.jsx)(n.code,{children:"docs"})," directory. That specific set of documentation will then be preserved and accessible even as the documentation in the ",(0,r.jsx)(n.code,{children:"docs"})," directory continues to evolve."]}),"\n","\n","\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"Think about it before starting to version your documentation - it can become difficult for contributors to help improve it!"})}),"\n",(0,r.jsxs)(n.p,{children:["Most of the time, you don't need versioning as it will just increase your build time, and introduce complexity to your codebase. Versioning is ",(0,r.jsx)(n.strong,{children:"best suited for websites with high-traffic and rapid changes to documentation between versions"}),". If your documentation rarely changes, don't add versioning to your documentation."]}),"\n",(0,r.jsx)(n.p,{children:"To better understand how versioning works and see if it suits your needs, you can read on below."}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"\u6982\u8ff0"}),"\n",(0,r.jsx)(n.p,{children:"A typical versioned doc site looks like below:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"website\n\u251c\u2500\u2500 sidebars.json        # sidebar for the current docs version\n\u251c\u2500\u2500 docs                 # docs directory for the current docs version\n\u2502   \u251c\u2500\u2500 foo\n\u2502   \u2502   \u2514\u2500\u2500 bar.md       # https://mysite.com/docs/next/foo/bar\n\u2502   \u2514\u2500\u2500 hello.md         # https://mysite.com/docs/next/hello\n\u251c\u2500\u2500 versions.json        # file to indicate what versions are available\n\u251c\u2500\u2500 versioned_docs\n\u2502   \u251c\u2500\u2500 version-1.1.0\n\u2502   \u2502   \u251c\u2500\u2500 foo\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 bar.md   # https://mysite.com/docs/foo/bar\n\u2502   \u2502   \u2514\u2500\u2500 hello.md\n\u2502   \u2514\u2500\u2500 version-1.0.0\n\u2502       \u251c\u2500\u2500 foo\n\u2502       \u2502   \u2514\u2500\u2500 bar.md   # https://mysite.com/docs/1.0.0/foo/bar\n\u2502       \u2514\u2500\u2500 hello.md\n\u251c\u2500\u2500 versioned_sidebars\n\u2502   \u251c\u2500\u2500 version-1.1.0-sidebars.json\n\u2502   \u2514\u2500\u2500 version-1.0.0-sidebars.json\n\u251c\u2500\u2500 docusaurus.config.js\n\u2514\u2500\u2500 package.json\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"versions.json"})," file is a list of version names, ordered from newest to oldest."]}),"\n",(0,r.jsx)(n.p,{children:"The table below explains how a versioned file maps to its version and the generated URL."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Path"}),(0,r.jsx)(n.th,{children:"Version"}),(0,r.jsx)(n.th,{children:"URL"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"versioned_docs/version-1.0.0/hello.md"})}),(0,r.jsx)(n.td,{children:"1.0.0"}),(0,r.jsx)(n.td,{children:"/docs/1.0.0/hello"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"versioned_docs/version-1.1.0/hello.md"})}),(0,r.jsx)(n.td,{children:"1.1.0 (latest)"}),(0,r.jsx)(n.td,{children:"/docs/hello"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"docs/hello.md"})}),(0,r.jsx)(n.td,{children:"current"}),(0,r.jsx)(n.td,{children:"/docs/next/hello"})]})]})]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["The files in the ",(0,r.jsx)(n.code,{children:"docs"})," directory belong to the ",(0,r.jsx)(n.code,{children:"current"})," docs version."]}),(0,r.jsxs)(n.p,{children:["By default, the ",(0,r.jsx)(n.code,{children:"current"})," docs version is labeled as ",(0,r.jsx)(n.code,{children:"Next"})," and hosted under ",(0,r.jsx)(n.code,{children:"/docs/next/*"}),", but it is entirely configurable to fit your project's release lifecycle."]})]}),"\n",(0,r.jsx)(n.h3,{id:"terminology",children:"\u672f\u8bed"}),"\n",(0,r.jsx)(n.p,{children:"Note the terminology we use here."}),"\n",(0,r.jsxs)("dl",{children:[(0,r.jsx)("dt",{children:(0,r.jsx)("b",{children:"Current version"})}),(0,r.jsxs)("dd",{children:["The version placed in the ",(0,r.jsx)("code",{children:"./docs"})," folder."]}),(0,r.jsx)("dt",{children:(0,r.jsx)("b",{children:"Latest version / last version"})}),(0,r.jsxs)("dd",{children:["The version served by default for docs navbar items. Usually has path ",(0,r.jsx)("code",{children:"/docs"}),"."]})]}),"\n",(0,r.jsxs)(n.p,{children:["Current version is defined by the ",(0,r.jsx)(n.strong,{children:"file system location"}),", while latest version is defined by the ",(0,r.jsx)(n.strong,{children:"the navigation behavior"}),". They may or may not be the same version! (And the default configuration, as shown in the table above, would treat them as different: current version at ",(0,r.jsx)(n.code,{children:"/docs/next"})," and latest at ",(0,r.jsx)(n.code,{children:"/docs"}),".)"]}),"\n",(0,r.jsx)(n.h2,{id:"tutorials",children:"\u6559\u7a0b"}),"\n",(0,r.jsx)(n.h3,{id:"tagging-a-new-version",children:"\u6807\u8bb0\u65b0\u7248\u672c"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["First, make sure the current docs version (the ",(0,r.jsx)(n.code,{children:"./docs"})," directory) is ready to be frozen."]}),"\n",(0,r.jsx)(n.li,{children:"Enter a new version number."}),"\n"]}),"\n",(0,r.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(t.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run docusaurus docs:version 1.1.0\n"})})}),(0,r.jsx)(t.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn docusaurus docs:version 1.1.0\n"})})}),(0,r.jsx)(t.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm run docusaurus docs:version 1.1.0\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"When tagging a new version, the document versioning mechanism will:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Copy the full ",(0,r.jsx)(n.code,{children:"docs/"})," folder contents into a new ",(0,r.jsx)(n.code,{children:"versioned_docs/version-[versionName]/"})," folder."]}),"\n",(0,r.jsxs)(n.li,{children:["Create a versioned sidebars file based from your current ",(0,r.jsx)(n.a,{href:"/docusaurus-docs/docs/next/docs-introduction#sidebar",children:"sidebar"})," configuration (if it exists) - saved as ",(0,r.jsx)(n.code,{children:"versioned_sidebars/version-[versionName]-sidebars.json"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Append the new version number to ",(0,r.jsx)(n.code,{children:"versions.json"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"creating-new-docs",children:"\u521b\u5efa\u65b0\u6587\u6863"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Place the new file into the corresponding version folder."}),"\n",(0,r.jsx)(n.li,{children:"Include the reference to the new file in the corresponding sidebar file according to the version number."}),"\n"]}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(t.Z,{value:"Current version structure",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# The new file.\ndocs/new.md\n\n# Edit the corresponding sidebar file.\nsidebars.js\n"})})}),(0,r.jsx)(t.Z,{value:"Older version structure",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# The new file.\nversioned_docs/version-1.0.0/new.md\n\n# Edit the corresponding sidebar file.\nversioned_sidebars/version-1.0.0-sidebars.json\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"updating-an-existing-version",children:"\u66f4\u65b0\u73b0\u6709\u7248\u672c"}),"\n",(0,r.jsxs)(n.p,{children:["You can update multiple docs versions at the same time because each directory in ",(0,r.jsx)(n.code,{children:"versioned_docs/"})," represents specific routes when published."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Edit any file."}),"\n",(0,r.jsx)(n.li,{children:"Commit and push changes."}),"\n",(0,r.jsx)(n.li,{children:"It will be published to the version."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f8b\u5b50: When you change any file in ",(0,r.jsx)(n.code,{children:"versioned_docs/version-2.6/"}),", it will only affect the docs for version ",(0,r.jsx)(n.code,{children:"2.6"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"deleting-an-existing-version",children:"\u5220\u9664\u73b0\u6709\u7248\u672c"}),"\n",(0,r.jsx)(n.p,{children:"You can delete/remove versions as well."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Remove the version from ",(0,r.jsx)(n.code,{children:"versions.json"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4f8b\u5b50:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:'[\n  "2.0.0",\n  "1.9.0",\n  // highlight-next-line\n- "1.8.0"\n]\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Delete the versioned docs directory. Example: ",(0,r.jsx)(n.code,{children:"versioned_docs/version-1.8.0"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Delete the versioned sidebars file. Example: ",(0,r.jsx)(n.code,{children:"versioned_sidebars/version-1.8.0-sidebars.json"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuring-versioning-behavior",children:"\u914d\u7f6e\u7248\u672c\u63a7\u5236\u884c\u4e3a"}),"\n",(0,r.jsxs)(n.p,{children:['The "current" version is the version name for the ',(0,r.jsx)(n.code,{children:"./docs"})," folder. There are different ways to manage versioning, but two very common patterns are:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["You release v1, and start immediately working on v2 (including its docs). In this case, the ",(0,r.jsx)(n.strong,{children:"current version"})," is v2, which is in the ",(0,r.jsx)(n.code,{children:"./docs"})," source folder, and can be browsed at ",(0,r.jsx)(n.code,{children:"example.com/docs/next"}),". The ",(0,r.jsx)(n.strong,{children:"latest version"})," is v1, which is in the ",(0,r.jsx)(n.code,{children:"./versioned_docs/version-1"})," source folder, and is browsed by most of your users at ",(0,r.jsx)(n.code,{children:"example.com/docs"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["You release v1, and will maintain it for some time before thinking about v2. In this case, the ",(0,r.jsx)(n.strong,{children:"current version"})," and ",(0,r.jsx)(n.strong,{children:"latest version"})," will both be point to v1, since the v2 docs doesn't even exist yet!"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:'Docusaurus defaults work great for the first use case. We will label the current version as "next" and you can even choose not to publish it.'}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"For the 2nd use case"}),": if you release v1 and don't plan to work on v2 anytime soon, instead of versioning v1 and having to maintain the docs in 2 folders (",(0,r.jsx)(n.code,{children:"./docs"})," + ",(0,r.jsx)(n.code,{children:"./versioned_docs/version-1.0.0"}),'), you may consider "pretending" that the current version is a cut version by giving it a path and a label:']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  presets: [\n    '@docusaurus/preset-classic',\n    docs: {\n      // highlight-start\n      lastVersion: 'current',\n      versions: {\n        current: {\n          label: '1.0.0',\n          path: '1.0.0',\n        },\n      },\n      // highlight-end\n    },\n  ],\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The docs in ",(0,r.jsx)(n.code,{children:"./docs"})," will be served at ",(0,r.jsx)(n.code,{children:"/docs/1.0.0"})," instead of ",(0,r.jsx)(n.code,{children:"/docs/next"}),", and ",(0,r.jsx)(n.code,{children:"1.0.0"})," will become the default version we link to in the navbar dropdown, and you will only need to maintain a single ",(0,r.jsx)(n.code,{children:"./docs"})," folder."]}),"\n",(0,r.jsx)(n.p,{children:"We offer these plugin options to customize versioning behavior:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"disableVersioning"}),": Explicitly disable versioning even with versions. This will make the site only include the current version."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"includeCurrentVersion"}),": Include the current version (the ",(0,r.jsx)(n.code,{children:"./docs"})," folder) of your docs.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Tip"}),": turn it off if the current version is a work-in-progress, not ready to be published."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"lastVersion"}),': Sets which version "latest version" (the ',(0,r.jsx)(n.code,{children:"/docs"})," route) refers to.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Tip"}),": ",(0,r.jsx)(n.code,{children:"lastVersion: 'current'"})," makes sense if your current version refers to a major version that's constantly patched and released. The actual route base path and label of the latest version are configurable."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onlyIncludeVersions"}),": Defines a subset of versions from ",(0,r.jsx)(n.code,{children:"versions.json"})," to be deployed.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Tip"}),": limit to 2 or 3 versions in dev and deploy previews to improve startup and build time."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"versions"}),": A dictionary of version metadata. For each version, you can customize the following:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"label"}),": the label displayed in the versions dropdown and banner."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"path"}),": the route base path of this version. By default, latest version has ",(0,r.jsx)(n.code,{children:"/"})," and current version has ",(0,r.jsx)(n.code,{children:"/next"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"banner"}),": one of ",(0,r.jsx)(n.code,{children:"'none'"}),", ",(0,r.jsx)(n.code,{children:"'unreleased'"}),", and ",(0,r.jsx)(n.code,{children:"'unmaintained'"}),'. Determines what\'s displayed at the top of every doc page. Any version above the latest version would be "unreleased", and any version below would be "unmaintained".']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"badge"}),": show a badge with the version name at the top of a doc of that version."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"className"}),": add a custom ",(0,r.jsx)(n.code,{children:"className"})," to the ",(0,r.jsx)(n.code,{children:"<html>"})," element of doc pages of that version."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docusaurus-docs/docs/next/api/plugins/@docusaurus/plugin-content-docs#configuration",children:"docs plugin configuration"})," for more details."]}),"\n",(0,r.jsx)(n.h2,{id:"navbar-items",children:"\u5bfc\u822a\u6761\u9879\u76ee"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u63d0\u4f9b\u4e86\u51e0\u4e2a\u5bfc\u822a\u680f\u9879\u6765\u5e2e\u52a9\u60a8\u5feb\u901f\u8bbe\u7f6e\u5bfc\u822a\uff0c\u800c\u4e0d\u5fc5\u62c5\u5fc3\u7248\u672c\u5316\u7684\u8def\u7531\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docusaurus-docs/docs/next/api/themes/configuration#navbar-doc-link",children:(0,r.jsx)(n.code,{children:"doc"})}),": a link to a doc."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docusaurus-docs/docs/next/api/themes/configuration#navbar-doc-sidebar",children:(0,r.jsx)(n.code,{children:"docSidebar"})}),": a link to the first item in a sidebar."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docusaurus-docs/docs/next/api/themes/configuration#navbar-docs-version",children:(0,r.jsx)(n.code,{children:"docsVersion"})}),": a link to the main doc of the currently viewed version."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docusaurus-docs/docs/next/api/themes/configuration#navbar-docs-version-dropdown",children:(0,r.jsx)(n.code,{children:"docsVersionDropdown"})}),": a dropdown containing all the versions available."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"These links would all look for an appropriate version to link to, in the following order:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Active version"}),": the version that the user is currently browsing, if she is on a page provided by this doc plugin. If she's not on a doc page, fall back to..."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Preferred version"}),": the version that the user last viewed. If there's no history, fall back to..."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Latest version"}),": the default version that we navigate to, configured by the ",(0,r.jsx)(n.code,{children:"lastVersion"})," option."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"recommended-practices",children:"\u5efa\u8bae\u5b9e\u8df5"}),"\n",(0,r.jsx)(n.h3,{id:"version-your-documentation-only-when-needed",children:"\u4ec5\u5728\u9700\u8981\u65f6\u624d\u5bf9\u6587\u6863\u8fdb\u884c\u7248\u672c\u5316"}),"\n",(0,r.jsxs)(n.p,{children:["For example, you are building documentation for your npm package ",(0,r.jsx)(n.code,{children:"foo"})," and you are currently in version 1.0.0. You then release a patch version for a minor bug fix and it's now 1.0.1."]}),"\n",(0,r.jsxs)(n.p,{children:["Should you cut a new documentation version 1.0.1? ",(0,r.jsx)(n.strong,{children:"You probably shouldn't"}),". 1.0.1 and 1.0.0 docs shouldn't differ according to semver because there are no new features!. Cutting a new version for it will only just create unnecessary duplicated files."]}),"\n",(0,r.jsx)(n.h3,{id:"keep-the-number-of-versions-small",children:"\u5c3d\u91cf\u51cf\u5c11\u7248\u672c\u7684\u6570\u91cf"}),"\n",(0,r.jsxs)(n.p,{children:["As a good rule of thumb, try to keep the number of your versions below 10. You will ",(0,r.jsx)(n.strong,{children:"very likely"})," to have a lot of obsolete versioned documentation that nobody even reads anymore. For example, ",(0,r.jsx)(n.a,{href:"https://jestjs.io/versions",children:"Jest"})," is currently in version ",(0,r.jsx)(n.code,{children:"27.4"}),", and only maintains several latest documentation versions with the lowest being ",(0,r.jsx)(n.code,{children:"25.X"}),". Keep it small \ud83d\ude0a"]}),"\n",(0,r.jsx)(n.admonition,{title:"archive older versions",type:"tip",children:(0,r.jsxs)(n.p,{children:["If you deploy your site on a Jamstack provider (e.g. ",(0,r.jsx)(n.a,{href:"/docusaurus-docs/docs/next/deployment",children:"Netlify"}),"), the provider will save each production build as a snapshot under an immutable URL. You can include archived versions that will never be rebuilt as external links to these immutable URLs. The Jest website and the Docusaurus website both use such pattern to keep the number of actively built versions low."]})}),"\n",(0,r.jsx)(n.h3,{id:"use-absolute-import-within-the-docs",children:"\u5728\u6587\u6863\u4e2d\u4f7f\u7528\u7edd\u5bf9\u5bfc\u5165"}),"\n",(0,r.jsxs)(n.p,{children:["Don't use relative paths import within the docs. Because when we cut a version the paths no longer work (the nesting level is different, among other reasons). You can utilize the ",(0,r.jsx)(n.code,{children:"@site"})," alias provided by Docusaurus that points to the ",(0,r.jsx)(n.code,{children:"website"})," directory. Example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:"- import Foo from '../src/components/Foo';\n+ import Foo from '@site/src/components/Foo';\n"})}),"\n",(0,r.jsx)(n.h3,{id:"link-docs-by-file-paths",children:"\u901a\u8fc7\u6587\u4ef6\u8def\u5f84\u94fe\u63a5\u6587\u6863"}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7\u5e26\u6709",(0,r.jsx)(n.code,{children:".md"}),"\u6269\u5c55\u540d\u7684\u76f8\u5bf9\u6587\u4ef6\u8def\u5f84\u5f15\u7528\u5176\u4ed6\u6587\u6863\uff0c\u8fd9\u6837 Docusaurus \u53ef\u4ee5\u5728\u6784\u5efa\u8fc7\u7a0b\u4e2d\u5c06\u5b83\u4eec\u91cd\u5199\u4e3a\u5b9e\u9645\u7684 URL \u8def\u5f84\u3002\u6587\u4ef6\u5c06\u88ab\u94fe\u63a5\u5230\u6b63\u786e\u7684\u76f8\u5e94\u7248\u672c\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:"The [@hello](hello.mdx#paginate) document is great!\n\nSee the [Tutorial](../getting-started/tutorial.mdx) for more info.\n"})}),"\n",(0,r.jsx)(n.h3,{id:"global-or-versioned-collocated-assets",children:"\u5168\u5c40\u6216\u7248\u672c\u5316\u7684\u5e76\u7f6e\u8d44\u4ea7"}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u5e94\u8be5\u51b3\u5b9a\u50cf\u56fe\u50cf\u548c\u6587\u4ef6\u8fd9\u6837\u7684\u8d44\u4ea7\u662f\u6309\u7248\u672c\u5206\u914d\u8fd8\u662f\u5728\u4e0d\u540c\u7248\u672c\u4e4b\u95f4\u5171\u4eab\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4f60\u7684\u8d44\u6e90\u9700\u8981\u7248\u672c\u5316\uff0c\u628a\u5b83\u4eec\u653e\u5728 docs \u7248\u672c\u4e2d\uff0c\u5e76\u4f7f\u7528\u76f8\u5bf9\u8def\u5f84:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:"![img alt](./myImage.png)\n\n[download this file](./file.pdf)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u7684\u8d44\u6e90\u662f\u5168\u5c40\u7684\uff0c\u628a\u5b83\u4eec\u653e\u5728",(0,r.jsx)(n.code,{children:"/static"}),"\u4e2d\uff0c\u5e76\u4f7f\u7528\u7edd\u5bf9\u8def\u5f84:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:"![img alt](/myImage.png)\n\n[download this file](/file.pdf)\n"})})]})}const v=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},7626:(e,n,s)=>{s.d(n,{Z:()=>t});var r=s(85893),o=(s(67294),s(86010));const i={tabItem:"tabItem_Ymn6"};function t({children:e,hidden:n,className:s}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,s),hidden:n,children:e})}},51715:(e,n,s)=>{s.d(n,{Z:()=>N});var r=s(85893),o=s(67294),i=s(86010),t=s(8241),l=s(16550),d=s(40841),c=s(2834),a=s(35715),h=s(95417);function u(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function v(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,r)}return s}(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})),e}function j(e){var n,s;return null!==(s=null===(n=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==s?s:[]}function x(e){const{values:n,children:s}=e;return(0,o.useMemo)((()=>{const e=null!=n?n:function(e){return j(e).map((({props:{value:e,label:n,attributes:s,default:r}})=>({value:e,label:n,attributes:s,default:r})))}(s);return function(e){const n=(0,a.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p({value:e,tabValues:n}){return n.some((n=>n.value===e))}function b({queryString:e=!1,groupId:n}){const s=(0,l.k6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),i=(0,c._X)(r),t=(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace(v(function(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},r=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),r.forEach((function(n){u(e,n,s[n])}))}return e}({},s.location),{search:n.toString()}))}),[r,s]);return[i,t]}function f(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,i=x(e),[t,l]=(0,o.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var s;const r=null!==(s=n.find((e=>e.default)))&&void 0!==s?s:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,a]=b({queryString:s,groupId:r}),[u,v]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[s,r]=(0,h.Nk)(n);return[s,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:r}),j=(()=>{const e=null!=c?c:u;return p({value:e,tabValues:i})?e:null})();(0,d.Z)((()=>{j&&l(j)}),[j]);return{selectedValue:t,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),a(e),v(e)}),[a,v,i]),tabValues:i}}var m=s(90980);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function w(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},r=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),r.forEach((function(n){y(e,n,s[n])}))}return e}function k(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,r)}return s}(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})),e}function O({className:e,block:n,selectedValue:s,selectValue:o,tabValues:l}){const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.o5)(),a=e=>{const n=e.currentTarget,r=d.indexOf(n),i=l[r].value;i!==s&&(c(n),o(i))},h=e=>{let n=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;var s;n=null!==(s=d[r])&&void 0!==s?s:d[0];break}case"ArrowLeft":{const s=d.indexOf(e.currentTarget)-1;var r;n=null!==(r=d[s])&&void 0!==r?r:d[d.length-1];break}}null==n||n.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},e),children:l.map((({value:e,label:n,attributes:o})=>(0,r.jsx)("li",k(w({role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,ref:e=>d.push(e),onKeyDown:h,onClick:a},o),{className:(0,i.Z)("tabs__item",g.tabItem,null==o?void 0:o.className,{"tabs__item--active":s===e}),children:null!=n?n:e}),e)))})}function T({lazy:e,children:n,selectedValue:s}){const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=i.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function I(e){const n=f(e);return(0,r.jsxs)("div",{className:(0,i.Z)("tabs-container",g.tabList),children:[(0,r.jsx)(O,w({},e,n)),(0,r.jsx)(T,w({},e,n))]})}function N(e){const n=(0,m.Z)();return(0,r.jsx)(I,k(w({},e),{children:j(e.children)}),String(n))}},11151:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>i});var r=s(67294);const o=r.createContext({});function i(e){const n=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const t={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||t:i(e),r.createElement(o.Provider,{value:l},n)}}}]);