export default class CreatePlayerGroupRequestBody {
  name: string
  members?: Array<number>

  constructor(name: string, members: Array<number>) {
    this.name = name
    this.members = members
  }
}
