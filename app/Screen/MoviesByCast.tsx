import React, {memo, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  getMoviesByCast,
  getMoviesCredits,
} from '../shared/actions/moviesByCastActions';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import List from '../Components/List/List';
import Separator from '../Components/Seperator/Separator';
import {hp, wp} from '../shared/utils/responsiv';

const MoviesByCast = () => {
  // const route = useRoute();
  // const {id} = route?.params;
  // console.log('==id in cast==>', id);
  const id = 3223;
  const [showProfile, setShowProfile] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoviesByCast(id));
    dispatch(getMoviesCredits(id));
  }, [id]);

  const {
    castDetails,
    isCastDetailsLoading,
    moviesCredits,
    isMoviesCreditsLoading,
  } = useSelector(state => state.moviesByCast);

  console.log('==castDetails==>', castDetails);
  console.log('==moviesCredits==>', moviesCredits);
  const isLoading = isCastDetailsLoading || isMoviesCreditsLoading;
  return (
    <ScrollView
      style={{
        backgroundColor: '#000',
        flexDirection: 'column',
      }}>
      <View style={{display: 'flex', flexDirection: 'row', marginTop: hp(2)}}>
        <TouchableWithoutFeedback onLongPress={() => setShowProfile(true)}>
          <ImageBackground
            style={style.poster}
            source={{
              uri: `https://image.tmdb.org/t/p/original${castDetails?.profile_path}`,
            }}></ImageBackground>
        </TouchableWithoutFeedback>
        <View>
          
        </View>
      </View>
      <Separator />
      <List
        movieList={moviesCredits?.cast}
        title={'Cast'}
        isLoading={isLoading}
      />
      <Separator />
      <List
        movieList={moviesCredits?.crew}
        title={'Crew'}
        isLoading={isLoading}
      />
      {showProfile && (
        <TouchableWithoutFeedback onPress={() => setShowProfile(false)}>
          <View
            style={{
              flex: 1,
              position: 'absolute',
            }}>
            <Image
              style={{
                width: wp(95),
                height: hp(80),
                borderRadius: wp(5),
                resizeMode: 'stretch',
                marginHorizontal: wp(2.5),
                top: hp(10),
              }}
              source={{
                uri: `https://image.tmdb.org/t/p/original${castDetails?.profile_path}`,
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      )}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  poster: {
    width: wp(48),
    height: hp(35),
    borderRadius: wp(5),
    resizeMode: 'cover',
    overflow: 'hidden',
    marginHorizontal: wp(1),
  },
});

export default memo(MoviesByCast);
