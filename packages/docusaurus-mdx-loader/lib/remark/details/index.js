"use strict";
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const unist_util_visit_1 = tslib_1.__importDefault(require("unist-util-visit"));
// Transform <details> to <Details>
// MDX 2 doesn't allow to substitute html elements with the provider anymore
function plugin() {
    return (root) => {
        (0, unist_util_visit_1.default)(root, 'mdxJsxFlowElement', (node) => {
            if (node.name === 'details') {
                node.name = 'Details';
            }
        });
    };
}
exports.default = plugin;
//# sourceMappingURL=index.js.map