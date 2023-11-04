import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: number
  task: string
  completed: boolean
}


export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      [...state, action.payload] 
    }
  }
});

export default todoSlice.reducer