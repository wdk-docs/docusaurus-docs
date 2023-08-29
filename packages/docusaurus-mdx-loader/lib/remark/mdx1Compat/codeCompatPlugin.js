"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const unist_util_visit_1 = tslib_1.__importDefault(require("unist-util-visit"));
// Solution inspired by https://github.com/pomber/docusaurus-mdx-2/blob/main/packages/mdx-loader/src/remark/codeCompat/index.ts
// TODO after MDX 2 we probably don't need this - remove soon?
// Only fenced code blocks are swapped by pre/code MDX components
// Using <pre><code> in JSX shouldn't use our MDX components anymore
// To make theme-classic/src/theme/MDXComponents/Pre work
// we need to fill two properties that mdx v2 doesn't provide anymore
function codeCompatPlugin() {
    return (root) => {
        (0, unist_util_visit_1.default)(root, 'code', (node) => {
            node.data = node.data || {};
            node.data.hProperties = node.data.hProperties || {};
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            node.data.hProperties.metastring = node.meta;
            // Retrocompatible support for live codeblock metastring
            // Not really the appropriate place to handle that :s
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            node.data.hProperties.live = node.meta
                ?.split(' ')
                .includes('live');
        });
    };
}
exports.default = codeCompatPlugin;
//# sourceMappingURL=codeCompatPlugin.js.map