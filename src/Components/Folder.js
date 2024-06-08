import { useState } from "react";

const Folder = ({ handleInsertNode, explorer }) => {
  const [expand, setexpand] = useState(false);
  const [ShowInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setexpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode == 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, ShowInput.isFolder);
      setShowInput({ ...ShowInput, visible: false });
    }
  };
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setexpand(!expand)}>
          <span> 📁{explorer.name} </span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder ➕</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File ➕</button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {ShowInput.visible && (
            <div className="inputContainer">
              <span> {ShowInput.isFolder ? "📁" : "📃"} </span>
              <input
                type="text"
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...ShowInput, visible: false })}
                className="inputContainer__input"
                autoFocus
              />
            </div>
          )}

          {explorer.items.map((exp) => {
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                explorer={exp}
                key={exp.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file"> 📃 {explorer.name} </span>;
  }
};

export default Folder;
