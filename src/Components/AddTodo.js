import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../Reducers/todoSlider";

const AddToDo = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    task: "",
    contentError: null,
  });
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: null,
    });
  };

  const add = () => {
    if (task === "") {
      setState({ ...state, contentError: "Add task" });
      return;
    }
    dispatch(addToDo({ newTask: task }));
    setState({ ...state, task: "" });
  };

  const { task } = state;

  return (
    <div className="form">
      <h1>React-Redux-ToDO</h1>
      <input
        type="text"
        value={task}
        name="Task"
        onChange={handleChange}
      ></input>
      <button type="button" className="button" onClick={add}>
        Add
      </button>
    </div>
  );
};
export default AddTodo;
