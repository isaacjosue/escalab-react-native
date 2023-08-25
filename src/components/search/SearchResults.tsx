import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';

import BigList from './BigList';
import { MovieType } from '../../types';

type Props = {
  movies: MovieType[];
};

const styles = StyleSheet.create({
  results: {
    height: '100%',
    justifyContent: 'center',
  },
});

const SearchResults = ({ movies }: Props): React.JSX.Element => {
  return (
    <View style={styles.results}>
      <ScrollView persistentScrollbar>
        {movies.length > 0 ? (
          <BigList movies={movies} />
        ) : (
          <Text style={{ alignSelf: 'center' }}>No results found</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default SearchResults;
