import React from 'react';
import "./Todo.css";
import { useDispatch } from 'react-redux';
import { changeStatus } from '../../store/reducers/todos/todoSlice';

const Todo = (props) => {

    let { item } = props;
    const dispatch = useDispatch();

    const toggleStatus = (id) => {
       dispatch(changeStatus(id));
    }

    return (
        <div className='todo'>
            <p className={item.status === true ? 'task-ready' : ''}>{item.text}</p>
            <input type="checkbox" checked={item.status} onClick={()=> toggleStatus(item.id)} />
        </div>
    );

}

export default Todo;
