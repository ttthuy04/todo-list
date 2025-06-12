import React from "react";
import "./Todo.scss";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
function Todo() {
  return (
    <>
      <div className="todo">
        <TodoInput></TodoInput>
        <TodoList></TodoList>
      </div>
    </>
  );
}

export default Todo;
