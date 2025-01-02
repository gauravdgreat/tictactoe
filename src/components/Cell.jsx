function Cell({ value, onClick }) {
    return (
      <div
        className={`cell ${value === "X" ? "cell-x" : value === "O" ? "cell-o" : ""}`}
        onClick={onClick}
      >
        {value}
      </div>
    );
  }
  
  export default Cell;
  