import { useState } from "react";
import "./styles.css";
import explorer from "./data/folderData";
import Folder from "./Components/Folder";
import useTraverse from "./Hooks/useTraverse";

export default function App() {
  const [explorerData, setexplorerData] = useState(explorer);
  const { insertNode } = useTraverse();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setexplorerData(finalTree);
  };

  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}
