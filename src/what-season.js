const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  
  if (arguments.length===0){
    console.log('null');
    return 'Unable to determine the time of year!';
  }
  /*if (isNaN(Date.parse(date))){
    console.log('invalid date!') 
    throw new Error("Invalid date!");
  }
  
  else if (Object.prototype.toString.call(date) !== '[object Date]'){
    console.log(Object.prototype.toString.call(date) === '[object Date]');
    throw new Error("Invalid date!") ;
  }
  else if (!date instanceof Date){
    throw new Error("Invalid date!");
  }

  else {*/
  
    if (isNaN(Date.parse(date))){
      console.log('invalid date!') 
      throw new Error("Invalid date!");
    }
   
    
    /*else if (Object.prototype.toString.call(date) !== '[object Date]'){
      console.log(Object.prototype.toString.call(date) === '[object Date]');
      throw new Error("Invalid date!") ;
    }*/
    /*else if (!date instanceof Date){
      throw new Error("Invalid date!");
    }*/
    else {
      let month = date.getMonth();
  switch (month){
    case 0:
    case 1:
    case 11:
      console.log('winter');
      return 'winter';
      break;
    case 2:
    case 3:
    case 4:
      console.log('spring');
      return 'spring';
      break;
    case 5:
    case 6:
    case 7:
      console.log('summer');
      return 'summer';
      break;
    case 8:
    case 9:
    case 10:
      console.log('autumn (fall)');
      return 'autumn (fall)';
      break;
    default:
      console.log('Unable to determine the time of year');
      throw new Error("Invalid date!");
  }
    }
   
  //}
  
  
  
 
  throw new NotImplementedError('Not implemented');
  }
  
//}

module.exports = {
  getSeason
};
