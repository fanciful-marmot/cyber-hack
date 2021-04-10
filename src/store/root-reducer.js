import produce from 'immer';

import { initialState } from './initial-state';

const rootReducer = produce((draft, action) => {
  switch (action.type) {
    case 'puzzle/new':
      draft.puzzle = action.puzzle;
      draft.buffer.filledCells = [];
      break;

    default:
      console.warn(`Unhandled action of type ${action.type}`);
      break;
  }
}, initialState);

export { rootReducer };
