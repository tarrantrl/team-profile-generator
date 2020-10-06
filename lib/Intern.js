// In addition to Employee's properties and methods, Intern will also have:
// school
// getSchool()
// getRole() // Overridden to return 'Intern'

// require Employee
const Employee = require('./Employee');

// create Intern class
class Intern extends Employee {
    // create constructor that recieves a name, id, email, and school
    constructor(name, id, email, school){
        // call super for Employee class
        super(name, id, email);
        // add school attribute
        this.school = school;
    }
    // create getSchool method which returns school
    getSchool() {
        return this.school;
    }
    // overwrite getRole method to return intern
    getRole() {
        return 'Intern';
    }
}

// export Intern
module.exports = Intern;