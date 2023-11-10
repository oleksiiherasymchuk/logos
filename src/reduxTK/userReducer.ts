import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PostsRTKService } from "../Services/CommentServices";

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

export const getPostsThunkRTK = createAsyncThunk("api/posts", async () => {
  try {
    const response = await PostsRTKService.getPosts();
    return response.data;
  } catch (e) {
    console.log(e);
  }
});
export const getAlbumsThunkRTK = createAsyncThunk("api/albums", async () => {
  try {
    const response = await PostsRTKService.getAlbums();
    return response.data;
  } catch (e) {
    console.log(e);
  }
});
export const getCommentsThunkRTK = createAsyncThunk(
  "api/comments",
  async () => {
    try {
      const response = await PostsRTKService.getComments();
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const userSlice = createSlice({
  name: "usersReducer",
  initialState,
  reducers: {},
  extraReducers: {
    [getPostsThunkRTK.fulfilled.type]: (state, action) => {
      state.posts = action.payload
    },
    [getPostsThunkRTK.rejected.type]: (state, action) => {
      console.log(action);
    },
    [getAlbumsThunkRTK.fulfilled.type]: (state, action) => {
      state.albums = action.payload
    },
    [getAlbumsThunkRTK.rejected.type]: (state, action) => {
      console.log(action);
    },
    [getCommentsThunkRTK.fulfilled.type]: (state, action) => {
      state.comments = action.payload
    },
    [getCommentsThunkRTK.rejected.type]: (state, action) => {
      console.log(action);
    },
  },
});

export default userSlice.reducer;
