const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'david',
  password: '1234',
  database: 'mvc_example'});

module.exports = connection;
