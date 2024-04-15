// Define the initial state of the movie section of the Redux store
const initialState = {
    movies: [],    // Array to hold movie search results
    watchlist: [], // Array to hold movies added to the watchlist
    error: null,   // To store any error information
    loading: false // To handle the loading state during API calls
};

// Reducer function to handle actions related to movies and watchlist
function movieReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_MOVIES_REQUEST':
            // Handle the start of an API request by setting loading true and clearing errors
            return { ...state, loading: true, error: null };
        case 'FETCH_MOVIES_SUCCESS':
            // Handle successful API fetch by storing movies and setting loading false
            return { ...state, loading: false, movies: action.payload, error: null };
        case 'FETCH_MOVIES_FAILURE':
            // Handle API fetch failure by setting error and clearing movies list
            return { ...state, loading: false, movies: [], error: action.payload };
        case 'ADD_TO_WATCHLIST':
            // Add a movie to the watchlist
            return { ...state, watchlist: [...state.watchlist, action.payload] };
        case 'REMOVE_FROM_WATCHLIST':
            // Remove a movie from the watchlist based on its IMDb ID
            return { ...state, watchlist: state.watchlist.filter(movie => movie.imdbID !== action.payload.imdbID) };
        default:
            // Return the current state if no specific actions are matched
            return state;
    }
}

// Export the movieReducer to be combined with other reducers
export default movieReducer;
