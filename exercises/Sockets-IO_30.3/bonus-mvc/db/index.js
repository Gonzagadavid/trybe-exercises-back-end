const fs = require('fs');
const path = require('path')
const dbPath = path.join(__dirname,'user.json');
const getAllUsers = () => {
  const dbJson = fs.readFileSync(dbPath, 'utf-8');
  const db = JSON.parse(dbJson);
  return db;
}

const getUser = (userId) => {
  const db = getAllUsers();
  const user = db.find(({ id }) => userId === id);
  return user;
}

const updateDb = (db) => { fs.writeFileSync(dbPath, JSON.stringify(db))}

const addLike = (userId, postId) => {
  const db = getAllUsers()
  const user = getUser(userId);
  user.posts = user.posts.map((item) => item.id === postId ? {...item, likes: item.likes + 1} : item) 
  const dbUpated = db.map((item) => item.id === userId ? user: item);
  updateDb(dbUpated)
  return user
}
const addStar = (userId, postId) => {
  const db = getAllUsers()
  const user = getUser(userId);
  user.posts = user.posts.map((item) => item.id === postId ? {...item, stars: item.stars + 1} : item) 
  const dbUpated = db.map((item) => item.id === userId ? user: item)
  updateDb(dbUpated)
  return user
}

module.exports = {
  getUser,
  addLike,
  addStar,
}