import { useState } from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import PlayerInfo from "./components/PlayerInfo";
import "./index.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [players, setPlayers] = useState({ X: "Player 1", O: "Player 2" });

  const handleCellClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (newBoard.every((cell) => cell !== null)) {
      setWinner("Draw");
    } else {
      setIsXNext(!isXNext);
    }
  };

  const calculateWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of winningCombinations) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setIsXNext(true);
  };

  return (
    <div className="app">
      <Header />
      <PlayerInfo
        players={players}
        isXNext={isXNext}
        winner={winner}
        onReset={resetGame}
      />
      <Board board={board} handleCellClick={handleCellClick} />
    </div>
  );
}

export default App;
