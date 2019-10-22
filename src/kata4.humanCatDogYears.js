const humanCatDogYears = number => {
    if (number === 1){
      return [1,15,15];
    } if (number === 2){
      return [2,24,24];
    } else {
   const humanyrs = number;
   const catyrs = ((number - 2) * 4) + 24;
   const dogyrs = ((number - 2) * 5) + 24;
  return [humanyrs,catyrs,dogyrs];
    }
  };
module.exports = humanCatDogYears;


