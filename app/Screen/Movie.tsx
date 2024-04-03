import React, {memo, useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {VideoPlayerComp} from '../Components/VideoPlayer/VideoPlayer';
import {hp, wp} from '../shared/utils/responsiv';
import DetailComp from '../Components/DetailComp/DetailComp';

const Movie = () => {
  const route = useRoute();
  const {id, title} = route?.params;
  console.log('==id==>', id);
  // const id = '823464'
  // const title = ''

  return (
    <View
      style={{
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <VideoPlayerComp id={id} title={title} />
      <DetailComp id={id} title={title} />
    </View>
  );
};

export default memo(Movie);
