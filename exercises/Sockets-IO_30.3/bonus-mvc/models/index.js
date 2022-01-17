const { getUser, addLike, addStar } = require('../db');

const getUserData = (userId) => {
  const user = getUser(+userId);
  return user
}

const incremetLike = (userId, postId) =>  addLike(+userId, +postId)

const incremetStar = (userId, postId) =>  addStar(+userId, +postId) 

module.exports = {
  getUserData,
  incremetLike,
  incremetStar,
}