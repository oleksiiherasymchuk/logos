import React from "react";
import { PostsService } from "../Services/CommentServices";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    try {
      const posts = await PostsService.getPosts();
      this.setState({ posts });
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  }

  render() {
    return (
      <div>
        <h1>posts</h1>
        <ol>
          {this.state.posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Posts;
