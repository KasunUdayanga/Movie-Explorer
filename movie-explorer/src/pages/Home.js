import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies, searchMovies } from '../utils/api';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      } finally {
        setLoading(false);
      }
    };

    getTrendingMovies();
  }, []);

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setIsSearching(false);
      const trendingMovies = await fetchTrendingMovies();
      setMovies(trendingMovies);
      return;
    }

    setIsSearching(true);
    setLoading(true);
    try {
      const searchResults = await searchMovies(query);
      setMovies(searchResults);
    } catch (error) {
      console.error('Error searching for movies:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p className="text-lg font-semibold">Loading movies...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl font-extrabold mb-8 text-center text-blue-500">
          {isSearching ? 'Search Results' : 'Trending Movies'}
        </h1>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />

        {/* Movie Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;