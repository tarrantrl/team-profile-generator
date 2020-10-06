const { test, expect } = require('@jest/globals');
// require the Employee class
const Employee = require('../lib/Employee');

// test the creation of an employee object
test('creates an employee object',() => {
    // create an employee object instance
    const employee = new Employee('Jan', 'jn1', 'jan@work.com');
    // check that the name, id, and email fields are correctly created
    expect(employee.name).toBe('Jan');
    expect(employee.id).toBe('jn1');
    expect(employee.email).toBe('jan@work.com');
})