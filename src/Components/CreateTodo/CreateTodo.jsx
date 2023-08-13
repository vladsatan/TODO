import React, { useState } from 'react';
import "./CreateTodo.css";
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/reducers/todos/todoSlice';

const CreateTodo = () => {

    const [task, setTask] = useState();
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setTask(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        let todo = { id: v4(), text: task, status: false }
        dispatch(addTodo(todo))
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
