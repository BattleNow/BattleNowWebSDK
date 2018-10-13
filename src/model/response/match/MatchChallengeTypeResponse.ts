export interface Game {
  id: number;
  name: string;
  game_series_id: number;
  cover: string;
  icon: string;
}

export interface MatchChallengeTypeResponse {
  id: number;
  name: string;
  game: Game;
  game_id: number;
}
