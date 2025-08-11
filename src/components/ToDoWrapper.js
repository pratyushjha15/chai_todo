import React,{useState} from 'react'
import { Todoform } from './Todoform'
import { v4  as uuidv4 } from 'uuid';
import { Todo } from './Todo';
uuidv4();
export const ToDoWrapper = () =>{
    const [todos, setTodos] = useState([])

    const addTodo = todo => {

        setTodos([...todos, {id: uuidv4(), task: todo, completed:false, isEditing:false}])
        console.log(todos)
    }
    return (
        <div className='ToDoWrapper'>
        <Todoform addTodo = {addTodo} />
        <Todo/>
        </div>
    )
}