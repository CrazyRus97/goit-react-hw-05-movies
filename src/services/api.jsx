import axios from 'axios';

axios.defaults.params = {
    api_key: '20311c0a3720ee85bb9718b5610b0ca5',
}

export const fetchFilms = async () => {
  const { data } = await axios.get('https://api.themoviedb.org/3/trending/movie/day');
  return data;
};

export const fetchMovie = async(query) => {
  const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}`);
  return data;
}

export const fetchDetails = async (movieId) => {
  const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`);
  return data;
} 

export const fetchCast = async (movieId) => {
  const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`);
  return data;
} 

export const fetchReviews = async (movieId) => {
  const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`);
  return data;
} 