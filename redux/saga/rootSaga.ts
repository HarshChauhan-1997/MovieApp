import {all} from 'redux-saga/effects';
import genreSaga from './genreSaga';

function* rootSaga() {
  yield all([...genreSaga()]);
}

export default rootSaga;
