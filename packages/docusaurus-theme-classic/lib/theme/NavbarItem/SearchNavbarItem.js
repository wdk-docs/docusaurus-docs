/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import SearchBar from '@theme/SearchBar';
import NavbarSearch from '@theme/Navbar/Search';
export default function SearchNavbarItem({mobile, className}) {
  if (mobile) {
    return null;
  }
  return (
    <NavbarSearch className={className}>
      <SearchBar />
    </NavbarSearch>
  );
}
