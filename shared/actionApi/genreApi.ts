import axios from 'axios';
import {headers} from '../../setup_api';
import {Genres} from '../Types/Types';

const getGenre = async () => {
  const {data}: {data: Genres} = await axios.get(
    'https://api.themoviedb.org/3/genre/movie/list?language=en',
    {
      headers: headers,
    },
  );
  return data;
};

const getTrendingAll = async () => {
  console.log("call+++++----->>>>>>");
  
  const res: {data: any} = await axios.get(
    'https://api.themoviedb.org/3/trending/all/week?language=en-US',
    {
      headers: headers,
    },
  );
  // console.log("==res==>",res);
  return res;
};

const getTrendingMovies = async () => {
  console.log("call+++++");
  
  const res: {data: any} = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/week',
    {
      headers: headers,
    },
  );
  // console.log("==res==>",res);
  return res;
};

export const genreApi = {
  getGenre,
  getTrendingMovies,
  getTrendingAll
};
