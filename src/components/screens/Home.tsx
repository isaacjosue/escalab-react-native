import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import {
  PopularMovies,
  TopRatedMovies,
  CurrentlyPlayingMovies,
  UpcomingMovies,
} from '../carousels';
import Screen from './Screen';

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
          <PopularMovies />
          <TopRatedMovies />
          <CurrentlyPlayingMovies />
          <UpcomingMovies />
        </ScrollView>
      </View>
    </Screen>
  );
};

export default Home;
