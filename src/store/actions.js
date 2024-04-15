// Action to signify the beginning of an API request
export const fetchMoviesRequest = () => ({
    type: 'FETCH_MOVIES_REQUEST'
});

// Action to handle the success of the API request and pass the movies data
export const fetchMoviesSuccess = (movies) => ({
    type: 'FETCH_MOVIES_SUCCESS',
    payload: movies
});

// Action to handle any errors during the API request
export const fetchMoviesFailure = (error) => ({
    type: 'FETCH_MOVIES_FAILURE',
    payload: error
});

// Action to add a movie to the watchlist
export const addToWatchlist = (movie) => ({
    type: 'ADD_TO_WATCHLIST',
    payload: movie
});

// Action to remove a movie from the watchlist
export const removeFromWatchlist = (movie) => ({
    type: 'REMOVE_FROM_WATCHLIST',
    payload: movie
});

// Thunk action to fetch movies based on a search term
export const fetchMovies = (searchTerm) => {
    return async (dispatch) => {
        dispatch(fetchMoviesRequest()); // Dispatching request action
        try {
            const apiKey = process.env.REACT_APP_API_KEY; // Accessing API key from environment variables
            const response = await fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(searchTerm)}&apikey=${apiKey}`);
            const data = await response.json();
            if (data.Response === "True") {
                dispatch(fetchMoviesSuccess(data.Search)); // Dispatching success action with the data
            } else {
                throw new Error(data.Error || 'Unknown error'); // Handling potential errors from the API
            }
        } catch (error) {
            dispatch(fetchMoviesFailure(error.message)); // Dispatching failure action if the API call fails
        }
    };
};
