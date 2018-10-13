import BaseService from './BaseService'
import ListResponse from '../model/response/ListResponse'
import RequestUtil from '../utils/RequestUtil'
import { MatchResponse } from '../model/response/match/MatchResponse'
import { UserResponse } from '../model/response/user/UserResponse'
import { MatchPlayerGroupResponse } from '../model/response/match/MatchPlayerGroupResponse'
import JoinMatchRequestBody from '../model/request/match/JoinMatchRequestBody'
import { MatchChallengeTypeResponse } from '../model/response/match/MatchChallengeTypeResponse'
import { MatchUserRankingResponse } from '../model/response/match/MatchUserRankingResponse'
import { MatchPlayerGroupRankingResponse } from '../model/response/match/MatchPlayerGroupRankingResponse'

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

  /**
   * get match player list
   * @param matchId match id
   * @param queryParams url query params to request
   */
  async getMatchPlayer(matchId: number, queryParams: object = {}): Promise<ListResponse<UserResponse>> {
    const response = await this.fetch(RequestUtil.buildQueryParams(`${this.baseURL}/match/${matchId}/players`, queryParams), RequestUtil.buildJSONQuery('get'))
    return await response.json() as ListResponse<UserResponse>
  }

  /**
   * get match player group list
   * @param matchId match id
   * @param queryParams url query params to request
   */
  async getMatchPlayerGroupList(matchId: number, queryParams: object = {}): Promise<ListResponse<MatchPlayerGroupResponse>> {
    const response = await this.fetch(RequestUtil.buildQueryParams(`${this.baseURL}/match/${matchId}/groups`, queryParams), RequestUtil.buildJSONQuery('get'))
    return await response.json() as ListResponse<MatchPlayerGroupResponse>
  }

  /**
   * get match player group member list
   * @param matchId match id
   * @param matchPlayerGroupId match player group id  (it different from playerGroupId)
   */
  async getMatchPlayerGroupMemberList(matchId: number, matchPlayerGroupId: number): Promise<ListResponse<UserResponse>> {
    const response = await this.fetch(`${this.baseURL}/match/${matchId}/group/${matchPlayerGroupId}/members`, RequestUtil.buildJSONQuery('get'))
    return await response.json() as ListResponse<UserResponse>
  }

  /**
   * join match
   * @param matchId match id
   * @param body join match request body
   */
  async joinMatch(matchId: number, body: JoinMatchRequestBody): Promise<any> {
    return await this.fetch(`${this.baseURL}/match/${matchId}/join`, RequestUtil.buildJsonWithAuth(body, this.tokenRepo.get(), 'put'))
  }

  /**
   * get match challenge type list
   * @param matchId match id
   * @param queryParams url query params to request
   */
  async getMatchChallengeTypeList(matchId: number, queryParams: object = {}): Promise<ListResponse<MatchChallengeTypeResponse>> {
    const response = await this.fetch(RequestUtil.buildQueryParams(`${this.baseURL}/match/${matchId}/types`, queryParams), RequestUtil.buildJSONQuery('get'))
    return await response.json() as ListResponse<MatchChallengeTypeResponse>
  }

  /**
   * get match user ranking list
   * @param matchId match id
   * @param queryParams  url query params to request
   */
  async getMatchPlayerRankingList(matchId: number, queryParams: object = {}): Promise<ListResponse<MatchUserRankingResponse>> {
    const response = await this.fetch(RequestUtil.buildQueryParams(`${this.baseURL}/match/${matchId}/user/rank`, queryParams), RequestUtil.buildJSONQuery('get'))
    return await response.json() as ListResponse<MatchUserRankingResponse>
  }

  /**
   * get match player group ranking list
   * @param matchId match id
   * @param queryParams  url query params to request
   */
  async getMatchPlayerGroupRankingList(matchId: number, queryParams: object = {}): Promise<ListResponse<MatchPlayerGroupRankingResponse>> {
    const response = await this.fetch(RequestUtil.buildQueryParams(`${this.baseURL}/match/${matchId}/group/rank`, queryParams), RequestUtil.buildJSONQuery('get'))
    return await response.json() as ListResponse<MatchPlayerGroupRankingResponse>
  }
}
