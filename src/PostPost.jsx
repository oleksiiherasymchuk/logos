import React from "react";
import { useForm, Controller } from "react-hook-form";
import { PostsService } from "./Services/CommentServices";

const PostPost = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    reset();
    PostsService.postComment(data)
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} type="text" />}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} type="email" />}
          />
        </div>
        <div>
          <label htmlFor="body">Comment:</label>
          <Controller
            name="body"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} type="text" />}
          />
        </div>
        <button type="submit">Send comment</button>
      </form>
    </div>
  );
};

export default PostPost;
