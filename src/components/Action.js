import Axios from "axios";

export const fetchPost = () => async (dispatch, getState) => {
  dispatch({
    type: "FETCH_POSTS_REQUEST",
  });
  try {
    const response = await Axios.get(
      "http://localhost:4000/movies"
    );
    const data = response.data.data
    dispatch({
      type: "FETCH_POSTS_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "FETCH_POSTS_FAILURE",
      error: error,
    });
  }
};
