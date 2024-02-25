import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {ShimmerPlaceholderComp} from '../Seperator/Shimmer';

interface ListProps {
  title?: string;
  movieList: Array<any>;
  isLoading: boolean;
}

const ListVertical = ({title, movieList, isLoading}: ListProps) => {
  const itemSeparator = () => <View style={style.sepVertical} />;

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
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <>
              {item?.poster_path || item?.profile_path ? (
                <Image
                  style={style.posterVertical}
                  source={{
                    uri: item?.poster_path
                      ? `https://image.tmdb.org/t/p/original${item?.poster_path}`
                      : `https://image.tmdb.org/t/p/original${item?.profile_path}`,
                  }}
                />
              ) : null}
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
    width: 140,
    height: 210,
    borderRadius: 15,
    resizeMode: 'cover',
    marginHorizontal: 5,
  },
  shimDirectionV: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 5,
  },
});
