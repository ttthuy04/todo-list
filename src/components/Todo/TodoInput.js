import React, { useRef } from "react";
import { GrAdd } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { createTodo } from "../../action/todo";
function TodoInput() {
  const dispatch = useDispatch();

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.elements.content.value !== "") {
      dispatch(createTodo(e.target.elements.content.value));
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <div className="todo__input">
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} name="content"></input>
          <button type="submit">
            <GrAdd />
          </button>
        </form>
      </div>
    </div>
  );
}

export default TodoInput;
