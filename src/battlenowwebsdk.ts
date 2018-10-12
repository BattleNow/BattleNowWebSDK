// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...
import Exception = Handlebars.Exception
import { TokenRepository } from './token/TokenRepository'
import UserService from './services/user/service'
import ChallengeServices from './services/challenge/Service'
import GameServices from './services/game/Service'
import PlayerGroupServices from './services/playergroup/Service'
import MatchServices from './services/match/Service'

export class BattleNowClient {
  userService: UserService
  tokenRepo: TokenRepository
  challengeService: ChallengeServices
  gameService: GameServices
  playerGroupService: PlayerGroupServices
  matchService: MatchServices

  constructor(baseUrl: string, tokenRepo: TokenRepository) {
    this.tokenRepo = tokenRepo
    this.userService = new UserService(baseUrl, tokenRepo)
    this.challengeService = new ChallengeServices(baseUrl, tokenRepo)
    this.gameService = new GameServices(baseUrl, tokenRepo)
    this.playerGroupService = new PlayerGroupServices(baseUrl, tokenRepo)
    this.matchService = new MatchServices(baseUrl, tokenRepo)
  }

}

export class ClientBuilder {
  private url: string = ''
  tokenRepo?: TokenRepository

  public setBaseURL(url: string): ClientBuilder {
    this.url = url
    return this
  }

  public setTokenRepository(tokenRepo: TokenRepository): ClientBuilder {
    this.tokenRepo = tokenRepo
    return this
  }

  public build(): BattleNowClient {
    return new BattleNowClient(this.url, this.tokenRepo)
  }

}
