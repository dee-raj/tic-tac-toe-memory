import { useState } from "react";

const useTicTacToes = () => {
    const defaultName = { player1: "X", player2: "O" };
    const [players, setPlayers] = useState(defaultName);
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
                return currentBoard[a] === "X" ? players.player1 : players.player2;
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
        if (winner) return `${winner} Won The Game !`;
        if (!board.includes(null)) return "It's a Draw !!!";

        return `${isFirstPlayerTurn ? players.player1 : players.player2}'s turn.`;
    };

    const resetGame = () => {
        setBoard(initialBorad());
        setisFirstPlayerTurn(true);
        setPlayers(defaultName);
    };

    const saveMyName = (name) => {
        if (players.player1 === "X" || players.player1.trim() === "") {
            setPlayers({ player1: name.toUpperCase(), player2: players.player2 });
        }
        else if (players.player2 === "O" || players.player2.trim() === "") {
            setPlayers({ player1: players.player1, player2: name.toUpperCase() });
        }
        // console.log('players: ', players);
    };

    return { board, handleClick, calculateWinner, getStatusMessage, resetGame, isFirstPlayerTurn, players, saveMyName };
};

export default useTicTacToes;