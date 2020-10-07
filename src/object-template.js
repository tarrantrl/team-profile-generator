// require all employee type classes
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const { isModuleSpecifier } = require('@babel/types');

const createObjects = teamData => {
    // separate the data into employees list and manager
    const {employees, ...manager} = teamData;
    // create an empty array to hold all employee objects
    let employeeList = [];
    // use the manager input to create a manager object and push to the array
    employeeList.push(new Manager(manager.name, manager.id, manager.email, manager.officeNumber));
    // iterate through the employees array
    for (let i = 0; i < employees.length; i++){
        // destructure the data to obtain the employee's role
        const{role} = employees[i];
        // if the employee is an engineer
        if (role === 'Engineer'){
            // destructure the data
            const {name, id, email, github} = employees[i]
            // use the destructured data to create a new engineer object and push to the list
            employeeList.push(new Engineer(name, id, email, github))
        } 
        // else if the employee is an intern
        else if (role === 'Intern'){
            // destructure the data
            const {name, id, email, school} = employees[i]
            // use the destructured data to create a new intern object and push to the list
            employeeList.push(new Intern(name, id, email, school));
        }
    }
    // return the employee list
    return employeeList;
}
//     let engineers = employees.filter(({role}) => (role === "Engineer")).map(new Engineer({name, id, email, github}));
//     let interns = employees.filter(({role}) => (role === "Intern")).map(new Intern({name, id, email, school}));
//     let employeeList = engineers.concat(interns);
//     employeeList.unshift(managerObj);
//     return employeeList;
// }

module.exports = createObjects;