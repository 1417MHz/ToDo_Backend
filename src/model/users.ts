import {db} from '../module'

async function findOne(): Promise<number> {
  try {
    const [row] = await db.execute('SELECT * FROM Users')
    return row || 0
  } catch (e) {
    throw e
  }
}

export {findOne}
