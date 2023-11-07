import { ThunkAction } from "redux-thunk";
import { PostsService } from "../Services/CommentServices";
import { AppDispatch, AppStateType, PropertiesTypes } from "./store";

export type UserActionsType = ReturnType<PropertiesTypes<typeof userActions>>;
export type UserThunkType = ThunkAction<
  void,
  AppStateType,
  unknown,
  UserActionsType
>;

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Album {
  userId: number;
  id: number;
  title: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface InitialStateType {
  posts: Post[] | [];
  albums: Album[] | [];
  comments: Comment[] | [];
}

const initialState: InitialStateType = {
  posts: [],
  albums: [],
  comments: [],
};

export enum userActionTypes {
  SET_POSTS = "SET_POSTS",
  SET_ALBUMS = "SET_ALBUMS",
  SET_COMMENTS = "SET_COMMENTS",
}
// export const userActions = {
//   SET_POSTS: "SET_POSTS",
//   SET_ALBUMS: "SET_ALBUMS",
//   SET_COMMENTS: "SET_COMMENTS",
// };

export const userReducer = (state = initialState, action: any) => {
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
    default:
      return state;
  }
};

export const userActions = {
  setPosts: (posts: Post[]) => ({
    type: userActionTypes.SET_POSTS,
    payload: posts,
  }),
  setAlbums: (albums: Album[]) => ({
    type: userActionTypes.SET_ALBUMS,
    payload: albums,
  }),
  setComments: (comments: Comment[]) => ({
    type: userActionTypes.SET_COMMENTS,
    payload: comments,
  }),
};

export const getPostsThunk = (): UserThunkType => (dispatch: AppDispatch) => {
  PostsService.getPosts(dispatch);
};

export const getAlbumsThunk = (): UserThunkType => (dispatch: AppDispatch) => {
  PostsService.getAlbums(dispatch);
};

export const getCommentsThunk =
  (): UserThunkType => (dispatch: AppDispatch) => {
    PostsService.getComments(dispatch);
  };
