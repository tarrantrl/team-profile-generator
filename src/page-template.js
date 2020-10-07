// create employee cards
const generateEmployees = employees => {
    return `
    ${employees
        .filter(({role}) => (role === "Manager"))
        .map(employee => {
            return `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${employee.getName()}</h5>
                    <p class="card-text">${employee.getRole()}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${employee.getId()}</li>
                    <li class="list-group-item"><a href="mailto:${employee.getEmail()}>${employee.getEmail()}</a></li>
                    <li class="list-group-item">${employee.getOfficeNum()}</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
            `
        })
    .join('')}
    ${employees
        .filter(({role}) => (role === "Engineer"))
        .map(employee => {
            return `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${employee.getName()}</h5>
                    <p class="card-text">${employee.getRole()}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${employee.getId()}</li>
                    <li class="list-group-item"><a href="mailto:${employee.getEmail()}>${employee.getEmail()}</a></li>
                    <li class="list-group-item"><a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
            `
        })
    .join('')}
    ${employees
        .filter(({role}) => (role === "Intern"))
        .map(employee => {
            return `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${employee.getName()}</h5>
                    <p class="card-text">${employee.getRole()}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${employee.getId()}</li>
                    <li class="list-group-item"><a href="mailto:${employee.getEmail()}>${employee.getEmail()}</a></li>
                    <li class="list-group-item">${employee.getSchool()}</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
            `
        })
    .join('')}
    `
}

module.exports = employees => {
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
        <header>
        
        </header>
        <main class="">
            ${generateEmployees(employees)}
        </main>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>  
    </html>
    `;
  };