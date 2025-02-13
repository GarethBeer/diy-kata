const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toStrictEqual([5,4,3,2,1]);
    expect(numberToReversedDigits(34567)).toStrictEqual([7,6,5,4,3]);
    expect(numberToReversedDigits(98765)).toStrictEqual([5,6,7,8,9]);
  });
});
