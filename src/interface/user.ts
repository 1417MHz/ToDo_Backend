export interface IUserCreate {
  email: string
  password: string
  salt: string
}

export interface IUser extends IUserCreate {
  id: number
  createdAt: string
}
