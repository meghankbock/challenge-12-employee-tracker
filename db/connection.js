const mysql = require("mysql2");

require('dotenv').config();

// connect to database
const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: process.env.DB_PW,
      database: process.env.DB_NAME
    },
    console.log("Database connected")
  );

module.exports = db;