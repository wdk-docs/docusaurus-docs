/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** Adds a given string prefix to `str`. */
export declare function addPrefix(str: string, prefix: string): string;
/** Adds a given string suffix to `str`. */
export declare function addSuffix(str: string, suffix: string): string;
/** Removes a given string suffix from `str`. */
export declare function removeSuffix(str: string, suffix: string): string;
/** Removes a given string prefix from `str`. */
export declare function removePrefix(str: string, prefix: string): string;
/**
 * `Array#map` for async operations where order matters.
 * @param array The array to traverse.
 * @param action An async action to be performed on every array item. Will be
 * awaited before working on the next.
 * @returns The list of results returned from every `action(item)`
 */
export declare function mapAsyncSequential<T, R>(array: T[], action: (t: T) => Promise<R>): Promise<R[]>;
/**
 * `Array#find` for async operations where order matters.
 * @param array The array to traverse.
 * @param predicate An async predicate to be called on every array item. Should
 * return a boolean indicating whether the currently element should be returned.
 * @returns The function immediately returns the first item on which `predicate`
 * returns `true`, or `undefined` if none matches the predicate.
 */
export declare function findAsyncSequential<T>(array: T[], predicate: (t: T) => Promise<boolean>): Promise<T | undefined>;
//# sourceMappingURL=jsUtils.d.ts.map