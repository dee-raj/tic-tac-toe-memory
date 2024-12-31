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
      <section className='text-center justify-center'>
        <legend className='mt-4 font-mono mb-4'>Select which game you want to play.</legend>
        <div className='flex flex-row items-center justify-between content-between'>
          <p className={`text-blue-900 px-4 py-2 text-xl ${isOne && 'font-bold'}`}>Memory game</p>
          <button
            onClick={() => setIsOne(!isOne)}
            className='bg-purple-200 px-4 py-1 rounded-3xl font-bold min-w-fit max-w-max'
          >
            {isOne ? "<-" : "->"}
          </button>
          <p className={`text-amber-500 px-4 py-2 font-bold text-xl ${isOne && 'font-normal'}`}>Tic-Tac-Toe game</p>
        </div>
        <hr className='h-2 bg-indigo-400' />
      </section>
      <TTT_or_MG />

      <footer className='bottom-0 fixed w-dvw'>
        <p className='text-center font-semibold text-cyan-600'>Developed by Dee-Raj &copy; 2024</p>
      </footer>
    </>

  )
}

export default App
