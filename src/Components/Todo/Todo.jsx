import React from 'react';
import "./Todo.css";

const Todo = (props) => {

    let { item, todos, setTodos } = props;

    const changeStatus = () => {
        let currIndex = todos.findIndex(e => item.id === e.id);
        let copy = Object.assign([], todos);
        item.status = !item.status
        copy[currIndex] = item
        setTodos(copy);
    }

    return (
        <div className='todo'>
            <p className={item.status === true ? 'task-ready' : ''}>{item.text}</p>
            <input type="checkbox" checked={item.status} onChange={changeStatus} />
        </div>
    );

}

export default Todo;