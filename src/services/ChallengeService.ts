import BaseService from './BaseService'
import RequestUtil from '../utils/RequestUtil'
import ListResponse from '../model/response/ListResponse'
import { CreateChallengeRequestBody } from '../model/request/challenge/CreateChallengeRequestBody'
import { CreateChallengeResponse } from '../model/response/challenge/CreateChallengeResponse'
import ChallengeResult = challenge.ChallengeResult

export default class ChallengeServices extends BaseService {
  async getChallengeList(queryParam: object) {

    const response = await this.fetch(RequestUtil.buildQueryParams(`${this.baseURL}/challenges`, queryParam), RequestUtil.buildJSONQuery('get'))
    const challengeListResponse: ListResponse<ChallengeResult> = await response.json() as ListResponse<ChallengeResult>
    return challengeListResponse
  }

  async getChallenge(challengeId: number): Promise<ChallengeResult> {
    const response = await this.fetch(`${this.baseURL}/challenge/${challengeId}`, RequestUtil.buildJSONQuery('get'))
    const challengeResponse: ChallengeResult = await response.json() as ChallengeResult
    return challengeResponse
  }

  async createChallenge(body: CreateChallengeRequestBody): Promise<CreateChallengeResponse> {
    const response = await this.fetch(`${this.baseURL}/web/challenge/create`, RequestUtil.buildJsonBodyWithAuth(body, this.tokenRepo.get()))
    const createChallengeResponse: CreateChallengeResponse = await response.json() as CreateChallengeResponse
    return createChallengeResponse
  }

  async acceptChallenge(challengeId: number): Promise<any> {
    const response = await this.fetch(
      `${this.baseURL}/web/challenge/${challengeId}/accept`,
      RequestUtil.buildJsonBodyWithAuth({}, this.tokenRepo.get())
    )
    return response
  }

  async uploadChallengeResult(challengeId: number, result: number): Promise<any> {
    const response = await this.fetch(
      `${this.baseURL}/challenge/${challengeId}/result/upload`,
      RequestUtil.buildJsonBodyWithAuth({ result }, this.tokenRepo.get())
    )
    return response
  }
}
