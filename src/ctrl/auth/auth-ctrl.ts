import {Request, Response} from 'express'
import {AuthService} from '../../service'

async function postAuth(req: Request, res: Response, next: Function): Promise<void> {
  try {
  } catch (e) {
    next(e)
  }
}

async function postAuthRegister(req: Request, res: Response, next: Function): Promise<void> {
  try {
    console.log(req)
    await AuthService.register(req.body)
    res.status(201).json({success: true})
  } catch (e) {
    console.log(e)
    next(e)
  }
}

export {postAuth, postAuthRegister}
