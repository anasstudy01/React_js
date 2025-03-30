import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./constant.js";


// fuction that return an action object are  called action creators

export function addTodoActionCreator(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  };

}

export function removeTodoActionCreator(todoid) {
  return {
    type: REMOVE_TODO,
    payload:todoid
  };
}

export function toggleTodoActionCreator(todoid) {
    return {
        type: TOGGLE_TODO,
        payload: todoid
    };
    }


export function addUserActionCreator(user) {
    return {
        type: ADD_USER,
        payload: user
    };
}