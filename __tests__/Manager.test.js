const { expect, test } = require('@jest/globals');
// require Manager class
const Manager = require('../lib/Manager');

// test the creation of a manager object
test('creates a manager object',() => {
    // create a manager object instance
    const manager = new Manager('Jan', 'jn1', 'jan@work.com', 'PAR 3');
    // check that the name, id, email, and office number fields are correctly created
    expect(manager.name).toBe('Jan');
    expect(manager.id).toBe('jn1');
    expect(manager.email).toBe('jan@work.com');
    expect(manager.officeNumber).toBe('PAR 3');
})

// test the getRole function
test('checks the role of the manager', () => {
    // create a manager object instance
    const manager = new Manager('Jan', 'jn1', 'jan@work.com', 'PAR 3');
    // check that getRole returns manager
    expect(manager.getRole()).toBe('Manager');
})

// test getOfficeNum function
test('checks the office number of the manager', () => {
    // create a manager object instance
    const manager = new Manager('Jan', 'jn1', 'jan@work.com', 'PAR 3');
    // check that getOfficeNum returns PAR 3
    expect(manager.getOfficeNum()).toBe('PAR 3');
})