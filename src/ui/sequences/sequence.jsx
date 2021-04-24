import classNames from 'classnames';
import React from 'react';
import { BoardCell } from '../board/board-cell';

import './sequence.css';

const Sequence = props => {
  const { sequence, filledLength } = props;

  return (
    <div className="sequence">
      {
        sequence.map((value, i) => (
          <BoardCell
            key={`sequence-cell-${i}`}
            className={classNames({ filled: i < filledLength })}
            value={value}
          />
        ))
      }
    </div>
  )
};

export { Sequence };
