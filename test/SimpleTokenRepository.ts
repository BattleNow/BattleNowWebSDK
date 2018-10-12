import { TokenRepository } from '../src/token/TokenRepository'

export default class SimpleTokenRepository implements TokenRepository{
  private token : string = ""
  get(): string {
    return this.token
  }

  save(tokenKey: string): void {
    this.token = tokenKey
  }

}
