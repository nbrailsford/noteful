import React from "react";
import "./folders.css";
import folders from "../store";

class Folders extends React.Component {
  constructor(props) {
    super(props);
    this.state = { folders: folders.folders, notes: folders.notes };
  }
  onFolderSelect() {}
  render() {
    console.log(this.state.folders);
    return (
      <div className="folders">
        {this.state.folders.map(folder => (
          <h2 key={folder.id} onClick={this.onFolderSelect} className="folder">
            {folder.name}
          </h2>
        ))}
      </div>
    );
  }
}

export default Folders;
