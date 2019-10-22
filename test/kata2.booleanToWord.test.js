const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns a string when true", () => {
    expect(booleanToWord(true)).toBe("Yes");
    expect(booleanToWord(false)).toBe("No");
    expect(booleanToWord(true)).toBe("Yes");
  });
});
