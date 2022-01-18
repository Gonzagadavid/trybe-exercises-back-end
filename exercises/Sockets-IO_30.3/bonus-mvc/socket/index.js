module.exports = (io) => {
  io.on('connection', (socket) => {
    
    socket.on('likePost', (likes) => {
      io.broadcast.emit('updateLikes', likes)
    }) 
  
    socket.on('starPost', (stars) => {
      socket.broadcast.emit('updateStars', stars) 
    }) 
  })
  
}