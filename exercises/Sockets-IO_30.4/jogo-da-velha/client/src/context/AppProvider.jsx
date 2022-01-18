import React, { useState } from 'react';
import AppContext from './AppContext';
import { io } from 'socket.io-client';
const socket = io('http://localhost:3300/');

const AppProvider = ({ children }) => {
  const [board, setBoard] = useState([])
  
  socket.on('board', (boardServer) => {
    setBoard(JSON.parse(boardServer))
  })

  const sendPlay = (position) => {
    socket.emit('refreshBoard', position)
  }
  const context = {
    board,
    sendPlay
  }
  
  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  )
};

export default AppProvider;
