const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cse_labs'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});
 module.exports=db