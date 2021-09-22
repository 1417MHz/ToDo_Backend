import {ITodoList} from '../interface/todo'
import {Todo} from '../model'
// import {certificateUser} from '../module/jwt'
// import {userToken, userInfo} from './authService'

// Todo 조회
async function getTodo(): Promise<any> {
    try {
        const todoData = await Todo.selectTodo()
        if (!todoData) {
            throw new Error('* ToDo list not found')
        } else {
            return todoData
        }
    } catch (e) {
        throw e
    }
}

// Todo 추가
// async function addTodo(value: ITodoList) {
//     return new Promise((resolve, reject) => {
//         if(Error) {
//             console.log(Error)
//             reject('* Failed adding Todo')
//         } else {
//             console.log('* Successfully added Todo')
//             resolve(Todo.insertTodo(value))
//         }
//     })
// }

async function addTodo(value: ITodoList): Promise<any> {
    try {
        console.log('* Successfully added Todo')
        await Todo.insertTodo(value)
    } catch (e) {
        console.log('* Failed adding Todo')
        throw e
    }
}

// Todo 삭제
async function removeTodo(value: ITodoList): Promise<any> {
    try {
        console.log('* Successfully removed Todo')
        await Todo.deleteTodo(value)
    } catch (e) {
        console.log('* Failed removing ToDo')
        throw e
    }
}

// Todo 수정


export {getTodo, addTodo, removeTodo}
