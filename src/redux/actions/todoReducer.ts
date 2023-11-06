import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: string
  task: string
  completed: boolean
}

const storeData = localStorage.getItem('todo')

const initialState: Todo[] = storeData ? JSON.parse(storeData) : []


export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload)
      localStorage.setItem('todo', JSON.stringify(state))
    },

  }
});

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;

export default todoSlice.reducer