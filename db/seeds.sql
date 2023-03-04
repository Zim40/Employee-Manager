INSERT INTO department (title)
VALUES
("Engineering"),
("Finance"),
("Legal"),
("Sales");

INSERT INTO roles (title, salary, department_id)
VALUES
("Sales Lead", 72000, 4),
("Salesperson", 65000, 4),
("Lead Engineer", 98000, 1),
("Software Engineer", 85000, 1),
("Account Manager", 101000, 2),
("Accountant", 89000, 2),
("Legal Team Lead", 160000, 3),
("Lawyer", 140000, 3);

INSERT INTO manager (first_name, last_name, department_id)
VALUES
("Gary", "Jones", 1),
("David", "Copper", 2),
("Melanie", "Stevic", 3),
("Arya", "Melton", 4);

INSERT INTO employee (first_name, last_name, manager_id, department_id)
VALUES
("John", "doe",2, 2),
("Kelsie", "Clements",2, 2),
("Tom", "Berry", 4, 4),
("Michael", "Monaghan", 3, 3),
("Eric", "Jarvis", 3, 3),
("Kelly", "Osbourne", 2, 4),
("Priya", "Vanu", 4, 4),
("Prabh", "Singh", 3, 4),
("Hayden", "Jolly", 4, 1);





