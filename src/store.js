import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./Reducers/todoSlider";

export default configureStore({
  reducer: {
    toDoApp: toDoReducer,
  },
});
