import "./App.css";
import React from "react";
import Todos from "./Components/Todos";
import Comments from "./Components/Comments";
import Albums from "./Components/Albums";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./Components/Header";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/todos",
        element: <Todos />,
      },
      {
        path: "/comments",
        element: <Comments />,
      },
      {
        path: "/albums",
        element: <Albums />,
      },
    ]
  },

]);

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
