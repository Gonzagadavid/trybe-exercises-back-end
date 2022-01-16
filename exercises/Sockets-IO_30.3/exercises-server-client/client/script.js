const socket = window.io('http://localhost:3300');
// const { io } = require("socket.io-client");

// const socket = io('http://localhost:3300')

socket.emit('isso', 'isso')

socket.on('serverMessage', console.log)