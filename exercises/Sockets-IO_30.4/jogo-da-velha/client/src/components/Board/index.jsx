import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Box from '../Box';
import './style.css';

const Board = () => {
  const { board } = useContext(AppContext)



  return(
    <div className="Board">
      { board.map((line, x) => (
        <div className="line" key={`${x}`}>{
          line.map((value, y) => (
          <Box key={`${x}${y}`} value={value} x={x} y={y}/>
          ))
        }</div>
      ))}
    </div>
  )
};

export default Board;
