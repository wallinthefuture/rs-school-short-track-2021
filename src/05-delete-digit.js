/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  let max = 0;
  let copyArr = [];
  let curNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    copyArr = [...arr];
    copyArr.splice(i, 1);
    curNumber = parseInt(copyArr.join(''), 10);
    if (curNumber > max) max = curNumber;
  }
  return max;
}

module.exports = deleteDigit;
