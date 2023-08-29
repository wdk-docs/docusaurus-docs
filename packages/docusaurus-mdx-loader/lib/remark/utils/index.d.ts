/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Parent } from 'unist';
import type { PhrasingContent, Heading } from 'mdast';
import type { MdxJsxAttributeValueExpression } from 'mdast-util-mdx';
export declare function stringifyContent(node: Parent, toString: (param: unknown) => string): string;
export declare function toValue(node: PhrasingContent | Heading, toString: (param: unknown) => string): string;
export declare function assetRequireAttributeValue(requireString: string, hash: string): MdxJsxAttributeValueExpression;
//# sourceMappingURL=index.d.ts.map