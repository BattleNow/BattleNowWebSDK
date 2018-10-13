import BaseService from './BaseService'
import RequestUtil from '../utils/RequestUtil'
import ListResponse from '../model/response/ListResponse'
import { PlayerGroupResponse } from '../model/response/group/PlayerGroupResponse'
import CreatePlayerGroupRequestBody from '../model/request/playergroup/CreatePlayerGroupRequestBody'
import CreatePlayerGroupResponse from '../model/response/group/CreatePlayerGroupResponse'
import { UserResponse } from '../model/response/user/UserResponse'

/**
 * Player group service
 */
export default class PlayerGroupServices extends BaseService {
  /**
   * get player group list
   * @param queryParam query param (like page,size,leader etc...)
   */
  async getPlayerGroupList(queryParam: object): Promise<ListResponse<PlayerGroupResponse>> {
    const response = await this.fetch(RequestUtil.buildQueryParams(`${this.baseURL}/challenge/player/groups`, queryParam), RequestUtil.buildJSONQuery('get'))
    return await response.json() as ListResponse<PlayerGroupResponse>
  }

  /**
   * get player group by id
   * @param groupId player group id
   */
  async getPlayerGroup(groupId: number): Promise<PlayerGroupResponse> {
    const response = await this.fetch(`${this.baseURL}/challenge/player/group/${groupId}`, RequestUtil.buildJSONQuery('get'))
    return await response.json() as PlayerGroupResponse
  }

  async createPlayerGroup(body: CreatePlayerGroupRequestBody): Promise<CreatePlayerGroupResponse> {
    const response = await this.fetch(`${this.baseURL}/challenge/player/group/create`, RequestUtil.buildJsonBodyWithAuth(body, this.tokenRepo.get()))
    return await response.json() as CreatePlayerGroupResponse
  }

  async sendJoinGroupApply(groupId: number): Promise<any> {
    const response = await this.fetch(`${this.baseURL}/challenge/player/group/${groupId}/apply`, RequestUtil.buildJsonBodyWithAuth({}, this.tokenRepo.get()))
    return response
  }

  async getPlayerGroupMember(groupId: number): Promise<ListResponse<UserResponse>> {
    const response = await this.fetch(`${this.baseURL}/challenge/player/group/${groupId}/members`, RequestUtil.buildJSONQuery('get'))
    return await response.json() as ListResponse<UserResponse>
  }

  async deletePlayerGroup(groupId: number): Promise<any> {
    const response = await this.fetch(`${this.baseURL}/challenge/player/group/${groupId}/remove`, RequestUtil.buildWithAuth( this.tokenRepo.get(),'delete'))
    return response
  }
}
