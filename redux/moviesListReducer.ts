import {TYPE} from '../shared/actions/actions';

interface Action {
  type: string;
  data: any;
}

interface Movies {
  genresData: object | null,
  isTrendingAllLoading: boolean,
  trendingAll: object | null,
  isTrendingMoviesLoading: boolean,
  trendingMovies: object | null,
}

const moviesList: Movies = {
  genresData: null,
  isTrendingAllLoading: false,
  trendingAll: null,
  isTrendingMoviesLoading: false,
  trendingMovies: null,
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
      console.log("==action: trendingAll==>", action.data);
      return {...state, trendingAll: action?.data, isTrendingAllLoading: false};
    case TYPE.GET_TRENDING_ALL_FAILURE:
      return {...state, isTrendingAllLoading: false};

    case TYPE.GET_TRENDING_MOVIES_START:
      return {...state,isTrendingMoviesLoading: true};
    case TYPE.GET_TRENDING_MOVIES_SUCCESS:
      console.log("==action: trendingMovies==>", action.data);
      return {...state, trendingMovies: action.data, isTrendingMoviesLoading: false};
    case TYPE.GET_TRENDING_MOVIES_FAILURE:
      return {...state, isTrendingMoviesLoading: false};

    default:
      return {...state};
  }
};
