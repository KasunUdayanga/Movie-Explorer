import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const { id, title, poster_path, vote_average } = movie;
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if the movie is already marked as favorite
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFav = storedFavorites.some((fav) => fav.id === id);
    setIsFavorite(isFav);
  }, [id]);

  // Toggle favorite status
  const toggleFavorite = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = storedFavorites.filter((fav) => fav.id !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      // Add to favorites
      storedFavorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(storedFavorites));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105 relative">
      <Link to={`/movie/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="w-full h-80 object-cover"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-bold truncate">{title}</h3>
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm text-gray-400">Rating: {vote_average}</p>
          <Link
            to={`/movie/${id}`}
            className="text-blue-400 hover:text-blue-300 text-sm font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
      {/* Favorite Button */}
      <button
        onClick={toggleFavorite}
        className={`absolute top-4 right-4 p-2 rounded-full shadow-md transition ${
          isFavorite ? 'bg-red-500 text-white' : 'bg-gray-700 text-gray-300'
        } hover:scale-110`}
        title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      >
        {isFavorite ? '♥' : '♡'}
      </button>
    </div>
  );
};

export default MovieCard;