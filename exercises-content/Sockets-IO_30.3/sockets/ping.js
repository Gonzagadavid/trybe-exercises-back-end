module.exports = (io) => {
  io.on('connection', (socket) => {

    socket.emit('ola', 'Que bom que você chegou aqui! Fica mais um cadin, vai ter bolo :)');

    socket.on('ping', () => {
      // io.emit envia para todos os clientes
      io.emit('ping','pong io.emit'); // io.emit('pong', `${socket.id} enviou um ping!`); // essa linha envia um aviso para o cliente que o ping chegou.
      // socket.emit envia apenas para o cliente que disparou o evento
      socket.emit('ping','pong.socket'); // io.emit('pong', `${socket.id} enviou um ping!`); // essa linha envia um aviso para o cliente que o ping chegou.
       // socket.broadcast.emit envia para todos os clientes menos para o que disparou o evento
      socket.broadcast.emit('ping','pong.socket'); // io.emit('pong', `${socket.id} enviou um ping!`); // essa linha envia um aviso para o cliente que o ping chegou.
      socket.emit('pong', `${socket.id} enviou um ping!`); // essa linha envia um aviso para o cliente que o ping chegou.
      console.log(`${socket.id} emitiu um ping!`)
    });
  });
};

