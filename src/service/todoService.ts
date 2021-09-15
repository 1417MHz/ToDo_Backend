import {ITodoList} from '../interface/todo'
import {Todo} from '../model'
// import {certificateUser} from '../module/jwt'
// import {userToken, userInfo} from './authService'

// Todo 추가
async function addTodo(value: ITodoList) {
    return new Promise((resolve, reject) => {
        if(Error) {
            reject('* Failed adding Todo')
        } else {
            console.log('* Successfully added Todo')
            resolve(Todo.insertTodo(value))
        }
    })
}

// Todo 삭제

// Todo 수정


export {addTodo}
