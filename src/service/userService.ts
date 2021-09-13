import {User} from '../model'

async function findOne(): Promise<number> {
  try {
    return await User.findOne()
  } catch (e) {
    throw e
  }
}

export {findOne}
