import React from 'react';
import classNames from 'classnames';

import './board-cell.css';

const BoardCell = props => {
  const { className, value, onClick, onMouseEnter, onMouseLeave } = props;

  return (
    <div
      className={classNames('board-cell', className)}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {value}
    </div>
  )
};

export { BoardCell };
