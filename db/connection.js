const mysql = require("mysql2");

require('dotenv').config();

console.log(process.env.DB_NAME);

// connect to database
const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: process.env.DB_PW,
      database: process.env.DB_NAME,
    },
    console.log("Connected to the organization database.")
  );

module.exports = db;