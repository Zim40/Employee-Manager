INSERT INTO department (title)
VALUES
("Engineering"),
("Finance"),
("Legal"),
("Sales");

INSERT INTO roles (title, salary, department_id)
VALUES
("Software Engineer", 100000, 1),
("Accountant", 120000, 2),
("Lawyer", 150000, 3),
("Sales Rep", 175000, 4);

INSERT INTO employee (first_name, last_name, department_title, roles_id, manager_id)
VALUES
("Jerry", "Seinfeld", "Engineering", 1, 1),
("Tom", "Bombadill", "Finance", 2, 2),
("Adam", "Evans", "Legal", 3, 3),
("Michael", "Monaghan", "Sales", 4, 4);

INSERT INTO manager (first_name, last_name, department_title, employee_id)
VALUES 
("Andrew", "Harmann", "Engineering", 1),
("David", "Underwood", "Finance", 2),
("Angus", "May", "Legal", 3),
("Mark", "Roberts", "Sales", 4);





