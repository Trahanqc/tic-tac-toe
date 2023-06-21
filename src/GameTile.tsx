import { clsx } from "clsx";

import { PLAYERS } from "./Constants/Players";
import { GameState } from "./Enums/GameState";
import { GameValue } from "./Enums/GameValue";

import "./GameTile.css";

type GameTileProps = {
  index: number;
  gameState: GameState;
  onClick: (index: number) => void;
  value: GameValue;
  winningTile: boolean;
};

export const GameTile = ({
  index,
  gameState,
  onClick,
  value,
  winningTile,
}: GameTileProps) => {
  const getPlayerValue = () => {
    return value === GameValue.Player1
      ? PLAYERS.Player1.description
      : PLAYERS.Player2.description;
  };

  const isTilePlayable = () => {
    return gameState === GameState.Playing && value === GameValue.Unplayed;
  };

  const changeTileValue = () => {
    if (isTilePlayable()) {
      onClick(index);
    }
  };

  return (
    <div
      className={clsx(
        "gameTile",
        isTilePlayable() && "playable",
        winningTile && "winningTile"
      )}
      onClick={changeTileValue}
    >
      {value === GameValue.Unplayed ? "" : getPlayerValue()}
    </div>
  );
};
