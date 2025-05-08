import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const BEARER_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODdkOTQ2ZmRhYmVhMThhMTYxZmIyNGU4ZDM4NmRhYiIsIm5iZiI6MS43MjE5NTkyNjc0OTQwMDAyZSs5LCJzdWIiOiI2NmEzMDM2MzQ3ZDBjOWYzNGExYmE4NTQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ivNJtLoty-wSNrmnMcLdZWChm3jHrp6e87QXKsxm7og'; // Replace with your actual Bearer Token

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: BEARER_TOKEN,
    'Content-Type': 'application/json',
  },
});

export const fetchTrendingMovies = async () => {
  try {
    const response = await axiosInstance.get('/trending/movie/day');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axiosInstance.get('/search/movie', {
      params: { query, language: 'en-US' },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}`, {
      params: { language: 'en-US' },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};