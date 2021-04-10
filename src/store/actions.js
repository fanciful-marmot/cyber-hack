import { generateMatrix } from "../core/generateMatrix";

const newPuzzleAction = (width, height) => ({
  type: 'puzzle/new',
  puzzle: {
    matrix: generateMatrix(width, height),
    width,
    height,
  },
});

const cellSelectAction = cellId => ({
  type: 'cell/select',
  cellId,
});

export {
  newPuzzleAction,
  cellSelectAction,
};
