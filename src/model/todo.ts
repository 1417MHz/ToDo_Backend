import {ITodoList} from "../interface/todo";
import {db} from "../module";

// 쿼리

// Todo 추가
async function insertTodo(value: ITodoList): Promise<any> {
    try {
        await db.execute('INSERT INTO Todos SET ?', value)
    } catch (e) {
        throw e
    }
}

// Todo 삭제

// Todo 수정


export {insertTodo}
