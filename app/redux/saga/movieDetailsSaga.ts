import {all, call, put, takeLatest} from 'redux-saga/effects';
import {moviesDetails} from '../../shared/actionApi/movieDetailsApi';
import {TYPE} from '../../shared/actions/actions';

interface actionType {
  type: string;
  data: any;
}

function* getCastStart(action: actionType) {
  try {
    const {data} = yield call(moviesDetails.getCast, action?.data);
    yield put({type: TYPE.GET_CAST_SUCCESS, data});
  } catch (error) {
    yield put({type: TYPE.GET_CAST_FAILURE, data: error});
  }
}

function* getImagesStart(action: actionType) {
  try {
    const {data} = yield call(moviesDetails.getImages, action.data);
    yield put({type: TYPE.GET_IMAGES_SUCCESS, data});
  } catch (error) {
    yield put({type: TYPE.GET_IMAGES_FAILURE, data: error});
  }
}

function* getTrailerStart(action: actionType) {
  try {
    const data = yield call(moviesDetails.getTrailer, action.data);
    yield put({type: TYPE.GET_TRAILER_SUCCESS, data});
  } catch (error) {
    yield put({type: TYPE.GET_TRAILER_FAILURE, data: error});
  }
}

function* getDetailsStart(action: actionType) {
  try {
    const {data} = yield call(moviesDetails.getDetails, action.data);
    yield put({type: TYPE.GET_DETAILS_SUCCESS, data});
  } catch (error) {
    yield put({type: TYPE.GET_DETAILS_FAILURE, data: error});
  }
}

function* moviesDetailsSaga() {
  yield all([
    takeLatest(TYPE.GET_CAST, getCastStart),
    takeLatest(TYPE.GET_IMAGES, getImagesStart),
    takeLatest(TYPE.GET_TRAILER, getTrailerStart),
    takeLatest(TYPE.GET_DETAILS, getDetailsStart),
  ]);
}

export default moviesDetailsSaga;