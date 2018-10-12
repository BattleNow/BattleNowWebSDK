export class ChallengePlayer {
  player_type: string
  user?: number
  group?: number
  constructor(player_type: string, user: number, group?: number) {
    this.player_type = player_type
    this.user = user
    this.group = group
  }
}

export class CreateChallengeRequestBody {
  rival: ChallengePlayer
  title: string
  content: string
  challenger: ChallengePlayer
  type: number
  live_url: string
  time: string


  constructor(rival: ChallengePlayer, title: string, content: string, challenger: ChallengePlayer, type: number, live_url: string, time: string) {
    this.rival = rival
    this.title = title
    this.content = content
    this.challenger = challenger
    this.type = type
    this.live_url = live_url
    this.time = time
  }
}
