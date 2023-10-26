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
  } 
}