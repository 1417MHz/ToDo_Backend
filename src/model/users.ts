import {db} from '../module'
import {IUser, IUserCreate} from '../interface/user'

async function findOne(): Promise<number> {
  try {
    const [row] = await db.execute('select * from Users')
    return row || 0
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

export {findOne, createUser}
