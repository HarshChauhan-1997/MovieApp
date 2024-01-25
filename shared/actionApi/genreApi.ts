import axios from 'axios';
import {headers} from '../../setup_api';
import {Genres} from '../Types/Types';

const getGenre = async () => {
  return await axios.get(
    'https://api.themoviedb.org/3/genre/movie/list?language=en',
    {headers},
  );
};

const getTrendingAll = async () => {
  return await axios.get(
    'https://api.themoviedb.org/3/trending/all/week?language=en-US',
    {headers},
  );
};

const getTrendingMovies = async () => {
  return await axios.get('https://api.themoviedb.org/3/trending/movie/week', {
    headers,
  });
};

const getTrendingSeries = async () => {
  return await axios.get('https://api.themoviedb.org/3/trending/tv/week', {
    headers,
  });
};

export const genreApi = {
  getGenre,
  getTrendingMovies,
  getTrendingAll,
  getTrendingSeries
};
