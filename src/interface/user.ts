export interface IUserCreate {
  email: string
  password: string
  hash: string
}

export interface IUser extends IUserCreate {
  user_id: number
  register_date: string
}
