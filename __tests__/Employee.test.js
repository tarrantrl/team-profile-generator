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

// test getName function
test('gets the name of the employee', () => {
    // create an employee object instance
    const employee = new Employee('Jan', 'jn1', 'jan@work.com');
    // test getName
    expect(employee.getName()).toBe('Jan');
})

// test getId function
test('gets the id of the employee', () => {
    // create an employee object instance
    const employee = new Employee('Jan', 'jn1', 'jan@work.com');
    // test getId
    expect(employee.getId()).toBe('jn1');
    // expect(employee.getId()).toEqual(expect(stringContaining(employee.id)));
})

// test getEmail function
test('gets the email of the employee', () => {
    // create an employee object instance
    const employee = new Employee('Jan', 'jn1', 'jan@work.com');
    // test getEmail
    expect(employee.getEmail()).toBe('jan@work.com');
})

// test getRole function
test('gets the role of the employee', () => {
    // create an employee object instance
    const employee = new Employee('Jan', 'jn1', 'jan@work.com');
    // test getRole
    expect(employee.getRole()).toBe('Employee');
})