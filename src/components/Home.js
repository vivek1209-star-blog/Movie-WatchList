import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, addToWatchlist } from '../store/actions';

// Home component for searching and displaying movies
function Home() {
  const [searchTerm, setSearchTerm] = useState('3 idiots'); // Initialize searchTerm state
  const dispatch = useDispatch();
  const { movies, error, loading } = useSelector(state => state.movies); // Access Redux state

  // Function to dispatch fetchMovies action
  const handleSearch = () => {
    if (searchTerm) {
      dispatch(fetchMovies(searchTerm));
    }
  };

  // Update searchTerm state as user types
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Reset searchTerm state
  const handleReset = () => {
    setSearchTerm('');
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search movies..."
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleReset}>Reset</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="movie-grid">
        {movies.map(movie => (
          <div key={movie.imdbID} className="movie-card">
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'} alt={movie.Title} />
            <div className="movie-info">
              <h2>{movie.Title}</h2>
              <p>{movie.Year}</p>
              <button onClick={() => dispatch(addToWatchlist(movie))}>Add to Watchlist</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
