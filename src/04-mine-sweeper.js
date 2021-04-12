/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resultMatrix = matrix.slice().map((row) => row.map(() => 0));
  for (let row = 0; row < resultMatrix.length; row++) {
    for (let col = 0; col < resultMatrix[row].length; col++) {
      for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
          if (!(i === row && j === col) && matrix[i] && matrix[i][j]) {
            resultMatrix[row][col]++;
          }
        }
      }
    }
  }
  return resultMatrix;
}

module.exports = minesweeper;
