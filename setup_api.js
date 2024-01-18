const mainAPI = 'https://api.themoviedb.org/3/configuration';
const api_key = "eb5ddbec70fd6f8c9dd6dab0df2226c4";
const baseUrl = "https://image.tmdb.org/t/p/";

const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjVkZGJlYzcwZmQ2ZjhjOWRkNmRhYjBkZjIyMjZjNCIsInN1YiI6IjY1OThmZWU2ODliNTYxMDFhNGMzZDE5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T_WvM9z5RcuUjtCYlXDntQxmEsaRb4qq347DgXVeolI'
}


//<--------semDynamic------->//
const genreAPI = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
const popularMovies = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const upComing = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
const topRated = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
const latestMovies = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

//<------dynamic------>//
const getMovieDetailById = 'https://api.themoviedb.org/3/movie/781732?language=en-US'
const getAlternativeTitleMovieById = 'https://api.themoviedb.org/3/movie/781732/alternative_titles?country=IN'
const getCreditsOfMovie = 'https://api.themoviedb.org/3/movie/781732/credits?language=en-US'
const getImagesById = 'https://api.themoviedb.org/3/movie/781732/images'
const getKeywordsById = 'https://api.themoviedb.org/3/movie/781732/keywords'
const getAllTrending = 'https://api.themoviedb.org/3/trending/all/week?language=en-US'
const getAllTrendingMovies = 'https://api.themoviedb.org/3/trending/movie/week'
const getAllTrendingPeoples = 'https://api.themoviedb.org/3/trending/person/week'
const getAllTrendingSeries = 'https://api.themoviedb.org/3/trending/tv/week'

//<------dynamicSearch----->//
const webSeries = 'https://api.themoviedb.org/3/search/tv?query=berlin'
const moviesSearch = 'https://api.themoviedb.org/3/search/movie?query=dunki&page=1'
const search = 'https://api.themoviedb.org/3/search/multi?query=iron%20man&language=en-US&page=1'

export { api_key, baseUrl, headers };
