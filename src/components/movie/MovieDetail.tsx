import React, { useState, useEffect } from 'react';
import { Text, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Info from './Info';
import { MovieDetailType } from '../../types';

import { getMovieById } from '../../utils/api';
import { notFound } from '../../utils/imageNotFound';

type Props = {
  id: number;
};

const styles = StyleSheet.create({
  detail: {
    alignItems: 'center',
    flexDirection: 'column',
    padding: 3,
  },
  image: {
    aspectRatio: 16 / 9,
    marginBottom: 10,
    width: '100%',
  },
});

const MovieDetail = ({ id }: Props): React.JSX.Element => {
  const [movie, setMovie] = useState<MovieDetailType>();
  const [loading, setLoading] = useState<boolean>(true);
  const [imageUri, setImageUri] = useState<string>(notFound);

  useEffect(() => {
    const getMovie = async () => {
      const data: MovieDetailType = await getMovieById(id);

      if (data.backdrop_path)
        setImageUri(`https://image.tmdb.org/t/p/w780/${data.backdrop_path}`);
      setMovie(data);
      setLoading(false);
    };

    getMovie();
  }, []);

  if (loading) return <Icon name="loading" />;
  if (!movie) return <Text>Movie not found :(</Text>;

  return (
    <ScrollView contentContainerStyle={styles.detail}>
      <Image
        style={styles.image}
        source={[
          {
            uri: imageUri,
          },
        ]}
        alt={movie.title}
      />
      <Info movie={movie} />
    </ScrollView>
  );
};

export default MovieDetail;
