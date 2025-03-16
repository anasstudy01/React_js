import React, { useState } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    const newBoard = [...board];
    if (newBoard[index] || winner) return;
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const calculatedWinner = calculateWinner(newBoard); // Renamed variable
    if (calculatedWinner) {
      setWinner(calculatedWinner);
    }

    console.log('Board state after click:', newBoard); // Debugging line
  };

  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className="App bg-black text-white w-full h-screen flex flex-col gap-5 items-center justify-center">
      <h1 className='text-4xl font-bold'>Tic Tac Toe</h1>
      {winner && <h2 className='text-2xl font-bold'>Winner: {winner}</h2>}
      <div className='container bg-gray-800 p-4 rounded-lg w-100 h-120'>
        <div className='grid grid-cols-3 gap-1'>
          {board.map((value, index) => (
            <div
              key={index}
              className='bg-gray-600 h-25 w-29 flex items-center justify-center'
              onClick={() => handleClick(index)}
            >
              {value}
            </div>
          ))}
        </div>
        <div className='buttons flex justify-center items-center h-30 mt-5 gap-5'>
          <button className='bg-green-600 h-10 w-25 flex items-center justify-center rounded-xl' onClick={resetGame}>Reset</button>
          <button className='bg-red-600 h-10 w-25 flex items-center justify-center rounded-xl'>Exit</button>
        </div>
      </div>
    </div>
  );
}

export default App;