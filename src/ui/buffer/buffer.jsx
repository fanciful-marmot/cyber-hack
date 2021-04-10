import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';

import './buffer.css';

const Buffer = () => {
  const { size, filledCells } = useSelector(state => state.buffer);
  const { matrix } = useSelector(state => state.puzzle);

  return (
    <div className="buffer">
      {
        (new Array(size).fill(0))
          .map((_, i) => {
            const cellId = filledCells[i];

            return (
              <div
                key={i}
                className={classNames('buffer-cell', { unfilled: cellId == null })}
              >
                {
                  cellId != null ? matrix[cellId] : '-'
                }
              </div>
            );
          })
      }
    </div>
  )
};

export { Buffer };
