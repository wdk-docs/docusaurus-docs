"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProcessorCached = exports.createProcessorUncached = void 0;
const tslib_1 = require("tslib");
const remark_emoji_1 = tslib_1.__importDefault(require("remark-emoji"));
const headings_1 = tslib_1.__importDefault(require("./remark/headings"));
const toc_1 = tslib_1.__importDefault(require("./remark/toc"));
const transformImage_1 = tslib_1.__importDefault(require("./remark/transformImage"));
const transformLinks_1 = tslib_1.__importDefault(require("./remark/transformLinks"));
const details_1 = tslib_1.__importDefault(require("./remark/details"));
const head_1 = tslib_1.__importDefault(require("./remark/head"));
const mermaid_1 = tslib_1.__importDefault(require("./remark/mermaid"));
const admonitions_1 = tslib_1.__importDefault(require("./remark/admonitions"));
const codeCompatPlugin_1 = tslib_1.__importDefault(require("./remark/mdx1Compat/codeCompatPlugin"));
const format_1 = require("./format");
const DEFAULT_OPTIONS = {
    admonitions: true,
    rehypePlugins: [],
    remarkPlugins: [headings_1.default, remark_emoji_1.default, toc_1.default],
    beforeDefaultRemarkPlugins: [],
    beforeDefaultRehypePlugins: [],
};
function getAdmonitionsPlugins(admonitionsOption) {
    if (admonitionsOption) {
        const plugin = admonitionsOption === true
            ? admonitions_1.default
            : [admonitions_1.default, admonitionsOption];
        return [plugin];
    }
    return [];
}
// Need to be async due to ESM dynamic imports...
async function createProcessorFactory() {
    const { createProcessor: createMdxProcessor } = await import('@mdx-js/mdx');
    const { default: rehypeRaw } = await import('rehype-raw');
    const { default: gfm } = await import('remark-gfm');
    // TODO using fork until PR merged: https://github.com/leebyron/remark-comment/pull/3
    const { default: comment } = await import('@slorber/remark-comment');
    const { default: directive } = await import('remark-directive');
    // /!\ this method is synchronous on purpose
    // Using async code here can create cache entry race conditions!
    function createProcessorSync({ options, format, }) {
        const remarkPlugins = [
            ...(options.beforeDefaultRemarkPlugins ?? []),
            directive,
            ...getAdmonitionsPlugins(options.admonitions ?? false),
            ...DEFAULT_OPTIONS.remarkPlugins,
            details_1.default,
            head_1.default,
            ...(options.markdownConfig.mermaid ? [mermaid_1.default] : []),
            [
                transformImage_1.default,
                {
                    staticDirs: options.staticDirs,
                    siteDir: options.siteDir,
                },
            ],
            [
                transformLinks_1.default,
                {
                    staticDirs: options.staticDirs,
                    siteDir: options.siteDir,
                },
            ],
            gfm,
            options.markdownConfig.mdx1Compat.comments ? comment : null,
            ...(options.remarkPlugins ?? []),
        ].filter((plugin) => Boolean(plugin));
        // codeCompatPlugin needs to be applied last after user-provided plugins
        // (after npm2yarn for example)
        remarkPlugins.push(codeCompatPlugin_1.default);
        const rehypePlugins = [
            ...(options.beforeDefaultRehypePlugins ?? []),
            ...DEFAULT_OPTIONS.rehypePlugins,
            ...(options.rehypePlugins ?? []),
        ];
        if (format === 'md') {
            // This is what permits to embed HTML elements with format 'md'
            // See https://github.com/facebook/docusaurus/pull/8960
            // See https://github.com/mdx-js/mdx/pull/2295#issuecomment-1540085960
            const rehypeRawPlugin = [
                rehypeRaw,
                {
                    passThrough: [
                        'mdxFlowExpression',
                        'mdxJsxFlowElement',
                        'mdxJsxTextElement',
                        'mdxTextExpression',
                        'mdxjsEsm',
                    ],
                },
            ];
            rehypePlugins.unshift(rehypeRawPlugin);
        }
        const processorOptions = {
            ...options,
            remarkPlugins,
            rehypePlugins,
            providerImportSource: '@mdx-js/react',
        };
        const mdxProcessor = createMdxProcessor({
            ...processorOptions,
            format,
        });
        return {
            process: async ({ content, filePath }) => mdxProcessor
                .process({
                value: content,
                path: filePath,
            })
                .then((res) => res.toString()),
        };
    }
    return { createProcessorSync };
}
// Will be useful for tests
async function createProcessorUncached(parameters) {
    const { createProcessorSync } = await createProcessorFactory();
    return createProcessorSync(parameters);
}
exports.createProcessorUncached = createProcessorUncached;
// Compilers are cached so that Remark/Rehype plugins can run
// expensive code during initialization
const ProcessorsCache = new Map();
async function createProcessorsCacheEntry({ query, reqOptions, }) {
    const { createProcessorSync } = await createProcessorFactory();
    const compilers = ProcessorsCache.get(query);
    if (compilers) {
        return compilers;
    }
    const compilerCacheEntry = {
        mdProcessor: createProcessorSync({
            options: reqOptions,
            format: 'md',
        }),
        mdxProcessor: createProcessorSync({
            options: reqOptions,
            format: 'mdx',
        }),
    };
    ProcessorsCache.set(query, compilerCacheEntry);
    return compilerCacheEntry;
}
async function createProcessorCached({ filePath, mdxFrontMatter, query, reqOptions, }) {
    const compilers = await createProcessorsCacheEntry({ query, reqOptions });
    const format = (0, format_1.getFormat)({
        filePath,
        frontMatterFormat: mdxFrontMatter.format,
        markdownConfigFormat: reqOptions.markdownConfig.format,
    });
    return format === 'md' ? compilers.mdProcessor : compilers.mdxProcessor;
}
exports.createProcessorCached = createProcessorCached;
//# sourceMappingURL=processor.js.map