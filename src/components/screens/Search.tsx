import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

import Screen from './Screen';
import { SearchBar, SearchResults } from '../search';
import { MovieType } from '../../types';

import { searchMovies } from '../../utils/api';

const styles = StyleSheet.create({
  empty: {
    alignSelf: 'center',
    fontSize: 15,
    height: '100%',
  },
});

const Search = (): React.JSX.Element => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<MovieType[]>([]);

  const getMovies = async () => {
    const data: { results: MovieType[] } = await searchMovies({
      query,
    });
    setMovies(data.results);
  };

  useEffect(() => {
    if (query) getMovies();
  }, [query]);

  return (
    <Screen>
      <SearchBar query={query} setQuery={setQuery} />
      {query ? (
        <SearchResults movies={movies} />
      ) : (
        <Text style={styles.empty}>Type something</Text>
      )}
    </Screen>
  );
};

export default Search;
