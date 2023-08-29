"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const tslib_1 = require("tslib");
const rules_1 = tslib_1.__importDefault(require("./rules"));
module.exports = {
    rules: rules_1.default,
    configs: {
        recommended: {
            plugins: ['@docusaurus'],
            rules: {
                '@docusaurus/string-literal-i18n-messages': 'error',
                '@docusaurus/no-html-links': 'warn',
                '@docusaurus/prefer-docusaurus-heading': 'warn',
            },
        },
        all: {
            plugins: ['@docusaurus'],
            rules: {
                '@docusaurus/string-literal-i18n-messages': 'error',
                '@docusaurus/no-untranslated-text': 'warn',
                '@docusaurus/no-html-links': 'warn',
                '@docusaurus/prefer-docusaurus-heading': 'warn',
            },
        },
    },
};
