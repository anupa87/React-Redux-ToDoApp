import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  // Add todo
  const formSubmit = (e) => {
    e.preventDefault();
    // validating if the input field is empty
    if (value.trim().length === 0) {
      alert("Enter your todo");
      return;
    }
    // Dispatch the new todo to the store
    dispatch(addTodo({ todo: value }));
    // Clear the input field after adding
    setValue("");
  };

  return (
    <form className="form-inline mt-3 mb-3 d-flex justify-content-between">
      <div>
        <input
          type="text"
          className="form-control mb-2 mr-sm-2 "
          placeholder="Enter your todo..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </div>
      <div>
        <button
          type="submit"
          className="btn btn-primary m-2"
          onSubmit={formSubmit}
        >
          Add
        </button>
      </div>
    </form>
  );
};
export default AddTodo;
