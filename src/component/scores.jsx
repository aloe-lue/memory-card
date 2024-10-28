function HighScore({ score }) {
  return (
    <div className="high-score">
      <p>
        High Score: <span>{score}</span>
      </p>
    </div>
  );
}

function CurrentScore({ score }) {
  return (
    <div className="current-score">
      <p>
        Current Score: <span>{score}</span>
      </p>
    </div>
  );
}

export { HighScore, CurrentScore };
