/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @ts-check

const path = require("path");
const npm2yarn = require("@docusaurus/remark-plugin-npm2yarn");
/** @type {Array<string>} */
const versions = require("./versions.json");
/** @type {Record<string,string>} */
const VersionsArchived = require("./versionsArchived.json");
// const {
//   dogfoodingPluginInstances,
//   dogfoodingThemeInstances,
//   dogfoodingRedirects,
// } = require("./_dogfooding/dogfooding.config");

/** @type {Record<string,Record<string,string>>} */
const ConfigLocalized = require("./docusaurus.config.localized.json");

const ArchivedVersionsDropdownItems = Object.entries(VersionsArchived).splice(0, 5);

/** @param {string} version */
function isPrerelease(version) {
  return version.includes("alpha") || version.includes("beta") || version.includes("rc");
}

function getLastVersion() {
  const firstStableVersion = versions.find((version) => !isPrerelease(version));
  return firstStableVersion ?? versions[0];
}

// This probably only makes sense for the alpha/beta/rc phase, temporary
function getNextVersionName() {
  return "Canary";
  /*
  const expectedPrefix = '2.0.0-rc.';

  const lastReleasedVersion = versions[0];
  if (!lastReleasedVersion || !lastReleasedVersion.includes(expectedPrefix)) {
    throw new Error(
      'this code is only meant to be used during the 2.0 alpha/beta/rc phase.',
    );
  }
  const version = parseInt(lastReleasedVersion.replace(expectedPrefix, ''), 10);
  return `${expectedPrefix}${version + 1}`;

   */
}

// Artificial way to crash the SSR rendering and test errors
// See website/_dogfooding/_pages tests/crashTest.tsx
// Test with: DOCUSAURUS_CRASH_TEST=true yarn build:website:fast
const crashTest = process.env.DOCUSAURUS_CRASH_TEST === "true";

const isDev = process.env.NODE_ENV === "development";

const isDeployPreview = !!process.env.NETLIFY && process.env.CONTEXT === "deploy-preview";

// Netlify branch deploy like "docusaurus-v2"
const isBranchDeploy = !!process.env.NETLIFY && process.env.CONTEXT === "branch-deploy";

// Used to debug production build issues faster
const isBuildFast = !!process.env.BUILD_FAST;

const baseUrl = process.env.BASE_URL ?? "/docusaurus-docs/";

// Special deployment for staging locales until they get enough translations
// https://app.netlify.com/sites/docusaurus-i18n-staging
// https://docusaurus-i18n-staging.netlify.app/
const isI18nStaging = process.env.I18N_STAGING === "true";

const isVersioningDisabled = !!process.env.DISABLE_VERSIONING || isI18nStaging;

const TwitterSvg =
  '<svg style="fill: #1DA1F2; vertical-align: middle; margin-left: 3px;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';

const defaultLocale = "en";

function getLocalizedConfigValue(/** @type {string} */ key) {
  const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? defaultLocale;
  const values = ConfigLocalized[key];
  if (!values) {
    throw new Error(`Localized config key=${key} not found`);
  }
  const value = values[currentLocale] ?? values[defaultLocale];
  if (!value) {
    throw new Error(
      `Localized value for config key=${key} not found for both currentLocale=${currentLocale} or defaultLocale=${defaultLocale}`
    );
  }
  return value;
}

