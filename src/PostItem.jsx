import React, { useState } from "react";

const postStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const PostItem = (props) => {
  const [isBodyShown, setIsBodyShown] = useState(false);

  const showPostHandler = () => {
    setIsBodyShown(!isBodyShown);
  };

  return (

    // Posts
    <div style={postStyle}>
      <p>Post id: {props.post.id}</p>
      <p>Post title: {props.post.title}</p>
      <button onClick={showPostHandler}>
        {isBodyShown ? "Hide body" : "Show body"}
      </button>
      {isBodyShown && <p>Post Body: {props.post.body}</p>}
    </div>



    // Capsules
    // <div style={postStyle}>
    //   <p>Capsule id: {props.capsule.capsule_id}</p>
    //   <p>Capsule serial: {props.capsule.capsule_serial}</p>
    //   <p>Capsule details: {props.capsule.details}</p>
    // </div>
  );
};

export default PostItem;
