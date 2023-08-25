import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import Screen from './Screen';
import { CarouselContainer } from '../carousel';

import {
  getCurrentlyPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../../utils/api';

const styles = StyleSheet.create({
  home: {
    height: '100%',
    paddingBottom: 10,
  },
});

const Home = (): React.JSX.Element => {
  return (
    <Screen>
      <View style={styles.home}>
        <ScrollView persistentScrollbar>
          <CarouselContainer
            title="Popular Movies"
            getMoviesMethod={getPopularMovies}
          />
          <CarouselContainer
            title="Top Rated"
            getMoviesMethod={getTopRatedMovies}
          />
          <CarouselContainer
            title="Now Playing"
            getMoviesMethod={getCurrentlyPlayingMovies}
          />
          <CarouselContainer
            title="Upcoming"
            getMoviesMethod={getUpcomingMovies}
          />
        </ScrollView>
      </View>
    </Screen>
  );
};

export default Home;
