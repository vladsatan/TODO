import React, { useState } from 'react';
import "./CreateTodo.css";
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/reducers/todos/todoSlice';
import { Box, TextField, Button } from '@mui/material';
import theme from '../../styles/stylesConfig';

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
        <Box sx={theme.box}>
            <form onSubmit={handleSubmit}>
                <TextField sx={theme.searchInput} label='Create a new todo' onChange={handleChange} />
                <Button color="secondary" sx={theme.button} variant="contained" type='submit'>Add</Button>
            </form>
        </Box>
    );

}

export default CreateTodo;
