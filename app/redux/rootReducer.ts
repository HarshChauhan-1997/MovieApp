import {combineReducers} from 'redux';
import moviesListReducer from './moviesListReducer';
import movieDetailsReducer from './movieDetailsReducer';

const rootReducer = combineReducers({
  moviesList: moviesListReducer,
  movieDetails: movieDetailsReducer,
});

export default rootReducer;
