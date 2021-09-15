import express from 'express'
import authRouter from './auth'
import userRouter from './user'
import todoRouter from './todo'

const router = express.Router()

router.use('/api/auth', authRouter)
router.use('/api/user', userRouter)
router.use('/api/todo', todoRouter)

export default router
