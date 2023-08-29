/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
type CLIOptions = {
    packageManager?: PackageManager;
    skipInstall?: boolean;
    typescript?: boolean;
    gitStrategy?: GitStrategy;
};
declare const lockfileNames: {
    npm: string;
    yarn: string;
    pnpm: string;
    bun: string;
};
type PackageManager = keyof typeof lockfileNames;
declare const gitStrategies: readonly ["deep", "shallow", "copy", "custom"];
type GitStrategy = (typeof gitStrategies)[number];
export default function init(rootDir: string, reqName?: string, reqTemplate?: string, cliOptions?: CLIOptions): Promise<void>;
export {};
