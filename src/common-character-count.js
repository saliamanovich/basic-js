const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  
  let s1New = s1.split('');
  let s2New = s2.split('');
  let sum = 0
  
   for (let i=0; i<s1New.length; i++){
    if (s2New.includes(s1New[i])){
      let ind = s2New.indexOf(s1New[i]);
      s2New.splice(ind,1);
      sum=sum+1;
     
    }
   
  }
  
  

return sum;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
