const connection = require('./connection');

class User {
  async userExists (userEmail) {
    const db = await connection();
    const user = await db.collection('user').findOne({ email: userEmail });
    console.log(!!user)
    return !!user;
  }
  
  async insertUser(user) {
    const db = await connection();
    await db.collection('user').insertOne(user);
    return user
  }
}

const users = new User()

module.exports = users;