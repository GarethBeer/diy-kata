const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {

  test('returns a string', () => {
    const result = getEmployerRole();
    expect((typeof result)).toBe('string')
  })

  test("returns the employee's role in the company", () => {
    const employees = [{

      name: 'Satti',
    
      role: 'Developer'
    
    }, {
    
      name: 'Jenny',
    
      role: 'Sales Associate'
    
    }, {
    
      name: 'Javid',
    
      role: 'Human Recommended Reading Assistant'
    
    }]
    expect(getEmployerRole('Javid', employees)).toBe('Human Recommended Reading Assistant')
  });

  test("returns the employee's role in the company", () => {
    const employees = [{

      name: 'Gareth',
    
      role: 'Developer'
    
    }, {
    
      name: 'Sammy',
    
      role: 'Sales Associate'
    
    }, {
    
      name: 'Jessica',
    
      role: 'Human Recommended Reading Assistant'
    
    }]
    expect(getEmployerRole('Gareth', employees)).toBe('Developer')
  });

  test("returns the employee's role in the company", () => {
    const employees = [{

      name: 'Thomas',
    
      role: 'Developer'
    
    }, {
    
      name: 'Alex',
    
      role: 'Sales Associate'
    
    }, {
    
      name: 'Simon',
    
      role: 'Human Recommended Reading Assistant'
    
    }]
    expect(getEmployerRole('Alex', employees)).toBe('Sales Associate')
  });
  test("returns the employee's role in the company", () => {
    const employees = [{

      name: 'Thomas',
    
      role: 'Developer'
    
    }, {
    
      name: 'Alex',
    
      role: 'Sales Associate'
    
    }, {
    
      name: 'Simon',
    
      role: 'Human Recommended Reading Assistant'
    
    }]
    expect(getEmployerRole('Dave', employees)).toBe('Does not work here')
  });
});
