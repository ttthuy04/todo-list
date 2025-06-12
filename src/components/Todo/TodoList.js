import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaCheck, FaUndo } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { completeTodo, deleteTodo } from "../../action/todo";

function TodoList() {
  const todoList = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  const handleComplete = (id) => {
    dispatch(completeTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      {todoList && (
        <ul className="todo__list">
          {todoList.map((item) => (
            <li
              className={`todo__item ${
                item.completed ? "todo__item--completed" : ""
              }`}
              key={item.id}
            >
              <span className="todo__content">{item.content}</span>

              {item.completed ? (
                <button
                  className="todo__btn todo__btn--undo"
                  onClick={() => handleComplete(item.id)}
                  title="Undo"
                >
                  <FaUndo />
                </button>
              ) : (
                <button
                  className="todo__btn todo__btn--complete"
                  onClick={() => handleComplete(item.id)}
                  title="Complete"
                >
                  <FaCheck />
                </button>
              )}

              <button
                className="todo__btn todo__btn--delete"
                onClick={() => handleDelete(item.id)}
                title="Delete"
              >
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
