"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const tslib_1 = require("tslib");
const stylelint_1 = tslib_1.__importDefault(require("stylelint"));
const ruleName = 'docusaurus/copyright-header';
const messages = stylelint_1.default.utils.ruleMessages(ruleName, {
    rejected: 'Missing copyright in the header comment',
});
const rule = (primaryOption, secondaryOption, context) => (root, result) => {
    stylelint_1.default.utils.validateOptions(result, ruleName, {
        actual: primaryOption,
        possible: [true, false],
    }, {
        actual: secondaryOption,
        possible: (v) => typeof v?.header === 'string',
    });
    if (root.first &&
        root.first.type === 'comment' &&
        root.first.source?.start?.column === 1) {
        const { text } = root.first;
        if (text === secondaryOption.header) {
            return;
        }
    }
    if (context.fix) {
        root.first?.before(`/*${secondaryOption.header}\n */`);
        return;
    }
    stylelint_1.default.utils.report({
        message: messages.rejected,
        node: root,
        result,
        ruleName,
    });
};
rule.ruleName = ruleName;
rule.messages = messages;
const plugin = stylelint_1.default.createPlugin(ruleName, rule);
module.exports = plugin;
