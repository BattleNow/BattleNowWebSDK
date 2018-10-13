import UserLoginResponse from '../model/response/user/UserLoginResponse'
import LoginRequestBody from '../model/request/user/LoginRequestBody'
import RequestUtil from '../utils/RequestUtil'
import { TokenRepository } from '../token/TokenRepository'
import { Userprofile, UserResponse } from '../model/response/user/UserResponse'
import ChangeUserPasswordRequestBody from '../model/response/user/ChangeUserPasswordRequestBody'
import ChangeUserProfileRequestBody from '../model/response/user/ChangeUserProfileRequestBody'
import ChangeUserProfileResponse from '../model/response/user/ChangeUserProfileResponse'

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

  public async changePassword(username: string, prevPassword: string, newPassword: string): Promise<any> {
    let response = await this.fetch(`${this.baseURL}/user/password`,
      RequestUtil.buildJsonBody(new ChangeUserPasswordRequestBody(username, prevPassword, newPassword))
    )
    return response
  }

  public async changeUserProfile(body: ChangeUserProfileRequestBody, userId: number): Promise<Userprofile> {
    let response = await this.fetch(`${this.baseURL}/user/${userId}/profile`,
      RequestUtil.buildJsonWithAuth(body, this.tokenRepo.get(), 'patch')
    )
    return await response.json() as Userprofile
  }

  public async changeUserAvatar(file: File, userId: number) {
    let form = new FormData()
    form.append('avatar', file)
    let response = await this.fetch(`${this.baseURL}/user/${userId}/profile/avatar`, {
      method: 'put',
      body: form,
      headers: {
        'Content-type': 'Content-Type: multipart/form-data; boundary=—-WebKitFormBoundaryfgtsKTYLsT7PNUVD',
        'Authorization': `Bearer ${this.tokenRepo.get()}`
      }
    })
    return await response.json() as ChangeUserProfileResponse
  }
}
