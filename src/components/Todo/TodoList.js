import React from "react";
import { useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function TodoList() {
  const todoList = useSelector((state) => state.todoReducer);
  console.log(todoList);

  return (
    <div>
      {todoList && (
        <ul className="todo__list">
          {todoList.map((item) => (
            <li className="todo__item" key={item.id}>
              <span>{item.content}</span>
              <button className="todo__btn todo__btn--complete">
                <FaCheck />
              </button>
              <button className="todo__btn todo__btn--delete">
                <MdDelete />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
