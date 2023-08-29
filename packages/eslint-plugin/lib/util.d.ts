/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ESLintUtils } from '@typescript-eslint/utils';
import type { TSESTree } from '@typescript-eslint/types/dist/ts-estree';
type CheckTranslateChildOptions = {
    ignoredStrings?: string[];
};
export declare function isStringWithoutExpressions(text: TSESTree.Node, options?: CheckTranslateChildOptions): boolean;
export declare function isTextLabelChild(child: TSESTree.JSXChild, options?: CheckTranslateChildOptions): boolean;
export declare const createRule: <TOptions extends readonly unknown[], TMessageIds extends string, TRuleListener extends import("@typescript-eslint/utils/dist/ts-eslint/Rule").RuleListener = import("@typescript-eslint/utils/dist/ts-eslint/Rule").RuleListener>({ name, meta, ...rule }: Readonly<ESLintUtils.RuleWithMetaAndName<TOptions, TMessageIds, TRuleListener>>) => import("@typescript-eslint/utils/dist/ts-eslint/Rule").RuleModule<TMessageIds, TOptions, TRuleListener>;
export {};
