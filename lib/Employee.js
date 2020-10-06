// The first class is an Employee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

// create the employee class
class Employee {
    // constructor function taking a name, id, and email
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // create getName method to return the employee name
    getName() {
        return this.name;
    }
    // create getId method to return employee id
    getId() {
        return this.id;
    }
    // create getEmail method to return employee email
    getEmail() {
        return this.email;
    }
    // create getRole method to return employee role
    getRole() {
        return 'Employee';
    }
}

// export the Employee class
module.exports = Employee