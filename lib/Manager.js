// In addition to Employee's properties and methods, Manager will also have:
// officeNumber
// getRole() // Overridden to return 'Manager'

// require Employee class
const Employee = require('./Employee');

// create manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
}

// export Manager class
module.exports = Manager;