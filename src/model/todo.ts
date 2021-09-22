import {ITodoList} from "../interface/todo";
import {db} from "../module";

// 쿼리

// Todo 조회
async function selectTodo(): Promise<any> {
    try {
        const obj = await db.execute('SELECT * FROM Todos')
        console.log(obj)
        return obj
    } catch (e) {
        throw e
    }
}

// Todo 추가
async function insertTodo(value: ITodoList): Promise<any> {
    try {
        await db.execute('INSERT INTO Todos SET ?', value)
    } catch (e) {
        throw e
    }
}

// Todo 삭제
async function deleteTodo(value: ITodoList): Promise<any> {
    try {
        await db.execute('DELETE FROM Todos WHERE ?', value)
    } catch (e) {
        throw e
    }
}

// Todo 수정
// 제작 중
async function updateTodo(value: ITodoList): Promise<any> {
    try {
        await db.execute('UPDATE Todos ? WHERE post_id = ?',)
    } catch (e) {
        throw e
    }
}

export {selectTodo, insertTodo, deleteTodo}
