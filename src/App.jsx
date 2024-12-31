import { useState } from 'react';
import './App.css'
import MemoryGame from './components/memory-game'
import TicTacToeGame from './components/tic-tac-toe';
import { useEffect } from 'react';

function App() {
  const [isOne, setIsOne] = useState(false);
  const TTT_or_MG = () => (isOne ? <MemoryGame /> : <TicTacToeGame />);
  const changeBG = () => {
    const body = document.querySelector('body');
    body.style.backgroundColor = isOne ? '#EDEDED09' : '#EFDEFF67';
  }
  useEffect(() => {
    changeBG();
  }, [isOne]);
  return (
    <>
      <header className='text-3xl font-extrabold text-center text-gray-500'>Hey; There!</header>
      <section className='text-center'>
        <legend className='mt-4 font-mono mb-4'>Select which game you want to play.</legend>
        <button
          onClick={() => setIsOne(!isOne)}
          className='bg-purple-200 px-4 py-1 max-w-md rounded  hover:bg-purple-300 hover:w-1/5 hover:py-2 hover:rounded-md'
        >
          {!isOne ? 'Memory game.' : 'Tic-Tac-Toe game.'}
        </button>
      </section>
      <TTT_or_MG />

      <footer className='bottom-0 fixed w-dvw'>
        <p className='text-center font-semibold text-cyan-600'>Developed by Dee-Raj &copy; 2024</p>
      </footer>
    </>

  )
}

export default App
