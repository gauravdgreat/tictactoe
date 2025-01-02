function Scoreboard({ scores }) {
    return (
      <div className="scoreboard">
        <div className="score">X: {scores.X}</div>
        <div className="score">O: {scores.O}</div>
      </div>
    );
  }
  
  export default Scoreboard;
  