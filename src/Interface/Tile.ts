import { GameValue } from "../Enums/GameValue";

export interface Tile {
  status: GameValue;
  winningTile: boolean;
}
