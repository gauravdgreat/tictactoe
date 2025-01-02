function PlayerInfo({ players, isXNext, winner, onReset }) {
    return (
      <div className="player-info">
        {!winner ? (
          <p>
            Next Player: <span>{isXNext ? players.X : players.O}</span>
          </p>
        ) : winner === "Draw" ? (
          <p>It's a Draw!</p>
        ) : (
          <p>
            Winner: <span>{winner === "X" ? players.X : players.O}</span>
          </p>
        )}
        <button className="reset-button" onClick={onReset}>
          Play Again
        </button>
      </div>
    );
  }
  
  export default PlayerInfo;
  