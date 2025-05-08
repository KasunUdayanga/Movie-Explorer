import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSearch}
        className="flex justify-center items-center mb-4 space-x-2"
        aria-label="Search Movies"
      >
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          aria-label="Search Input"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-semibold shadow-md"
          aria-label="Search Button"
        >
          Search
        </button>
      </form>
      {/* Display the current query */}
      {query && (
        <p className="text-gray-500 text-sm mt-2">
          You are searching for: <span className="text-blue-500 font-semibold">{query}</span>
        </p>
      )}
    </div>
  );
};

export default SearchBar;