import axios from 'axios';
import { API_URL, API_AUTH } from '../../config';

const get = async (endpoint, query) => {
  try {
    if (!API_URL) throw new Error('API URL NOT FOUND');
    const url = `${API_URL}${endpoint}${parseQuery(query)}`;
    console.log(url);

    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${API_AUTH}` },
    });
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};

const parseQuery = query => {
  if (!query || Object.keys(query).length === 0) return '';

  const entries = Object.entries(query);
  const parsed = entries.reduce((acc, curr) => {
    return `${acc}${encodeURIComponent(curr[0])}=${encodeURIComponent(
      curr[1],
    )}&`;
  }, '?');
  return parsed;
};

export const getPopularMovies = async options => {
  const data = await get('/movie/popular', {
    page: options.page,
  });

  return data;
};

export const getCurrentlyPlayingMovies = async options => {
  const data = await get('/movie/now_playing', {
    page: options.page,
  });

  return data;
};

export const getTopRatedMovies = async options => {
  const data = await get('/movie/top_rated', {
    page: options.page,
  });

  return data;
};

export const getUpcomingMovies = async options => {
  const data = await get('/movie/upcoming', {
    page: options.page,
  });

  return data;
};

export const searchMovies = async options => {
  const data = await get('/search/movie', {
    query: options.query,
  });

  return data;
};

export const getMovieById = async (id, options) => {
  const data = await get(`/movie/${id}`, options);

  return data;
};
