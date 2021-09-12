import {Request, Response} from 'express'
import {UserService} from '../../service'

async function getUser(req: Request, res: Response, next: Function): Promise<void> {
  try {
    const result = await UserService.findOne()
    res.status(200).json({result})
  } catch (e) {
    next(e)
  }
}

export {getUser}
