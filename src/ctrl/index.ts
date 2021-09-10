import express from "express"
import authRouter from './auth'

const router = express.Router()

router.route('/api')

router.use(authRouter)

export default router

