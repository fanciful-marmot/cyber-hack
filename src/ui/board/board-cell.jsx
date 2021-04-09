import React from 'react';
import classnames from 'classnames';

import './board-cell.css';

const BoardCell = props => {
  const { value, highlight } = props;

  return (
    <div className={classnames('board-cell', { highlight })}>
      {value}
    </div>
  )
};

export { BoardCell };
