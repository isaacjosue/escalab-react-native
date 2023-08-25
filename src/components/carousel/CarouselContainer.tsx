import React, { useState, useEffect } from 'react';

import Carousel from './Carousel';
import { MovieType } from '../../types';

import { removeDuplicatesById } from '../../utils/removeDuplicates';

type Props = {
  title: string;
  getMoviesMethod: ({ ...args }) => Promise<{
    results: MovieType[];
    page: number;
  }>;
};

const CarouselContainer = ({
  title,
  getMoviesMethod,
}: Props): React.JSX.Element => {
  const [page, setPage] = useState<number>(0);
  const [movies, setMovies] = useState<MovieType[]>([]);

  const getMovies = async () => {
    const data = await getMoviesMethod({
      page: page + 1,
    });
    setMovies(removeDuplicatesById([...movies, ...data.results]));
    setPage(data.page);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <Carousel title={title} movies={movies} fetchMore={getMovies} />;
};

export default CarouselContainer;
