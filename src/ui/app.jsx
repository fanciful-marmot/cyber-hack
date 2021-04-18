import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Board } from './board/board';
import { Button } from './button/button';
import { Buffer } from './buffer/buffer';
import { newPuzzleAction } from '../store/actions';

import './app.css';
import { Sequences } from './sequences/sequences';

const App = () => {
  const puzzle = useSelector(state => state.puzzle);
  const { width, height, sequences } = puzzle;
  const dispatch = useDispatch();


  return (
    <div className="app">
      <div className="puzzle-container">
        <Board puzzle={puzzle} />
      </div>
      <div className="info-container">
        <Buffer />
        <Sequences sequences={sequences} />
        <Button onClick={() => dispatch(newPuzzleAction(width, height))}>NEW</Button>
      </div>
    </div>
  );
};

export { App };
