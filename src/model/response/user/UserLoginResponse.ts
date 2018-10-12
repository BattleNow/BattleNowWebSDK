export default interface UserLoginResponse {
  Payload: {
    token: string,
    uid: number,
    username: string
  }
}
