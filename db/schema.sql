DROP DATABASE IF EXISTS employeeTracker;
CREATE DATABASE employeeTracker;
USE employeeTracker;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    salary DECIMAL,
    department_id INT, 
    manager_id INT,
    employee_id INT,
     FOREIGN KEY (department_id)
    REFERENCES department(id)
);

CREATE TABLE manager (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    department_id INT,
    employee_id INT
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    roles_id INT,
    roles_salary INT,
    manager_id INT,
    department_id VARCHAR(30),
    FOREIGN KEY (roles_id)
    REFERENCES  roles(id),
    FOREIGN KEY (manager_id)
    REFERENCES manager(id)
);


