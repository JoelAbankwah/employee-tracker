const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Ninja1joel?',
        database: 'cms'
    },
);

module.exports = db;