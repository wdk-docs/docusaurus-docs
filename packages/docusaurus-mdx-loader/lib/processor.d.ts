/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { MDXFrontMatter } from './frontMatter';
import type { Options } from './loader';
import type { AdmonitionOptions } from './remark/admonitions';
type Pluggable = any;
type SimpleProcessor = {
    process: ({ content, filePath, }: {
        content: string;
        filePath: string;
    }) => Promise<string>;
};
export type MDXPlugin = Pluggable;
export type MDXOptions = {
    admonitions: boolean | Partial<AdmonitionOptions>;
    remarkPlugins: MDXPlugin[];
    rehypePlugins: MDXPlugin[];
    beforeDefaultRemarkPlugins: MDXPlugin[];
    beforeDefaultRehypePlugins: MDXPlugin[];
};
export declare function createProcessorUncached(parameters: {
    options: Options;
    format: 'md' | 'mdx';
}): Promise<SimpleProcessor>;
export declare function createProcessorCached({ filePath, mdxFrontMatter, query, reqOptions, }: {
    filePath: string;
    mdxFrontMatter: MDXFrontMatter;
    query: string | Options;
    reqOptions: Options;
}): Promise<SimpleProcessor>;
export {};
//# sourceMappingURL=processor.d.ts.map