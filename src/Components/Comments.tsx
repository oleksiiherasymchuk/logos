import React, { useEffect } from "react";
import style from "./Components.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Comment, getCommentsThunk } from "../redux/userReducer";
import { AppDispatch, AppStateType } from "../redux/store";

const Comments = () => {
  const comments = useSelector((store: AppStateType): Comment[] | [] => store.user.comments);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsThunk())
  }, [dispatch]);

  const handleCommentClick = (commentId: number) => {
    window.location.href = `https://jsonplaceholder.typicode.com/posts/${commentId}`;
  };

  return (
    <div className={style.child}>
      <h1>Comments</h1>
      {comments.map((comment: Comment) => (
        <p key={comment.id} onClick={() => handleCommentClick(comment.id)}>
          {comment.id}. {comment.body}
        </p>
      ))}
    </div>
  );
};

export default Comments;
