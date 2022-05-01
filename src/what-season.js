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
  /*console.log(date);
  console.log(date.toString());
  console.log(Date.parse(date));
  /*console.log(date.toISOString());*/
  /*console.log(date && date.getMonth && date.getMonth.call);
  console.log(Object.prototype.toString.call(date)==='[object Date]');
  console.log(typeof(date));
  console.log(date instanceof Date);
  console.log(date.getSeconds());*/
  if (arguments.length===0){
    console.log('null');
    return 'Unable to determine the time of year!';
  }
  if (isNaN(Date.parse(date))){
    console.log('invalid date!') 
    return "Invalid date!";
  }
  
  else if (Object.prototype.toString.call(date) !== '[object Date]'){
    console.log(Object.prototype.toString.call(date) === '[object Date]');
    return "Invalid date!";
  }
  else if (!date instanceof Date){
    return "Invalid date!";
  }

  /*else if (!date.getSeconds()){
    return 'Invalid date!';
  }*/
  /*else if (typeof(date)!==Date){
    return 'Invalid date!';
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
      return "Invalid date!";
  }
  }
 
  throw new NotImplementedError('Not implemented');
  
  
}
getSeason('foo'),
getSeason({ John: 'Smith' }),
getSeason(20192701),
getSeason([2019, '27', 0 + '1']),
getSeason(() => new Date())

module.exports = {
  getSeason
};
