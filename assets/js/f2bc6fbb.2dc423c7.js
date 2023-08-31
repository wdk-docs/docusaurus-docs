"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[11500],{6671:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>h});var t=r(85893),s=r(11151),o=r(51715),a=r(7626),c=r(11269);const i={description:"How to install Docusaurus locally, and start a Docusaurus site in no time."},l="Installation",u={unversionedId:"installation",id:"version-2.3.1/installation",title:"Installation",description:"How to install Docusaurus locally, and start a Docusaurus site in no time.",source:"@site/versioned_docs/version-2.3.1/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/docusaurus-docs/docs/2.3.1/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/installation.mdx",tags:[],version:"2.3.1",lastUpdatedBy:"wohugb@aliyun.com",lastUpdatedAt:1693467116,formattedLastUpdatedAt:"2023\u5e748\u670831\u65e5",frontMatter:{description:"How to install Docusaurus locally, and start a Docusaurus site in no time."},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docusaurus-docs/docs/2.3.1/category/getting-started"},next:{title:"Configuration",permalink:"/docusaurus-docs/docs/2.3.1/configuration"}},d={},h=[{value:"Requirements",id:"requirements",level:2},{value:"Scaffold project website",id:"scaffold-project-website",level:2},{value:"Project structure",id:"project-structure",level:2},{value:"Project structure rundown",id:"project-structure-rundown",level:3},{value:"Monorepos",id:"monorepos",level:3},{value:"Running the development server",id:"running-the-development-server",level:2},{value:"Build",id:"build",level:2},{value:"Updating your Docusaurus version",id:"updating-your-docusaurus-version",level:2},{value:"Problems?",id:"problems",level:2}];function p(e){const n=Object.assign({h1:"h1",p:"p",a:"a",admonition:"admonition",strong:"strong",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre",h3:"h3"},(0,s.ah)(),e.components),{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"installation",children:"Installation"}),"\n","\n",(0,t.jsxs)(n.p,{children:["Docusaurus is essentially a set of npm ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/tree/main/packages",children:"packages"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"/docusaurus-docs/docs/2.3.1/#fast-track",children:"Fast Track"})})," to understand Docusaurus in ",(0,t.jsx)(n.strong,{children:"5 minutes \u23f1"}),"!"]}),(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://docusaurus.new",children:"docusaurus.new"})})," to test Docusaurus immediately in your browser!"]})]}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://nodejs.org/en/download/",children:"Node.js"})," version 16.14 or above (which can be checked by running ",(0,t.jsx)(n.code,{children:"node -v"}),"). You can use ",(0,t.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",children:"nvm"})," for managing multiple Node versions on a single machine installed.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"When installing Node.js, you are recommended to check all checkboxes related to dependencies."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"scaffold-project-website",children:"Scaffold project website"}),"\n",(0,t.jsx)(n.p,{children:"The easiest way to install Docusaurus is to use the command line tool that helps you scaffold a skeleton Docusaurus website. You can run this command anywhere in a new empty repository or within an existing repository, it will create a new directory containing the scaffolded files."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx create-docusaurus@latest my-website classic\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We recommend the ",(0,t.jsx)(n.code,{children:"classic"})," template so that you can get started quickly, and it contains features found in Docusaurus 1. The ",(0,t.jsx)(n.code,{children:"classic"})," template contains ",(0,t.jsx)(n.code,{children:"@docusaurus/preset-classic"})," which includes standard documentation, a blog, custom pages, and a CSS framework (with dark mode support). You can get up and running extremely quickly with the classic template and customize things later on when you have gained more familiarity with Docusaurus."]}),"\n",(0,t.jsxs)(n.p,{children:["You can also use the template's TypeScript variant by passing the ",(0,t.jsx)(n.code,{children:"--typescript"})," flag. See ",(0,t.jsx)(n.a,{href:"/docusaurus-docs/docs/2.3.1/typescript-support",children:"TypeScript support"})," for more information."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx create-docusaurus@latest my-website classic --typescript\n"})}),"\n",(0,t.jsxs)(n.admonition,{title:"FB-Only",type:"info",children:[(0,t.jsxs)(n.p,{children:["If you are setting up a new Docusaurus website for a Facebook open source project, use the ",(0,t.jsx)(n.code,{children:"facebook"})," template instead, which comes with some useful Facebook-specific defaults:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx create-docusaurus@latest my-website facebook\n"})})]}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Alternative installation commands"}),(0,t.jsx)(n.p,{children:"You can also initialize a new project using your preferred project manager:"}),(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(a.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm init docusaurus\n"})})}),(0,t.jsx)(a.Z,{value:"yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn create docusaurus\n"})})}),(0,t.jsx)(a.Z,{value:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm create docusaurus\n"})})})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Run ",(0,t.jsx)(n.code,{children:"npx create-docusaurus@latest --help"}),", or check out its ",(0,t.jsx)(n.a,{href:"/docusaurus-docs/docs/2.3.1/api/misc/create-docusaurus",children:"API docs"})," for more information about all available flags."]}),"\n",(0,t.jsx)(n.h2,{id:"project-structure",children:"Project structure"}),"\n",(0,t.jsxs)(n.p,{children:["Assuming you chose the classic template and named your site ",(0,t.jsx)(n.code,{children:"my-website"}),", you will see the following files generated under a new directory ",(0,t.jsx)(n.code,{children:"my-website/"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"my-website\n\u251c\u2500\u2500 blog\n\u2502   \u251c\u2500\u2500 2019-05-28-hola.md\n\u2502   \u251c\u2500\u2500 2019-05-29-hello-world.md\n\u2502   \u2514\u2500\u2500 2020-05-30-welcome.md\n\u251c\u2500\u2500 docs\n\u2502   \u251c\u2500\u2500 doc1.md\n\u2502   \u251c\u2500\u2500 doc2.md\n\u2502   \u251c\u2500\u2500 doc3.md\n\u2502   \u2514\u2500\u2500 mdx.md\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 css\n\u2502   \u2502   \u2514\u2500\u2500 custom.css\n\u2502   \u2514\u2500\u2500 pages\n\u2502       \u251c\u2500\u2500 styles.module.css\n\u2502       \u2514\u2500\u2500 index.js\n\u251c\u2500\u2500 static\n\u2502   \u2514\u2500\u2500 img\n\u251c\u2500\u2500 docusaurus.config.js\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 sidebars.js\n\u2514\u2500\u2500 yarn.lock\n"})}),"\n",(0,t.jsx)(n.h3,{id:"project-structure-rundown",children:"Project structure rundown"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/blog/"})," - Contains the blog Markdown files. You can delete the directory if you've disabled the blog plugin, or you can change its name after setting the ",(0,t.jsx)(n.code,{children:"path"})," option. More details can be found in the ",(0,t.jsx)(n.a,{href:"/docusaurus-docs/docs/2.3.1/blog",children:"blog guide"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/docs/"})," - Contains the Markdown files for the docs. Customize the order of the docs sidebar in ",(0,t.jsx)(n.code,{children:"sidebars.js"}),". You can delete the directory if you've disabled the docs plugin, or you can change its name after setting the ",(0,t.jsx)(n.code,{children:"path"})," option. More details can be found in the ",(0,t.jsx)(n.a,{href:"/docusaurus-docs/docs/2.3.1/docs-introduction",children:"docs guide"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/src/"})," - Non-documentation files like pages or custom React components. You don't have to strictly put your non-documentation files here, but putting them under a centralized directory makes it easier to specify in case you need to do some sort of linting/processing","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/src/pages"})," - Any JSX/TSX/MDX file within this directory will be converted into a website page. More details can be found in the ",(0,t.jsx)(n.a,{href:"/docusaurus-docs/docs/2.3.1/creating-pages",children:"pages guide"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/static/"})," - Static directory. Any contents inside here will be copied into the root of the final ",(0,t.jsx)(n.code,{children:"build"})," directory"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/docusaurus.config.js"})," - A config file containing the site configuration. This is the equivalent of ",(0,t.jsx)(n.code,{children:"siteConfig.js"})," in Docusaurus v1"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/package.json"})," - A Docusaurus website is a React app. You can install and use any npm packages you like in them"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/sidebars.js"})," - Used by the documentation to specify the order of documents in the sidebar"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"monorepos",children:"Monorepos"}),"\n",(0,t.jsx)(n.p,{children:"If you are using Docusaurus for documentation of an existing project, a monorepo may be the solution for you. Monorepos allow you to share dependencies between similar projects. For example, your website may use your local packages to showcase the latest features, instead of depending on a released version; your contributors can also conveniently update the docs as they implement features. An example monorepo folder structure is below:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"my-monorepo\n\u251c\u2500\u2500 package-a # Another package, your actual project\n\u2502   \u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 package.json # Package A's dependencies\n\u251c\u2500\u2500 website   # Docusaurus root\n\u2502   \u251c\u2500\u2500 docs\n\u2502   \u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 package.json # Docusaurus' dependencies\n\u251c\u2500\u2500 package.json # Monorepo's shared dependencies\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this case, you should run ",(0,t.jsx)(n.code,{children:"npx create-docusaurus"})," within the ",(0,t.jsx)(n.code,{children:"./my-monorepo"})," folder."]}),"\n",(0,t.jsxs)(n.p,{children:["If you're using a hosting provider such as Netlify or Vercel, you will need to change the ",(0,t.jsx)(n.code,{children:"Base directory"})," of the site to where your Docusaurus root is. In this case, that would be ",(0,t.jsx)(n.code,{children:"./website"}),". Read more about configuring ignore commands in the ",(0,t.jsx)(n.a,{href:"/docusaurus-docs/docs/2.3.1/deployment#deploying-to-netlify",children:"deployment docs"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Read more about monorepos in the ",(0,t.jsx)(n.a,{href:"https://yarnpkg.com/features/workspaces",children:"Yarn documentation"})," (Yarn is not the only way to set up a monorepo, but it's a common solution), or checkout ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus",children:"Docusaurus"})," and ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/jest",children:"Jest"})," for some real-world examples."]}),"\n",(0,t.jsx)(n.h2,{id:"running-the-development-server",children:"Running the development server"}),"\n",(0,t.jsx)(n.p,{children:"To preview your changes as you edit the files, you can run a local development server that will serve your website and reflect the latest changes."}),"\n",(0,t.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(a.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd my-website\nnpm run start\n"})})}),(0,t.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd my-website\nyarn run start\n"})})}),(0,t.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd my-website\npnpm run start\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["By default, a browser window will open at ",(0,t.jsx)(n.a,{href:"http://localhost:3000",children:(0,t.jsx)(n.code,{children:"http://localhost:3000"})}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Congratulations! You have just created your first Docusaurus site! Browse around the site to see what's available."}),"\n",(0,t.jsx)(n.h2,{id:"build",children:"Build"}),"\n",(0,t.jsx)(n.p,{children:"Docusaurus is a modern static website generator so we need to build the website into a directory of static contents and put it on a web server so that it can be viewed. To build the website:"}),"\n",(0,t.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(a.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})})}),(0,t.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn build\n"})})}),(0,t.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm run build\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["and contents will be generated within the ",(0,t.jsx)(n.code,{children:"/build"})," directory, which can be copied to any static file hosting service like ",(0,t.jsx)(n.a,{href:"https://pages.github.com/",children:"GitHub pages"}),", ",(0,t.jsx)(n.a,{href:"https://vercel.com/",children:"Vercel"})," or ",(0,t.jsx)(n.a,{href:"https://www.netlify.com/",children:"Netlify"}),". Check out the docs on ",(0,t.jsx)(n.a,{href:"/docusaurus-docs/docs/2.3.1/deployment",children:"deployment"})," for more details."]}),"\n",(0,t.jsx)(n.h2,{id:"updating-your-docusaurus-version",children:"Updating your Docusaurus version"}),"\n",(0,t.jsxs)(n.p,{children:["There are many ways to update your Docusaurus version. One guaranteed way is to manually change the version number in ",(0,t.jsx)(n.code,{children:"package.json"})," to the desired version. Note that all ",(0,t.jsx)(n.code,{children:"@docusaurus/"}),"-namespaced packages should be using the same version."]}),"\n","\n","\n",(0,t.jsx)(c.Z,{}),"\n",(0,t.jsxs)(n.p,{children:["Then, in the directory containing ",(0,t.jsx)(n.code,{children:"package.json"}),", run your package manager's install command:"]}),"\n",(0,t.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(a.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install\n"})})}),(0,t.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn install\n"})})}),(0,t.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm install\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"To check that the update occurred successfully, run:"}),"\n",(0,t.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(a.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx docusaurus --version\n"})})}),(0,t.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx docusaurus --version\n"})})}),(0,t.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx docusaurus --version\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"You should see the correct version as output."}),"\n",(0,t.jsx)(n.p,{children:"Alternatively, if you are using Yarn, you can do:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Use new unreleased features of Docusaurus with the ",(0,t.jsxs)(n.a,{href:"/community/canary",children:[(0,t.jsx)(n.code,{children:"@canary"})," npm dist tag"]})]})}),"\n",(0,t.jsx)(n.h2,{id:"problems",children:"Problems?"}),"\n",(0,t.jsxs)(n.p,{children:["Ask for help on ",(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/tagged/docusaurus",children:"Stack Overflow"}),", on our ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/docusaurus",children:"GitHub repository"}),", our ",(0,t.jsx)(n.a,{href:"https://discordapp.com/invite/docusaurus",children:"Discord server"}),", or ",(0,t.jsx)(n.a,{href:"https://twitter.com/docusaurus",children:"Twitter"}),"."]})]})}const b=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(p,e)})):p(e)}},7626:(e,n,r)=>{r.d(n,{Z:()=>a});var t=r(85893),s=(r(67294),r(86010));const o={tabItem:"tabItem_Ymn6"};function a({children:e,hidden:n,className:r}){return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.Z)(o.tabItem,r),hidden:n,children:e})}},51715:(e,n,r)=>{r.d(n,{Z:()=>S});var t=r(85893),s=r(67294),o=r(86010),a=r(8241),c=r(16550),i=r(40841),l=r(2834),u=r(35715),d=r(95417);function h(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function b(e){var n,r;return null!==(r=null===(n=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==r?r:[]}function j(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return b(e).map((({props:{value:e,label:n,attributes:r,default:t}})=>({value:e,label:n,attributes:r,default:t})))}(r);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m({value:e,tabValues:n}){return n.some((n=>n.value===e))}function f({queryString:e=!1,groupId:n}){const r=(0,c.k6)(),t=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),o=(0,l._X)(t),a=(0,s.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace(p(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){h(e,n,r[n])}))}return e}({},r.location),{search:n.toString()}))}),[t,r]);return[o,a]}function g(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,o=j(e),[a,c]=(0,s.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const t=null!==(r=n.find((e=>e.default)))&&void 0!==r?r:n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[l,u]=f({queryString:r,groupId:t}),[h,p]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,t]=(0,d.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:t}),b=(()=>{const e=null!=l?l:h;return m({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{b&&c(b)}),[b]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),p(e)}),[u,p,o]),tabValues:o}}var y=r(90980);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function w(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){v(e,n,r[n])}))}return e}function O(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function k({className:e,block:n,selectedValue:r,selectValue:s,tabValues:c}){const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.o5)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),o=c[t].value;o!==r&&(l(n),s(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;var r;n=null!==(r=i[t])&&void 0!==r?r:i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;var t;n=null!==(t=i[r])&&void 0!==t?t:i[i.length-1];break}}null==n||n.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},e),children:c.map((({value:e,label:n,attributes:s})=>(0,t.jsx)("li",O(w({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>i.push(e),onKeyDown:d,onClick:u},s),{className:(0,o.Z)("tabs__item",x.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===e}),children:null!=n?n:e}),e)))})}function P({lazy:e,children:n,selectedValue:r}){const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=o.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function D(e){const n=g(e);return(0,t.jsxs)("div",{className:(0,o.Z)("tabs-container",x.tabList),children:[(0,t.jsx)(k,w({},e,n)),(0,t.jsx)(P,w({},e,n))]})}function S(e){const n=(0,y.Z)();return(0,t.jsx)(D,O(w({},e),{children:b(e.children)}),String(n))}},11269:(e,n,r)=>{r.d(n,{Z:()=>p});var t=r(85893),s=(r(67294),r(97203)),o=r(61596),a=r(90980),c=r(27692),i=r(94042),l=r(92101);const u=void 0;function d(){const e=(0,s.yW)(u),n=(0,s.gB)(u),r="current"===e.name&&n.length>1?n[1].name:e.name;return(0,t.jsx)(l.Z,{language:"json",title:"package.json",children:`{\n  "dependencies": {\n    "@docusaurus/core": "${r}",\n    "@docusaurus/preset-classic": "${r}",\n    // ...\n  }\n}`})}function h(){const e=(0,s.yW)(u),n=(0,s.Iw)(u).activeVersion;if((0,a.Z)()){const e=window.location.hostname;if(e.includes("netlify.app")&&!e.includes("deploy-preview"))return(0,t.jsx)(i.Z,{type:"caution",children:(0,t.jsx)("p",{children:(0,t.jsx)(c.Z,{id:"upgradeGuide.archivedVersion.notice",values:{mainSiteLink:(0,t.jsx)(o.Z,{href:"https://docusaurus.io/docs/installation",children:(0,t.jsx)(c.Z,{id:"upgradeGuide.archivedVersion.notice.mainSiteLink.label",children:"main site"})})},children:"You are browsing an archived version and the snippet below is outdated. Please go to the {mainSiteLink} and follow the instructions there to upgrade to the latest version."})})})}return"current"===n.name?(0,t.jsx)(i.Z,{type:"info",children:(0,t.jsx)("p",{children:(0,t.jsx)(c.Z,{id:"upgradeGuide.unreleasedVersion.notice",values:{canaryDocLink:(0,t.jsx)(o.Z,{href:"/community/canary",children:(0,t.jsx)(c.Z,{id:"upgradeGuide.unreleasedVersion.notice.canaryDocLink.label",values:{canaryTag:(0,t.jsx)("code",{children:"@canary"})},children:"{canaryTag} release"})})},children:"You are browsing the documentation of an unreleased version. If you want to use any unreleased feature, you can use the {canaryDocLink}."})})}):n.name!==e.name?(0,t.jsx)(i.Z,{type:"caution",children:(0,t.jsx)("p",{children:(0,t.jsx)(c.Z,{id:"upgradeGuide.outdatedVersion.notice",children:"You are browsing the documentation of an outdated version. The snippet below shows how to upgrade to the latest version."})})}):null}function p(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h,{}),(0,t.jsx)(d,{})]})}},26669:(e,n,r)=>{r.d(n,{Z:()=>l});var t=r(85893),s=(r(67294),r(51014)),o=r(24805);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var c,i;const l=(c=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){a(e,n,r[n])}))}return e}({},s.Z),i=null!=(i={"my-custom-admonition":function(e){return(0,t.jsxs)("div",{style:{border:"solid red",padding:10},children:[(0,t.jsx)(o.Z,{as:"h5",style:{color:"blue",fontSize:30},children:e.title}),(0,t.jsx)("div",{children:e.children})]})}})?i:{},Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(i)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(i)).forEach((function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(i,e))})),c)},92101:(e,n,r)=>{r.d(n,{Z:()=>a});var t=r(85893),s=(r(67294),r(50191));function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e){return(0,t.jsx)(s.Z,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){o(e,n,r[n])}))}return e}({},e))}},5379:(e,n,r)=>{r.d(n,{Z:()=>d});var t={};r.r(t),r.d(t,{ButtonExample:()=>l});var s=r(67294),o=r(85893);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){a(e,n,r[n])}))}return e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function l(e){return(0,o.jsx)("button",i(c({type:"button"},e),{style:c({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)}))}function u(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}const d=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){u(e,n,r[n])}))}return e}({React:s},s,t)}}]);