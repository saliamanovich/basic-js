const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let mas = [];
  console.log(matrix.flat().filter(function(number){
    return number==='^^';
  }));
  mas = matrix.flat().filter(function(number){
    return number==='^^';
  });
  console.log(mas.length);
  return mas.length;
  throw new NotImplementedError('Not implemented');

  // remove line with error and write your code here
}

module.exports = {
  countCats
};
