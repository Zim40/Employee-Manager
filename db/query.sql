SELECT employee.id, employee.first_name, employee.last_name, department.title AS department_name
FROM employee
JOIN department ON employee.department_id = department.id;
-- Returns table for employe information
SELECT employee.id, employee.first_name, employee.last_name, roles.salary AS roles_salary
FROM employee
JOIN roles ON employee.roles_id = roles.id;