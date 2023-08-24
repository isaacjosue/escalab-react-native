import React from 'react';
import { useRoute } from '@react-navigation/native';

import Screen from './Screen';
import { MovieDetail } from '../movie';
import { RouteWithParams } from '../../types';

const Detail = (): React.JSX.Element => {
  const route = useRoute<RouteWithParams<'Detail'>>();

  return (
    <Screen>
      <MovieDetail id={route.params.movieId} />
    </Screen>
  );
};

export default Detail;
