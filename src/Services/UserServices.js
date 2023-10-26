import axios from "axios"

export const UserService = {
  createUser: async (user) => {
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/users", user)
      if (response.status === 204 || response.status === 201) {
        console.log("User created successfully.");
      } else {
        console.error("Error creating user. Please try again.");
      }
    } catch(e){
      console.log(e);
    }
  } 
}