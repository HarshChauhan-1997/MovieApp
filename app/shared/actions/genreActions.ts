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

//<----------TrendingAll----------->
export const getTrendingAllStart = () => {
  return {type: TYPE.GET_TRENDING_ALL_START};
};

export const getTrendingAllSuccess = (data: Genres) => {
  return {type: TYPE.GET_TRENDING_ALL_SUCCESS, data};
};

export const getTrendingAllFailure = () => {
  return {type: TYPE.GET_TRENDING_ALL_FAILURE};
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

//<----------GetByGenresStart----------->
export const getMoviesByGenres = () => {
  return {type: TYPE.GET_MOVIES_BY_GENRES};
};

export const getMoviesByGenresSuccess = (data: Genres) => {
  return {type: TYPE.GET_MOVIES_BY_GENRES_SUCCESS, data};
};

export const getMoviesByGenresFailure = () => {
  return {type: TYPE.GET_MOVIES_BY_GENRES_FAILURE};
};

//<----------GetBySearchStart----------->
export const getDataBySearch = (data: string) => {
  return {type: TYPE.GET_DATA_BY_SEARCH, data};
};

export const getDataBySearchSuccess = (data: Genres) => {
  return {type: TYPE.GET_DATA_BY_SEARCH_SUCCESS, data};
};

export const getDataBySearchFailure = () => {
  return {type: TYPE.GET_DATA_BY_SEARCH_FAILURE};
};

//<----------GetMovieByID----------->
export const getMovieByID = (data: number) => {
  return {type: TYPE.GET_MOVIE_BY_ID, data};
};

export const getMovieByIDSuccess = (data: any) => {
  return {type: TYPE.GET_MOVIE_BY_ID_SUCCESS, data};
};

export const getMovieByIDFailure = () => {
  return {type: TYPE.GET_MOVIE_BY_ID_FAILURE};
};