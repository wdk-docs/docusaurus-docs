/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
declare const _default: {
    'no-untranslated-text': import("@typescript-eslint/utils/dist/ts-eslint/Rule").RuleModule<"translateChildren", [{
        ignoredStrings: string[];
    }], import("@typescript-eslint/utils/dist/ts-eslint/Rule").RuleListener>;
    'string-literal-i18n-messages': import("@typescript-eslint/utils/dist/ts-eslint/Rule").RuleModule<"translateChildren" | "translateArg", [], import("@typescript-eslint/utils/dist/ts-eslint/Rule").RuleListener>;
    'no-html-links': import("@typescript-eslint/utils/dist/ts-eslint/Rule").RuleModule<"link", [{
        ignoreFullyResolved: boolean;
    }], import("@typescript-eslint/utils/dist/ts-eslint/Rule").RuleListener>;
    'prefer-docusaurus-heading': import("@typescript-eslint/utils/dist/ts-eslint/Rule").RuleModule<"headings", [], import("@typescript-eslint/utils/dist/ts-eslint/Rule").RuleListener>;
};
export default _default;
