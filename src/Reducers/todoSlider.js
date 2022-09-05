import { createSlice } from "@reduxjs/toolkit";

export const toDoSlider = createSlice({
  name: "todoApp",
  initialState: {
    todoList: [
      {
        id: 0,
        task: "",
      },
    ],
  },
  reducers: {
    addToDo: (state, action) => {
      let newTodoList = {
        id: Math.random(),
        task: action.payload.newTask,
      };
      state.todoList.push(newTodoList);
    },
    deleteToDo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((item) => item.id !== action.payload.id);
    },
    editToDo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});

export const { addToDo, deleteToDo, editToDo } = toDoSlider.actions;
export default toDoSlider.reducer;
