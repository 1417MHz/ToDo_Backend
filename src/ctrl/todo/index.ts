import express from 'express'
import * as ctrl from './todo-ctrl'

const app = express.Router()

app.post('/add', ctrl.postTodoAdd)
app.get('/get', ctrl.getTodoList)
app.post('/del', ctrl.postTodoDelete)

export default app
