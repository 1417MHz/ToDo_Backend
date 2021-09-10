import express from 'express'
import * as ctrl from './user-ctrl'

const app = express.Router()

app.get('/', ctrl.getUser)

export default app
