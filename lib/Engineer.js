// In addition to Employee's properties and methods, Engineer will also have:
// github // GitHub username
// getGithub()
// getRole() // Overridden to return 'Engineer'

// require Employee class
const Employee = require('./Employee');

// create Engineer class
class Engineer extends Employee{
    // create constructor that recieves a name, id, email, and github
    constructor(name, id, email, github){
        // call super for Employee class
        super(name, id, email);
        // add github attribute
        this.github = github;
    }
    // create getGithub method to return github
    getGithub() {
        return this.github;
    }
    // overwrite getRole function to return engineer
    getRole() {
        return 'Engineer';
    }
}

// export Engineer class
module.exports = Engineer;