import { GameValue } from "../Enums/GameValue";
import { PlayerName } from "../Interface/PlayerName";

export const PLAYERS = Object.freeze<PlayerName>({
  Player1: {
    id: GameValue.Player1,
    description: "X",
  },
  Player2: {
    id: GameValue.Player2,
    description: "O",
  },
});
