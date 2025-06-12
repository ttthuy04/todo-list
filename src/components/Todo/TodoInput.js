import React from "react";
import { GrAdd } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { createTodo } from "../../action/todo";
function TodoInput() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.elements.content.value !== "") {
      dispatch(createTodo(e.target.elements.content.value));
    }
  };
  return (
    <div>
      <div className="todo__input">
        <form onSubmit={handleSubmit}>
          <input name="content"></input>
          <button type="submit">
            <GrAdd />
          </button>
        </form>
      </div>
    </div>
  );
}

export default TodoInput;
