import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './reducers/todos/todoSlice'

export const store = configureStore({
  reducer: {
    todoList: todoSlice
  }
})