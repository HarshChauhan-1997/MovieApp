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
  genresData: object | null;
  isTrendingAllLoading: boolean;
  trendingAll: object | null;
  isTrendingMoviesLoading: boolean;
  trendingMovies: object | null;
  isTrendingSeriesLoading: boolean;
  trendingSeries: object | null;
  isGenresLoading: boolean;
  moviesByGenres: Array<any> | null;
  isMoviesByGenresLoading: boolean;
  searchData: object | null;
  isDataBySearchLoading: boolean;
}

const moviesList: Movies = {
  genresData: null,
  isGenresLoading: false,
  isTrendingAllLoading: false,
  trendingAll: null,
  isTrendingMoviesLoading: false,
  trendingMovies: null,
  isTrendingSeriesLoading: false,
  trendingSeries: null,
  moviesByGenres: null,
  isMoviesByGenresLoading: false,
  searchData: null,
  isDataBySearchLoading: false,
};

export default (state = moviesList, action: Action) => {
  switch (action.type) {
    case TYPE.GET_GENRE_START:
      return {...state, isGenresLoading: true};
    case TYPE.GET_GENRE_SUCCESS:
      return {...state, genresData: action.data, isGenresLoading: false};
    case TYPE.GET_GENRE_FAILURE:
      return {...state, isGenresLoading: false};

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

    case TYPE.GET_MOVIES_BY_GENRES:
      return {...state, isMoviesByGenresLoading: true};
    case TYPE.GET_MOVIES_BY_GENRES_SUCCESS:
      const genres = [
        'Action',
        'Adventure',
        'Animation',
        'Comedy',
        'Crime',
        'Documentary',
        'Drama',
        'Family',
        'Fantasy',
        'History',
        'Horror',
        'Music',
        'Mystery',
        'Romance',
        'Science Fiction',
        'TV Movie',
        'Thriller',
        'War',
        'Western'
      ];
      // const moviesByGenres = action.data.map((genreData, index) => ({
      //   data: genreData.data,
      //   name: Genres[genres[index]],
      // }));
      return {
        ...state,
        moviesByGenres: action?.data,
        isMoviesByGenresLoading: false,
      };
    case TYPE.GET_MOVIES_BY_GENRES_FAILURE:
      return {...state, isMoviesByGenresLoading: false};

    case TYPE.GET_DATA_BY_SEARCH:
      return {...state, isDataBySearchLoading: true};
    case TYPE.GET_DATA_BY_SEARCH_SUCCESS:
      return {
        ...state,
        searchData: action.data,
        isDataBySearchLoading: false,
      };
    case TYPE.GET_DATA_BY_SEARCH_FAILURE:
      return {...state, isDataBySearchLoading: false};

    default:
      return {...state};
  }
};
