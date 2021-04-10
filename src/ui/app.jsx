import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Board } from './board/board';
import { Button } from './button/button';
import { Buffer } from './buffer/buffer';
import { newPuzzleAction } from '../store/actions';

import './app.css';

const App = () => {
  const { matrix, width, height } = useSelector(state => state.puzzle);
  const dispatch = useDispatch();


  return (
    <div className="app">
      <div className="puzzle-container">
        <Board matrix={matrix} width={width} height={height} />
      </div>
      <div className="info-container">
        <Buffer />
        <Button onClick={() => dispatch(newPuzzleAction(width, height))}>NEW</Button>
      </div>
    </div>
  );
};

export { App };
