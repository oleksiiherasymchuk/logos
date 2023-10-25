import React from "react";

const User = ({user, onShowPosts }) => {
  // console.log(user);
  return (
    <div>
      <p>User id: {user.id}</p>
      <p>User name: {user.name}</p>
      <p>User username: {user.username}</p>
      <p>User email: {user.email}</p>
      <button onClick={() => onShowPosts(user.id)}>Show posts</button>
    </div>
  );
};

export default User;
