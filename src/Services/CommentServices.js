import axios from "axios"

export const PostsService = {
  postComment: async (data) => {
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/comments", data)
      if (response.status === 201) {
        console.log("Comment created successfully.");
      } else {
        console.error("Error creating comment. Please try again.");
      }
    } catch(e){
      console.log(e);
    }
  },
  getPostById: async (postId) => {
    try{
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      return response.data
    } catch (e) {
      console.log(e);
    }
  },
  getComments: async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/comments")
      if (response.status === 200) {
        console.log("Comment got successfully.");
        console.log(response.data);
        return response.data
      } else {
        console.error("Error getting comment. Please try again.");
      }
    } catch(e){
      console.log(e);
    }
  },
  getAlbums: async () => {
    try{
      const response = await axios.get("https://jsonplaceholder.typicode.com/albums")
      return response.data
    } catch (e) {
      console.log(e);
    }
  },
  getTodos: async () => {
    try{
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
      return response.data
    } catch (e) {
      console.log(e);
    }
  },
}