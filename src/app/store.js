import { configureStore } from "@reduxjs/toolkit";
import todoAppReducer from "../features/todo/todoSlice";

export default configureStore({
  reducer: {
    todo_pp: todoAppReducer,
  },
});
