import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const Box = ({ value, x, y }) => {

  const { sendPlay } = useContext(AppContext)

  return(
    <button 
    className="box" 
    key={`${x}${y}`} 
    id={`x=${x} y=${y}`}
    onClick={({ target: { id }}) => sendPlay(id)}
    >
      {!value ? '' : value === 1 ? 'X' : 'O'}
    </button>
  )
};

export default Box;
