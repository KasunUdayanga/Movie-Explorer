import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../utils/api.js';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const trendingMovies = await fetchTrendingMovies();
      setMovies(trendingMovies);
    };
    getTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;