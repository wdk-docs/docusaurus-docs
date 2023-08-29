"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const no_html_links_1 = tslib_1.__importDefault(require("./no-html-links"));
const prefer_docusaurus_heading_1 = tslib_1.__importDefault(require("./prefer-docusaurus-heading"));
const no_untranslated_text_1 = tslib_1.__importDefault(require("./no-untranslated-text"));
const string_literal_i18n_messages_1 = tslib_1.__importDefault(require("./string-literal-i18n-messages"));
exports.default = {
    'no-untranslated-text': no_untranslated_text_1.default,
    'string-literal-i18n-messages': string_literal_i18n_messages_1.default,
    'no-html-links': no_html_links_1.default,
    'prefer-docusaurus-heading': prefer_docusaurus_heading_1.default,
};
