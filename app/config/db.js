"use strict";
const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DB_HOST || "us-cdbr-east-06.cleardb.net",
  // port: process.env.DB_PORT || "3308",
  user: process.env.DB_USER || "b9557588015e71",
  password: process.env.DB_PASS || "81ac2f8a",
  database: process.env.DB_NAME || "heroku_04681dd243e9178",
});

module.exports = db;

// mysql://b9557588015e71:81ac2f8a@us-cdbr-east-06.cleardb.net/heroku_04681dd243e9178?reconnect=true
