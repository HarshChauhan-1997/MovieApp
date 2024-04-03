import axios from 'axios';
import {headers} from '../../../setup_api';

const getCastDetails = async (id) => {
    return await axios.get(
      `https://api.themoviedb.org/3/person/${id}`,
      {headers},
    );
  };

  const getMoviesCredits = async (id) => {
    return await axios.get(
      `https://api.themoviedb.org/3/person/${id}/movie_credits`,
      {headers},
    )
  }

export const moviesByCast = {getCastDetails, getMoviesCredits}