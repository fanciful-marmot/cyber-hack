import React from 'react';

import { Sequence } from './sequence';

import './sequences.css';

const getFilledlength = (sequence, filledCells, matrix) => {
  let count = 0;
  let maxCount = 0;

  for (let fillId of filledCells) {
    const fillValue = matrix[fillId];
    const sequenceValue = sequence[count];

    if (fillValue === sequenceValue) {
      count += 1;
    } else {
      maxCount = Math.max(count, maxCount);
      count = 0;
    }
  }

  return Math.max(count, maxCount);
};

const Sequences = props => {
  const { matrix, sequences, filledCells } = props;

  return (
    <div className="sequences">
      <div className="sequences-header">SEQUENCES</div>
      {
        sequences.map((sequence, i) => {
          const filledLength = getFilledlength(sequence, filledCells, matrix);
          return <Sequence key={`sequence-${i}`} sequence={sequence} filledLength={filledLength} />
        })
      }
    </div>
  )
};

export { Sequences };
