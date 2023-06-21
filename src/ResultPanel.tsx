import { GameState } from "./Enums/GameState";
import { GameUtility } from "./Helper/GameUtility";

import "./ResultPanel.css";

type ResultPanelProps = {
  gameState: GameState;
  gameTurns: number;
};

export const ResultPanel = ({ gameState, gameTurns }: ResultPanelProps) => {
  const getMessage = () => {
    let message: string;

    switch (gameState) {
      case GameState.Playing:
        message = getPlayerTurn();
        break;
      case GameState.Draw:
        message = getDrawMessage();
        break;
      case GameState.Winner:
        message = getWinner();
        break;
      default:
        // TODO - This should throw an error
        message = "Undefined game state";
    }

    return message;
  };

  const getPlayerTurn = () => {
    return `Player ${GameUtility.getPlayer(gameTurns)}'s turn`;
  };

  const getWinner = () => {
    // We want the player that just played, not the new player's turn
    return `Player ${GameUtility.getPlayer(
      gameTurns - 1
    )} won the game in ${gameTurns} turns!`;
  };

  const getDrawMessage = () => {
    return "This is a draw!";
  };

  return <div className="resultPanel">{getMessage()}</div>;
};
