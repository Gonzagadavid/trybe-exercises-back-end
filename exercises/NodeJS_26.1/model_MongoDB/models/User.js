const { ObjectId } = require('bson');
const connection = require('./connection');

class User {

  async updateUser(id, userUpdated) {
    const db = await connection();
    const objId = new ObjectId(id);
    await db.collection('user').updateOne({ _id: objId}, { $set: {...userUpdated }});
  }

  async userById(id) {
    const db = await connection();
    const objId = new ObjectId(id)
    const user = await db.collection('user').findOne({ _id: objId });
    return user;
  }

  async allUsers() {
    const db = await connection();
    const users = await db.collection('user').find().toArray();
    return users;
  }

  async userExists (userEmail) {
    const db = await connection();
    const user = await db.collection('user').findOne({ email: userEmail });
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