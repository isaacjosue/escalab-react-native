import React, { useState, useEffect } from 'react';

import Carousel from './Carousel';
import { MovieType } from '../../types';

import { getPopularMovies } from '../../utils/api';
import { removeDuplicatesById } from '../../utils/removeDuplicates';

const PopularMovies = (): React.JSX.Element => {
  const [page, setPage] = useState<number>(0);
  const [movies, setMovies] = useState<MovieType[]>([]);

  const getMovies = async () => {
    const data: { results: MovieType[] } = await getPopularMovies({
      page: page + 1,
    });

    setMovies(removeDuplicatesById([...movies, ...data.results]));
    setPage(page + 1);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <Carousel title="Popular Movies" movies={movies} fetchMore={getMovies} />;
};

export default PopularMovies;
