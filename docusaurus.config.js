// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const defaultLocale = "zh";

/** @type {import('@docusaurus/types').Config} */
module.exports = async function createConfigAsync() {
  return {
    title: "Docusaurus",
    tagline: "快速构建优化的网站，专注于你的内容",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://wdk-docs.github.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "wdk-docs", // Usually your GitHub org/user name.
    projectName: "docusaurus-docs", // Usually your repo name.
    trailingSlash: false,

    onBrokenLinks: "warn",
    onBrokenMarkdownLinks: "warn",

    // 即使不使用内部化，也可以使用该字段设置有用的元数据，如html lang。例如，如果您的网站是中文的，您可能希望将`en`替换为`zh-Hans`。
    i18n: {
      defaultLocale: "zh",
      locales: ["zh"],
      localeConfigs: {
        zh: {
          htmlLang: "zh-CN",
        },
      },
    },

    presets: [
      [
        "classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
            remarkPlugins: [(await import("remark-math")).default],
            rehypePlugins: [(await import("rehype-katex")).default],
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        navbar: {
          hideOnScroll: true,
          title: "文档龙",
          logo: {
            alt: "",
            src: "img/docusaurus.svg",
            srcDark: "img/docusaurus_keytar.svg",
            width: 32,
            height: 32,
          },
          items: [
            {
              type: "doc",
              position: "left",
              docId: "introduction",
              label: "文档",
            },
            {
              type: "docSidebar",
              position: "left",
              sidebarId: "api",
              label: "API",
            },
            { to: "/blog", label: "博客", position: "left" },
            { to: "showcase", label: "案例", position: "left" },
            {
              to: "/community/support",
              label: "社区",
              position: "left",
              activeBaseRegex: `/community/`,
            },
            {
              type: "localeDropdown",
              position: "left",
            },
            {
              href: "https://github.com/facebook/docusaurus",
              label: "GitHub",
              position: "right",
            },
            {
              type: "search",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "学习",
              items: [
                {
                  label: "介绍",
                  to: "docs",
                },
                {
                  label: "安装",
                  to: "docs/installation",
                },
                {
                  label: "从v1迁移到v2",
                  to: "docs/migration",
                },
              ],
            },
            {
              title: "社区",
              items: [
                {
                  label: "Stack Overflow",
                  href: "https://stackoverflow.com/questions/tagged/docusaurus",
                },
                {
                  label: "特性请求",
                  to: "/feature-requests",
                },
                {
                  label: "Discord",
                  href: "https://discordapp.com/invite/docusaurus",
                },
                {
                  label: "帮助",
                  to: "/community/support",
                },
              ],
            },
            {
              title: "更多的",
              items: [
                {
                  label: "博客",
                  to: "blog",
                },
                {
                  label: "更新日志",
                  to: "/changelog",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/facebook/docusaurus",
                },
                {
                  label: "推特",
                  href: "https://twitter.com/docusaurus",
                },
                {
                  html: `
                <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
                </a>
              `,
                },
              ],
            },
            {
              title: "法律",
              // Please don't remove the privacy and terms, it's a legal
              // requirement.
              items: [
                {
                  label: "隐私",
                  href: "https://opensource.facebook.com/legal/privacy/",
                },
                {
                  label: "条款",
                  href: "https://opensource.facebook.com/legal/terms/",
                },
                {
                  label: "Cookie 策略",
                  href: "https://opensource.facebook.com/legal/cookie-policy/",
                },
              ],
            },
          ],
          logo: {
            alt: "Meta开源Logo",
            src: "/img/meta_opensource_logo_negative.svg",
            href: "https://opensource.fb.com",
          },
          copyright: `Copyright © ${new Date().getFullYear()} 元平台, Inc. 用Docusaurus建造的。`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          defaultLanguage: "javascript",
        },
      }),
    plugins: [
      [
        "content-docs",
        /** @type {import('@docusaurus/plugin-content-docs').Options} */
        ({
          id: "community",
          path: "community",
          routeBasePath: "community",
          // editUrl: "",
          editCurrentVersion: true,
          sidebarPath: require.resolve("./sidebarsCommunity.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        }),
      ],
      [
        "ideal-image",
        /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
        ({
          quality: 70,
          max: 1030,
          min: 640,
          steps: 2,
          // Use false to debug, but it incurs huge perf costs
          disableInDev: true,
        }),
      ],
      // [
      //   require.resolve("./src/plugins/changelog/index.js"),
      //   {
      //     blogTitle: "Docusaurus 更新日志",
      //     blogDescription: "让自己随时了解每个版本中的新特性",
      //     blogSidebarCount: "ALL",
      //     blogSidebarTitle: "更新日志",
      //     routeBasePath: "/changelog",
      //     showReadingTime: false,
      //     postsPerPage: 20,
      //     archiveBasePath: null,
      //     authorsMapPath: "authors.json",
      //     feedOptions: {
      //       type: "all",
      //       title: "Docusaurus 更新日志",
      //       description: "让自己随时了解每个版本中的新特性",
      //       copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
      //       language: defaultLocale,
      //     },
      //   },
      // ],
      "@docusaurus/theme-mermaid",
      [
        "client-redirects",
        /** @type {import('@docusaurus/plugin-client-redirects').Options} */
        ({
          fromExtensions: ["html"],
          createRedirects(routePath) {
            // Redirect to /docs from /docs/introduction (now docs root doc)
            if (routePath === "/docs" || routePath === "/docs/") {
              return [`${routePath}/introduction`];
            }
            return [];
          },
          redirects: [
            {
              from: ["/docs/support", "/docs/next/support"],
              to: "/community/support",
            },
            {
              from: ["/docs/team", "/docs/next/team"],
              to: "/community/team",
            },
            {
              from: ["/docs/resources", "/docs/next/resources"],
              to: "/community/resources",
            },
            // ...dogfoodingRedirects,
          ],
        }),
      ],
      (await import("./src/plugins/featureRequests/FeatureRequestsPlugin.mjs")).default,
    ],
    markdown: {
      mermaid: true,
    },
    // themes: ["@docusaurus/theme-mermaid"],
  };
};
