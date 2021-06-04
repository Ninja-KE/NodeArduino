//import mysql module
const mysql = require('mysql')

//define connection parameters
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  //provide password if exists
    database: 'Your database name'
})

//connection callback
conn.connect((err) => {
    if(err) throw err
    console.log('database connection successful')
})

//export module
module.exports = conn