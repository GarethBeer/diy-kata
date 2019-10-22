const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    const namesObj = [{

      name: 'Bart'
    
    }, {
    
      name: 'Lisa'
    
    }, {
    
      name: 'Maggie'
    
    }]
    expect(joinNames(namesObj)).toBe('Bart, Lisa & Maggie')
  });
    test("returns string of names, seperated by commas and an ampersand", () => {
      const namesObj = [{
  
        name: 'David'
      
      }, {
      
        name: 'Mark'
      
      }, {
      
        name: 'Luke'
      
      }, {
        name: 'John'
      }, {
        name: 'Thomas'
      }, {
        name: 'Matthew'
      }]
      expect(joinNames(namesObj)).toBe('David, Mark, Luke, John, Thomas & Matthew')
  
  
})
test("returns string of names, seperated by commas and an ampersand", () => {
  const namesObj = [{

    name: 'Clive',
    age:54
  
  }, {
  
    name: 'Clark',
    age:29
  
  }, {
  
    name: 'Maggie',
    age:70
  
  }, {
    name: 'Griffin',
    age: 26
  }]
  expect(joinNames(namesObj)).toBe('Clive, Clark, Maggie & Griffin')
});
});
