import {Request, Response} from 'express'
import {TodoService} from '../../service'

// Todo 조회
async function getTodoList(req: Request, res: Response, next: Function): Promise<void> {
    try {
        const todoData = await TodoService.getTodo()
        res.status(200).json({success: true, todoData})
    } catch (e) {
        res.status(400).json({success: false})
        next(e)
    }
}

// Todo 추가
async function postTodoAdd(req: Request, res: Response, next: Function): Promise<void> {
    try {
        await TodoService.addTodo(req.body)
        res.status(201).json({success: true})
    } catch (e) {
        res.status(400).json({success: false})
        next(e)
    }
}

// Todo 삭제
async function postTodoDelete(req: Request, res: Response, next: Function): Promise<any> {
    try {
        await TodoService.removeTodo(req.body)
        res.status(200).json({success: true})
    } catch (e) {
        res.status(400).json({success: false})
        next(e)
    }
}

// Todo 수정


export {getTodoList, postTodoAdd, postTodoDelete}
