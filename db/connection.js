const mysql = require("mysql2");

// connect to database
const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "password",
      database: "organization",
    },
    console.log("Connected to the organization database.")
  );

module.exports = db;