import { useState } from "react";

const useTicTacToes = () => {
    const initialBorad = () => Array(9).fill(null);
    const [board, setBoard] = useState(initialBorad);
    const [isFirstPlayerTurn, setisFirstPlayerTurn] = useState(true);

    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6]
    ];

    const calculateWinner = (currentBoard) => {
        for (let index = 0; index < winningPatterns.length; index++) {
            const [a, b, c] = winningPatterns[index];
            if (
                currentBoard[a]
                && currentBoard[a] === currentBoard[b]
                && currentBoard[b] === currentBoard[c]
            ) {
                return currentBoard[a];
            }
        }
        return null;
    };

    const handleClick = (idx) => {
        // check winner
        const winner = calculateWinner(board);
        if (winner || board[idx]) return;

        const newBoard = [...board];
        newBoard[idx] = isFirstPlayerTurn ? "X" : "O";
        setBoard(newBoard);
        setisFirstPlayerTurn(!isFirstPlayerTurn);
    };

    const getStatusMessage = () => {
        const winner = calculateWinner(board);
        if (winner) return `Player ${winner} wins !!!`;
        if (!board.includes(null)) return "It's a Draw !";

        return `Player ${isFirstPlayerTurn ? "X" : "0"} turn.`;
    };

    const resetGame = () => {
        setBoard(initialBorad());
        setisFirstPlayerTurn(true);
    }

    return { board, handleClick, calculateWinner, getStatusMessage, resetGame };
};

export default useTicTacToes;