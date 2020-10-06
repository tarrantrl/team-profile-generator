// require Intern class
const Intern = require('../lib/Intern');

// test creation of Intern object
test('creates an intern object',() => {
    // create an intern object instance
    const intern = new Intern('Jan', 'jn1', 'jan@work.com', 'UT Austin');
    // check that the name, id, email, and school fields are correctly created
    expect(intern.name).toBe('Jan');
    expect(intern.id).toBe('jn1');
    expect(intern.email).toBe('jan@work.com');
    expect(intern.school).toBe('UT Austin');
})

// test getSchool method
test('checks role of intern', () => {
    // create an intern object instance
    const intern = new Intern('Jan', 'jn1', 'jan@work.com', 'UT Austin');
    // check that getSchool returns UT Austin
    expect(intern.getSchool()).toBe('UT Austin');
})

// test getRole method
test('checks role of intern', () => {
    // create an intern object instance
    const intern = new Intern('Jan', 'jn1', 'jan@work.com', 'UT Austin');
    // check that getRole returns Intern
    expect(intern.getRole()).toBe('Intern');
})