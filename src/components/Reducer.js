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
        items: [
          { title: action.payload, id: state.items.length + 1 },
          ...state.items,
        ],
        loading: false,
      };
    case "DELETE_MOVIE":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload)
      };
    case "EDIT_MOVIE":
      console.log(action.payload)
      return {
        ...state,
        items: action.payload,
      };
    case "SET_FILTER":
      console.log(action.payload)
      return {
        ...state,
        items: [action.payload],
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
