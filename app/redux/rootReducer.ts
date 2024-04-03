import {combineReducers} from 'redux';
import moviesListReducer from './moviesListReducer';
import movieDetailsReducer from './movieDetailsReducer';
import moviesByCastReducer from './moviesByCastReducer';

const rootReducer = combineReducers({
  moviesList: moviesListReducer,
  movieDetails: movieDetailsReducer,
  moviesByCast: moviesByCastReducer,
});

export default rootReducer;
