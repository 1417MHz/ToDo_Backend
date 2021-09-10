import {IUser} from "../interface/user";
import {db} from "../module";

async function findOne(id: number): Promise<IUser> {
  try {
    db.query('select 1 from dual', function(error, results, fields) {
        if(error) throw error
        console.log(results[0])
    })
  } catch (e) {
    throw e
  }
}

export {findOne}
