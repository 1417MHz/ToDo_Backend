import {Request, Response} from 'express'
import {TodoService} from '../../service'

// Todo 추가
async function postTodoAdd(req: Request, res: Response, next: Function): Promise<void> {
    try {
        await TodoService.addTodo(req.body)
        res.status(201).json({success: true})
    } catch (e) {
        console.log(e)
        next(e)
    }
}

// Todo 삭제

// Todo 수정


export {postTodoAdd}
