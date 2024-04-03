import axios from 'axios';
import {headers} from '../../../setup_api';
import _ from 'lodash';

// hrb_2002
// Beast@1805

const getGenre = async () => {
  return await axios.get(
    'https://api.themoviedb.org/3/genre/movie/list?language=en',
    {headers},
  );
};

const getTrendingAll = async () => {
  return await axios.get(
    'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    {headers},
  );
};

const getTrendingMovies = async () => {
  return await axios.get('https://api.themoviedb.org/3/trending/movie/week', {
    headers,
  });
};

const getTrendingSeries = async () => {
  return await axios.get('https://api.themoviedb.org/3/trending/tv/week', {
    headers,
  });
};

const getMoviesByGenres = async () => {
  const genres = [
    28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878,
    10770, 53, 10752, 37,
  ];

  const genreRequests = genres.map(genreId =>
    axios.get(
      `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`,
      {headers},
    ),
  );

  const moviesTrending = axios.get(
    'https://api.themoviedb.org/3/trending/movie/week',
    {
      headers,
    },
  );

  const webSeries = axios.get('https://api.themoviedb.org/3/trending/tv/week', {
    headers,
  });

  try {
    const responses = await axios.all(genreRequests);
    const Movies_Series = await axios.all([moviesTrending, webSeries]);
    const AllData = _.concat(Movies_Series, responses);

    return AllData;
  } catch (error) {
    console.error('= = Error fetching movies by genres: = = >', error);
    throw error;
  }
};

const getDataBySearch = async (data: string) => {
  return await axios.get(
    `https://api.themoviedb.org/3/search/multi?query=${data}&include_adult=true&language=en-US&page=1`,
    {
      headers,
    },
  );
};

export const genreApi = {
  getGenre,
  getTrendingMovies,
  getTrendingAll,
  getTrendingSeries,
  getMoviesByGenres,
  getDataBySearch,
};
