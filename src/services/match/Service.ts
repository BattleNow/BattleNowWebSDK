import BaseService from '../BaseService'
import ListResponse from '../../model/response/ListResponse'
import RequestUtil from '../../utils/RequestUtil'
import { MatchResponse } from '../../model/response/match/MatchResponse'

export default class MatchServices extends BaseService {
  /**
   * get match list
   * @param queryParam query param (like page,size,leader etc...)
   */
  async getMatchList(queryParam: object): Promise<ListResponse<MatchResponse>> {
    const response = await this.fetch(RequestUtil.buildQueryParams(`${this.baseURL}/match`, queryParam), RequestUtil.buildJSONQuery('get'))
    const MatchListResponse: ListResponse<MatchResponse> = await response.json() as ListResponse<MatchResponse>
    return MatchListResponse
  }

  /**
   * get match by id
   * @param matchId player group id
   */
  async getMatch(matchId: number): Promise<MatchResponse> {
    const response = await this.fetch(`${this.baseURL}/match/${matchId}`, RequestUtil.buildJSONQuery('get'))
    const MatchResponse: MatchResponse = await response.json() as MatchResponse
    return MatchResponse
  }
}
