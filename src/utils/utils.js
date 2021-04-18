const getRowAndColumn = (i, boardWidth) => (
  { row: Math.floor(i / boardWidth), column: i % boardWidth }
);

export {
  getRowAndColumn,
};
