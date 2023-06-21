import "./ResetButton.css";

type ResetButtonProps = {
  resetGame: () => void;
};

export const ResetButton = ({ resetGame }: ResetButtonProps) => {
  return (
    <button className="actionGameButton marginTop20" onClick={resetGame}>
      Reset game
    </button>
  );
};
