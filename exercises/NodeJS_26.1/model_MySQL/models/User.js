const connection = require('./connection');

class User {
  async updateUser(id, userUpdated) {
    const query = 'UPDATE users SET first_name=?, last_name=?, email=?, password=? WHERE id = ?;';
    await connection.execute(query, [...userUpdated, id]);
  }

  async userById(id) {
    const [user] = await connection.execute('SELECT * FROM users WHERE id = ?;', [id]);
    return user;
  }

  async allUsers() {
    const [users] = await connection.execute('SELECT * FROM users;');
    return users;
  }

  async findUser(email) {
    const [user] = await connection.execute('SELECT * FROM users WHERE email = ?;', [email]);
    return user;
  }

  async insertUser(user) {
    await connection.execute('INSERT INTO users(first_name, last_name, email, password) VALUES(?,?,?,?);', user);
  }
}

const users = new User();

module.exports = users;
