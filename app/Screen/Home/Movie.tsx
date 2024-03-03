import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {getMovieByID} from '../../shared/actions/genreActions';

const Movie = () => {
  const route = useRoute();
  const {id} = route?.params;
  const dispatch = useDispatch();
  const {movieByID, isMovieByIDLoading} = useSelector(
    state => state?.moviesList,
  );
  movieByID &&
    console.log(
      '==movieByID, isMovieByIDLoading==>',
      movieByID,
      isMovieByIDLoading,
    );

  useEffect(() => {
    id && dispatch(getMovieByID(id));
  }, [id]);

  return <Text>Movie</Text>;
};

export default Movie;
