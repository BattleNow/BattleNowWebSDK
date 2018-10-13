import { UserResponse } from '../user/UserResponse'

export default interface JoinApplyResponse {
  id: number,
  player_group: number,
  apply_user: UserResponse,
  state: string,
  create_at: string
}
