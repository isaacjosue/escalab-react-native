import React from 'react';

import Screen from './Screen';
import { Search as SearchComponent } from '../search';

const Search = (): React.JSX.Element => {
  return (
    <Screen>
      <SearchComponent />
    </Screen>
  );
};

export default Search;
