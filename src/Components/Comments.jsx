import React, { useEffect } from "react";
import style from "./Components.module.css";
import { useDispatch, useSelector } from "react-redux";
import { PostsService } from "../Services/CommentServices";

const Comments = () => {
  const comments = useSelector((store) => store.user.comments);
  const dispatch = useDispatch();
  useEffect(() => {
    PostsService.getComments(dispatch);
  }, [dispatch]);

  const handleCommentClick = (commentId) => {
    window.location.href = `https://jsonplaceholder.typicode.com/posts/${commentId}`;
    // PostsService.getPostById(commentId, dispatch)
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
