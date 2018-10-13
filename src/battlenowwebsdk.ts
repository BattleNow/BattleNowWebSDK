import { TokenRepository } from './token/TokenRepository'
import UserService from './services/UserService'
import ChallengeServices from './services/ChallengeService'
import GameServices from './services/GameService'
import PlayerGroupServices from './services/PlayerGroupService'
import MatchServices from './services/MatchService'

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
