const initState = {
  items: [],
  loading: false,
  error: null,
};
const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "FETCH_POSTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "ADD_MOVIE":
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false,
      };
    case "DELETE_MOVIE":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "EDIT_MOVIE":
      const movies = [...state.items];
      const movieIndex = movies.findIndex((el) => el.id === action.payload.id);
      let movie = movies.find((el) => action.payload.id === el.id);
      movie = { ...movie, ...action.payload };
      movies[movieIndex] = movie;
      return {
        ...state,
        items: movies,
      };
    case "SET_FILTER":
      return {
        ...state,
        items: action.payload,
      };
    case "SET_SORTING":
      return {
        ...state,
        items: action.payload,
      };
    case "SET_RATING":
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};
export default postsReducer;
