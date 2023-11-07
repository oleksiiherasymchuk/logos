import React, { useEffect } from "react";
import style from "./Components.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Post, getPostsThunk } from "../redux/userReducer";
import { AppDispatch, AppStateType } from "../redux/store";

const Todos = () => {
  const posts = useSelector((store: AppStateType): Post[] | [] => store.user.posts);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsThunk())
  }, [dispatch]);

  return <div className={style.child}>
    <h1>Todos</h1>
    {posts.map((post: Post) => <p key={post.id}>{post.id}. {post.title}</p>)}
  </div>;
};

export default Todos;
