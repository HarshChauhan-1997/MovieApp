import {TYPE} from '../shared/actions/actions';

interface Action {
  type: string;
  data: any;
}

const moviesByCast = {
  castDetails: null,
  isCastDetailsLoading: false,
  moviesCredits: null,
  isMoviesCreditsLoading: false,
};

export default (state = moviesByCast, action: Action) => {
  switch (action.type) {
    case TYPE.GET_MOVIES_BY_CAST:
      return {...state, isCastDetailsLoading: true};
    case TYPE.GET_MOVIES_BY_CAST_SUCCESS:
      return {...state, isCastDetailsLoading: false, castDetails: action.data};
    case TYPE.GET_MOVIES_BY_CAST_FAILURE:
      return {...state, isCastDetailsLoading: false};

      case TYPE.GET_MOVIES_CREDITS:
        return {...state, isMoviesCreditsLoading: true};
      case TYPE.GET_MOVIES_CREDITS_SUCCESS:
        return {...state, isMoviesCreditsLoading: false, moviesCredits: action.data};
      case TYPE.GET_MOVIES_BY_CAST_FAILURE:
        return {...state, isMoviesCreditsLoading: false};

    default:
      return {...state};
  }
};
