const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (Array.isArray(arr)){
    
    
    let newMass = [];
  for (let i=0; i<arr.length; i++){
switch(arr[i]){
      case '--double-next':
      newMass.push(arr[i+1]);
      break;
      
      case '--double-prev':
      newMass.push(arr[i-1]);
      break;

      case '--discard-prev':
      newMass.pop(arr[i-1]);
      break;

      case '--discard-next':
      i = i+2;
      break;

      default:
      newMass.push(arr[i]);
        
  }
  
  } 
  let stack = [];
  for (value of newMass){
    if (typeof(value)==='undefined'){
      
    }
    else {
      stack.push(value);
    }
  }
 return stack;
  }
  
  else {
    throw new Error ("\'arr\' parameter must be an instance of the Array!");
  
  }
    
      
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
