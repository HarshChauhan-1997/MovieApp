import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {VideoPlayerComp} from '../../Components/VideoPlayer/VideoPlayer';
import {hp, wp} from '../../shared/utils/responsiv';
import DetailComp from '../../Components/DetailComp/DetailComp';

const Movie = () => {
  const route = useRoute();
  // const {id} = route?.params;
  const id = "1726"
  // console.log('==id===>', id);

  return (
    <View style={{backgroundColor: '#000', flex: 1 }}>
      <VideoPlayerComp id={id} />
      <DetailComp id={id} />
    </View>
  );
};

export default Movie;
