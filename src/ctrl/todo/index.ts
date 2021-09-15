import express from 'express'
import * as ctrl from './todo-ctrl'

const app = express.Router()

app.post('/add', ctrl.postTodoAdd)

export default app
