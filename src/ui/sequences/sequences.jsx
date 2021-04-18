import React from 'react';

import { Sequence } from './sequence';

import './sequences.css';

const Sequences = props => {
  const { sequences } = props;

  return (
    <div className="sequences">
      <div className="sequences-header">SEQUENCES</div>
      {
        sequences.map((sequence, i) => (
          <Sequence key={`sequence-${i}`} sequence={sequence} />
        ))
      }
    </div>
  )
};

export { Sequences };
