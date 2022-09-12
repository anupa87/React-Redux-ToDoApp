import { createSlice } from "@reduxjs/toolkit";

export const toDoSlider = createSlice({
  name: "toDoApp",
  initialState: {
    toDoList: [
      {
        id: 0,
        task: "",
      },
    ],
  },
  reducers: {
    addToDo: (state, action) => {
      let newToDoList = {
        id: Math.random(),
        task: action.payload.newTask,
      };
      state.toDoList.push(newToDoList);
    },
    deleteToDo: (state, action) => {
      let { toDoList } = state;
      state.toDoList = toDoList.filter((item) => item.id !== action.payload.id);
    },
    editToDo: (state, action) => {
      let { toDoList } = state;
      state.toDoList = toDoList.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});

export const { addToDo, deleteToDo, editToDo } = toDoSlider.actions;
export default toDoSlider.reducer;
