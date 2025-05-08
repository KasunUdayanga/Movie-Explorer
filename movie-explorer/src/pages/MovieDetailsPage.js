import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails, fetchMovieVideos } from "../utils/api";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieDetails = await fetchMovieDetails(id);
        setMovie(movieDetails);

        const videos = await fetchMovieVideos(id);
        const trailer = videos.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        if (trailer) {
          setTrailerKey(trailer.key);
        }
      } catch (error) {
        console.error("Error fetching movie details or trailer:", error);
      } finally {
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
        <p className="text-lg font-semibold animate-pulse">
          Loading movie details...
        </p>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
        <p className="text-lg font-semibold">Movie not found.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">

      <div className="relative group">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-80 rounded-lg shadow-lg transform group-hover:scale-105 transition duration-300"
        />
        <div className="absolute top-0 left-0 bg-blue-500 text-white text-sm px-3 py-1 rounded-br-lg shadow-md">
          {movie.vote_average} / 10
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg"></div>
      </div>
  

      <div className="flex-1">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-400 hover:text-blue-300 transition duration-300">
          {movie.title}
        </h1>
        <p className="text-gray-400 mb-4">
          <strong className="text-white">Release Date:</strong> {movie.release_date}
        </p>
        <p className="text-gray-300 mb-6 leading-relaxed">
          <strong className="text-white">Overview:</strong> {movie.overview}
        </p>
        <p className="text-gray-400 mb-6">
          <strong className="text-white">Genres:</strong>{" "}
          {movie.genres.map((genre) => (
            <span
              key={genre.id}
              className="inline-block bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
            >
              {genre.name}
            </span>
          ))}
        </p>
      </div>
    </div>

      {trailerKey && (
  <div className="mt-12">
    <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">Watch Trailer</h2>
    <div className="relative w-full max-w-2xl mx-auto" style={{ paddingTop: '42%' }}>
  <iframe
    src={`https://www.youtube.com/embed/${trailerKey}`}
    title="YouTube Trailer"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="absolute inset-0 w-full h-full rounded-md shadow-xl border border-gray-700"
  ></iframe>
</div>
  </div>
)}
    </div>
  );
};

export default MovieDetailsPage;
