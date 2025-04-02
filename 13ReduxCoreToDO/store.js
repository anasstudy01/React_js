import { createStore } from "redux";
import TodoReducer from "./todoReducer.js";
import { add } from "./constant.js";



const store = createStore(TodoReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({  type: "add",payload: "Learn Redux",});
store.dispatch({ type: "add", payload: "Learn React" });
store.dispatch({ type: "remove", payload:store.getState().todos[0].id });