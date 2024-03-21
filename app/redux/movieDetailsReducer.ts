import {TYPE} from '../shared/actions/actions';

interface Action {
  type: string;
  data: any;
}

interface MoviesByGenresData {
  data: null;
  name: string;
}

interface Movies {
  Trailer: object | null;
  isTrailerLoading: boolean;
  isCastLoading: boolean;
  cast: object | null;
  isImagesLoading: boolean;
  images: object | null;
  isDetailsLoading: boolean;
  details: object | null;
}

const movieData: Movies = {
  Trailer: null,
  isTrailerLoading: false,
  isCastLoading: false,
  cast: null,
  isImagesLoading: false,
  images: null,
  isDetailsLoading: false,
  details: null,
};

export default (state = movieData, action: Action) => {
  switch (action.type) {
    case TYPE.GET_DETAILS:
      return {...state, isDetailsLoading: true};
    case TYPE.GET_DETAILS_SUCCESS:
      return {...state, isDetailsLoading: false, details: action?.data};
    case TYPE.GET_DETAILS_FAILURE:
      return {...state, isDetailsLoading: false};

    case TYPE.GET_CAST:
      return {...state, isCastLoading: true};
    case TYPE.GET_CAST_SUCCESS:
      return {...state, isCastLoading: false, cast: action?.data};
    case TYPE.GET_CAST_FAILURE:
      return {...state, isCastLoading: false};

    case TYPE.GET_IMAGES:
      return {...state, isImagesLoading: true};
    case TYPE.GET_IMAGES_SUCCESS:
      return {...state, isImagesLoading: false, images: action?.data};
    case TYPE.GET_IMAGES_FAILURE:
      return {...state, isImagesLoading: false};

    case TYPE.GET_TRAILER:
      return {...state, isTrailerLoading: true};
    case TYPE.GET_TRAILER_SUCCESS:
      return {...state, isTrailerLoading: false, Trailer: action?.data};
    case TYPE.GET_TRAILER_FAILURE:
      return {...state, isTrailerLoading: false};

    default:
      return {...state};
  }
};
