import { useState } from "react";

import { GameState } from "./Enums/GameState";
import { GameUtility } from "./Helper/GameUtility";
import { Tile } from "./Interface/Tile";
import { GameTile } from "./GameTile";
import { ResetButton } from "./ResetButton";
import { ResultPanel } from "./ResultPanel";

import "./Game.css";

export const Game = () => {
  const [gameState, setGameState] = useState(GameState.Playing);
  const [game, setGame] = useState(GameUtility.getNewGame());
  const [gameTurns, setGameTurns] = useState(0);

  const setTilePlayed = (index: number) => {
    const updatedGame = GameUtility.getUpdatedGame(game, index, gameTurns);
    const updatedGameTurns = gameTurns + 1;

    setGame(updatedGame);
    setGameTurns(updatedGameTurns);

    isGameFinished(updatedGame, updatedGameTurns);
  };

  const isGameFinished = (updatedGame: Tile[], updatedGameTurns: number) => {
    if (updatedGame.some((tile) => tile.winningTile)) {
      setGameState(GameState.Winner);
    } else if (updatedGameTurns === GameUtility.NUMBER_OF_TILES) {
      setGameState(GameState.Draw);
    }
  };

  const resetGame = () => {
    setGame(GameUtility.getNewGame());
    setGameState(GameState.Playing);
    setGameTurns(0);
  };

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <ResultPanel gameState={gameState} gameTurns={gameTurns} />
      <div className="gameBoard marginTop20">
        {game.map((gameValue, index) => (
          <GameTile
            index={index}
            gameState={gameState}
            key={index}
            onClick={setTilePlayed}
            value={gameValue.status}
            winningTile={gameValue.winningTile}
          />
        ))}
      </div>
      <ResetButton resetGame={resetGame} />
    </>
  );
};
