import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (movieId) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h2>Your Favorite Movies</h2>
      {favorites.length === 0 ? (
        <p>You have no favorite movies yet.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          {favorites.map((movie) => (
            <div key={movie.id}>
              <MovieCard movie={movie} />
              <button
                onClick={() => removeFavorite(movie.id)}
                style={{ marginTop: '8px', padding: '8px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '4px' }}
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;