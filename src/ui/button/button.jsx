import React from 'react';
import classNames from 'classnames';

import './button.css';

const Button = props => {
  const { className, children, onClick } = props;

  return (
    <div className={classNames('button', 'text-dark', className)} onClick={onClick}>
      { children}
    </div >
  );
};

export { Button };
