import React from 'react'
import useTicTacToes from '../../hooks/useTicTacToe';

const TicTacToeGame = () => {
    const { board, handleClick, getStatusMessage, resetGame, isFirstPlayerTurn, players, saveMyName } = useTicTacToes();

    const PlayersNameInputFields = () => {
        return (
            <div className=' flex justify-evenly items-center content-center min-w-md'>
                <input type="text"
                    className='rounded bg-slate-100 focus:bg-green-200 text-lg font-medium border p-1 w-1/2'
                    placeholder='Yours name'
                    onBlur={(text) => {
                        // console.log(text.target.value);
                        saveMyName(text.target.value);
                    }} />
                <span className='rounded-md border-blue-200 bg-green-400 px-4 py-1'>Save me</span>
            </div>
        );
    };

    const areValidUsers = () => (players.player1 === "X" || players.player2 === "O" || players.player1 === "" || players.player2 === "");

    return (
        <>
            {areValidUsers() && <PlayersNameInputFields />}
            <div className='min-w-max max-w-max -my-4 mx-auto py-5 text-center'>
                {isFirstPlayerTurn && !areValidUsers() &&
                    <div className="text-3xl mx-10 text-amber-900 flex justify-between mb-5 animate-pulse">
                        {getStatusMessage()}
                    </div>
                }
                <div className="grid grid-cols-3 justify-center">
                    {board.map((boardValue, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleClick(idx)}
                            disabled={(boardValue !== null) || areValidUsers()}
                            className='h-24 text-3xl rounded-lg border-solid border-2 aspect-square gap-2 m-px
                         border-yellow-600 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-white'
                        >
                            {boardValue}
                        </button>
                    ))}
                </div>
                {!isFirstPlayerTurn && !areValidUsers() &&
                    <div className="text-3xl ml-10 flex justify-between mb-5 animate-pulse">
                        {getStatusMessage()}
                    </div>
                }
                <button type="button" onClick={resetGame}
                    className='bg-red-400 px-4 py-1 max-w-md rounded mt-4 hover:bg-red-500 hover:py-2 hover:rounded-md'
                >Reset Game</button>
            </div>
        </>
    );
};

export default TicTacToeGame