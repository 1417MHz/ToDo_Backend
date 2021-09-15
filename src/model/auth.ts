import {IUser, IUserCreate} from '../interface/user'
import {db} from '../module'

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

export {createUser, loginUser}
