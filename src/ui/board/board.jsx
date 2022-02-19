import classNames from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cellSelectAction } from '../../store/actions';
import { getRowAndColumn } from '../../utils/utils';
import { BoardCell } from './board-cell';

import './board.css';

const Board = (props) => {
  const { puzzle } = props;
  const { matrix, width, height, inputRowOrColumn } = puzzle;

  const isGameOver = useSelector(state => state.buffer.size === state.buffer.filledCells.length)
  const matrixStyle = {
    gridTemplateRows: '1fr '.repeat(height),
    gridTemplateColumns: '1fr '.repeat(width),
    pointerEvents: isGameOver ? 'none' : 'initial',
  };

  const [hoverCell, setHoverCell] = useState(null);

  const filledCells = useSelector(state => state.buffer.filledCells);
  const dispatch = useDispatch();

  const isInputCell = useCallback(i => {
    if (isGameOver) {
      return false;
    }

    const { type, index } = inputRowOrColumn;
    const { row, column } = getRowAndColumn(i, width);
    switch (type) {
      case 'row': {
        return row === index;
      }

      case 'column': {
        return column === index;
      }

      default:
        throw new Error(`Unknown input row/column type ${type}`);
    }
  }, [inputRowOrColumn, width, isGameOver]);

  return (
    <div className="board">
      <div className="board-header text-dark">
        CODE MATRIX
      </div>
      <div className="cell-matrix" style={matrixStyle}>
        {
          matrix.map((value, i) => {
            const isInput = isInputCell(i);
            const { row, column } = getRowAndColumn(i, width);
            const { row: hoverRow, column: hoverColumn } = getRowAndColumn(hoverCell, width);

            return (
              <BoardCell
                key={`cell-${i}`}
                value={value}
                className={classNames({
                  'hover-column-or-row': hoverCell != null && (hoverRow === row || hoverColumn === column),
                  hover: i === hoverCell,
                  'input-cell': isInput,
                  selected: filledCells.includes(i),
                })}
                onClick={() => {
                  if (isInput) {
                    dispatch(cellSelectAction(i));
                  }
                }}
                onMouseEnter={() => setHoverCell(isInput ? i : null)}
                onMouseLeave={() => setHoverCell(null)}
              />
            );
          })
        }
      </div>
    </div>
  )
};

export { Board };
