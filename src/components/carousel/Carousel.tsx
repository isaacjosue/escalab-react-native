import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
    height: 330,
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
      {movies ? (
        <FlatList
          horizontal
          contentContainerStyle={styles.list}
          data={movies}
          renderItem={({ item }) => <Movie movie={item} />}
          onEndReachedThreshold={0.8}
          onEndReached={() => {
            fetchMore();
          }}
        />
      ) : (
        <Icon name="loading" color="black" />
      )}
    </View>
  );
};

export default Carousel;
