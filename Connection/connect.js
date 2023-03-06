const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Erinelefsen123!',
    database: 'employeetracker',
});
connection.connect((err) => {
    if (err) throw err;
    console.log()
});

module.exports = connection;