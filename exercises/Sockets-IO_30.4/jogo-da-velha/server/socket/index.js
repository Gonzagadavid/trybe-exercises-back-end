import INITIAL_BOARD from '../data/index.js';

const board = INITIAL_BOARD.map(array => [...array])

let play1 = null;
let play2 = null;

const socketIo = (io) => (
  io.on("connection", (socket) => {
    console.log('conectou');

    if (!play1) {
      play1 = socket.id
    }
    
    if (play1 && !play2) {
      play2 = socket.id
    }

    socket.emit('board', JSON.stringify(board)) 
   
    socket.on('refreshBoard', (position) => {
      const icon = socket.id === play1 ? 1 : 2
      const [x, y] = position.split(' ').map(pos => +(pos.replace(/[^\d+]/g, '')))
      board[x][y] = icon
      io.emit('board', JSON.stringify(board)) 
    })

    socket.on('disconnect', () => { console.log('desconectou')})
  })
)


export default socketIo;
