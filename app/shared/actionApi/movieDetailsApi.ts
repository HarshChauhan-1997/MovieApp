import axios from 'axios';
import {headers} from '../../../setup_api';
import _ from 'lodash';

const getCast = async ({id, title}) => {
  return await axios.get(
    `https://api.themoviedb.org/3/${
      title === 'Web-Series' ? 'tv' : 'movie'
    }/${id}/credits?language=en-US`,
    {headers},
  );
};

const getTrailer = async ({id, title}) => {
  const type = title === 'Web-Series' ? 'tv' : 'movie';

  try {
    const trailerHI = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/videos?language=hi-IN`,
      {headers},
    );

    const trailerAll = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`,
      {headers},
    );

    const [Trailer, TrailerHI] = await axios.all([trailerAll, trailerHI]);

    const trailers = _.filter(
      Trailer.data.results,
      item => item.type === 'Trailer',
    );

    const trailerH = _.filter(
      TrailerHI.data.results,
      item => item.type === 'Trailer',
    );

    const clips = _.filter(Trailer.data.results, item => item.type === 'Clip');

    const data = await _.concat(
      _.map(trailerH, 'key'),
      _.map(trailers, 'key'),
      _.map(clips, 'key'),
    );

    return data;
  } catch (error) {
    console.error('Error fetching trailer data:', error);
    throw error;
  }
};

const getImages = async ({id, title}) => {
  return await axios.get(
    `https://api.themoviedb.org/3/${
      title === 'Web-Series' ? 'tv' : 'movie'
    }/${id}/images`,
    {
      headers,
    },
  );
};

const getDetails = async ({id, title}) => {
  return await axios.get(
    `https://api.themoviedb.org/3/${
      title === 'Web-Series' ? 'tv' : 'movie'
    }/${id}?language=en-US`,
    {headers},
  );
};

export const moviesDetails = {
  getCast,
  getTrailer,
  getImages,
  getDetails,
};
