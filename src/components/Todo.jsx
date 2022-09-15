import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

const Todo = ({ item }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(
      deleteTodo({
        id: item.id,
      })
    );
  };

  return (
    <li className="todo-item">
      <div className="todo-title" key={item.id}>
        {item.title}
      </div>
      <div>
        <button
          className="deleteButton"
          onClick={() => {
            deleteItem();
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
