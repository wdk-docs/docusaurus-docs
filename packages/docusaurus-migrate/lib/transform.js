"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jscodeshift_1 = tslib_1.__importStar(require("jscodeshift"));
const empty = () => jscodeshift_1.default.arrowFunctionExpression([jscodeshift_1.default.identifier('props')], jscodeshift_1.default.jsxElement(jscodeshift_1.default.jsxOpeningElement(jscodeshift_1.default.jsxIdentifier('div'), [
    jscodeshift_1.default.jsxSpreadAttribute(jscodeshift_1.default.identifier('props')),
]), jscodeshift_1.default.jsxClosingElement(jscodeshift_1.default.jsxIdentifier('div'))));
const property = (key, value) => jscodeshift_1.default.objectProperty(jscodeshift_1.default.identifier(key), value);
const processCallExpression = (node) => {
    const args = node?.value?.init?.arguments[0];
    if (!args) {
        return;
    }
    if (args.type === 'Literal') {
        if (typeof args.value === 'string' &&
            args.value.includes('../../core/CompLibrary')) {
            const newDeclarator = jscodeshift_1.default.variableDeclarator(node.value.id, jscodeshift_1.default.objectExpression([
                property('Container', empty()),
                property('GridBlock', empty()),
                property('MarkdownBlock', empty()),
            ]));
            (0, jscodeshift_1.default)(node).replaceWith(newDeclarator);
        }
    }
    if (args.type === 'TemplateLiteral') {
        if (args.quasis
            .map((element) => element.value.raw)
            .join('')
            .match(/\/core\//)) {
            const newDeclarator = jscodeshift_1.default.variableDeclarator(node.value.id, empty());
            (0, jscodeshift_1.default)(node).replaceWith(newDeclarator);
        }
    }
};
const processMemberExpression = (node) => {
    const object = node?.value?.init?.object;
    if (!(object.type === 'CallExpression')) {
        return;
    }
    const args = object.arguments[0];
    if (!args) {
        return;
    }
    if (args.type === 'Literal') {
        if (args.value === '../../core/CompLibrary.js') {
            const newDeclarator = jscodeshift_1.default.variableDeclarator(node.value.id, jscodeshift_1.default.objectExpression([
                property('Container', empty()),
                property('GridBlock', empty()),
                property('MarkdownBlock', empty()),
            ]));
            (0, jscodeshift_1.default)(node).replaceWith(newDeclarator);
        }
        else if (typeof args.value === 'string' && args.value.match(/server/)) {
            const newDeclarator = jscodeshift_1.default.variableDeclarator(node.value.id, empty());
            (0, jscodeshift_1.default)(node).replaceWith(newDeclarator);
        }
    }
    if (args.type === 'TemplateLiteral') {
        if (args.quasis
            .map((ele) => ele.value.raw)
            .join('')
            .match(/\/core\//)) {
            const newDeclarator = jscodeshift_1.default.variableDeclarator(node.value.id, empty());
            (0, jscodeshift_1.default)(node).replaceWith(newDeclarator);
        }
    }
};
function transformer(file) {
    const root = (0, jscodeshift_1.default)(file);
    const r = getImportDeclaratorPaths(root);
    r.forEach((node) => {
        if (node?.value?.init?.type === 'CallExpression') {
            processCallExpression(node);
        }
        else if (node?.value?.init?.type === 'MemberExpression') {
            processMemberExpression(node);
        }
    });
    if (r[r.length - 1]) {
        (0, jscodeshift_1.default)(r[r.length - 1].parent).insertAfter(jscodeshift_1.default.importDeclaration([jscodeshift_1.default.importDefaultSpecifier(jscodeshift_1.default.identifier('Layout'))], jscodeshift_1.default.literal('@theme/Layout')));
    }
    root
        .find(jscodeshift_1.AssignmentExpression, {
        operator: '=',
        left: {
            type: 'MemberExpression',
            object: {
                name: 'module',
            },
            property: {
                name: 'exports',
            },
        },
        right: {
            type: 'Identifier',
        },
    })
        .filter((p) => p.parentPath.parentPath.name === 'body')
        .forEach((p) => {
        const exportDecl = jscodeshift_1.default.exportDeclaration(true, jscodeshift_1.default.arrowFunctionExpression([jscodeshift_1.default.identifier('props')], jscodeshift_1.default.jsxElement(jscodeshift_1.default.jsxOpeningElement(jscodeshift_1.default.jsxIdentifier('Layout'), []), jscodeshift_1.default.jsxClosingElement(jscodeshift_1.default.jsxIdentifier('Layout')), [
            jscodeshift_1.default.jsxElement(jscodeshift_1.default.jsxOpeningElement(jscodeshift_1.default.jsxIdentifier(p.value.right.name), [
                jscodeshift_1.default.jsxSpreadAttribute(jscodeshift_1.default.identifier('props')),
            ], true)),
        ])));
        exportDecl.comments = p.parentPath.value.comments;
        (0, jscodeshift_1.default)(p.parentPath).replaceWith(exportDecl);
    });
    return root.toSource();
}
exports.default = transformer;
function getDefaultImportDeclarations(rootAst) {
    // var ... = require('y')
    return rootAst
        .find(jscodeshift_1.VariableDeclarator, {
        init: {
            callee: {
                name: 'require',
            },
        },
    })
        .filter((variableDeclarator) => !!variableDeclarator.value);
}
function getNamedImportDeclarations(rootAst) {
    // var ... = require('y').x
    return rootAst.find(jscodeshift_1.VariableDeclarator, {
        init: {
            object: {
                callee: {
                    name: 'require',
                },
            },
        },
    });
}
function getImportDeclaratorPaths(variableDeclaration) {
    const defaultImports = getDefaultImportDeclarations(variableDeclaration);
    const namedImports = getNamedImportDeclarations(variableDeclaration);
    return [...defaultImports.paths(), ...namedImports.paths()];
}
