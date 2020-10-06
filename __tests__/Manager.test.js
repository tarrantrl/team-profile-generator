const { expect } = require('@jest/globals');
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