const init = [
  {
    id: 1,
    content: "Cong viec 1",
    completed: true,
  },
  {
    id: 2,
    content: "Cong viec 2",
    completed: false,
  },
  {
    id: 3,
    content: "Cong viec 3",
    completed: false,
  },
];
const todoReducer = (state = init, action) => {
  let newState = [...state];
  console.log(state, action);
  switch (action.type) {
    case "CREATE_TODO":
      newState = [
        ...newState,
        {
          id: Date.now(),
          content: action.content,
          completed: false,
        },
      ];
      return newState;

    default:
      return state;
  }
};
export default todoReducer;
