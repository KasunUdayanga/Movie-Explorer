import React from 'react';

const MovieDetails = ({ movie }) => {
  if (!movie) {
    return <p className="text-gray-500">Loading...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full max-w-md rounded-lg shadow-md mb-6"
      />
      <p className="text-gray-700 mb-4">
        <strong>Overview:</strong> {movie.overview}
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(', ')}
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Release Date:</strong> {movie.release_date}
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Rating:</strong> {movie.vote_average}
      </p>
      <a
        href={`https://www.youtube.com/results?search_query=${movie.title} trailer`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Watch Trailer
      </a>
    </div>
  );
};

export default MovieDetails;