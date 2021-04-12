/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let encodedStr = '';
  let cur = 0;
  for (let i = 0; i < arr.length; i++) {
    cur = i;
    while (arr[i] === arr[cur]) {
      cur++;
    }
    if (cur - i !== 1) {
      encodedStr += cur - i;
    }
    encodedStr += arr[i];
    i = cur - 1;
  }
  return encodedStr;
}

module.exports = encodeLine;
