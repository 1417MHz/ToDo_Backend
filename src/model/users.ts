import {db} from '../module'
import {IUser, IUserCreate} from '../interface/user'

async function findOne(): Promise<number> {
  try {
    const [row] = await db.execute('SELECT * FROM Users')
    return row || 0
  } catch (e) {
    throw e
  }
}

async function loginUser(value: IUser): Promise<any> {
  try {
    const [row] = await db.execute('SELECT * FROM Users WHERE email = ?', value.email)
    return row
  } catch (e) {
    throw e
  }
}

async function createUser(value: IUserCreate): Promise<any> {
  try {
    await db.execute('INSERT INTO Users SET ?', value)
  } catch (e) {
    throw e
  }
}

export {findOne, createUser, loginUser}
