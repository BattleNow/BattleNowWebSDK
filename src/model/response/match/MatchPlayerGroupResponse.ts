export interface PlayerGroup {
  id: number;
  icon: string;
  name: string;
  leader: number;
}

export interface MatchPlayerGroupResponse {
  id: number;
  player_group: PlayerGroup;
  members: number[];
  create_at: string;
}
