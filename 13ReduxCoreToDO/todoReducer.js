import { add,remove,toggle } from "./constant.js";

const initialstate = {
  todos: [],
};

export default function TodoReducer(state = initialstate, action) {


  if (action.type === add) {
    return {
      ...state,
      todos: [
        ...state.todos,
        { id: Date.now(), text: action.payload, completed: false },
      ],
    };
  }



  if (action.type === remove) {
    return {
      ...state,
      todos: state.todos.filter((todo) => todo.id !== action.payload),
    };
  } else if (action.type === toggle) {
    return {
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      ),
    };
  } else {
    return state;
  }
}
