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
    FOREIGN KEY (department_id)
    REFERENCES department(id)

);
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    department_title VARCHAR(30),
    -- department_id INT,
    roles_id INT,
    manager_id INT,
    FOREIGN KEY (roles_id)
    REFERENCES roles(id),
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

CREATE TABLE manager (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    department_title VARCHAR(30),
    employee_id INT,
    FOREIGN KEY (employee_id)
    REFERENCES employee(id)
);




