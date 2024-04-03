import {all} from 'redux-saga/effects';
import genreSaga from './genreSaga';
import moviesDetailsSaga from './movieDetailsSaga';
import moviesByCastSaga from './moviesByCastSaga';

function* rootSaga() {
  yield all([...genreSaga(), ...moviesDetailsSaga(), ...moviesByCastSaga()]);
}

export default rootSaga;
