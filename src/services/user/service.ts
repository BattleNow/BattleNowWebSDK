import UserLoginResponse from '../../model/response/user/UserLoginResponse'
import LoginRequestBody from '../../model/request/user/LoginRequestBody'
import RequestUtil from '../../utils/RequestUtil'
import { TokenRepository } from '../../token/TokenRepository'
import { UserResponse } from '../../model/response/user/UserResponse'

export default class UserService {
  private readonly baseURL: string
  private fetch = require('node-fetch')
  private readonly tokenRepo: TokenRepository

  constructor(baseURL: string, tokenRepo: TokenRepository) {
    this.baseURL = baseURL
    this.tokenRepo = tokenRepo
  }

  public async login(username: string, password: string) {
    const body = new LoginRequestBody(username, password)
    let response = await this.fetch(this.baseURL + '/user/auth', RequestUtil.buildJsonBody(body))
    const loginResponse: UserLoginResponse = await response.json() as UserLoginResponse
    this.tokenRepo.save(loginResponse.Payload.token)
    return loginResponse
  }

  public async getUser(userId: number) {
    let response = await this.fetch(`${this.baseURL}/user/${userId}`, RequestUtil.buildJSONQuery('get'))
    const userResponse: UserResponse = await response.json() as UserResponse
    return userResponse
  }
}
