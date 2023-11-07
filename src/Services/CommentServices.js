import axios from "axios";
import { userActions } from "../redux/userReducer";

export const PostsService = {
  getComments: async (dispatch) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      dispatch(userActions.setComments(response.data));
    } catch (e) {
      console.log(e);
    }
  },
  getAlbums: async (dispatch) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );
      dispatch(userActions.setAlbums(response.data));
    } catch (e) {
      console.log(e);
    }
  },
  getPosts: async (dispatch) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch(userActions.setPosts(response.data));
    } catch (e) {
      console.log(e);
    }
  },
};
