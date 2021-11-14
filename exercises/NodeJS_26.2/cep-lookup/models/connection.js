const mysql = require('mysql2/promise');

const connection = null;

module.exports = () => (
  connection || mysql.createPool({
    host: 'localhost',
    user: 'david',
    password: '1234',
    database: 'cep_lookup',
  })
);
