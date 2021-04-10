// Symbols to appear in the matrix
// Repeat occurences are to alter frequencies
const symbols = [
  '1C', '1C', '1C',
  '55', '55', '55',
  'BD', 'BD',
  'E9', 'E9',
  '7A',
];

const generateMatrix = (width, height) => {
  const matrix = new Array(width * height)
    .fill(0)
    .map(() => (
      symbols[Math.floor(Math.random() * symbols.length)]
    ));

  return matrix;
};

export { generateMatrix };
