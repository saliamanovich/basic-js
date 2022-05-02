const { NotImplementedError } = require('../extensions/index.js');

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
  
  let mas = n.toString().split('');
  let newMas = [];
  let sum;
  let result;

  for (let i=0; i<mas.length; i++){
    sum=mas.splice(i,1).toString();  
    result = mas.join('');
    newMas.push(result);
    mas.splice(i, 0, sum);
  
  }
  
 
  return Math.max.apply(null, newMas);
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


module.exports = {
  deleteDigit
};
