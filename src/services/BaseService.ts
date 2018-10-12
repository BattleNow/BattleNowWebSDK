import { TokenRepository } from '../token/TokenRepository'

export default class BaseService {
  protected readonly baseURL: string
  protected fetch = require('node-fetch')
  protected readonly tokenRepo: TokenRepository

  constructor(baseURL: string, tokenRepo: TokenRepository) {
    this.baseURL = baseURL
    this.tokenRepo = tokenRepo
  }
}
