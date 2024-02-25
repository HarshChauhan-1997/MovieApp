import React, {memo, useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Text,
} from 'react-native';
import List from './Componants/List/List';
import ScrollHeader from './Screen/ScrollHeader';
import {useDispatch, useSelector} from 'react-redux';
import {
  getDataBySearch,
  getMoviesByGenres,
} from './shared/actions/genreActions';
import _ from 'lodash';
import SearchBar from './Componants/SearchBar/SearchBar';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {hp, wp} from './shared/utils/responsiv';
import {genres} from './shared/utils/globalUse';

const Home = () => {
  const dispatch = useDispatch();
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [routes] = useState(genres);
  const {
    trendingMovies,
    isTrendingMoviesLoading,
    trendingSeries,
    isTrendingSeriesLoading,
    moviesByGenres,
    isMoviesByGenresLoading,
    searchData,
    isDataBySearchLoading,
    genresData,
  } = useSelector(state => state?.moviesList);
  const layout = useWindowDimensions();
  const isLoading =
    isTrendingMoviesLoading ||
    isTrendingSeriesLoading ||
    isMoviesByGenresLoading ||
    isDataBySearchLoading;

  useEffect(() => {
    dispatch(getMoviesByGenres());
  }, []);

  const searchInputData = (data: string) => {
    data !== ''
      ? (setIsSearch(true), dispatch(getDataBySearch(data.replace(/ /g, '-'))))
      : setIsSearch(false);
  };


  const renderScene = SceneMap({
    Action: () => (
      <List
        movieList={moviesByGenres && moviesByGenres[0]?.data}
        isLoading={isLoading}
      />
    ),
    Adventure: () => (
      <List
        movieList={moviesByGenres && moviesByGenres[1]?.data}
        isLoading={isLoading}
      />
    ),
    Animation: () => (
      <List
        movieList={moviesByGenres && moviesByGenres[2]?.data}
        isLoading={isLoading}
      />
    ),
    Comedy: () => (
      <List
        movieList={moviesByGenres && moviesByGenres[3]?.data}
        isLoading={isLoading}
      />
    ),
    Crime: () => (
      <List
        movieList={moviesByGenres && moviesByGenres[4]?.data}
        isLoading={isLoading}
      />
    ),
    Documentary: () => (
      <List
        movieList={moviesByGenres && moviesByGenres[5]?.data}
        isLoading={isLoading}
      />
    ),
    Drama: () => (
      <List
        movieList={moviesByGenres && moviesByGenres[6]?.data}
        isLoading={isLoading}
      />
    ),
    Family: () => (
      <List
        movieList={moviesByGenres && moviesByGenres[7]?.data}
        isLoading={isLoading}
      />
    ),
    Fantasy: () => (
      <List
        movieList={moviesByGenres && moviesByGenres[8]?.data}
        isLoading={isLoading}
      />
    ),
    History: () => (
      <List
        movieList={moviesByGenres && moviesByGenres[9]?.data}
        isLoading={isLoading}
      />
    ),
    Horror: () => (
      <List
        movieList={moviesByGenres && moviesByGenres[10]?.data}
        isLoading={isLoading}
      />
    ),
    Music: () => (
      <List
        movieList={moviesByGenres && moviesByGenres[11]?.data}
        isLoading={isLoading}
      />
    ),
    Mystery: () => (
      <List
        movieList={moviesByGenres && moviesByGenres[12]?.data}
        isLoading={isLoading}
      />
    ),
    Romance: () => (
      <List
        movieList={moviesByGenres && moviesByGenres[13]?.data}
        isLoading={isLoading}
      />
    ),
    ScienceFiction: () => (
      <List
        movieList={moviesByGenres && moviesByGenres[14]?.data}
        isLoading={isLoading}
      />
    ),
    TVMovie: () => (
      <List
        movieList={moviesByGenres && moviesByGenres[15]?.data}
        isLoading={isLoading}
      />
    ),
    Thriller: () => (
      <List
        movieList={moviesByGenres && moviesByGenres[16]?.data}
        isLoading={isLoading}
      />
    ),
    War: () => (
      <List
        movieList={moviesByGenres && moviesByGenres[17]?.data}
        isLoading={isLoading}
      />
    ),
    Western: () => (
      <List
        movieList={moviesByGenres && moviesByGenres[18]?.data}
        isLoading={isLoading}
      />
    ),
  });
  
  

  const renderTabBar = props => {
    return (
      <TabBar
        {...props}
        activeColor={'#FF0000'}
        inactiveColor={'#fff'}
        style={{
          width: layout.width,
          backgroundColor: '#000000',
        }}
        getLabelText={({route}) => route.title}
        renderLabel={({route, focused, color}) => (
          <Text
            style={{
              color,
              fontSize: focused ? 20 : 15,
              width: 150,
              textAlign: 'center',
            }}>
            {route.title}
          </Text>
        )}
        tabStyle={{width: 150}}
        scrollEnabled
      />
    );
  };

  return (
    <SafeAreaView style={style.main}>
      <ScrollView style={style.main}>
        <SearchBar searchInputData={searchInputData} />
        <ScrollHeader />
        <View style={{height: layout.height}}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            tabBarPosition="top"
            style={{width: wp(100), height: layout.height * 4.5}}
          />
        </View>
      </ScrollView>
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
