import axios from "axios";
export const IMAGE_URL = 'https://image.tmdb.org/t/p';
export const API_KEY = 'cb1bcc244723619ea7f2217b5a84ccd8';
export const BASE_URL = 'https://api.themoviedb.org/3';

export const apiRefs = {
    TRENDING: 'trending',
    SEARCH: 'search',
    MOVIE_DETAILS: 'movieDetails',
    MOVIE_VIDEO: 'movieVideo',
    CREDITS: 'credits',
  };

  export default async function fetchApi({
    param = apiRefs.TRENDING,
    id = 0,
    page = 1,
    query = '',
  }) {
    const searchTypes = {
      trending: `/trending/all/day?api_key=${API_KEY}&page=${page}`,
      search: `/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
      movieDetails: `/movie/${id}?api_key=${API_KEY}`,
      movieVideo: `/movie/${id}/videos?api_key=${API_KEY}`,
      credits: `/movie/${id}/credits?api_key=${API_KEY}`
    };
  
    const response = await axios.get(`${BASE_URL}${searchTypes[param]}`);
      return response.data;
  }