// Import necessary functions from Redux and Redux Thunk middleware
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers'; // Ensure this path correctly points to your combined reducers

// Create a Redux store
// rootReducer: the combined reducer which updates the state based on actions
// applyMiddleware(thunk): Enhance the store with thunk middleware to handle asynchronous actions
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

// Export the configured store to be used across the application
export default store;
