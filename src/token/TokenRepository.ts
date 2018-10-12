export interface TokenRepository {
  save(tokenKey: string): void

  get(): string
}
