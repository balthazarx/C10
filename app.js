const inquirer = require('inquirer');
const { getDepartments, addDepartment, getRoles, getEmployees, addRole, addEmployee } = require('./queries');


async function mainMenu() {
    const { choice } = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: ['View Departments', 'Add Department', 'View Roles', 'Add Role', 'View Employees', 'Add Employee', 'Exit']
        }
    ]);

    switch (choice) {
        case 'View Departments':
            console.table(await getDepartments());
            break;
        case 'Add Department':
            const { deptName } = await inquirer.prompt([
                { type: 'input', name: 'deptName', message: 'Enter department name:' }
            ]);
            console.log(await addDepartment(deptName));
            break;

        case 'View Roles':
            console.table(await getRoles());
            break;
        case 'Add Roles':
            const { roleName } = await inquirer.prompt([
                { type: 'input', name: 'roleName', message: 'Enter role name:' }
            ]);
            console.log(await addRole(roleName));
            break;

        case 'View Employees':
            console.table(await getEmployees());
            break;
        case 'Add Employee':
            const { empName } = await inquirer.prompt([
                { type: 'input', name: 'empName', message: 'Enter employee name:' }
            ]);
            console.log(await addEmployee(empName));
            break;
        case 'Exit':
            console.log('Goodbye!');
            process.exit();
    }

    mainMenu();
}

mainMenu();
