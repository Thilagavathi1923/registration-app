const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "registrationdb"
});

connection.connect((err) => {
    if (err) {
        console.log("Connection failed");
    } else {
        console.log("Connected to MySQL");
    }
});

module.exports = connection;