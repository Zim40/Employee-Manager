const connection = require('./Connection/connect.js');
const mysql = require('mysql2/promise');
const inquirer = require('inquirer');
const table = require('console.table');
startOption();
async function startOption () {
   
    inquirer.prompt ([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'options',
            choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role','Add an Employee', 'Update an Employee Role'],
        }
    ]).then((answers) => {
            if (answers.options === 'View all Departments') {
                // View all Departments
                viewDepartments();
            }else if (answers.options === 'View all Roles') {
                // View all roles
                viewRoles();
            }else if (answers.options === 'View all Employees') {
                // view all employees
                viewEmployees();
            }else if (answers.options === 'Add a Department') {
                // add a department
                addDepartment();
            } else if (answers.options === 'Add a Role') {  
                // add a role
            } else if (answers.options === 'Add an Employee') {
                // add an employee
            } else if (answers.options === 'Update an Employee Role') {
                // update an employee role
            }
            
        })
    
};
// startOption();

// Veiw all Departments Function
const viewDepartments = () => {
    connection.query('SELECT * FROM department',(err, res) => {
        if (err) throw err;
         console.table(res);
         startOption();
    })
 };

//  Veiw all Roles Function
const viewRoles = () => {
    connection.query('SELECT * FROM roles',(err, res) => {
        if(err) throw err;
        console.table(res);
        startOption();
    })
};

// View all Employees
const viewEmployees = () => {
    connection.query('SELECT * FROM employee', (err, res) => {
        if(err) throw err;
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
async function addRoles() {
    const roles = await inquirer.prompt ([
        {
           type: 'input',
           message: 'What role would you like to add',
           name: 'title',
        },
        {
            type: 'input',
            message: 'Enter the role salary',
            name: 'salary',
        }
        // connection.query here inserting new role
    ])
}
