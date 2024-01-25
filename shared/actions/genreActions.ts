import {Genres} from '../Types/Types';
import {TYPE} from './actions';

export const getGenreStart = () => {
  return {type: TYPE.GET_GENRE_START};
};

export const getGenreSuccess = (data: Genres) => {
  return {type: TYPE.GET_GENRE_SUCCESS, data};
};

export const getGenreFailure = () => {
  return {type: TYPE.GET_GENRE_FAILURE};
};

//<----------MoviesStart----------->
export const getTrendingMoviesStart = () => {
  return {type: TYPE.GET_TRENDING_MOVIES_START};
};

export const getTrendingMoviesSuccess = (data: Genres) => {
  return {type: TYPE.GET_TRENDING_MOVIES_SUCCESS, data};
};

export const getTrendingMoviesFailure = () => {
  return {type: TYPE.GET_TRENDING_MOVIES_FAILURE};
};

//<----------MoviesStart----------->
export const getTrendingAllStart = () => {
  return {type: TYPE.GET_TRENDING_ALL_START};
};

export const getTrendingAllSuccess = (data: Genres) => {
  return {type: TYPE.GET_TRENDING_ALL_SUCCESS, data};
};

export const getTrendingAllFailure = () => {
  return {type: TYPE.GET_TRENDING_ALL_FAILURE};
};

//<----------SeriesStart----------->
export const getTrendingSeriesStart = () => {
  return {type: TYPE.GET_TRENDING_SERIES_START};
};

export const getTrendingSeriesSuccess = (data: Genres) => {
  return {type: TYPE.GET_TRENDING_SERIES_SUCCESS, data};
};

export const getTrendingSeriesFailure = () => {
  return {type: TYPE.GET_TRENDING_SERIES_FAILURE};
};