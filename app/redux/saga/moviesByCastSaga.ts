import {all, call, put, takeLatest} from 'redux-saga/effects';
import {moviesByCast} from '../../shared/actionApi/moviesByCastApi';
import {TYPE} from '../../shared/actions/actions';

interface actionType {
  type: string;
  data: any;
}

function* getMoviesByCast(action) {
  try {
    const {data} = yield call(moviesByCast.getCastDetails, action?.data);
    yield put({type: TYPE.GET_MOVIES_BY_CAST_SUCCESS, data});
  } catch (error) {
    yield put({type: TYPE.GET_MOVIES_BY_CAST_FAILURE, data: error});
  }
}

function* getMoviesCredits(action) {
  try {
    const {data} = yield call(moviesByCast.getMoviesCredits, action?.data);
    yield put({type: TYPE.GET_MOVIES_CREDITS_SUCCESS, data});
  } catch (error) {
    yield put({type: TYPE.GET_MOVIES_CREDITS_FAILURE, data: error});
  }
}

function* moviesByCastSaga() {
  yield all([
    takeLatest(TYPE.GET_MOVIES_BY_CAST, getMoviesByCast),
    takeLatest(TYPE.GET_MOVIES_CREDITS, getMoviesCredits),
  ]);
}

export default moviesByCastSaga;
