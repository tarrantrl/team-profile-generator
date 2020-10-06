const { test, expect } = require('@jest/globals');
// require Engineer class
const Engineer = require('../lib/Engineer');

// test creation of Engineer object
test('creates an engineer object',() => {
    // create an engineer object instance
    const engineer = new Engineer('Jan', 'jn1', 'jan@work.com', 'jandev');
    // check that the name, id, email, and github fields are correctly created
    expect(engineer.name).toBe('Jan');
    expect(engineer.id).toBe('jn1');
    expect(engineer.email).toBe('jan@work.com');
    expect(engineer.github).toBe('jandev');
})

// test getGithub method
test('checks the github for the engineer', () => {
    // create an engineer object instance
    const engineer = new Engineer('Jan', 'jn1', 'jan@work.com', 'jandev');
    // check that getGithub returns jandev
    expect(engineer.getGithub()).toBe('jandev');
})

// test getRole method
test('checks role of engineer', () => {
    // create an engineer object instance
    const engineer = new Engineer('Jan', 'jn1', 'jan@work.com', 'jandev');
    // check that getRole returns Engineer
    expect(engineer.getRole()).toBe('Engineer');
})