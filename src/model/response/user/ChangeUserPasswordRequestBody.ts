export default class ChangeUserPasswordRequestBody {
  username: String
  prev_password: String
  new_password: String

  constructor(username: String, prev_password: String, new_password: String) {
    this.username = username
    this.prev_password = prev_password
    this.new_password = new_password
  }
}
