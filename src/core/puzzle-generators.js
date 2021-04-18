// Symbols to appear in the matrix
// Repeat occurences are to alter frequencies
const symbols = [
  '1C', '1C', '1C',
  '55', '55', '55',
  'BD', 'BD',
  'E9', 'E9',
  '7A',
];

const getRandomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];

const generateMatrix = (width, height) => {
  const matrix = new Array(width * height)
    .fill(0)
    .map(() => (
      getRandomSymbol()
    ));

  return matrix;
};

// Takes Array<number> of the length of each sequence to generate
const generateSequences = lengths => {
  return lengths
    .map(l => (
      new Array(l)
        .fill(0)
        .map(() => getRandomSymbol())
    ));
};

export {
  generateMatrix,
  generateSequences,
};
