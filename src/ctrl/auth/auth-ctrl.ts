import {Request, Response} from 'express'

async function postAuth(req: Request, res: Response, next: Function): Promise<void> {
  try {

  } catch (e) {
    next(e)
  }
}

export {postAuth}