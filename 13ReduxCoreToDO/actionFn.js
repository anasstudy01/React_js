import { add, remove, toggle, add_user } from "./constant.js";

export function addNumber(todo) {
  return {
    type: add,
    payload: todo,
  };
}

export function RemoveNumber(todoId) {
  return {
    type: remove,
    payload: todoId,
  };
}

export function toggleNumber(todoId) {
  return {
    type: toggle,
    payload: todoId,
  };
}

export function addUser(user) {
  return {
    type: add_user,
    payload: user,
  };
}
