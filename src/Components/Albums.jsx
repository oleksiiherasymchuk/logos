import React from "react";
import { PostsService } from "../Services/CommentServices";

class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  async componentDidMount() {
    try {
      const albums = await PostsService.getAlbums();
      this.setState({ albums });
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  }

  render() {
    return (
      <div>
        <h1>albums</h1>
        <ol>
          {this.state.albums.map((album) => (
            <li key={album.id}>{album.title}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Albums;