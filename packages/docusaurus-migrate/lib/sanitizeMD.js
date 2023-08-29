"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const remark_parse_1 = tslib_1.__importDefault(require("remark-parse"));
const hast_util_to_jsx_1 = tslib_1.__importDefault(require("@mapbox/hast-util-to-jsx"));
const rehype_parse_1 = tslib_1.__importDefault(require("rehype-parse"));
const unist_util_visit_1 = tslib_1.__importDefault(require("unist-util-visit"));
const remark_stringify_1 = tslib_1.__importDefault(require("remark-stringify"));
const html_tags_1 = tslib_1.__importDefault(require("html-tags"));
const hast_util_to_string_1 = tslib_1.__importDefault(require("hast-util-to-string"));
const tags = html_tags_1.default.reduce((acc, tag) => {
    acc[tag] = true;
    return acc;
}, {});
async function sanitizeMD(code) {
    const { unified } = await import('unified');
    const markdownTree = unified().use(remark_parse_1.default).parse(code);
    (0, unist_util_visit_1.default)(markdownTree, 'code', (node) => {
        node.value = `\n<!--${node.value}-->\n`;
    });
    (0, unist_util_visit_1.default)(markdownTree, 'inlineCode', (node) => {
        node.value = `<!--${node.value}-->`;
    });
    // @ts-expect-error: :/
    const markdownString = await unified()
        .use(remark_stringify_1.default, { fence: '`', fences: true })
        .stringify(markdownTree);
    const htmlTree = unified().use(rehype_parse_1.default).parse(markdownString);
    (0, unist_util_visit_1.default)(htmlTree, 'element', (node) => {
        if (!tags[node.tagName]) {
            node.type = 'text';
            node.value =
                node.tagName + (0, hast_util_to_string_1.default)(node);
            delete node.children;
            delete node.tagName;
        }
    });
    return (0, hast_util_to_jsx_1.default)(htmlTree)
        .replace(/\{\/\*|\*\/\}/g, '')
        .replace(/\{\/\*|\*\/\}/g, '')
        .replace(/<html><head \/><body>|<\/body><\/html>/g, '');
}
exports.default = sanitizeMD;
