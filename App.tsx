import {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import List from './Componants/List/List';
import Separator from './Componants/Seperator/Separator';
import ScrollHeader from './Screen/ScrollHeader';
import {useDispatch, useSelector} from 'react-redux';
import {getTrendingMoviesStart, getTrendingSeriesStart} from './shared/actions/genreActions';
const Home = () => {
  const dispatch = useDispatch();
  const {trendingMovies, isTrendingMoviesLoading, trendingSeries, isTrendingSeriesLoading} = useSelector(state => state?.moviesList);
  
  useEffect(() => {
    // dispatch(getGenreStart());
    dispatch(getTrendingMoviesStart());
    dispatch(getTrendingSeriesStart())
  }, []);
  const genres = [
    {
      id: 28,
      name: 'Movies',
      data: trendingMovies,
    },
    {
      id: 12,
      name: 'Web-Series',
      data: trendingSeries,
    },
    {
      id: 16,
      name: 'Animation',
      data: null,
    },
    {
      id: 35,
      name: 'Comedy',
      data: null,
    },
    {
      id: 80,
      name: 'Crime',
      data: null,
    },
    {
      id: 99,
      name: 'Documentary',
      data: null,
    },
    {
      id: 18,
      name: 'Drama',
      data: null,
    },
    {
      id: 10751,
      name: 'Family',
      data: null,
    },
  ];

  const isLoading = isTrendingMoviesLoading || isTrendingSeriesLoading

  return (
    <SafeAreaView style={style.main}>
      <FlatList
        data={genres}
        ListHeaderComponent={ScrollHeader}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <>
            <Separator />
            <List title={item.name} movieList={item.data} isLoading={isLoading}/>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

const style = StyleSheet.create({
  main: {
    display: 'flex',
    height: 'auto',
    borderRadius: 27,
    backgroundColor: '#000',
  },
  slider: {
    width: 410,
    height: 630,
    borderRadius: 20,
    opacity: 0.8,
    resizeMode: 'cover',
  },
  sep: {
    width: 5,
    height: 600,
    backgroundColor: '#000',
  },
});
