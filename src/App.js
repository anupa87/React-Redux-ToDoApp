import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";


const App = () => {
  return (
    <div className="container  p-4 mt-5)">
      <h1 className="text-center pb-5">React-Redux-ToDo-App</h1>
      <AddTodo />
      <ListTodo />
    </div>
  );
};

export default App;
