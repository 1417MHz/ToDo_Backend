import {Request, Response} from 'express'
import {AuthService} from '../../service'

// 로그인
async function postAuthLogin(req: Request, res: Response, next: Function): Promise<void> {
  try {
    await AuthService.login(req.body)
    res.status(200).json({success: true})
  } catch (e) {
    console.log('Login Failed')
    next(e)
  }
}

// 회원가입
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

export {postAuthLogin, postAuthRegister}
