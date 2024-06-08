const useTraverse = () => {
  const insertNode = (tree, folderId, item, isFolder) => {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }
    let node = [];
    node = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });
    return { ...tree, items: node };
  };

  return { insertNode };
};

export default useTraverse;
