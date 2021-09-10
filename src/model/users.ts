import {db} from "../module";

async function findOne(): Promise<number> {
  try {
    const [row] = await db.execute('SELECT 11 AS asd FROM dual')
    return row ? row.asd : 0
  } catch (e) {
    throw e
  }
}

export {findOne}
