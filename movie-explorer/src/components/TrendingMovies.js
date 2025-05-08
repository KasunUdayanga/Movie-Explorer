import React from 'react';
import MovieCard from './MovieCard';

function TrendingMovies({ movies }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default TrendingMovies;