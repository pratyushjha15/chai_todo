import React, {useState} from 'react'

export const EditTodoform = ({editTodo,task}) => { 
    const [value, setValue] = useState(task.task)
const handleSubmit = e => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("")
}
return (
    <form className='Todoform' onSubmit={handleSubmit}>
    <input type = "text" className='Todo-input' value= {value} placeholder='Update Task' onChange={(e) => setValue(e.target.value)}/>
    <button type = 'submit' className='Todo-btn'>
        Update Task
    </button>
    </form>
)
}
