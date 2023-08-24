import React, { useState, useEffect } from 'react';

import Carousel from './Carousel';
import { MovieType } from '../../types';

import { getUpcomingMovies } from '../../utils/api';
import { removeDuplicatesById } from '../../utils/removeDuplicates';

const UpcomingMovies = (): React.JSX.Element => {
  const [page, setPage] = useState<number>(0);
  const [movies, setMovies] = useState<MovieType[]>([]);

  const getMovies = async () => {
    const data: { results: MovieType[] } = await getUpcomingMovies({
      page: page + 1,
    });

    setMovies(removeDuplicatesById([...movies, ...data.results]));
    setPage(page + 1);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <Carousel title="Upcoming" movies={movies} fetchMore={getMovies} />;
};

export default UpcomingMovies;
