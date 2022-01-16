const { Server } = require('socket.io');

let likes = 0;
let stars = 0;

const io = new Server({
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  }  
})

io.on('connection', (socket) => {
  socket.on('likePost', () => {
    likes += 1;
    // socket.emit('updateLikes', likes)
    io.emit('updateLikes', likes)
  }) 

  socket.on('starPost', () => {
    stars += 1;
    socket.broadcast.emit('updateStars', stars) 
  }) 
  io.emit('updateLikes',likes)
})

io.listen(3300)
