import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Comments from "./Components/Comments";
import {Outlet, createBrowserRouter } from "react-router-dom";
import Posts from "./Components/Posts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/comments",
        element: <Comments />,
      },
    ]
  },
 
]);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Outlet />
      </div>
    );
  }
}

export default App;
