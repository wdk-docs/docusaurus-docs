/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { type ReactNode } from 'react';
export declare const Context: React.Context<boolean>;
export declare function BrowserContextProvider({ children, }: {
    children: ReactNode;
}): JSX.Element;
