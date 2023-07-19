import React, { useState } from 'react';
import "./CreateTodo.css";

const CreateTodo = (props) => {

    let { todos, setTodos } = props;
    const [task, setTask] = useState();

    const handleChange = (event) => {
        setTask(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(task){
            let lastTask = todos[0]
            let copy = Object.assign([], todos);
            copy.unshift({ id: lastTask.id + 1, text: task, status: false})
            setTodos(copy)
        }
    
    }

    return (
        <div className='CreateTodo'>
            <form onSubmit={handleSubmit}>
              <input type='text' placeholder='Create a new todo' onChange={handleChange} />
              <button>Add</button>
            </form>  
        </div>
    );
}

export default CreateTodo;
