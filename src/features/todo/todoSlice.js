import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoApp",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Math.random(),
        title: action.payload.todo,
      };
      state.push(newTodo);
    },

    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
