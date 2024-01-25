import React, {useEffect} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { ShimmerPlaceholderComp } from '../Seperator/Shimmer';

const List = ({title, movieList, isLoading}) => {
  const img = {
    url: 'https://image.tmdb.org/t/p/original/69YuvoiWTtK6oyYH2Jl4Q6SgZ59.jpg',
    id: '0',
  };
  const imgArray = [img, img, img, img];
  const itemSeparator = () => <View style={style.sep} />;
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
  // const LinearGradient = () => <View></View>
  return (
    <View>
      <View>
        <Text style={style.title}>{title}</Text>
      </View>
      {isLoading ? (
        <ShimmerPlaceholderComp length={10} style={style.posterShim}/>
      ) : (
        <FlatList
          ItemSeparatorComponent={itemSeparator}
          horizontal
          data={movieList && movieList?.results}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <>
              <Image
                style={style.poster}
                source={{
                  uri: movieList
                    ? `https://image.tmdb.org/t/p/original${item?.poster_path}`
                    : item.url,
                }}
              />
            </>
          )}
        />
      )}
    </View>
  );
};

export default List;

const style = StyleSheet.create({
  title: {
    margin: 10,
    width: 168,
    height: 30,
    color: '#FFF',
    fontSize: 22,
    fontWeight: '800',
  },
  poster: {
    width: 140,
    height: 210,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  sep: {
    width: 5,
    height: 210,
    backgroundColor: '#000',
  },
  posterShim: {
    width: 140,
    height: 210,
    borderRadius: 15,
    resizeMode: 'cover',
    marginHorizontal:5,
  },
});
