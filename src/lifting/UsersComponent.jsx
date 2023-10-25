import React from "react";
import User from "./User";

const userStyle = {
  height: "180px",
  width: "300px",
  border: "1px solid black",
  borderRadius: "4px",
  marginTop: "5px",
  padding: "10px",
};

const UsersComponent = ({ users, onShowPosts }) => {
  return (
    <div>
      {users.map((u) => {
        return (
          <div style={userStyle} key={u.id}>
            <User user={u} onShowPosts={onShowPosts} />
          </div>
        );
      })}
    </div>
  );
};

export default UsersComponent;
