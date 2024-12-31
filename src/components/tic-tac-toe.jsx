import React from 'react'
import useTicTacToes from '../../hooks/useTicTacToe';

const TicTacToeGame = () => {
    const { board, handleClick, getStatusMessage, resetGame, isFirstPlayerTurn } = useTicTacToes();
    return (
        <div className='min-w-max max-w-max my-0 mx-auto p-5 text-center'>
            <div className="text-3xl ml-10 flex justify-between mb-5 animate-pulse">
                {getStatusMessage()}
            </div>
            <div className="grid grid-cols-3 justify-center">
                {board.map((boardValue, idx) => (
                    <button
                        key={idx}
                        onClick={() => handleClick(idx)}
                        disabled={boardValue !== null}
                        className='w-24 h-24 text-3xl rounded-lg border-solid border-2
                         border-yellow-600 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-white'
                    >
                        {boardValue}
                    </button>
                ))}
            </div>
            <button type="button" onClick={resetGame}
             className='bg-red-400 px-4 py-1 max-w-md rounded mt-4 hover:bg-red-500 hover:py-2 hover:rounded-md'
             >Reset Game</button>
        </div>
    )
}

export default TicTacToeGame