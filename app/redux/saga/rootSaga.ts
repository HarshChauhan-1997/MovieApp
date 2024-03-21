import {all} from 'redux-saga/effects';
import genreSaga from './genreSaga';
import moviesDetailsSaga from './movieDetailsSaga';

function* rootSaga() {
  yield all([...genreSaga(), ...moviesDetailsSaga()]);
}

export default rootSaga;
