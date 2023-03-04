INSERT INTO department (name)
VALUES
("Engineering"),
("Finance"),
("Legal"),
("Sales");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("John", "doe", 4, NULL),
("Kelsie", "Clements", 3, NULL),
("Tom", "Berry", 3, NULL),
("Michael", "Monaghan", 1, NULL),
("Eric", "Jarvis", 2, NULL),
("Kelly", "Osbourne", 2, NULL),
("Priya", "Vanu", 1, NULL),
("Prabh", "Singh", 4, NULL),
("Hayden", "Jolly", 1, NULL);


INSERT INTO role (title, salary, department_id)
VALUES
("Sales Lead", 72000, 4),
("Salesperson", 65000, 4),
("Lead Engineer", 98000, 1),
("Software Engineer", 85000, 1),
("Account Manager", 101000, 2),
("Accountant", 89000, 2),
("Legal Team Lead", 160000, 3),
("Lawyer", 140000, 3);
