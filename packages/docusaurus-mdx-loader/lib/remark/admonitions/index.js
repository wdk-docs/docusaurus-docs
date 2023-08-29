"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeAdmonitionOptions = exports.DefaultAdmonitionOptions = void 0;
const tslib_1 = require("tslib");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const unist_util_visit_1 = tslib_1.__importDefault(require("unist-util-visit"));
exports.DefaultAdmonitionOptions = {
    keywords: [
        'secondary',
        'info',
        'success',
        'danger',
        'note',
        'tip',
        'warning',
        'important',
        'caution',
    ],
    extendDefaults: true,
};
function normalizeAdmonitionOptions(providedOptions) {
    if (providedOptions === true) {
        return exports.DefaultAdmonitionOptions;
    }
    const options = { ...exports.DefaultAdmonitionOptions, ...providedOptions };
    // By default it makes more sense to append keywords to the default ones
    // Adding custom keywords is more common than disabling existing ones
    if (options.extendDefaults) {
        options.keywords = [
            ...exports.DefaultAdmonitionOptions.keywords,
            ...options.keywords,
        ];
    }
    return options;
}
exports.normalizeAdmonitionOptions = normalizeAdmonitionOptions;
function parseDirective(directive) {
    const hasDirectiveLabel = directive.children?.[0]?.data?.directiveLabel === true;
    if (hasDirectiveLabel) {
        const [directiveLabel, ...contentNodes] = directive.children;
        return { directiveLabel: directiveLabel, contentNodes };
    }
    return { directiveLabel: undefined, contentNodes: directive.children };
}
function getTextOnlyTitle(directiveLabel) {
    const isTextOnlyTitle = directiveLabel?.children?.length === 1 &&
        directiveLabel?.children?.[0]?.type === 'text';
    return isTextOnlyTitle
        ? // @ts-expect-error: todo type
            directiveLabel?.children?.[0].value
        : undefined;
}
const plugin = function plugin(optionsInput = {}) {
    const { keywords } = normalizeAdmonitionOptions(optionsInput);
    return async (root) => {
        (0, unist_util_visit_1.default)(root, (node) => {
            if (node.type === 'containerDirective') {
                const directive = node;
                const isAdmonition = keywords.includes(directive.name);
                if (!isAdmonition) {
                    return;
                }
                const { directiveLabel, contentNodes } = parseDirective(directive);
                const textOnlyTitle = directive.attributes?.title ??
                    (directiveLabel ? getTextOnlyTitle(directiveLabel) : undefined);
                // Transform the mdast directive node to a hast admonition node
                // See https://github.com/syntax-tree/mdast-util-to-hast#fields-on-nodes
                // TODO in MDX v2 we should transform the whole directive to
                // mdxJsxFlowElement instead of using hast
                directive.data = {
                    hName: 'admonition',
                    hProperties: {
                        ...(textOnlyTitle && { title: textOnlyTitle }),
                        type: directive.name,
                    },
                };
                directive.children = contentNodes;
                // TODO legacy MDX v1 <mdxAdmonitionTitle> workaround
                // v1: not possible to inject complex JSX elements as props
                // v2: now possible: use a mdxJsxFlowElement element
                if (directiveLabel && !textOnlyTitle) {
                    const complexTitleNode = {
                        type: 'mdxAdmonitionTitle',
                        data: {
                            hName: 'mdxAdmonitionTitle',
                            hProperties: {},
                        },
                        children: directiveLabel.children,
                    };
                    // @ts-expect-error: invented node type
                    directive.children.unshift(complexTitleNode);
                }
            }
        });
    };
};
exports.default = plugin;
//# sourceMappingURL=index.js.map