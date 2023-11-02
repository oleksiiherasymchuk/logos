import React, { useEffect } from "react";
import style from "./Components.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsThunk } from "../redux/userReducer";

const Comments = () => {
  const comments = useSelector((store) => store.user.comments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsThunk())
  }, [dispatch]);

  const handleCommentClick = (commentId) => {
    window.location.href = `https://jsonplaceholder.typicode.com/posts/${commentId}`;
  };

  return (
    <div className={style.child}>
      <h1>Comments</h1>
      {comments.map((comment) => (
        <p key={comment.id} onClick={() => handleCommentClick(comment.id)}>
          {comment.id}. {comment.body}
        </p>
      ))}
    </div>
  );
};

export default Comments;
