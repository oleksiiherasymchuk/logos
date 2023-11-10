import React, { useEffect } from "react";
import style from "./Components.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Comment } from "../redux/userReducer";
import { AppDispatch, AppStateType } from "../redux/store";
import { getCommentsThunkRTK } from "../reduxTK/userReducer";

const Comments = () => {
  const comments = useSelector((store: AppStateType): Comment[] | [] => store.user.comments);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsThunkRTK())
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
