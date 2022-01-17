const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path');
const { getUserPosts, addLike, addStar } = require('./controllers');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3300',
    methods: ['GET', 'POST'],
  }});

  app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', './views');

const route = express.Router({ mergeParams: true})

route.get('/:id', getUserPosts)
route.get('/like/:id/:postId', addLike)
route.get('/star/:id/:postId', addStar)

app.use('/', route)

app.listen(3300, () => console.log('reodando na porta 3300'))
