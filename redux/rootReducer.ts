import {combineReducers} from 'redux';
import moviesListReducer from './moviesListReducer';

const rootReducer = combineReducers({
  // Combine your reducers here
  moviesList: moviesListReducer,
});

export default rootReducer;
