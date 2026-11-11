
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ebike_db',
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.log('Database connection failed:', err);
        return;
    }

    console.log('MySQL connected successfully!');
});

module.exports = db;