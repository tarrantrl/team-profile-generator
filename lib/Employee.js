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

}

// export the Employee class
module.exports = Employee