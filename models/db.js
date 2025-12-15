const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',       // kendi MySQL şifren
    database: 'portfolio' // veritabanı adı
});

module.exports = db;
