import React from "react";
import { PostsService } from "../Services/CommentServices";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  async componentDidMount() {
    try {
      const comments = await PostsService.getComments();
      this.setState({ comments });
      // console.log('Comments:', comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }


  render() {
    return (
      <div>
        <h1>Comments</h1>
        <ol>
          {this.state.comments.map((comment) => (
            <li key={comment.id}>
              {comment.body}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Comments;
