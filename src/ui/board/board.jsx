import classNames from 'classnames';
import React, { useState } from 'react';
import { BoardCell } from './board-cell';

import './board.css';

const Board = (props) => {
  const { matrix, width, height } = props;

  const matrixStyle = {
    gridTemplateRows: '1fr '.repeat(height),
    gridTemplateColumns: '1fr '.repeat(width),
  };

  const [selectedCell, setSelectedCell] = useState(null);

  return (
    <div className="board">
      <div className="board-header">
        CODE MATRIX
      </div>
      <div className="cell-matrix" style={matrixStyle}>
        {
          matrix.map((value, i) => (
            <BoardCell
              key={`cell-${i}`}
              value={value}
              className={classNames({
                'hover-row': selectedCell != null && i % height === selectedCell % height,
                'hover-column': selectedCell != null && Math.floor(i / width) === Math.floor(selectedCell / width),
                hover: i === selectedCell,
              })}
              onMouseEnter={() => setSelectedCell(i)}
              onMouseLeave={() => setSelectedCell(null)}
            />
          ))
        }
      </div>
    </div>
  )
};

export { Board };
