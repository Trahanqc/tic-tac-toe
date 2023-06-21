import { WINNING_CONDITION } from "../Constants/WinningCondition";
import { GameValue } from "../Enums/GameValue";
import { Tile } from "../Interface/Tile";

export class GameUtility {
  public static NUMBER_OF_TILES = 9;
  public static MINIMUM_MOVES_TO_WIN = 4;

  public static getNewGame = () => {
    const newGame: Tile[] = [];

    for (let x = 0; x < this.NUMBER_OF_TILES; x++) {
      newGame.push(this.getNewTile());
    }

    return [...newGame];
  };

  public static getPlayer = (gameTurns: number) => {
    return gameTurns % 2 === 0 ? GameValue.Player1 : GameValue.Player2;
  };

  public static getUpdatedGame = (
    game: Tile[],
    index: number,
    gameTurns: number
  ): Tile[] => {
    const player = GameUtility.getPlayer(gameTurns);
    const updatedGame = [...game];

    updatedGame[index].status = player;

    const winningPattern = this.checkPlayerHasWon(
      updatedGame,
      player,
      gameTurns
    );

    if (winningPattern !== undefined) {
      winningPattern.forEach((pattern) => {
        updatedGame[pattern].winningTile = true;
      });
    }

    return [...updatedGame];
  };

  private static checkPlayerHasWon = (
    game: Tile[],
    player: GameValue,
    gameTurns: number
  ): number[] | undefined => {
    let pattern;

    if (gameTurns >= this.MINIMUM_MOVES_TO_WIN) {
      WINNING_CONDITION.forEach((winningPattern) => {
        if (
          winningPattern.every((position) => game[position].status === player)
        ) {
          pattern = winningPattern;
        }
      });
    }

    return pattern;
  };

  private static getNewTile = (): Tile => {
    return {
      status: GameValue.Unplayed,
      winningTile: false,
    };
  };
}
