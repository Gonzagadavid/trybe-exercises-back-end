const { getUserPosts, addLike, addStar } = require('../controllers');
const { Router } = require('express');

const route = Router({ mergeParams: true})

route.get('/:id', getUserPosts)
route.get('/like/:id/:postId', addLike)
route.get('/star/:id/:postId', addStar)

module.exports = route