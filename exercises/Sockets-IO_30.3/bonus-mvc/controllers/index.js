const { getUserData, incremetLike, incremetStar } = require('../models');

const getUserPosts = (req, res) => { 
  const { id } = req.params;
  const user = getUserData(id);
  res.render('index', { user });
}

const addLike = (req, res) => {
  const { id, postId } = req.params;
  const user = incremetLike(id, postId);
  res.render('index', { user });
}

const addStar = (req, res) => {
  const { id, postId } = req.params;
  const user = incremetStar(id, postId);
  res.render('index', { user });
}

module.exports = {
  getUserPosts,
  addLike,
  addStar
}