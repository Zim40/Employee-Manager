const connection = require('./Connection/connect.js');
const mysql = require('mysql2/promise');
const inquirer = require('inquirer');
const table = require('console.table');






async function startOption() {

    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'options',
            choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'EXIT'],
        }
    ]).then((answers) => {
        if (answers.options === 'View all Departments') {
            // View all Departments
            viewDepartments();
            
        } else if (answers.options === 'View all Roles') {
            // View all roles
            viewRoles();
            
        } else if (answers.options === 'View all Employees') {
            // view all employees
            viewEmployees();
            
        } else if (answers.options === 'Add a Department') {
            // add a department
            addDepartment();
            
        } else if (answers.options === 'Add a Role') {
            // add a role
            addRoles();
            
        } else if (answers.options === 'Add an Employee') {
            // add an employee
            addEmployee();
           
        } else if (answers.options === 'EXIT') {
            connection.end();
            process.exit();
        }

    })

};
startOption();


// startOption();

// View all Departments Function
const viewDepartments = () => {
    
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        console.table(res);
        
        startOption();
    })
};

//  Veiw all Roles Function
const viewRoles = () => {
   
    connection.query('SELECT * FROM roles', (err, res) => {
        if (err) throw err;
        console.table(res);
        
        startOption();
    })
};

// View all Employees
const viewEmployees = () => {
    
    connection.query('SELECT e.*, m.first_name AS manager_first_name, m.last_name AS manager_last_name FROM employee e LEFT JOIN manager m ON e.id = m.employee_id', (err, res) => {
        if (err) throw err;
        console.table(res);
        
        startOption();
    })
};

// Add a department
async function addDepartment() {
    
    const department = await inquirer.prompt([
        {
            type: 'input',
            message: 'Enter the Department name:',
            name: 'name',
        },
    ]);
    connection.query('INSERT INTO department (title) VALUES (?)',
        [department.name], (err, res) => {
            if (err) throw err;
            console.log("Added New Department");
            
            startOption();
        })
};

// ADD NEW ROLE
async function addRoles() {
    
    const departments = await connection.promise().query('SELECT * FROM department');
    const departmentChoices = departments[0].map(({ id, title }) => ({ name: title, value: id }));
    const { departmentId } = await inquirer.prompt([
        {
            type: 'list',
            message: 'Select a Department for the new role',
            name: 'departmentId',
            choices: departmentChoices,
        },
    ]);
    const roles = await inquirer.prompt([
        {
            type: 'input',
            message: 'What role would you like to add',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter the role salary',
            name: 'salary',
        },
    ]).then((answers) => {

        const roleDetails = [answers.title, answers.salary];
        const insertResult = connection.query('INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)', [answers.title, answers.salary, departmentId]);
        const roleTable = connection.query('SELECT * FROM roles', (err, res) => {
            if (err) throw err;
            console.table(res);
            
            startOption();
        })

    });
};
// ===============================================================================================
// ===============================================================================================
async function addEmployee() {
    
    const answers = {};

    const { first_name, last_name } = await inquirer.prompt([
        {
            type: 'input',
            message: "what is the employee's first name?",
            name: 'first_name',
        },
        {
            type: 'input',
            message: "What is the employee's last name?",
            name: 'last_name',
        },
    ])
    answers.first_name = first_name;
    answers.last_name = last_name;

    // =========================================================================================== first and last name
    const selectRoles = await connection.promise().query('SELECT * FROM roles');
    const employeeRoleChoice = selectRoles[0].map(({ title, id }) => ({ name: `${title}`, value: `${title} ${id}` }));

    const { employeeRoles } = await inquirer.prompt([
        {
            type: 'list',
            message: "What is the employees's role?",
            name: 'employeeRoles',
            choices: employeeRoleChoice,
        },
    ])
    const spaceIndex = employeeRoles.lastIndexOf(' ');
    const roleName = employeeRoles.slice(0, spaceIndex).trim();
    const roleId = employeeRoles.slice(spaceIndex + 1).trim();
    answers.employeeRoleName = roleName;
    answers.employeeRoleId = roleId;

    // ========================================================================================== Department ID and Name
    const departmentTitleId = await connection.promise().query('SELECT * FROM department');
    const departmentChoice = departmentTitleId[0].map(({ title, id }) => ({ name: `${title}`, value: `${title} ${id}` }));
    const { departments } = await inquirer.prompt([
        {
            type: 'list',
            message: 'Choose employee department',
            name: 'departments',
            choices: departmentChoice,
        },
    ]);
    const SpaceIndex = departments.lastIndexOf(' ');
    const departmentName = departments.slice(0, SpaceIndex).trim();
    const departmentId = departments.slice(SpaceIndex + 1).trim();
    answers.departmentName = departmentName;
    answers.departmentId = departmentId;



    // ========================================================================================== Manager id
    const selectManager = await connection.promise().query('SELECT * FROM manager');
    const managers = selectManager[0].map(({ first_name, last_name, id }) => ({ name: `${first_name} ${last_name}`, value: `${id}` }));
    const { chooseManager } = await inquirer.prompt([{
        type: 'list',
        message: 'Choose a Manager for the new employee',
        name: 'chooseManager',
        choices: managers,
    }])
    answers.chooseManager = chooseManager;
    
    const insertResult = connection.query('INSERT INTO employee (first_name, last_name, department_title, department_id, roles_title, roles_id, manager_id) VALUES (?, ?, ?, ?, ?, ?, ?)', [answers.first_name, answers.last_name, answers.departmentName, answers.departmentId, answers.employeeRoleName, answers.employeeRoleId, answers.chooseManager]);
    const roleTable = connection.query('SELECT * FROM employee', (err, res) => {
        if (err) throw err;
        console.table(res);
        
        startOption();
    })
};
