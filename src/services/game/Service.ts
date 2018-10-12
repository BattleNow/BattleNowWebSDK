import BaseService from '../BaseService'
import RequestUtil from '../../utils/RequestUtil'
import ListResponse from '../../model/response/ListResponse'
import { GameResponse } from '../../model/response/game/GameResponse'

export default class GameServices extends BaseService {
  async getGameList(queryParam: object) {
    const response = await this.fetch(RequestUtil.buildQueryParams(`${this.baseURL}/games`, queryParam), RequestUtil.buildJSONQuery('get'))
    const gameListResponse: ListResponse<GameResponse> = await response.json() as ListResponse<GameResponse>
    return gameListResponse
  }

  async getGame(gameId: number): Promise<GameResponse> {
    const response = await this.fetch(`${this.baseURL}/games/${gameId}`, RequestUtil.buildJSONQuery('get'))
    const gameResponse: GameResponse = await response.json() as GameResponse
    return gameResponse
  }
}
