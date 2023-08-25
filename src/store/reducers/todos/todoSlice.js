import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        // { id: 3, text: 'Learn JavaScript', status: true },
        // { id: 2, text: 'Learn React', status: true },
        // { id: 1, text: 'Learn Redux', status: false }
    ]
}

export const todoSlice = createSlice({
    
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.unshift({
                id: action.payload.id,
                text: action.payload.text,
                status: false
            })
        },
        changeStatus(state, { payload }) {
            const todo = state.todos.find(todo => todo.id === payload)
            todo.status = !todo.status
        }
    }
})

export const { addTodo, changeStatus } = todoSlice.actions

export default todoSlice.reducer