/** @returns {Promise<import('@docusaurus/types').Config>} */
module.exports = async function createConfigAsync() {
  return {
    title: "文档龙",
    tagline: getLocalizedConfigValue("tagline"),
    organizationName: "wdk-docs",
    projectName: "docusaurus-docs",
    baseUrl,
    baseUrlIssueBanner: true,
    url: "https://wdk-docs.github.io",
    // Dogfood both settings:
    // - force trailing slashes for deploy previews
    // - avoid trailing slashes in prod
    trailingSlash: isDeployPreview,
    stylesheets: [
      {
        href: "/katex/katex.min.css",
        type: "text/css",
      },
    ],
    i18n: {
      defaultLocale: "zh-CN",
      locales: ["en", "zh-CN"],
    },
    webpack: {
      jsLoader: (isServer) => ({
        loader: require.resolve("swc-loader"),
        options: {
          jsc: {
            parser: {
              syntax: "typescript",
              tsx: true,
            },
            transform: {
              react: {
                runtime: "automatic",
              },
            },
            target: "es2017",
          },
          module: {
            type: isServer ? "commonjs" : "es6",
          },
        },
      }),
    },
    markdown: {
      // format: "detect",
      mermaid: true,
      mdx1Compat: {
        // comments: false,
      },
      preprocessor: ({ filePath, fileContent }) => {
        let result = fileContent;

        result = result.replaceAll("{/_", "{/*");
        result = result.replaceAll("_/}", "*/}");

        if (isDev) {
          // "vscode://file/${projectPath}${filePath}:${line}:${column}",
          // "webstorm://open?file=${projectPath}${filePath}&line=${line}&column=${column}",
          const vscodeLink = `vscode://file/${filePath}`;
          const webstormLink = `webstorm://open?file=${filePath}`;
          const intellijLink = `idea://open?file=${filePath}`;
          result = `${result}\n\n---\n\n**DEV**: open this file in [VSCode](<${vscodeLink}>) | [WebStorm](<${webstormLink}>) | [IntelliJ](<${intellijLink}>)\n`;
        }

        return result;
      },
    },
    onBrokenLinks: "warn", //throw
    onBrokenMarkdownLinks: "warn",
    favicon: "img/docusaurus.ico",
    customFields: {
      crashTest,
      isDeployPreview,
      description:
        "在React中优化的站点生成器。Docusaurus可以帮助你快速移动和书写内容。建立文档网站、博客、营销页面等等。",
    },
    staticDirectories: [
      "static",
      // path.join(__dirname, "_dogfooding/_asset-tests"),
      // Adding a non-existent static directory. If user deleted `static`
      // without specifying `staticDirectories: []`, build should still work
      // path.join(__dirname, "_dogfooding/non-existent"),
    ],
    themes: ["live-codeblock"], //...dogfoodingThemeInstances
    plugins: [
      [
        require.resolve("./src/plugins/changelog/index.js"),
        {
          blogTitle: "Docusaurus 更新日志",
          blogDescription: "让自己随时了解每个版本中的新特性",
          blogSidebarCount: "所有",
          blogSidebarTitle: "更新日志",
          routeBasePath: "/changelog",
          showReadingTime: false,
          postsPerPage: 20,
          archiveBasePath: null,
          authorsMapPath: "authors.json",
          feedOptions: {
            type: "all",
            title: "Docusaurus 更新日志",
            description: "让自己随时了解每个版本中的新特性",
            copyright: `版权 © ${new Date().getFullYear()} Facebook, Inc.`,
            language: defaultLocale,
          },
        },
      ],
      [
        "content-docs",
        /** @type {import('@docusaurus/plugin-content-docs').Options} */
        ({
          id: "community",
          path: "community",
          routeBasePath: "community",
          editUrl: ({ locale, versionDocsDirPath, docPath }) => {
            if (locale !== defaultLocale) {
              return `https://crowdin.com/project/docusaurus-v2/${locale}`;
            }
            return `https://github.com/facebook/docusaurus/edit/main/website/${versionDocsDirPath}/${docPath}`;
          },
          remarkPlugins: [npm2yarn],
          editCurrentVersion: true,
          sidebarPath: require.resolve("./sidebarsCommunity.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        }),
      ],
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
      [
        "pwa",
        {
          // debug: isDeployPreview,
          offlineModeActivationStrategies: ["appInstalled", "standalone", "queryString"],
          // swRegister: false,
          swCustom: require.resolve("./src/sw.js"),
          pwaHead: [
            {
              tagName: "link",
              rel: "icon",
              href: "img/docusaurus.png",
            },
            {
              tagName: "link",
              rel: "manifest",
              href: "manifest.json",
            },
            {
              tagName: "meta",
              name: "theme-color",
              content: "rgb(37, 194, 160)",
            },
            {
              tagName: "meta",
              name: "apple-mobile-web-app-capable",
              content: "yes",
            },
            {
              tagName: "meta",
              name: "apple-mobile-web-app-status-bar-style",
              content: "#000",
            },
            {
              tagName: "link",
              rel: "apple-touch-icon",
              href: "img/docusaurus.png",
            },
            {
              tagName: "link",
              rel: "mask-icon",
              href: "img/docusaurus.png",
              color: "rgb(62, 204, 94)",
            },
            {
              tagName: "meta",
              name: "msapplication-TileImage",
              content: "img/docusaurus.png",
            },
            {
              tagName: "meta",
              name: "msapplication-TileColor",
              content: "#000",
            },
          ],
        },
      ],
      "@docusaurus/theme-mermaid",
      (await import("./src/plugins/featureRequests/FeatureRequestsPlugin.mjs")).default,
      // ...dogfoodingPluginInstances,
    ],
    presets: [
      [
        "classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          debug: true, // force debug plugin usage
          docs: {
            // routeBasePath: '/',
            path: "docs",
            sidebarPath: "sidebars.js",
            // sidebarCollapsible: false,
            // sidebarCollapsed: true,
            editUrl: ({ locale, docPath }) => {
              if (locale !== defaultLocale) {
                return `https://crowdin.com/project/docusaurus-v2/${locale}`;
              }
              // We want users to submit updates to the upstream/next version!
              // Otherwise we risk losing the update on the next release.
              const nextVersionDocsDirPath = "docs";
              return `https://github.com/facebook/docusaurus/edit/main/website/${nextVersionDocsDirPath}/${docPath}`;
            },
            admonitions: {
              keywords: ["my-custom-admonition"],
            },
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
            remarkPlugins: [
              [npm2yarn, { sync: true }],
              (await import("remark-math")).default,
              (await import("./src/remark/configTabs.mjs")).default,
            ],
            rehypePlugins: [(await import("rehype-katex")).default],
            disableVersioning: isVersioningDisabled,
            lastVersion: isDev || isDeployPreview || isBranchDeploy || isBuildFast ? "current" : getLastVersion(),

            onlyIncludeVersions: (() => {
              if (isBuildFast) {
                return ["current"];
              } else if (!isVersioningDisabled && (isDev || isDeployPreview || isBranchDeploy)) {
                return ["current", ...versions.slice(0, 2)];
              }
              return undefined;
            })(),
            versions: {
              current: {
                label: `${getNextVersionName()} 🚧`,
              },
            },
          },
          blog: {
            // routeBasePath: '/',
            path: "blog",
            editUrl: ({ locale, blogDirPath, blogPath }) => {
              if (locale !== defaultLocale) {
                return `https://crowdin.com/project/docusaurus-v2/${locale}`;
              }
              return `https://github.com/facebook/docusaurus/edit/main/website/${blogDirPath}/${blogPath}`;
            },
            remarkPlugins: [npm2yarn],
            postsPerPage: 5,
            feedOptions: {
              type: "all",
              copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
            },
            blogSidebarCount: "ALL",
            blogSidebarTitle: "All our posts",
          },
          pages: {
            remarkPlugins: [npm2yarn],
          },
          theme: {
            customCss: [
              require.resolve("./src/css/custom.css"),
              // relative paths are relative to site dir
              // "./_dogfooding/dogfooding.css",
            ],
          },
          gtag: !(isDeployPreview || isBranchDeploy)
            ? {
                trackingID: ["G-GR2MFTJ89C"],
              }
            : undefined,
          sitemap: {
            // Note: /tests/docs already has noIndex: true
            ignorePatterns: ["/tests/{blog,pages}/**"],
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        liveCodeBlock: {
          playgroundPosition: "bottom",
        },
        docs: {
          sidebar: {
            hideable: true,
            autoCollapseCategories: true,
          },
        },
        colorMode: {
          defaultMode: "light",
          disableSwitch: false,
          respectPrefersColorScheme: true,
        },
        announcementBar: {
          id: "announcementBar-2", // Increment on change
          content: `⭐️ 如果你喜欢文档龙, 在<a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/docusaurus">GitHub</a>上给它打个星在推特上<a target="_blank" rel="noopener noreferrer" href="https://twitter.com/docusaurus">Twitter ${TwitterSvg}</a>关注我们`,
        },
        prism: {
          additionalLanguages: ["java", "latex", "php"],
          magicComments: [
            {
              className: "theme-code-block-highlighted-line",
              line: "highlight-next-line",
              block: { start: "highlight-start", end: "highlight-end" },
            },
            {
              className: "code-block-error-line",
              line: "This will error",
            },
          ],
          theme: (await import("./src/utils/prismLight.mjs")).default,
          darkTheme: (await import("./src/utils/prismDark.mjs")).default,
        },
        image: "img/docusaurus-social-card.jpg",
        // metadata: [{name: 'twitter:card', content: 'summary'}],
        // algolia: {
        //   appId: "",
        //   apiKey: "",
        //   indexName: "docusaurus-2",
        //   replaceSearchResultPathname:
        //     isDev || isDeployPreview
        //       ? {
        //           from: /^\/docs\/next/g,
        //           to: "/docs",
        //         }
        //       : undefined,
        // },
        navbar: {
          hideOnScroll: true,
          title: "Docusaurus",
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
              label: "Docs",
            },
            {
              type: "docSidebar",
              position: "left",
              sidebarId: "api",
              label: "API",
            },
            { to: "blog", label: "Blog", position: "left" },
            { to: "showcase", label: "Showcase", position: "left" },
            {
              to: "/community/support",
              label: "Community",
              position: "left",
              activeBaseRegex: `/community/`,
            },
            // This item links to a draft doc: only displayed in dev
            // {
            //   type: "doc",
            //   docId: "index",
            //   label: "Tests",
            //   docsPluginId: "docs-tests",
            // },
            isDev && { to: "/__docusaurus/debug", label: "Debug" },
            // Custom item for dogfooding: only displayed in /tests/ routes
            // {
            //   type: "custom-dogfood-navbar-item",
            //   content: "😉",
            // },
            // Right
            {
              type: "docsVersionDropdown",
              position: "right",
              dropdownActiveClassDisabled: true,
              dropdownItemsAfter: [
                {
                  type: "html",
                  value: '<hr class="dropdown-separator">',
                },
                {
                  type: "html",
                  className: "dropdown-archived-versions",
                  value: "<b>Archived versions</b>",
                },
                ...ArchivedVersionsDropdownItems.map(([versionName, versionUrl]) => ({
                  label: versionName,
                  href: versionUrl,
                })),
                {
                  href: "https://v1.docusaurus.io",
                  label: "1.x.x",
                },
                {
                  type: "html",
                  value: '<hr class="dropdown-separator">',
                },
                {
                  to: "/versions",
                  label: "All versions",
                },
              ],
            },
            {
              type: "localeDropdown",
              position: "right",
              dropdownItemsAfter: [
                {
                  type: "html",
                  value: '<hr style="margin: 0.3rem 0;">',
                },
                {
                  href: "https://github.com/facebook/docusaurus/issues/3526",
                  label: "Help Us Translate",
                },
              ],
            },
            {
              href: "https://github.com/facebook/docusaurus",
              position: "right",
              className: "header-github-link",
              "aria-label": "GitHub repository",
            },
          ].filter(Boolean),
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Learn",
              items: [
                {
                  label: "Introduction",
                  to: "docs",
                },
                {
                  label: "Installation",
                  to: "docs/installation",
                },
                {
                  label: "Migration from v1 to v2",
                  to: "docs/migration",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Stack Overflow",
                  href: "https://stackoverflow.com/questions/tagged/docusaurus",
                },
                {
                  label: "Feature Requests",
                  to: "/feature-requests",
                },
                {
                  label: "Discord",
                  href: "https://discordapp.com/invite/docusaurus",
                },
                {
                  label: "Help",
                  to: "/community/support",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "Blog",
                  to: "blog",
                },
                {
                  label: "Changelog",
                  to: "/changelog",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/facebook/docusaurus",
                },
                {
                  label: "Twitter",
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
              title: "Legal",
              // Please don't remove the privacy and terms, it's a legal
              // requirement.
              items: [
                {
                  label: "Privacy",
                  href: "https://opensource.facebook.com/legal/privacy/",
                },
                {
                  label: "Terms",
                  href: "https://opensource.facebook.com/legal/terms/",
                },
                {
                  label: "Cookie Policy",
                  href: "https://opensource.facebook.com/legal/cookie-policy/",
                },
              ],
            },
          ],
          logo: {
            alt: "Meta Open Source Logo",
            src: "/img/meta_opensource_logo_negative.svg",
            href: "https://opensource.fb.com",
          },
          copyright: `Copyright © ${new Date().getFullYear()} Meta Platforms, Inc. Built with Docusaurus.`,
        },
      }),
  };
};
