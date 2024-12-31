# Tic-Tac-Toe and Memory Games

This project features two classic games—Tic-Tac-Toe and Memory—built using React and Vite.

## Features

- **Tic-Tac-Toe**: An interactive game where two players can enter their names before starting and take turns marking spaces in a 3×3 grid to achieve three in a row.

- **Memory Game**: A concentration game with a dynamic board size, allowing players to select the grid dimensions before starting. Players flip over pairs of matching cards to test and improve memory skills.

## Prerequisites

Ensure you have the following installed:

- **Node.js**: Version 14 or higher.

- **npm**: Version 6 or higher.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/dee-raj/tic-tac-toe-memory.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd tic-tac-toe-memory
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

## Running the Application

To start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` to access the application.

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be located in the `dist` directory.

## How to Play

### Tic-Tac-Toe

1. **Enter Player Names**: Before starting, input the names of Player 1 and Player 2.

2. **Start Game**: The game begins with an empty 3×3 grid.

3. **Gameplay**: Players take turns clicking on empty squares to place their respective marks (X or O).

4. **Winning**: The first player to align three of their marks horizontally, vertically, or diagonally wins.

5. **Reset**: Click the "Reset" button to start a new game.

### Memory Game

1. **Select Board Size**: Choose the desired grid dimensions (e.g., 4×4, 6×6, 8×8) before starting the game.

2. **Start Game**: The game presents a grid of facedown cards based on the selected dimensions.

3. **Gameplay**: Click on two cards to flip them over. If they match, they remain face up; if not, they flip back down.

4. **Winning**: Continue matching pairs until all cards are face up. The game ends when all pairs are found.

5. **Reset**: Click the "Reset" button to shuffle the cards and start a new game.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.

- **Vite**: A fast build tool and development server.

## Acknowledgments

This project was inspired by various tutorials and examples available online.

## License

This project is licensed under the MIT License.