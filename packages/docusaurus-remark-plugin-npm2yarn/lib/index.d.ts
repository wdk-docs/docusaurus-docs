/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
type Plugin<T> = any;
type KnownConverter = 'yarn' | 'pnpm';
type CustomConverter = [name: string, cb: (npmCode: string) => string];
type Converter = CustomConverter | KnownConverter;
type PluginOptions = {
    sync?: boolean;
    converters?: Converter[];
};
declare const plugin: Plugin<[PluginOptions?]>;
export = plugin;
//# sourceMappingURL=index.d.ts.map