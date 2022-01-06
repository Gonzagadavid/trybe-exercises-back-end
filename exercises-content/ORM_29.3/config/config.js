 module.exports = {
  development: {
    username: "david",
    password: "1234",
    database: "associations",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "david",
    password: "1234",
    database: "orm_assoc_test_db",
    host: "127.0.0.1",
    dialect: "mysql",
      // adicione essa linha a sua configuração para omitir mensagens de log no orm
    logging: false
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
