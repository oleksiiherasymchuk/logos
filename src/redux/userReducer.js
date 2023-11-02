import { PostsService } from "../Services/CommentServices";

const initialState = {
  posts: [],
  albums: [],
  comments: [],
  // commentById: "",
};

const userActionTypes = {
  SET_POSTS: "SET_POSTS",
  SET_ALBUMS: "SET_ALBUMS",
  SET_COMMENTS: "SET_COMMENTS",
  // SET_COMMENT_BY_ID: "SET_COMMENT_BY_ID",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case userActionTypes.SET_ALBUMS:
      return {
        ...state,
        albums: action.payload,
      };
    case userActionTypes.SET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    // case userActionTypes.SET_COMMENT_BY_ID:
    //   return {
    //     ...state,
    //     commentById: action.payload,
    //   };
    default:
      return state;
  }
};

export const userActions = {
  setPosts: (posts) => ({ type: userActionTypes.SET_POSTS, payload: posts }),
  setAlbums: (albums) => ({
    type: userActionTypes.SET_ALBUMS,
    payload: albums,
  }),
  setComments: (comments) => ({
    type: userActionTypes.SET_COMMENTS,
    payload: comments,
  }),
  // setCommentById: (commentById) => ({
  //   type: userActionTypes.SET_COMMENT_BY_ID,
  //   payload: commentById,
  // }),
};

export const getPostsThunk = () => async (dispatch) => {
  // try {
  // const response = await PostsService.getPosts()
  // dispatch(userActions.setPosts(response.data))
  PostsService.getPosts(dispatch);
  // } catch (error) {
  //   console.log(error);
  // }
};

export const getAlbumsThunk = () => async (dispatch) => {
  PostsService.getAlbums(dispatch);
};

export const getCommentsThunk = () => async (dispatch) => {
  PostsService.getComments(dispatch);
};
