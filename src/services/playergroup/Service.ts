import BaseService from '../BaseService'
import RequestUtil from '../../utils/RequestUtil'
import ListResponse from '../../model/response/ListResponse'
import { PlayerGroupResponse } from '../../model/response/group/PlayerGroupResponse'
import CreatePlayerGroupRequestBody from '../../model/request/playergroup/CreatePlayerGroupRequestBody'

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

  async createPlayerGroup(body: CreatePlayerGroupRequestBody): Promise<any> {
    const response = await this.fetch(`${this.baseURL}/challenge/player/group/create`, RequestUtil.buildJsonBodyWithAuth(body, this.tokenRepo.get()))
    return response
  }


}
