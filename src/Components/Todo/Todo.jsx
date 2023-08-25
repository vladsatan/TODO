import React from 'react';
import "./Todo.css";
import { useDispatch } from 'react-redux';
import { changeStatus } from '../../store/reducers/todos/todoSlice';
import { Box, Checkbox, Typography } from '@mui/material';
import { teal } from '@mui/material/colors';
import theme from '../../styles/stylesConfig';

const Todo = (props) => {

    let { item } = props;
    const dispatch = useDispatch();

    const toggleStatus = (id) => {
       dispatch(changeStatus(id));
    }

    return (
        <Box sx={theme.todo}>
            <Typography sx={item.status === true ? theme.readyTask : null}>{item.text}</Typography>
            <Checkbox 
            sx={{color: teal[500],'&.Mui-checked': {color: teal[500]}}} 
            defaultChecked 
            color="success" 
            checked={item.status} 
            onClick={()=> toggleStatus(item.id)} 
            />
        </Box>
    );

}

export default Todo;
