import React from 'react';
import { BoardCell } from '../board/board-cell';

import './sequence.css';

const Sequence = props => {
  const { sequence } = props;

  return (
    <div className="sequence">
      {
        sequence.map((value, i) => (
          <BoardCell key={`sequence-cell-${i}`} value={value} />
        ))
      }
    </div>
  )
};

export { Sequence };
