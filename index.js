// require inquirer
const inquirer = require('inquirer');

const createObjects = require('./src/object-template');
const generateTemplate = require('./src/page-template');
const writeFile = require('./utils/generate-page');

// function to prompt the user for manager info
const promptUser = () => {
    console.log(`
=================
Add the Manager
=================
`);
    // use inquirer to prompt the user for manager information
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the manager's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's name!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's id?",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's id!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email?",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's email!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number?",
                validate: officeNumInput => {
                    if (officeNumInput) {
                        return true;
                    } else {
                        console.log("Please enter the manager's office number!");
                        return false;
                    }
                }
            },
        ]);

}

// function to prompt the user for employee info
const promptEmployee = teamData => {
    if (!teamData.employees) {
        teamData.employees = [];
    }
    console.log(`
=================
Add a New Employee
=================
`);
    // use inquirer to prompt the user for employee info
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Select a type of employee to add or finish the team",
            choices: ['Engineer', 'Intern', 'Finish Team'],
        },
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's name!");
                    return false;
                }
            },
            when: ({ role }) => {
                if (role != 'Finish Team') {
                    return true;
                } else {
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's id?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's id!");
                    return false;
                }
            },
            when: ({ role }) => {
                if (role != 'Finish Team') {
                    return true;
                } else {
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's email!");
                    return false;
                }
            },
            when: ({ role }) => {
                if (role != 'Finish Team') {
                    return true;
                } else {
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?",
            // only display github question if the type of employee is Engineer
            when: ({ role }) => {
                if (role === 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's GitHub username!");
                    return false;
                }
            },
        },  
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?",
            // only display school question when the type of employee is Intern
            when: ({ role }) => {
                if (role === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!");
                    return false;
                }
            },
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false,
            when: ({ role }) => {
                if (role != 'Finish Team') {
                    return true;
                } else {
                    return false;
                }
            },
        }
    ])
        .then(employeeData => {
            teamData.employees.push(employeeData);
            if (employeeData.confirmAddEmployee) {
                return promptEmployee(teamData);
            } else {
                return teamData;
            }
        })
}

promptUser()
    .then(promptEmployee)
    .then(teamData => {
        return writeFile(generateTemplate((createObjects(teamData))));
    })
    .catch(err => {
        console.log(err);
    })
