import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {getTrendingAllStart} from '../../shared/actions/genreActions';
import {useDispatch, useSelector} from 'react-redux';
import {ShimmerPlaceholderComp} from '../Seperator/Shimmer';
import {hp, wp} from '../../shared/utils/responsiv';
import { useNavigation } from '@react-navigation/native';

const ScrollHeader = () => {
  const dispatch = useDispatch();
  const {trendingAll, isTrendingAllLoading} = useSelector(
    state => state?.moviesList,
  );
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getTrendingAllStart());
  }, []);

  const [isSlide, setIsSlide] = useState(true);
  const fatalistRef = useRef(null);

  useEffect(() => {
    let currIndex = 0;
    const interval = setInterval(() => {
      if (
        trendingAll
          ? currIndex === trendingAll?.results?.length - 1
          : currIndex === 5
      ) {
        currIndex = 0;
      }
      fatalistRef?.current?.scrollToIndex({
        animated: true,
        index: currIndex,
      });
      currIndex++;
    }, 4000);
    return () => clearInterval(interval);
  }, [trendingAll]);

  const itemSeparator = () => {
    return <View style={style.sep} />;
  };
  return (
    <>
      {isTrendingAllLoading ? (
        <ShimmerPlaceholderComp
          length={1}
          style={style.sliderShimm}
          shimDirection={style.shimDirection}
        />
      ) : (
        <>
          <FlatList
            style={{marginLeft: wp(2.5), marginVertical: hp(1.5)}}
            scrollEnabled={isSlide}
            onMomentumScrollBegin={() => setIsSlide(false)}
            onMomentumScrollEnd={() => setIsSlide(true)}
            ItemSeparatorComponent={itemSeparator}
            horizontal
            ref={fatalistRef}
            data={trendingAll && trendingAll?.results}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate('Movie', {id: item?.id})}>
                  <Image
                    style={style.slider}
                    source={{
                      uri: trendingAll
                        ? `https://image.tmdb.org/t/p/original${item?.poster_path}`
                        : item?.url,
                    }}
                  />
                </TouchableWithoutFeedback>
              );
            }}
          />
        </>
      )}
    </>
  );
};

export default ScrollHeader;

const style = StyleSheet.create({
  slider: {
    width: wp(95),
    height: hp(80),
    borderRadius: 20,
    opacity: 0.8,
    resizeMode: 'cover',
  },
  sep: {
    width: wp(3),
    height: hp(50),
    backgroundColor: '#000',
  },
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
