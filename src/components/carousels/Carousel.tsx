import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { MovieType } from '../../types';
import { Movie } from '../movie';

type Props = {
  movies: MovieType[];
  title: string;
  fetchMore: () => Promise<void>;
};

const styles = StyleSheet.create({
  carousel: {
    marginVertical: 10,
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
  },
  list: {
    alignItems: 'flex-start',
    backgroundColor: '#1c1c1c',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    overflow: 'scroll',
    padding: 5,
    width: 'auto',
  },
});

const Carousel = ({ movies, title, fetchMore }: Props): React.JSX.Element => {
  return (
    <View style={styles.carousel}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        contentContainerStyle={styles.list}
        data={movies}
        renderItem={({ item }) => <Movie movie={item} />}
        onEndReached={() => {
          fetchMore();
        }}
      />
    </View>
  );
};

export default Carousel;
