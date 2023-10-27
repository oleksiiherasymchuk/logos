import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import Albums from "./Components/Albums";
import Comments from "./Components/Comments";

import { Route, Routes } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/todos" element={<Todos />} exact />
          <Route path="/albums" element={<Albums />} exact />
          <Route path="/comments" element={<Comments />} exact />
          {/* <Route path="/comments/:commentId?" element={<Comment />} exact /> */}
        </Routes>
      </div>
    );
  }
}

export default App;
