import React from "react";
import { Route } from "react-router-dom";
import Notes from "./notes/Notes";
import Folders from "./folders/Folders";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header} />
      <Route path="/notes" component={Notes} />
      <Route path="/folders" component={Folders} />
    </div>
  );
}

export default App;
