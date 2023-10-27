import React from "react";
import { PostsService } from "../Services/CommentServices";

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  async componentDidMount() {
    try {
      const todos = await PostsService.getTodos();
      this.setState({ todos });
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  }

  render() {
    return (
      <div>
        <h1>todos</h1>
        <ol>
          {this.state.todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Todos;
