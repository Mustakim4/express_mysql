const mysql = require('mysql2');
require('dotenv').config();
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: process.env.MYSQL_HOST | 'localhost',
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: 'todos_db'
    });
}

connection.on('connect', () => {
    console.log(`--> Connected to database '${connection.config.database}'.`);
});

connection.on('error', err => {
    console.log('--> Connection error: ', err);
});

connection.connect();

module.exports = connection;
