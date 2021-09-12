import express from 'express'
import * as ctrl from './auth-ctrl'

const app = express.Router()

//로그인
app.post('/', ctrl.postAuth)

//회원가입
app.post('/register', ctrl.postAuthRegister)

//토큰 리프레시
app.get('/', ctrl.postAuth)

export default app
