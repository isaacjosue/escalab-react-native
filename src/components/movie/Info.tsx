import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Company from './Company';
import { MovieDetailType } from '../../types';

import { abbreviate, minutesToHours } from '../../utils/format';

type Props = {
  movie: MovieDetailType;
};

const styles = StyleSheet.create({
  section: {
    alignItems: 'flex-start',
    marginBottom: 10,
    paddingHorizontal: 5,
    width: '100%',
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  tagline: {
    color: 'black',
    fontSize: 20,
    margin: 5,
  },
  infoText: {
    color: 'black',
    fontSize: 18,
  },
  genreList: {
    marginVertical: 8,
  },
  genre: {
    backgroundColor: 'green',
    borderRadius: 5,
    color: 'white',
    fontSize: 15,
    marginRight: 5,
    padding: 4,
  },
});

const Info = ({ movie }: Props): React.JSX.Element => {
  const year = new Date(movie.release_date).getFullYear() || 'TBA';
  const revenue = movie.revenue
    ? abbreviate(movie.revenue, 3, true)
    : 'Unknown';
  const budget = movie.budget ? abbreviate(movie.budget, 3, true) : 'Unknown';

  return (
    <View>
      <View style={styles.section}>
        <Text style={styles.title}>
          {movie.title} • {year}
        </Text>
        <FlatList
          horizontal
          contentContainerStyle={styles.genreList}
          data={movie.genres}
          renderItem={({ item }) => (
            <Text style={styles.genre}>{item.name}</Text>
          )}
        />
        {movie.tagline ? (
          <Text style={styles.tagline}>"{movie.tagline}"</Text>
        ) : null}
        <Text style={styles.infoText}>{movie.overview}</Text>
      </View>
      <View style={styles.section}>
        {movie.status !== 'Released' ? (
          <Text style={styles.tagline}>
            This movie has not yet been released, so some information may be
            inaccurate or missing
          </Text>
        ) : null}
        <Text style={styles.infoText}>
          Original title: {movie.original_title}
        </Text>
        <Text style={styles.infoText}>
          Original language: {movie.original_language.toUpperCase()}
        </Text>
        <Text style={styles.infoText}>
          Release date: {movie.release_date || 'TBA'}
        </Text>
        <Text style={styles.infoText}>Revenue: {revenue}</Text>
        <Text style={styles.infoText}>Budget: {budget}</Text>
        <Text style={styles.infoText}>
          Runtime: {minutesToHours(movie.runtime)}
        </Text>
        {movie.production_companies.length ? (
          <>
            <Text style={styles.infoText}>Production companies:</Text>
            <FlatList
              horizontal
              data={movie.production_companies}
              renderItem={({ item }) => <Company company={item} />}
            />
          </>
        ) : null}
      </View>
    </View>
  );
};

export default Info;
