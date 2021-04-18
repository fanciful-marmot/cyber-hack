import { generateMatrix, generateSequences } from '../core/puzzle-generators';

const newPuzzleAction = (width, height) => ({
  type: 'puzzle/new',
  puzzle: {
    matrix: generateMatrix(width, height),
    width,
    height,
    sequences: generateSequences([2, 3, 4]),
    inputRowOrColumn: { type: 'row', index: 0 },
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
