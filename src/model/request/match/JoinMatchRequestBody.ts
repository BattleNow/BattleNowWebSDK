export default class JoinMatchRequestBody {
  user?: number
  group?: number
  group_members?: Array<number>


  constructor(user?: number | undefined, group?: number | undefined, group_members?: Array<number> | undefined) {
    this.user = user
    this.group = group
    this.group_members = group_members
  }
}
