import {all, call, put, takeLatest} from 'redux-saga/effects';
import {genreApi} from '../../shared/actionApi/genreApi';
import { Genres } from '../../shared/Types/Types';
import { TYPE } from '../../shared/actions/actions';

function* getGenreStart() {
  try {
    const {data} = yield call(genreApi.getGenre);
    yield put({type: TYPE.GET_GENRE_SUCCESS, data});
  } catch (error) {
    yield put({type: TYPE.GET_GENRE_FAILURE, data: error});
  }
}

function* getTrendingAll() {
  try {
    const {data} = yield call(genreApi.getTrendingAll);
    yield put({type: TYPE.GET_TRENDING_ALL_SUCCESS, data});
  } catch (error) {
    yield put({type: TYPE.GET_TRENDING_ALL_FAILURE, data: error});
  }
}

function* getTrendingMovies() {
  try {
    const {data} = yield call(genreApi.getTrendingMovies);
    yield put({type: TYPE.GET_TRENDING_MOVIES_SUCCESS, data});
  } catch (error) {
    yield put({type: TYPE.GET_TRENDING_MOVIES_FAILURE, data: error});
  }
}

function* getTrendingSeries() {
  try {
    const {data} = yield call(genreApi.getTrendingSeries);
    yield put({type: TYPE.GET_TRENDING_SERIES_SUCCESS, data});
  } catch (error) {
    yield put({type: TYPE.GET_TRENDING_SERIES_FAILURE, data: error});
  }
}

function* genreSaga() {
  yield all([takeLatest(TYPE.GET_GENRE_START, getGenreStart),
    takeLatest(TYPE.GET_TRENDING_MOVIES_START, getTrendingMovies),
    takeLatest(TYPE.GET_TRENDING_ALL_START, getTrendingAll),
  takeLatest(TYPE.GET_TRENDING_SERIES_START, getTrendingSeries)]);
}

export default genreSaga;
