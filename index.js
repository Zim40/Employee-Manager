const { connection } = require('./role/connect');
const mysql = require('mysql2/promise');
const inquirer = require('inquirer');

async function startOption () {
   
    inquirer.prompt ([
        {
            type: 'list',
            message: 'Choose a Department',
            name: 'options',
            choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add a Department', 'Add a Role','Add an Employee', 'Update an Employee Role'],
        }
    ]).then((answers) => {
            if (answers.department === 'View all Departments') {
                // View all Departments
            }else if (answers.department === 'View all Roles') {
                // View all roles
            }else if (answers.department === 'view all Employees') {
                // view all employees
                
            }else if (answers.department === 'add a Department') {
                // add a department
            } else if (answers.options === 'add a Role') {  
                // add a role
            } else if (answers.options === 'add an Employee') {
                // add an employee
            } else if (answers.options === 'update an Employee Role') {
                // update an employee role
            }
            
        })
    
};
startOption();


