
 


export default function todoReducer(state = {todos: []}, action) {
  if (action.type === "ADD_TODO") {
    return {
      ...state,
      todos: [
        ...state.todos,
        { id: Date.now(), text: action.payload, completed: false },
      ],
    };
  }

  else if (action.type === "REMOVE_TODO") {
    return {
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.payload),
    };
  }
  else if (action.type === "TOGGLE_TODO") {
    return {
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      ),
    };
  }
    else {
        return state;
    }
}
