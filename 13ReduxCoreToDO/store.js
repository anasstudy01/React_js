import { createStore } from "redux";
import TodoReducer from "./todoReducer.js";
import { add } from "./constant.js";



 
 const  store = createStore(TodoReducer);

store.subscribe(() => {
  console.log(store.getState());
});


export default store;