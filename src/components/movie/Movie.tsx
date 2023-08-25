import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MovieType, Navigation } from '../../types';

import { notFound } from '../../utils/imageNotFound';

type Props = {
  movie: MovieType;
};

const styles = StyleSheet.create({
  movie: {
    margin: 5,
    width: 120,
  },
  poster: {
    aspectRatio: 2 / 3,
    width: '100%',
  },
  infoContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    minHeight: 120,
    padding: 6,
  },
  info: {
    color: 'black',
    flexShrink: 1,
    flexWrap: 'wrap',
    fontSize: 18,
  },
});

const Movie = ({ movie }: Props): React.JSX.Element => {
  const navigation = useNavigation<Navigation>();
  const [imageUri, setImageUri] = useState<string>(
    `https://image.tmdb.org/t/p/w154/${movie.poster_path}`,
  );

  // const title = movie.title
  const title =
    movie.title.length <= 30
      ? movie.title
      : movie.title.slice(0, 27).trimEnd().concat('...');
  const year = new Date(movie.release_date).getFullYear() || 'TBA';

  return (
    <Pressable
      style={styles.movie}
      onPress={() => {
        navigation.navigate('Detail', { movieId: movie.id });
      }}>
      <Image
        style={styles.poster}
        source={{
          uri: imageUri,
        }}
        onError={() => setImageUri(notFound)}
        alt={movie.title}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.info}>
          {title} • {year}
        </Text>
      </View>
    </Pressable>
  );
};

export default Movie;
