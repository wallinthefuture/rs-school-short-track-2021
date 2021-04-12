/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const resultObj = {};
  domains.forEach((domain) => {
    const arr = domain.split('.').reverse();
    let str = '';
    for (let i = 0; i < arr.length; i++) {
      str += `.${arr[i]}`;
      if (str in resultObj) {
        resultObj[str] += 1;
      } else {
        resultObj[str] = 1;
      }
    }
  });
  return resultObj;
}

module.exports = getDNSStats;
