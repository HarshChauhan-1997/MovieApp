import React, {useEffect} from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {hp, rpFont, wp} from '../../shared/utils/responsiv';
import {useDispatch, useSelector} from 'react-redux';
import {
  getMovieDetails,
  getMovieImages,
} from '../../shared/actions/movieDetailsActions';

const DetailComp = ({id}) => {
  const dispatch = useDispatch();
  const {details, isDetailsLoading, images, isImagesLoading} = useSelector(
    state => state?.movieDetails,
  );
  console.log('==details==>', details);
  console.log('==images==>', images);

  useEffect(() => {
    dispatch(getMovieImages(id));
    dispatch(getMovieDetails(id));
  }, [id]);

  return (
    <View
      style={{
        width: wp(100),
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        gap: wp(3.5),
        backgroundColor: '#000000',
      }}>
      <Image
        style={{
          width: wp(35),
          height: hp(25),
          borderRadius: wp(5),
          borderColor: '#D04848',
          borderWidth: wp(0.5),
          resizeMode: 'cover',
          overflow: 'hidden',
          marginHorizontal: wp(1),
          zIndex: 10,
        }}
        source={{
          uri: `https://image.tmdb.org/t/p/original/95VlSEfLMqeX36UVcHJuNlWEpwf.jpg`,
        }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: wp(60),
          height: 'auto',
          justifyContent: 'center',
          alignItems: 'flex-start',
          zIndex: 10,
        }}>
        <Text
          style={{color: '#F3F8FF', fontSize: rpFont(5), fontWeight: '700'}}>
          ARGYLLE
        </Text>
        <Text
          style={{
            color: '#F3F8FF',
            fontSize: rpFont(1.5),
            fontWeight: '400',
          }}>
          {details?.tagline}
        </Text>
      </View>
      <ImageBackground
        style={{
          position: 'absolute',
          width: wp(100),
          height: hp(50),
          opacity: 0.4,
          zIndex: 0,
        }}
        source={{
          uri: `https://image.tmdb.org/t/p/original${images?.backdrops[0]?.file_path}`,
        }}></ImageBackground>
    </View>
  );
};

export default DetailComp;
