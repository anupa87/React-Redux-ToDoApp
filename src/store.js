import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./Reducers/toDoSlider";

export default configureStore({
  reducer: {
    toDoApp: toDoReducer,
  },
});
