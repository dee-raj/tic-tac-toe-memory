import React, { useEffect, useState } from 'react'

const MemoryGame = () => {
    const [GridSize, setGridSize] = useState(4);
    const [cards, setCards] = useState([]);

    const [solved, setSolved] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [disabled, setDisabled] = useState(false);

    const [won, setWon] = useState(false);

    const handleGridSizeChange = (e) => {
        const newSizeValue = parseInt(e.target.value);
        if (newSizeValue >= 2 && newSizeValue <= 10)
            setGridSize(newSizeValue);
    };

    const initalizeGame = () => {
        const totalCards = GridSize * GridSize;
        const players = Math.floor(totalCards / 2);

        const numbers = [...Array(players).keys()].map((n) => n + 1);
        const shuffleCards = [...numbers, ...numbers]
            .sort(() => Math.random() - 0.5)
            .slice(0, totalCards)
            .map((num, idx) => ({ id: idx, num }));

        // console.log(shuffleCards);
        setCards(shuffleCards);
        setFlipped([]);
        setSolved([]);
        setDisabled(false);
        setWon(false);
    };

    useEffect(() => {
        initalizeGame();
    }, [GridSize]);

    const handleCardClick = (id) => {
        if (disabled || won) return;

        if (flipped.length === 0) {
            setFlipped([id]);
            return;
        }

        if (flipped.length === 1) {
            setDisabled(true);
            if (id !== flipped[0]) {
                setFlipped([...flipped, id]);
                //check match 
                checkMatch(id);
            } else {
                setFlipped([]);
                setDisabled(false);
            }
        }
    };

    const isFlipped = (id) => flipped.includes(id) || solved.includes(id);
    const isSolved = (id) => solved.includes(id);


    const checkMatch = (secondId) => {
        const [firstId] = flipped;
        console.log(cards[firstId].num, cards[secondId].num);
        if (cards[firstId].num === cards[secondId].num) {
            setSolved([...solved, firstId, secondId]);
            setFlipped([]);
            setDisabled(false);
        } else {
            setTimeout(() => {
                setFlipped([]);
                setDisabled(false);
            }, 1000);
        }
    }

    useEffect(() => {
        if (solved.length === cards.length && cards.length > 0) {
            setWon(true);
        }
    }, [solved, cards])


    return (
        <div className='flex flex-col items-center justify-center bg-grey-100 p-4'>
            <h1 className='text-3xl font-bold mb-6'>Memory Game</h1>

            {/* input  */}
            <div className='mb-4'>
                <label htmlFor="gridSize" className='mr-2'>Grid size: (max 10)</label>
                <input
                    type="number"
                    id='gridSize'
                    min={2} max={10}
                    value={GridSize}
                    onChange={handleGridSizeChange}
                    className='border-2 border-gray-300 rounded px-2 py-1'
                />
            </div>

            {/* Game Borad  */}
            <div className={`grid gap-2 mb-4 `}
                style={{
                    gridTemplateColumns: `repeat(${GridSize}, minmax(0, 1fr))`,
                    width: `min(100%, ${GridSize * 5.5}rem`,
                }}
            >
                {cards.map((card) => {
                    return <div
                        key={card.id}
                        onClick={() => handleCardClick(card.id)}
                        className={`aspact-square flex items-center justify-center text-xl font-bold 
                            rounded-lg cursor-pointer transition-all duration-300 
                            ${isFlipped(card.id)
                                ? isSolved(card.id)
                                    ? "bg-green-500 text-white"
                                    : "bg-blue-500 text-white"
                                : "bg-gray-300 text-gray-400"
                            }`}
                    >
                        {isFlipped(card.id) ? card.num : "?"}
                    </div>
                })}
            </div>

            {/* Result  */}

            <div>
                {won && (
                    <div className='mt-4 text-4xl font-bold text-green-600 animate-bounce'>
                        You Won !!!
                    </div>
                )}
            </div>

            {/* Reset / Play again Btn  */}
            <button
                onClick={initalizeGame}
                className='mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-color'>
                {won ? "Play Again" : "Reset"}
            </button>
        </div>
    )
}

export default MemoryGame;
