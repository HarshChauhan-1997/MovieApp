import React from 'react';
import {FlatList, Image, ImageBackground, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {ShimmerPlaceholderComp} from '../Seperator/Shimmer';
import { hp, rpFont, wp } from '../../shared/utils/responsiv';
import { useNavigation } from '@react-navigation/native';

interface ListProps {
  title?: string;
  movieList: Array<any>;
  isLoading: boolean;
}

const ListVertical = ({title, movieList, isLoading}: ListProps) => {
  const itemSeparator = () => <View style={style.sepVertical} />;
  const navigation = useNavigation();

  return (
    <View>
      {title && (
        <View>
          <Text style={style.title}>{title}</Text>
        </View>
      )}
      {isLoading ? (
        <ShimmerPlaceholderComp
          length={10}
          style={style.posterShim}
          shimDirection={style.shimDirectionV}
        />
      ) : (
        <FlatList
          ItemSeparatorComponent={itemSeparator}
          data={movieList && movieList?.results}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Movie', {id: item?.id})}>
                <ImageBackground
                  style={style.poster}
                  source={{
                    uri: item?.poster_path
                      ? `https://image.tmdb.org/t/p/original${item?.poster_path}`
                      : `https://image.tmdb.org/t/p/original${item?.profile_path}`,
                  }}>
                  <View
                    style={{
                      width: wp(10),
                      height: hp(5),
                      zIndex: 1,
                      top: hp(1.8),
                      right: wp(2),
                      backgroundColor: '#000',
                      position: 'absolute',
                      opacity: 0.3,
                      borderRadius: 10,
                    }}></View>
                  <Image
                    style={{
                      width: wp(4.3),
                      height: hp(2.5),
                      top: hp(1.7),
                      right: wp(2.9),
                      position: 'absolute',
                      zIndex: 1,
                    }}
                    source={{uri: 'https://img.icons8.com/color/48/imdb.png'}}
                  />
                  <Image
                    style={{
                      width: wp(2.5),
                      height: hp(1.5),
                      top: hp(4.5),
                      right: wp(8),
                      position: 'absolute',
                      zIndex: 1,
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
                      top: wp(9),
                      right: hp(1.5),
                      position: 'absolute',
                      zIndex: 1,
                    }}>
                    {Number(item?.vote_average?.toFixed(1))}
                  </Text>
                </ImageBackground>
              </TouchableWithoutFeedback>
            </>
          )}
        />
      )}
    </View>
  );
};

export default ListVertical;

const style = StyleSheet.create({
  title: {
    margin: 10,
    width: 168,
    height: 30,
    color: '#FFF',
    fontSize: 22,
    fontWeight: '800',
  },
  posterVertical: {
    width: 130,
    height: 205,
    borderRadius: 15,
    resizeMode: 'cover',
    marginHorizontal: 3,
  },
  sepVertical: {
    height: 8,
    backgroundColor: '#000',
  },
  posterShim: {
    width: wp(48),
    height: hp(35),
    borderRadius: wp(5),
    resizeMode: 'cover',
    overflow: 'hidden',
    marginHorizontal: wp(1),
    marginVertical: hp(0.5)
  },
  shimDirectionV: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 5,
  },
  poster: {
    width: wp(48),
    height: hp(35),
    borderRadius: wp(5),
    resizeMode: 'cover',
    overflow: 'hidden',
    marginHorizontal: wp(1),
  },
});
