const { humanCatDogYears } = require("../src");

 describe('humanCatDogYears', () =>{
     test('returns the human age as well as cat and dog equivalent age', () => {
         expect(humanCatDogYears(1)).toEqual([1, 15, 15])
         expect(humanCatDogYears(20)).toStrictEqual([20, 96, 114])
         expect(humanCatDogYears(5)).toStrictEqual([5, 36, 39])
     });
 });
// Look Ma, no handlebars!!!
