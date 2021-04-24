import React from 'react';

import { Sequence } from './sequence';

import './sequences.css';

// Return the number of positions in the sequence that have been filled
// while it's still possible to complete the sequence.
// For example, the sequence 1C 55 BD in the fill 7A 1C 55 would return 2 and
// the sequence 1C 55 BD in the fill 7A 1C 55 1C would return 1
const getFilledlength = (sequence, filledCells, matrix) => {
  const fillString = filledCells
    .map(cellId => matrix[cellId])
    .join('');

  const sequenceString = sequence.join('');

  // Is the sequence finished?
  if (fillString.includes(sequenceString)) {
    return sequence.length;
  }

  // At best, some subset of the sequence is at the end fo the fill
  for (let i = sequence.length - 1; i > 0; i--) {
    if (fillString.endsWith(sequenceString.substr(0, i * 2))) {
      return i;
    }
  }

  return 0;
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
