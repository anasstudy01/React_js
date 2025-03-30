import { addTodoActionCreator, removeTodoActionCreator } from "./createAction.js";
import store from "./store.js";



console.log(store.getState());


store.dispatch(addTodoActionCreator('buy milk'));
store.dispatch(addTodoActionCreator('buy eggs'));
store.dispatch(addTodoActionCreator('buy bread'));


store.dispatch(removeTodoActionCreator(store.getState().todos[1].id));