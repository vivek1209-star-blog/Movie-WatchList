import { combineReducers } from 'redux';
import movieReducer from './movieReducer'; // Ensure this import points to the correct file where the movieReducer is defined

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
  movies: movieReducer, // This incorporates the movieReducer to manage movie-related state
  // Add other reducers here when needed, associating them with different state properties
});

export default rootReducer;
