//const mysql = require('mysql2/promise');

//const db = mysql.createPool({
   // host: 'localhost',
    //user: 'root',
   // password: '',       // kendi MySQL şifren
   // database: 'portfolio' // veritabanı adı
//});

//module.exports = db;
// db.js

// Dummy DB objesi
const db = {
    query: async (sql, params) => {
        console.log("DB çağrısı atlandı:", sql);
        return [[], []]; // boş sonuç döndür
    }
};

module.exports = db;

