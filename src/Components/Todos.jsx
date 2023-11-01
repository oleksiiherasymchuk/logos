import React, { useEffect } from "react";
import style from "./Components.module.css";
import { useDispatch, useSelector } from "react-redux";
import { PostsService } from "../Services/CommentServices";

const Todos = () => {
  const posts = useSelector((store) => store.user.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    PostsService.getPosts(dispatch);
  }, [dispatch]);

  return <div className={style.child}>
    <h1>Todos</h1>
    {posts.map((post) => <p key={post.id}>{post.id}. {post.title}</p>)}
  </div>;
};

export default Todos;
