import * as db from './mysql'

export async function init(): Promise<void> {
  await Promise.all([db.init()])
}

export {db}
