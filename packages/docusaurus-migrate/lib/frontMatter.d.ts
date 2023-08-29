/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { Data } from './types';
export default function extractMetadata(content: string): Data;
export declare function shouldQuotifyFrontMatter([key, value]: [
    string,
    string
]): boolean;
