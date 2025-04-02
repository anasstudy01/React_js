import { addNumber, RemoveNumber,addUser } from "./actionFn.js";
import store from "./store.js";


console.log(store.getState())

store.dispatch(addNumber("Learn Redux"));
store.dispatch(addNumber("Learn React"));
store.dispatch(addNumber("Learn JavaScript"));

// removing


// store.dispatch(RemoveNumber(store.getState().todos[1].id));


// //adding user 
store.dispatch(addUser("anas"));
store.dispatch(addUser("ahmed"));
store.dispatch(addUser("ali"));



// console.log(JSON.stringify(store.getState(), null, 2));
// console.log("--------------------------------------------------------");

const ids = store.getState().todoState.todos.map((todo) =>console.log( todo.id));
