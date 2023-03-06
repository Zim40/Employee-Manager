const mysql = require('mysql2/promise');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employeetracker',
    password: 'Erinelefsen123!'
});

module.exports = { mysql, connection};