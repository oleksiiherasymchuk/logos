import React from "react";
import { Controller, useForm } from "react-hook-form";
import { UserService } from "./Services/UserServices";

const PostUser = () => {
  const { control, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    reset();
    UserService.createUser(data)
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name:</label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} />}
          />
        </div>
        <div>
          <label>Email:</label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} />}
          />
        </div>
        <div>
          <label>Phone:</label>
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={({ field }) => <input {...field} />}
          />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default PostUser;
