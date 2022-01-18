const { getUserData, incremetLike, incremetStar } = require('../models');
const  { io } = require('socket.io-client');
const socket = io('http://localhost:3300')
const getUserPosts = (req, res) => { 
  const { id } = req.params;
  const user = getUserData(id);
  res.render('index', { user });
}

const addLike = (req, res) => {
  const { id, postId } = req.params;
  const user = incremetLike(id, postId);
  const likes = user.posts.find(({ id }) => id === +postId).likes
  socket.emit('likePost', { postId, likes})
  res.render('index', { user });
}

const addStar = (req, res) => {
  const { id, postId } = req.params;
  const user = incremetStar(id, postId);
  const stars = user.posts.find(({ id }) => id === +postId).stars
  socket.emit('starPost', { postId, stars})
  res.render('index', { user });
}

module.exports = {
  getUserPosts,
  addLike,
  addStar
}