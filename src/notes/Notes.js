import React from "react";
import { Component } from "react";
import folders from "../store";
import "./notes.css";

class Notes extends Component {
  render() {
    console.log(folders.folders);
    return (
      <div className="notes">
        {folders.notes.map(items => (
          <div key={items.id} className="note">
            <h2>{items.name}</h2>
            <p>{items.content}</p>
            <button className="deleteButton">Delete Note</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Notes;
