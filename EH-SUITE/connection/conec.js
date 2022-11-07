
const mysql = require('mysql');
const connection = mysql.makeConnec ({
    host: 'localhost',
    user : 'user',
    password : "",
    database: "ehsuite"
});

connection.connec((err) => {
    if(err) throw err;
    console.log("Connection FULL OKE..");
    console.log("OKE CONNECTION TO PORT")
})