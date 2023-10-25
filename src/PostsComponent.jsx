import React from "react";
import PostItem from "./PostItem";

const postStyle = {
  minHeight: "150px",
  width: "400px",
  border: "1px solid black",
  borderRadius: "4px",
  marginTop: "5px",
  padding: "10px",
};

const PostsComponent = ({ posts, capsules }) => {
  // const activeCapsules = capsules.filter((c) => c.status === "active");

  return (
    // posts
    <div>
      {posts.map((p) => {
        return (
          <div style={postStyle} key={p.id}>
            <PostItem post={p} />
          </div>
        );
      })}
    </div>

    // Capsules
    // <div>
    //   {activeCapsules.map((c) => {
    //     console.log(c);
    //     return (
    //       <div style={postStyle} key={c.capsule_serial}>
    //         <PostItem capsule={c} />
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default PostsComponent;
