import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {getTrendingAllStart} from '../shared/actions/genreActions';
import {useDispatch, useSelector} from 'react-redux';
import { ShimmerPlaceholderComp } from '../Componants/Seperator/Shimmer';

const ScrollHeader = () => {
  const dispatch = useDispatch();
  const {trendingAll, isTrendingAllLoading} = useSelector(
    state => state?.moviesList,
  );

  useEffect(() => {
    dispatch(getTrendingAllStart());
  }, []);

  const [isSlide, setIsSlide] = useState(true);
  const fatalistRef = useRef(null);
  const img = {
    url: 'https://image.tmdb.org/t/p/original/69YuvoiWTtK6oyYH2Jl4Q6SgZ59.jpg',
    id: '0',
  };

  useEffect(() => {
    let currIndex = 0;
    const interval = setInterval(() => {
      if (
        trendingAll
          ? currIndex >= trendingAll?.results?.length
          : currIndex >= 10
      )
        currIndex = 0;
      fatalistRef?.current?.scrollToIndex({
        animated: true,
        index: currIndex,
      });
      currIndex++;
    }, 4000);
    return () => clearInterval(interval);
  }, [trendingAll]);

  // const itemSeparator = () => {
  //   return <View style={style.sep} />;
  // };
  return (
    <>
      {isTrendingAllLoading ? (
        <ShimmerPlaceholderComp length={10} style={style.sliderShimm}/>
      ) : (
        <>
          <FlatList
            style={{marginHorizontal: 5, marginVertical: 5}}
            scrollEnabled={isSlide}
            onMomentumScrollBegin={() => setIsSlide(false)}
            onMomentumScrollEnd={() => setIsSlide(true)}
            // ItemSeparatorComponent={itemSeparator}
            horizontal
            ref={fatalistRef}
            data={trendingAll && trendingAll?.results}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              return (
                <>
                  <Image
                    style={style.slider}
                    source={{
                      uri: trendingAll
                        ? `https://image.tmdb.org/t/p/original${item?.poster_path}`
                        : item?.url,
                    }}
                  />
                </>
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
    width: 400,
    height: 620,
    borderRadius: 20,
    opacity: 0.8,
    resizeMode: 'cover',
  },
  sep: {
    width: 5,
    height: 600,
    backgroundColor: '#000',
  },
  sliderShimm: {
    width: 400,
    height: 620,
    borderRadius: 20,
    opacity: 0.8,
    resizeMode: 'cover',
    marginHorizontal:5,
    marginVertical:5,
  },
});
