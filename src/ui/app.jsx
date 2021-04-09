import React from 'react';

import './app.css';
import { Board } from './board/board';

const matrix = [
  'BD', '1C', 'BD', 'BD', 'BD', '1C',
  '1C', '55', '55', '55', 'E9', '1C',
  'E9', '1C', 'BD', 'E9', 'BD', 'E9',
  'BD', '55', '1C', 'E9', '1C', '1C',
  '55', '1C', '55', '1C', 'BD', '7A',
  '55', 'BD', '7A', 'E9', '55', '1C',
];

const width = 6;
const height = 6;

const App = () => {
  return (
    <div className="app">
      <Board matrix={matrix} width={width} height={height} />
    </div>
  );
};

export { App };
