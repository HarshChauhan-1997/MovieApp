import {TYPE} from '../shared/actions/actions';

interface Action {
  type: string;
  data: any;
}

interface Movies {
  genresData: object | null;
  isTrendingAllLoading: boolean;
  trendingAll: object | null;
  isTrendingMoviesLoading: boolean;
  trendingMovies: object | null;
  isTrendingSeriesLoading: boolean;
  trendingSeries: object | null;
}

const moviesList: Movies = {
  genresData: null,
  isTrendingAllLoading: false,
  trendingAll: null,
  isTrendingMoviesLoading: false,
  trendingMovies: null,
  isTrendingSeriesLoading: false,
  trendingSeries: null,
};

export default (state = moviesList, action: Action) => {
  switch (action.type) {
    case TYPE.GET_GENRE_START:
      return {...state};
    case TYPE.GET_GENRE_SUCCESS:
      return {...state, genresData: action.data};
    case TYPE.GET_GENRE_FAILURE:
      return {...state};

    case TYPE.GET_TRENDING_ALL_START:
      return {...state, isTrendingAllLoading: true};
    case TYPE.GET_TRENDING_ALL_SUCCESS:
      return {...state, trendingAll: action?.data, isTrendingAllLoading: false};
    case TYPE.GET_TRENDING_ALL_FAILURE:
      return {...state, isTrendingAllLoading: false};

    case TYPE.GET_TRENDING_MOVIES_START:
      return {...state, isTrendingMoviesLoading: true};
    case TYPE.GET_TRENDING_MOVIES_SUCCESS:
      return {
        ...state,
        trendingMovies: action.data,
        isTrendingMoviesLoading: false,
      };
    case TYPE.GET_TRENDING_MOVIES_FAILURE:
      return {...state, isTrendingMoviesLoading: false};

    case TYPE.GET_TRENDING_SERIES_START:
      return {...state, isTrendingSeriesLoading: true};
    case TYPE.GET_TRENDING_SERIES_SUCCESS:
      return {
        ...state,
        trendingSeries: action.data,
        isTrendingSeriesLoading: false,
      };
    case TYPE.GET_TRENDING_SERIES_FAILURE:
      return {...state, isTrendingSeriesLoading: false};

    default:
      return {...state};
  }
};
