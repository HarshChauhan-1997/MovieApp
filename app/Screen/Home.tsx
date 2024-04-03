import React, { memo, useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Text,
} from 'react-native';
import List from '../Components/List/List';
import ScrollHeader from '../Components/ScrollHeader/ScrollHeader';
import {useDispatch, useSelector} from 'react-redux';
import {
  getDataBySearch,
  getMoviesByGenres,
} from '../shared/actions/genreActions';
import _ from 'lodash';
import SearchBar from '../Components/SearchBar/SearchBar';
import {hp, wp} from '../shared/utils/responsiv';
import {genres} from '../shared/utils/globalUse';
import {FlatList} from 'react-native-gesture-handler';
import Separator from '../Components/Seperator/Separator';
import ListVertical from '../Components/List/ListVertical';

const Home = () => {
  const dispatch = useDispatch();
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [routes] = useState(genres);
  const {
    moviesByGenres,
    isMoviesByGenresLoading,
    searchData,
    isDataBySearchLoading,
  } = useSelector(state => state?.moviesList);
  const layout = useWindowDimensions();
  const isLoading = isMoviesByGenresLoading || isDataBySearchLoading;

  useEffect(() => {
    dispatch(getMoviesByGenres());
  }, []);

  const searchInputData = (data: string) => {
    data !== ''
      ? (setIsSearch(true), dispatch(getDataBySearch(data.replace(/ /g, '-'))))
      : setIsSearch(false);
  };

  return (
    <SafeAreaView style={style.main}>
      <SearchBar searchInputData={searchInputData} />
      <FlatList
        ListHeaderComponent={!isSearch ? <ScrollHeader /> : <></>}
        data={isSearch ? [searchData] : moviesByGenres}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) =>
        !isSearch ? (
            <>
              <List
                title={item?.title}
                movieList={item?.data}
                isLoading={isLoading}
              />
              <Separator />
            </>
          ) : (
            <ListVertical movieList={item} isLoading={isLoading}/>
          )
        }
      />
    </SafeAreaView>
  );
};

export default memo(Home);

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#000',
  },
  slider: {
    width: wp(410),
    height: hp(630),
    borderRadius: 20,
    opacity: 0.8,
    resizeMode: 'cover',
  },
  sep: {
    width: 5,
    height: 600,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    padding: 16,
    marginRight: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedItem: {
    backgroundColor: 'lightblue',
  },
});
