import {add,remove,toggle}  from "./constant.js";

export function addTodo(todo) {
  return {
    type: add,
    payload: todo,
  };
}
export function removeTodoActionCreator(todoid) {
    return {
      type: remove,
      payload:todoid
    };
  }
  
  export function toggleTodoActionCreator(todoid) {
      return {
          type: toggle,
          payload: todoid
      };
      }