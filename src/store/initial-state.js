import { generateMatrix } from "../core/generateMatrix";

const width = 6;
const height = 6;

const initialState = {
  puzzle: {
    matrix: generateMatrix(width, height),
    width,
    height,
  },
  buffer: {
    size: 4,
    filledCells: [], // Cell IDs
  },
};

export { initialState };
