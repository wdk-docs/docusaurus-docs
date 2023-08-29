"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const tslib_1 = require("tslib");
const unist_util_visit_1 = tslib_1.__importDefault(require("unist-util-visit"));
const npm_to_yarn_1 = tslib_1.__importDefault(require("npm-to-yarn"));
function createAttribute(attributeName, attributeValue) {
    return {
        type: 'mdxJsxAttribute',
        name: attributeName,
        value: attributeValue,
    };
}
function createTabItem({ code, node, value, label, }) {
    return {
        type: 'mdxJsxFlowElement',
        name: 'TabItem',
        attributes: [
            createAttribute('value', value),
            label && createAttribute('label', label),
        ].filter((attr) => Boolean(attr)),
        children: [
            {
                type: node.type,
                lang: node.lang,
                value: code,
            },
        ],
    };
}
const transformNode = (node, isSync, converters) => {
    const groupIdProp = isSync
        ? {
            type: 'mdxJsxAttribute',
            name: 'groupId',
            value: 'npm2yarn',
        }
        : undefined;
    const npmCode = node.value;
    function createConvertedTabItem(converter) {
        if (typeof converter === 'string') {
            return createTabItem({
                code: (0, npm_to_yarn_1.default)(npmCode, converter),
                node,
                value: converter,
                label: converter === 'yarn' ? 'Yarn' : converter,
            });
        }
        const [converterName, converterFn] = converter;
        return createTabItem({
            code: converterFn(npmCode),
            node,
            value: converterName,
        });
    }
    return [
        {
            type: 'mdxJsxFlowElement',
            name: 'Tabs',
            attributes: [groupIdProp].filter(Boolean),
            children: [
                createTabItem({ code: npmCode, node, value: 'npm' }),
                ...converters.flatMap(createConvertedTabItem),
            ],
        },
    ];
};
const isMdxEsmLiteral = (node) => node.type === 'mdxjsEsm';
// TODO legacy approximation, good-enough for now but not 100% accurate
const isTabsImport = (node) => isMdxEsmLiteral(node) && node.value.includes('@theme/Tabs');
const isParent = (node) => Array.isArray(node.children);
const isNpm2Yarn = (node) => node.type === 'code' && node.meta === 'npm2yarn';
function createImportNode() {
    return {
        type: 'mdxjsEsm',
        value: "import Tabs from '@theme/Tabs'\nimport TabItem from '@theme/TabItem'",
        data: {
            estree: {
                type: 'Program',
                body: [
                    {
                        type: 'ImportDeclaration',
                        specifiers: [
                            {
                                type: 'ImportDefaultSpecifier',
                                local: { type: 'Identifier', name: 'Tabs' },
                            },
                        ],
                        source: {
                            type: 'Literal',
                            value: '@theme/Tabs',
                            raw: "'@theme/Tabs'",
                        },
                    },
                    {
                        type: 'ImportDeclaration',
                        specifiers: [
                            {
                                type: 'ImportDefaultSpecifier',
                                local: { type: 'Identifier', name: 'TabItem' },
                            },
                        ],
                        source: {
                            type: 'Literal',
                            value: '@theme/TabItem',
                            raw: "'@theme/TabItem'",
                        },
                    },
                ],
                sourceType: 'module',
            },
        },
    };
}
const plugin = (options = {}) => {
    // @ts-expect-error: todo temporary
    const { sync = false, converters = ['yarn', 'pnpm'] } = options;
    return (root) => {
        let transformed = false;
        let alreadyImported = false;
        (0, unist_util_visit_1.default)(root, (node) => {
            if (isTabsImport(node)) {
                alreadyImported = true;
            }
            if (isParent(node)) {
                let index = 0;
                while (index < node.children.length) {
                    const child = node.children[index];
                    if (isNpm2Yarn(child)) {
                        const result = transformNode(child, sync, converters);
                        node.children.splice(index, 1, ...result);
                        index += result.length;
                        transformed = true;
                    }
                    else {
                        index += 1;
                    }
                }
            }
        });
        if (transformed && !alreadyImported) {
            root.children.unshift(createImportNode());
        }
    };
};
module.exports = plugin;
//# sourceMappingURL=index.js.map