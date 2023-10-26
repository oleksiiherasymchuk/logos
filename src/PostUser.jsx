import React from "react";
import { Controller, useForm } from "react-hook-form";

const PostUser = () => {
  const { control, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        reset();
        console.log("User created successfully.");
      } else {
        console.error("Error creating user. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred. Please try again.");
    }
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
