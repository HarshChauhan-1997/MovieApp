import {TYPE} from './actions';

//<-----------Details------------>//
export const getMovieDetails = (data: number) => {
  return {type: TYPE.GET_DETAILS, data};
};

export const getMovieDetailsSuccess = (data: any) => {
  return {type: TYPE.GET_DETAILS_SUCCESS, data};
};

export const getMovieDetailsFailure = () => {
  return {type: TYPE.GET_DETAILS_FAILURE};
};


//<-----------Trailer------------>//
export const getMovieTrailer = (data: number) => {
  return {type: TYPE.GET_TRAILER, data};
};

export const getMovieTrailerSuccess = (data: any) => {
  return {type: TYPE.GET_TRAILER_SUCCESS, data};
};

export const getMovieTrailerFailure = () => {
  return {type: TYPE.GET_TRAILER_FAILURE};
};


//<-----------Cast------------>//
export const getMovieCast = (data: number) => {
  return {type: TYPE.GET_CAST, data};
};

export const getMovieCastSuccess = (data: any) => {
  return {type: TYPE.GET_CAST_SUCCESS, data};
};

export const getMovieCastFailure = () => {
  return {type: TYPE.GET_CAST_FAILURE};
};


//<-----------Images------------>//
export const getMovieImages = (data: number) => {
  return {type: TYPE.GET_IMAGES, data};
};

export const getMovieImagesSuccess = (data: any) => {
  return {type: TYPE.GET_IMAGES_SUCCESS, data};
};

export const getMovieImagesFailure = () => {
  return {type: TYPE.GET_IMAGES_FAILURE};
};
