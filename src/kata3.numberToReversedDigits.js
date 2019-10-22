const numberToReversedDigits = number => {
  const num = number.toString().split(['']).reverse();
  return num.map(e => parseInt(e, 10)); 
 };


module.exports = numberToReversedDigits;
