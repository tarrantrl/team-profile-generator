// require inquirer
const inquirer = require('inquirer');

// prompt user to choose 
// all employees have name, id, and email
// prompt for role
// manager = office number
// engineer = github
// intern = school

const promptUser = () => {
    console.log(`
=================
Add the Manager
=================
`);
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

const promptEmployee = teamData => {
    if (!teamData.employees) {
        teamData.employees = [];
    }
    console.log(`
=================
Add a New Employee
=================
`);
    return inquirer.prompt([
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
            }
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
            }
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
            }
        },
        {
            type: "list",
            name: "role",
            message: "What type of employee do you want to add?",
            choices: ['Engineer', 'Intern'],
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?",
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
        console.log(teamData);
    })
