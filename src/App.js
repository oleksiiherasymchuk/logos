import "./App.css";
import { createContext, useEffect, useState } from "react";
import User from "./drill/User";
import UsersComponent from "./lifting/UsersComponent";
import Child1 from "./context/Child1";
import Child2 from "./context/Child2";

// property drill
// const App = () => {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);
//   return <div className="App">
//     {
//       users.map((u) => {
//         console.log(u);
//         return (
//           <User user={u} />
//         )
//       })
//     }
//   </div>;
// }

// state lifting
// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [userPosts, setUserPosts] = useState([]);

//   const [selectedUserId, setSelectedUserId] = useState(null);

//   const handleShowPosts = (userId) => {
//     console.log(userId);
//     setSelectedUserId(userId);
//     fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//       .then((response) => response.json())
//       .then((data) => setUserPosts(data))
//       .catch((error) => console.error("Error fetching user posts:", error));
//   };

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div style={{ display: 'flex' }}>
//       <UsersComponent users={users} onShowPosts={handleShowPosts} />

//       {selectedUserId !== null && (
//         <div>
//           <h2>Posts for selected user:</h2>
//           <ul>
//             {userPosts.map((post) => (
//               <li key={post.id}>{post.title}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// Context
export const AppContext = createContext(null);
const App = () => {
  
  const [subChildText, setSubChildText] = useState('')

  return (
    <div className="App">
      <AppContext.Provider value={{subChildText, setSubChildText}}>
        <Child1 />
        <Child2 />
      </AppContext.Provider>
    </div>
  );
};

export default App;
