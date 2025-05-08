import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const { id, title, poster_path, vote_average } = movie;

  return (
    <div style={{ width: '200px', textAlign: 'center' }}>
      <Link to={`/movie/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          style={{ width: '100%', borderRadius: '8px' }}
        />
      </Link>
      <h3>{title}</h3>
      <p>Rating: {vote_average}</p>
    </div>
  );
};

export default MovieCard;