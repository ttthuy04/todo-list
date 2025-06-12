export const createTodo = (content) => {
  return {
    type: "CREATE_TODO",
    content: content,
  };
};

export const completeTodo = () => {
  return {
    type: "COMPLETE_TODO",
  };
};

export const deleteTodo = () => {
  return {
    type: "DELETE_TODO",
  };
};
