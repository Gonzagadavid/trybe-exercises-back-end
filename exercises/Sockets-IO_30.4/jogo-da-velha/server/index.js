import { Server } from "socket.io";
import socketIo from './socket/index.js';

const PORT = 3300;

const io = new Server({ 
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  }
 });

socketIo(io)

io.listen(PORT, console.log(`server rodando na porta ${PORT}`));
