// require('dotenv').config();
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    // password: '--UserPass--',
    database: 'employeetracker',
});
connection.connect((err) => {
    if (err) throw err;
    console.log()
});

module.exports = connection;