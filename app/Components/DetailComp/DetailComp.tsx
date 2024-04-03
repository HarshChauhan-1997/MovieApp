import React, {memo, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {hp, rpFont, wp} from '../../shared/utils/responsiv';
import {useDispatch, useSelector} from 'react-redux';
import {
  getMovieCast,
  getMovieDetails,
  getMovieImages,
} from '../../shared/actions/movieDetailsActions';
import IndicatorDot from '../Seperator/IndicatorDot';
import Separator from '../Seperator/Separator';
import CastList from '../List/CastList';
import {ShimmerPlaceholderComp} from '../Seperator/Shimmer';

const DetailComp = ({id, title}) => {
  const dispatch = useDispatch();
  const {details, isDetailsLoading, images, isImagesLoading} = useSelector(
    state => state?.movieDetails,
  );
  console.log('==details==>', details);

  useEffect(() => {
    dispatch(getMovieImages({id, title}));
    dispatch(getMovieDetails({id, title}));
  }, [id]);

  const formatTime = minutes => {
    let hours = Math.floor(minutes / 60);
    let remainingMinutes = minutes % 60;
    let formattedTime = '';
    if (hours > 0) {
      formattedTime += hours + 'h ';
    }
    if (remainingMinutes > 0) {
      formattedTime += remainingMinutes + 'm';
    }
    return formattedTime;
  };

  const isLoading = isDetailsLoading || isImagesLoading;

  return (
    <ScrollView>
      {isLoading ? (
        <ShimmerPlaceholderComp
          length={1}
          style={style.sliderShimm}
          shimDirection={style.shimDirection}
        />
      ) : (
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: hp(3),
          }}>
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
                uri: `https://image.tmdb.org/t/p/original${details?.poster_path}`,
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
                gap: hp(1.3),
              }}>
              <View>
                <Text
                  style={{
                    color: '#F3F8FF',
                    fontSize: rpFont(2.5),
                    fontWeight: '700',
                    paddingRight: wp(1),
                  }}>
                  {title === 'Web-Series'
                    ? details?.original_name
                    : details?.original_title}
                </Text>
                <Text
                  style={{
                    color: '#F3F8FF',
                    fontSize: rpFont(1.5),
                    fontWeight: '700',
                  }}>
                  {details?.tagline}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: '#F3F8FF',
                    fontSize: rpFont(1.5),
                    fontWeight: '400',
                    zIndex: 10,
                  }}>
                  {title === 'Web-Series'
                    ? details?.first_air_date.split('-').reverse().join('/')
                    : details?.release_date.split('-').reverse().join('/')}
                </Text>
                <View
                  style={{display: 'flex', flexDirection: 'row', zIndex: 10}}>
                  {details?.genres.map(e => (
                    <Text
                      style={{
                        color: '#F3F8FF',
                        fontSize: rpFont(1.5),
                        fontWeight: '400',
                        marginRight: hp(0.4),
                      }}>
                      {e.name + ','}
                    </Text>
                  ))}
                </View>
              </View>
              {title !== 'Web-Series' && (
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: wp(1),
                    alignItems: 'center',
                  }}>
                  <IndicatorDot size={hp(0.7)} color={'#f1faee'} />
                  <Text
                    style={{
                      color: '#F3F8FF',
                      fontSize: rpFont(1.5),
                      fontWeight: '400',
                      zIndex: 10,
                    }}>
                    {formatTime(details?.runtime)}
                  </Text>
                </View>
              )}
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: wp(1),
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: wp(4.3),
                    height: hp(2.5),
                  }}
                  source={{uri: 'https://img.icons8.com/color/48/imdb.png'}}
                />
                <Image
                  style={{
                    width: wp(2.5),
                    height: hp(1.5),
                  }}
                  source={{
                    uri: 'https://img.icons8.com/fluency/48/star--v1.png',
                  }}
                />
                <Text
                  style={{
                    color: '#FFF',
                    fontSize: rpFont(1.5),
                    fontWeight: '700',
                    fontFamily: 'Lato',
                  }}>
                  {Number(details?.vote_average?.toFixed(1))}
                </Text>
              </View>
            </View>
            <ImageBackground
              style={{
                position: 'absolute',
                width: wp(100),
                height: hp(70),
                opacity: 0.3,
                zIndex: 0,
              }}
              source={{
                uri: `https://image.tmdb.org/t/p/original${images?.backdrops[0]?.file_path}`,
              }}></ImageBackground>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: hp(0.5),
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#F3F8FF',
                fontSize: rpFont(3),
                fontWeight: '500',
              }}>
              Overview
            </Text>
            <Separator marginT={0.1} />
            <Text
              style={{
                color: '#F3F8FF',
                fontSize: rpFont(1.8),
                fontWeight: '300',
                paddingHorizontal: wp(1.5),
                textAlign: 'center',
              }}>
              {details?.overview}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: hp(0.5),
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#F3F8FF',
                fontSize: rpFont(3),
                fontWeight: '500',
              }}>
              Cast
            </Text>
            <Separator marginT={0.1} />
            <CastList id={id} title={title} />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  sliderShimm: {
    width: wp(95),
    height: hp(80),
    borderRadius: 20,
    opacity: 0.8,
    resizeMode: 'cover',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  shimDirection: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default memo(DetailComp);
