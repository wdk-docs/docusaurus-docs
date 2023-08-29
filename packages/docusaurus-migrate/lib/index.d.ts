/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { VersionOneConfig, VersionTwoConfig } from './types';
type MigrationContext = {
    siteDir: string;
    newDir: string;
    deps: {
        [key: string]: string;
    };
    shouldMigrateMdFiles: boolean;
    shouldMigratePages: boolean;
    v1Config: VersionOneConfig;
    v2Config: VersionTwoConfig;
};
export declare function migrateDocusaurusProject(siteDir: string, newDir: string, shouldMigrateMdFiles?: boolean, shouldMigratePages?: boolean): Promise<void>;
export declare function createConfigFile({ v1Config, siteDir, newDir, }: Pick<MigrationContext, 'v1Config' | 'siteDir' | 'newDir'>): VersionTwoConfig;
export declare function migrateMDToMDX(siteDir: string, newDir: string): Promise<void>;
export {};
