import Cell from "./Cell";

function Board({ board, handleCellClick }) {
  return (
    <div className="board">
      {board.map((value, index) => (
        <Cell
          key={index}
          value={value}
          onClick={() => handleCellClick(index)}
        />
      ))}
    </div>
  );
}

export default Board;
