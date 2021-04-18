import produce from 'immer';

import { initialState } from './initial-state';
import { getRowAndColumn } from '../utils/utils';

const rootReducer = produce((draft, action) => {
  switch (action.type) {
    case 'puzzle/new':
      draft.puzzle = action.puzzle;
      draft.buffer.filledCells = [];
      break;

    case 'cell/select':
      const { filledCells, size } = draft.buffer;
      const { cellId } = action;
      if (filledCells.length < size && !filledCells.includes(cellId)) {
        const { inputRowOrColumn, width } = draft.puzzle;
        const { row, column } = getRowAndColumn(cellId, width);
        inputRowOrColumn.type = inputRowOrColumn.type === 'row' ? 'column' : 'row';
        inputRowOrColumn.index = inputRowOrColumn.type === 'row' ? row : column;
        filledCells.push(cellId);
      }
      break;

    default:
      console.warn(`Unhandled action of type ${action.type}`);
      break;
  }
}, initialState);

export { rootReducer };
