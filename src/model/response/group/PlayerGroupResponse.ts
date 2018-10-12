export interface PlayerGroupResponse {
  id: number;
  create_at: string;
  icon: string;
  name: string;
  enable: boolean;
  notice: string;
  leader: number;
  members: number[];
}
