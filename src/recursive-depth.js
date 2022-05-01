const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * 
 * 
 *
 */

class DepthCalculator {
  calculateDepth(arr) {
  
   if (!Array.isArray(arr)){return 0;}

let depth = 0;
for (let item of arr)
   depth = Math.max(depth, this.calculateDepth(item));
   console.log(1+depth);
  return 1 + depth;
  
  throw new NotImplementedError('Not implemented');
}
  
}

module.exports = {
  DepthCalculator
};
