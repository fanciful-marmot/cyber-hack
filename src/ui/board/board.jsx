import React from 'react';
import { BoardCell } from './board-cell';

import './board.css';

const Board = (props) => {
  const { matrix, width, height } = props;

  const matrixStyle = {
    gridTemplateRows: '1fr '.repeat(height),
    gridTemplateColumns: '1fr '.repeat(width),
  };

  return (
    <div className="board">
      <div className="board-header">
        CODE MATRIX
      </div>
      <div className="cell-matrix" style={matrixStyle}>
        {
          matrix.map((value, i) => (
            <BoardCell key={`cell-${i}`} value={value} />
          ))
        }
      </div>
    </div>
  )
};

export { Board };
