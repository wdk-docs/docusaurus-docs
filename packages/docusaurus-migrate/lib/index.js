"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrateMDToMDX = exports.createConfigFile = exports.migrateDocusaurusProject = void 0;
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
const fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
const logger_1 = tslib_1.__importDefault(require("@docusaurus/logger"));
const utils_1 = require("@docusaurus/utils");
const color_1 = tslib_1.__importDefault(require("color"));
const frontMatter_1 = tslib_1.__importStar(require("./frontMatter"));
const transform_1 = tslib_1.__importDefault(require("./transform"));
const sanitizeMD_1 = tslib_1.__importDefault(require("./sanitizeMD"));
async function walk(dir) {
    const results = [];
    const list = await fs_extra_1.default.readdir(dir);
    for (const file of list) {
        const fullPath = `${dir}/${file}`;
        const stat = await fs_extra_1.default.stat(fullPath);
        if (stat.isDirectory()) {
            results.push(...(await walk(fullPath)));
        }
        else {
            results.push(fullPath);
        }
    }
    return results;
}
async function sanitizedFileContent(content, migrateMDFiles) {
    const extractedData = (0, frontMatter_1.default)(content);
    const extractedMetaData = Object.entries(extractedData.metadata)
        .map(([key, value]) => `${key}: ${(0, frontMatter_1.shouldQuotifyFrontMatter)([key, value]) ? `"${value}"` : value}`)
        .join('\n');
    const sanitizedData = `---
${extractedMetaData}
---
${migrateMDFiles
        ? await (0, sanitizeMD_1.default)(extractedData.rawContent)
        : extractedData.rawContent}`;
    return sanitizedData;
}
async function migrateDocusaurusProject(siteDir, newDir, shouldMigrateMdFiles = false, shouldMigratePages = false) {
    async function createMigrationContext() {
        const v1Config = (await import(`${siteDir}/siteConfig.js`))
            .default;
        logger_1.default.info('Starting migration from v1 to v2...');
        const deps = {
            '@docusaurus/core': utils_1.DOCUSAURUS_VERSION,
            '@docusaurus/preset-classic': utils_1.DOCUSAURUS_VERSION,
            clsx: '^1.1.1',
            react: '^17.0.2',
            'react-dom': '^17.0.2',
        };
        const partialMigrationContext = {
            siteDir,
            newDir,
            deps,
            shouldMigrateMdFiles,
            shouldMigratePages,
            v1Config,
        };
        const v2Config = createConfigFile(partialMigrationContext);
        return {
            ...partialMigrationContext,
            v2Config,
        };
    }
    const migrationContext = await createMigrationContext();
    let errorCount = 0;
    try {
        createClientRedirects(migrationContext);
        logger_1.default.success('Created client redirect for non clean URL');
    }
    catch (err) {
        logger_1.default.error(`Failed to creating redirects: ${err}`);
        errorCount += 1;
    }
    if (shouldMigratePages) {
        try {
            await createPages(migrationContext);
            logger_1.default.success('Created new doc pages (check migration page for more details)');
        }
        catch (err) {
            logger_1.default.error(`Failed to create new doc pages: ${err}`);
            errorCount += 1;
        }
    }
    else {
        try {
            await createDefaultLandingPage(migrationContext);
            logger_1.default.success('Created landing page (check migration page for more details)');
        }
        catch (err) {
            logger_1.default.error(`Failed to create landing page: ${err}`);
            errorCount += 1;
        }
    }
    try {
        await migrateStaticFiles(migrationContext);
        logger_1.default.success('Migrated static folder');
    }
    catch (err) {
        logger_1.default.error(`Failed to copy static folder: ${err}`);
        errorCount += 1;
    }
    try {
        await migrateBlogFiles(migrationContext);
    }
    catch (err) {
        logger_1.default.error(`Failed to migrate blogs: ${err}`);
        errorCount += 1;
    }
    try {
        await handleVersioning(migrationContext);
    }
    catch (err) {
        logger_1.default.error(`Failed to migrate versioned docs: ${err}`);
        errorCount += 1;
    }
    try {
        await migrateLatestDocs(migrationContext);
    }
    catch (err) {
        logger_1.default.error(`Failed to migrate docs: ${err}`);
        errorCount += 1;
    }
    try {
        await migrateLatestSidebar(migrationContext);
    }
    catch (err) {
        logger_1.default.error(`Failed to migrate sidebar: ${err}`);
        errorCount += 1;
    }
    try {
        await fs_extra_1.default.outputFile(path_1.default.join(newDir, 'docusaurus.config.js'), `module.exports=${JSON.stringify(migrationContext.v2Config, null, 2)}`);
        logger_1.default.success(`Created a new config file with new navbar and footer config`);
    }
    catch (err) {
        logger_1.default.error(`Failed to create config file: ${err}`);
        errorCount += 1;
    }
    try {
        await migratePackageFile(migrationContext);
    }
    catch (err) {
        logger_1.default.error(`Error occurred while creating package.json file for project: ${err}`);
        errorCount += 1;
    }
    if (errorCount) {
        logger_1.default.warn `Migration from v1 to v2 failed with number=${errorCount} errors: please check the log above`;
    }
    else {
        logger_1.default.success('Completed migration from v1 to v2');
    }
}
exports.migrateDocusaurusProject = migrateDocusaurusProject;
function createConfigFile({ v1Config, siteDir, newDir, }) {
    const siteConfig = v1Config;
    const customConfigFields = {};
    // Add fields that are unknown to v2 to customConfigFields
    Object.keys(siteConfig).forEach((key) => {
        const knownFields = [
            'title',
            'tagline',
            'url',
            'baseUrl',
            'organizationName',
            'projectName',
            'scripts',
            'stylesheets',
            'favicon',
            'cname',
            'noIndex',
            'headerLinks',
            'headerIcon',
            'footerIcon',
            'algolia',
            'colors',
            'copyright',
            'editUrl',
            'customDocsPath',
            'facebookComments',
            'usePrism',
            'highlight',
            'twitterUsername',
            'scrollToTopOptions',
            'twitter',
            'twitterImage',
            'onPageNav',
            'cleanUrl',
            'ogImage',
            'scrollToTop',
            'enableUpdateTime',
            'enableUpdateBy',
            'docsSideNavCollapsible',
            'gaTrackingId',
            'gaGtag',
        ];
        const value = siteConfig[key];
        if (value !== undefined && !knownFields.includes(key)) {
            customConfigFields[key] = value;
        }
    });
    logger_1.default.info `Following Fields from path=${'siteConfig.js'} will be added to path=${'docusaurus.config.js'} in code=${'customFields'}: ${Object.keys(customConfigFields)}`;
    let v2DocsPath;
    if (siteConfig.customDocsPath) {
        const absoluteDocsPath = path_1.default.resolve(siteDir, '..', siteConfig.customDocsPath);
        v2DocsPath = path_1.default.relative(newDir, absoluteDocsPath);
    }
    return {
        title: siteConfig.title ?? '',
        tagline: siteConfig.tagline,
        url: siteConfig.url ?? '',
        baseUrl: siteConfig.baseUrl ?? '',
        organizationName: siteConfig.organizationName,
        projectName: siteConfig.projectName,
        noIndex: siteConfig.noIndex,
        scripts: siteConfig.scripts,
        stylesheets: siteConfig.stylesheets,
        favicon: siteConfig.favicon ?? '',
        customFields: customConfigFields,
        onBrokenLinks: 'log',
        onBrokenMarkdownLinks: 'log',
        presets: [
            [
                '@docusaurus/preset-classic',
                {
                    docs: {
                        ...(v2DocsPath && { path: v2DocsPath }),
                        showLastUpdateAuthor: true,
                        showLastUpdateTime: true,
                        editUrl: siteConfig.editUrl,
                    },
                    blog: {},
                    theme: {},
                    ...(() => {
                        if (siteConfig.gaTrackingId) {
                            if (siteConfig.gaGtag) {
                                return { gtag: { trackingID: siteConfig.gaTrackingId } };
                            }
                            return { googleAnalytics: { trackingID: siteConfig.gaTrackingId } };
                        }
                        return undefined;
                    })(),
                },
            ],
        ],
        plugins: [],
        themeConfig: {
            navbar: {
                title: siteConfig.title,
                logo: siteConfig.headerIcon
                    ? {
                        src: siteConfig.headerIcon,
                    }
                    : undefined,
                items: (siteConfig.headerLinks ?? [])
                    .map((link) => {
                    const { doc, href, label, page } = link;
                    const position = 'left';
                    if (doc) {
                        return {
                            to: `docs/${doc}`,
                            label,
                            position,
                        };
                    }
                    if (page) {
                        return {
                            to: `/${page}`,
                            label,
                            position,
                        };
                    }
                    if (href) {
                        return { href, label, position };
                    }
                    return null;
                })
                    .filter(Boolean),
            },
            image: siteConfig.ogImage ? siteConfig.ogImage : undefined,
            footer: {
                links: siteConfig.twitterUsername
                    ? [
                        {
                            title: 'Community',
                            items: [
                                {
                                    label: 'Twitter',
                                    to: `https://twitter.com/${siteConfig.twitterUsername}`,
                                },
                            ],
                        },
                    ]
                    : [],
                copyright: siteConfig.copyright,
                logo: {
                    src: siteConfig.footerIcon,
                },
            },
            algolia: siteConfig.algolia ? siteConfig.algolia : undefined,
        },
    };
}
exports.createConfigFile = createConfigFile;
function createClientRedirects(context) {
    if (!context.v1Config.cleanUrl) {
        context.deps['@docusaurus/plugin-client-redirects'] = utils_1.DOCUSAURUS_VERSION;
        context.v2Config.plugins.push([
            '@docusaurus/plugin-client-redirects',
            { fromExtensions: ['html'] },
        ]);
    }
}
async function createPages(context) {
    const { newDir, siteDir } = context;
    await fs_extra_1.default.mkdirp(path_1.default.join(newDir, 'src', 'pages'));
    if (await fs_extra_1.default.pathExists(path_1.default.join(siteDir, 'pages', 'en'))) {
        try {
            await fs_extra_1.default.copy(path_1.default.join(siteDir, 'pages', 'en'), path_1.default.join(newDir, 'src', 'pages'));
            const files = await (0, utils_1.Globby)('**/*.js', {
                cwd: path_1.default.join(newDir, 'src', 'pages'),
            });
            await Promise.all(files.map(async (file) => {
                const filePath = path_1.default.join(newDir, 'src', 'pages', file);
                const content = await fs_extra_1.default.readFile(filePath, 'utf-8');
                await fs_extra_1.default.outputFile(filePath, (0, transform_1.default)(content));
            }));
        }
        catch (err) {
            logger_1.default.error(`Unable to migrate Pages: ${err}`);
            await createDefaultLandingPage(context);
        }
    }
    else {
        logger_1.default.info('Ignoring Pages');
    }
}
async function createDefaultLandingPage({ newDir }) {
    const indexPage = `import Layout from "@theme/Layout";
      import React from "react";

      export default () => {
        return <Layout />;
      };
      `;
    await fs_extra_1.default.outputFile(`${newDir}/src/pages/index.js`, indexPage);
}
async function migrateStaticFiles({ siteDir, newDir }) {
    if (await fs_extra_1.default.pathExists(path_1.default.join(siteDir, 'static'))) {
        await fs_extra_1.default.copy(path_1.default.join(siteDir, 'static'), path_1.default.join(newDir, 'static'));
    }
    else {
        await fs_extra_1.default.mkdir(path_1.default.join(newDir, 'static'));
    }
}
async function migrateBlogFiles(context) {
    const { siteDir, newDir, shouldMigrateMdFiles } = context;
    if (await fs_extra_1.default.pathExists(path_1.default.join(siteDir, 'blog'))) {
        await fs_extra_1.default.copy(path_1.default.join(siteDir, 'blog'), path_1.default.join(newDir, 'blog'));
        const files = await walk(path_1.default.join(newDir, 'blog'));
        await Promise.all(files.map(async (file) => {
            const content = await fs_extra_1.default.readFile(file, 'utf-8');
            await fs_extra_1.default.outputFile(file, await sanitizedFileContent(content, shouldMigrateMdFiles));
        }));
        context.v2Config.presets[0][1].blog.path = 'blog';
        logger_1.default.success('Migrated blogs to version 2 with change in front matter');
    }
    else {
        logger_1.default.warn('Blog not found. Skipping migration for blog');
    }
}
async function handleVersioning(context) {
    const { siteDir, newDir } = context;
    if (await fs_extra_1.default.pathExists(path_1.default.join(siteDir, 'versions.json'))) {
        const loadedVersions = (await fs_extra_1.default.readJSON(path_1.default.join(siteDir, 'versions.json')));
        await fs_extra_1.default.copyFile(path_1.default.join(siteDir, 'versions.json'), path_1.default.join(newDir, 'versions.json'));
        const versions = loadedVersions.reverse();
        const versionRegex = new RegExp(`version-(${versions.join('|')})-`, 'gim');
        await migrateVersionedSidebar(context, versions, versionRegex);
        await fs_extra_1.default.mkdirp(path_1.default.join(newDir, 'versioned_docs'));
        await migrateVersionedDocs(context, versions, versionRegex);
        logger_1.default.success `Migrated version docs and sidebar. The following doc versions have been created:name=${loadedVersions}`;
    }
    else {
        logger_1.default.warn('Versioned docs not found. Skipping migration for versioned docs');
    }
}
async function migrateVersionedDocs(context, versions, versionRegex) {
    const { siteDir, newDir, shouldMigrateMdFiles } = context;
    await Promise.all(versions.reverse().map(async (version, index) => {
        if (index === 0) {
            await fs_extra_1.default.copy(path_1.default.join(siteDir, '..', context.v1Config.customDocsPath ?? 'docs'), path_1.default.join(newDir, 'versioned_docs', `version-${version}`));
            await fs_extra_1.default.copy(path_1.default.join(siteDir, 'versioned_docs', `version-${version}`), path_1.default.join(newDir, 'versioned_docs', `version-${version}`));
            return;
        }
        try {
            await fs_extra_1.default.mkdirs(path_1.default.join(newDir, 'versioned_docs', `version-${version}`));
            await fs_extra_1.default.copy(path_1.default.join(newDir, 'versioned_docs', `version-${versions[index - 1]}`), path_1.default.join(newDir, 'versioned_docs', `version-${version}`));
            await fs_extra_1.default.copy(path_1.default.join(siteDir, 'versioned_docs', `version-${version}`), path_1.default.join(newDir, 'versioned_docs', `version-${version}`));
        }
        catch {
            await fs_extra_1.default.copy(path_1.default.join(newDir, 'versioned_docs', `version-${versions[index - 1]}`), path_1.default.join(newDir, 'versioned_docs', `version-${version}`));
        }
    }));
    const files = await walk(path_1.default.join(newDir, 'versioned_docs'));
    await Promise.all(files.map(async (pathToFile) => {
        if (path_1.default.extname(pathToFile) === '.md') {
            const content = await fs_extra_1.default.readFile(pathToFile, 'utf-8');
            await fs_extra_1.default.outputFile(pathToFile, await sanitizedFileContent(content.replace(versionRegex, ''), shouldMigrateMdFiles));
        }
    }));
}
async function migrateVersionedSidebar(context, versions, versionRegex) {
    const { siteDir, newDir } = context;
    if (await fs_extra_1.default.pathExists(path_1.default.join(siteDir, 'versioned_sidebars'))) {
        await fs_extra_1.default.mkdirp(path_1.default.join(newDir, 'versioned_sidebars'));
        const sidebars = [];
        // Order matters: if a sidebar file doesn't exist, we have to use the
        // previous version's
        for (let i = 0; i < versions.length; i += 1) {
            const version = versions[i];
            let sidebarEntries;
            const sidebarPath = path_1.default.join(siteDir, 'versioned_sidebars', `version-${version}-sidebars.json`);
            try {
                sidebarEntries = (await fs_extra_1.default.readJSON(sidebarPath));
            }
            catch {
                sidebars.push({ version, entries: sidebars[i - 1].entries });
                return;
            }
            const newSidebar = Object.entries(sidebarEntries).reduce((topLevel, value) => {
                const key = value[0].replace(versionRegex, '');
                topLevel[key] = Object.entries(value[1]).reduce((acc, val) => {
                    acc[val[0].replace(versionRegex, '')] = val[1].map((item) => {
                        if (typeof item === 'string') {
                            return item.replace(versionRegex, '');
                        }
                        return {
                            type: 'category',
                            label: item.label,
                            ids: item.ids.map((id) => id.replace(versionRegex, '')),
                        };
                    });
                    return acc;
                }, {});
                return topLevel;
            }, {});
            sidebars.push({ version, entries: newSidebar });
        }
        await Promise.all(sidebars.map(async (sidebar) => {
            const newSidebar = Object.entries(sidebar.entries).reduce((acc, val) => {
                const key = `version-${sidebar.version}/${val[0]}`;
                acc[key] = Object.entries(val[1]).map((value) => ({
                    type: 'category',
                    label: value[0],
                    items: value[1].map((sidebarItem) => {
                        if (typeof sidebarItem === 'string') {
                            return {
                                type: 'doc',
                                id: `version-${sidebar.version}/${sidebarItem}`,
                            };
                        }
                        return {
                            type: 'category',
                            label: sidebarItem.label,
                            items: sidebarItem.ids.map((id) => ({
                                type: 'doc',
                                id: `version-${sidebar.version}/${id}`,
                            })),
                        };
                    }),
                }));
                return acc;
            }, {});
            await fs_extra_1.default.outputFile(path_1.default.join(newDir, 'versioned_sidebars', `version-${sidebar.version}-sidebars.json`), JSON.stringify(newSidebar, null, 2));
        }));
        context.v2Config.themeConfig.navbar.items.push({
            label: 'Version',
            to: 'docs',
            position: 'right',
            items: [
                {
                    label: versions[versions.length - 1],
                    to: 'docs/',
                    activeBaseRegex: `docs/(?!${versions.join('|')}|next)`,
                },
                ...versions
                    .reverse()
                    .slice(1)
                    .map((version) => ({
                    label: version,
                    to: `docs/${version}/`,
                })),
                {
                    label: 'Main/Unreleased',
                    to: `docs/next/`,
                    activeBaseRegex: `docs/next/(?!support|team|resources)`,
                },
            ],
        });
    }
}
async function migrateLatestSidebar(context) {
    const { siteDir, newDir } = context;
    try {
        await fs_extra_1.default.copyFile(path_1.default.join(siteDir, 'sidebars.json'), path_1.default.join(newDir, 'sidebars.json'));
        context.v2Config.presets[0][1].docs.sidebarPath = path_1.default.join(path_1.default.relative(newDir, siteDir), 'sidebars.json');
    }
    catch {
        logger_1.default.warn('Sidebar not found. Skipping migration for sidebar');
    }
    if (context.v1Config.colors) {
        const primaryColor = (0, color_1.default)(context.v1Config.colors.primaryColor);
        const css = `:root{
  --ifm-color-primary-lightest: ${primaryColor.darken(-0.3).hex()};
  --ifm-color-primary-lighter: ${primaryColor.darken(-0.15).hex()};
  --ifm-color-primary-light: ${primaryColor.darken(-0.1).hex()};
  --ifm-color-primary: ${primaryColor.hex()};
  --ifm-color-primary-dark: ${primaryColor.darken(0.1).hex()};
  --ifm-color-primary-darker: ${primaryColor.darken(0.15).hex()};
  --ifm-color-primary-darkest: ${primaryColor.darken(0.3).hex()};
}
`;
        await fs_extra_1.default.outputFile(path_1.default.join(newDir, 'src', 'css', 'customTheme.css'), css);
        context.v2Config.presets[0][1].theme.customCss = path_1.default.join(path_1.default.relative(newDir, path_1.default.join(siteDir, '..')), 'src/css/customTheme.css');
    }
}
async function migrateLatestDocs(context) {
    const { siteDir, newDir, shouldMigrateMdFiles } = context;
    if (await fs_extra_1.default.pathExists(path_1.default.join(siteDir, '..', 'docs'))) {
        context.v2Config.presets[0][1].docs.path = path_1.default.join(path_1.default.relative(newDir, path_1.default.join(siteDir, '..')), 'docs');
        const files = await walk(path_1.default.join(siteDir, '..', 'docs'));
        await Promise.all(files.map(async (file) => {
            if (path_1.default.extname(file) === '.md') {
                const content = await fs_extra_1.default.readFile(file, 'utf-8');
                await fs_extra_1.default.outputFile(file, await sanitizedFileContent(content, shouldMigrateMdFiles));
            }
        }));
        logger_1.default.success('Migrated docs to version 2');
    }
    else {
        logger_1.default.warn('Docs folder not found. Skipping migration for docs');
    }
}
async function migratePackageFile(context) {
    const { deps, siteDir, newDir } = context;
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const packageFile = (await require(`${siteDir}/package.json`));
    packageFile.scripts = {
        ...packageFile.scripts,
        start: 'docusaurus start',
        build: 'docusaurus build',
        swizzle: 'docusaurus swizzle',
        deploy: 'docusaurus deploy',
        docusaurus: 'docusaurus',
    };
    if (packageFile.dependencies) {
        delete packageFile.dependencies.docusaurus;
    }
    if (packageFile.devDependencies) {
        delete packageFile.devDependencies.docusaurus;
    }
    packageFile.dependencies = {
        ...packageFile.dependencies,
        ...deps,
    };
    await fs_extra_1.default.outputFile(path_1.default.join(newDir, 'package.json'), JSON.stringify(packageFile, null, 2));
    logger_1.default.success('Migrated package.json file');
}
async function migrateMDToMDX(siteDir, newDir) {
    await fs_extra_1.default.mkdirp(newDir);
    await fs_extra_1.default.copy(siteDir, newDir);
    const files = await walk(newDir);
    await Promise.all(files.map(async (filePath) => {
        if (path_1.default.extname(filePath) === '.md') {
            const content = await fs_extra_1.default.readFile(filePath, 'utf-8');
            await fs_extra_1.default.outputFile(filePath, await sanitizedFileContent(content, true));
        }
    }));
    logger_1.default.success `Successfully migrated path=${siteDir} to path=${newDir}`;
}
exports.migrateMDToMDX = migrateMDToMDX;
