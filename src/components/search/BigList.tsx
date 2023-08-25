import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Movie } from '../movie';
import { MovieType } from '../../types';

import { navBarHeight } from '../../utils/navBarHeight';

type Props = {
  movies: MovieType[];
};

const styles = StyleSheet.create({
  bigList: {
    backgroundColor: '#1c1c1c',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    overflow: 'scroll',
    padding: 5,
    paddingBottom: navBarHeight * 3
  },
});

const BigList = ({ movies }: Props): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.bigList}>
      {movies.map(movie => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </SafeAreaView>
  );
};

export default BigList;
