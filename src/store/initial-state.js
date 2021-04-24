import { generateMatrix, generateSequences } from '../core/puzzle-generators';

const width = 6;
const height = 6;

const initialState = {
  puzzle: {
    matrix: generateMatrix(width, height),
    width,
    height,
    sequences: generateSequences([2, 3, 4]),
    inputRowOrColumn: { type: 'row', index: 0 },
  },
  buffer: {
    size: 5,
    filledCells: [], // Cell IDs
  },
};

export { initialState };
