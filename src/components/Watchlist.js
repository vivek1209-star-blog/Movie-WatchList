import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWatchlist } from '../store/actions';

// Watchlist component for displaying and managing user's watchlist
function Watchlist() {
  const watchlist = useSelector(state => state.movies.watchlist); // Access watchlist from Redux store
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Watchlist</h1>
      <div className="movie-grid">
        {watchlist.length > 0 ? watchlist.map(movie => (
          <div key={movie.imdbID} className="movie-card">
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'} alt={movie.Title} />
            <div className="movie-info">
              <h2>{movie.Title}</h2>
              <p>{movie.Year}</p>
              <button onClick={() => dispatch(removeFromWatchlist(movie))}>Remove from Watchlist</button>
            </div>
          </div>
        )) : <p>Your watchlist is empty.</p>}
      </div>
    </div>
  );
}

export default Watchlist;
