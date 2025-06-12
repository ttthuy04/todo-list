const init = [
  {
    id: 1,
    content: "Công việc 1",
    completed: true,
  },
  {
    id: 2,
    content: "Công việc 2",
    completed: false,
  },
  {
    id: 3,
    content: "Công việc 3",
    completed: false,
  },
];

const todoReducer = (state = init, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          content: action.content,
          completed: false,
        },
      ];

    case "COMPLETE_TODO":
      return state.map((item) =>
        item.id === action.id ? { ...item, completed: !item.completed } : item
      );

    case "DELETE_TODO":
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
};

export default todoReducer;
