import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const ListTodo = () => {
  const items = useSelector((state) => {
    return state.todos;
  });

  return (
    <section className="todo-container">
      <ul className="tasks-list">
        {items?.map((item) => (
          <Todo item={item} />
        ))}
      </ul>
    </section>
  );
};

export default ListTodo;
