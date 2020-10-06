// In addition to Employee's properties and methods, Manager will also have:
// officeNumber
// getRole() // Overridden to return 'Manager'

// require Employee class
const Employee = require('./Employee');

// create manager class
class Manager extends Employee {
    // create constructor that recieves a name, id, email, and office number
    constructor(name, id, email, officeNumber){
        // call super for Employee class
        super(name, id, email);
        // add office number attribute
        this.officeNumber = officeNumber;
    }
    // update getRole method to return manager
    getRole() {
        return "Manager";
    }
    // create getOfficeNum method to return the office number
    getOfficeNum() {
        return this.officeNumber;
    }
}

// export Manager class
module.exports = Manager;