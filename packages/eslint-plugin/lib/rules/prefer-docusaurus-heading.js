"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'prefer-docusaurus-heading',
    meta: {
        type: 'problem',
        docs: {
            description: 'enforce using Docusaurus theme Heading component instead of any <hn> tag',
            recommended: false,
        },
        schema: [],
        messages: {
            headings: 'Do not use any of the `<hn>` tags for headings. Use the `<Heading />` component from `@theme/Heading` instead.',
        },
    },
    defaultOptions: [],
    create(context) {
        const headingTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
        return {
            JSXOpeningElement(node) {
                const elementName = node.name.name;
                if (!headingTypes.includes(elementName)) {
                    return;
                }
                context.report({ node, messageId: 'headings' });
            },
        };
    },
});
