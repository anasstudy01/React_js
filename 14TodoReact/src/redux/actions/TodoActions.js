import { add, remove, toggle,  } from "../constant/constant.js";

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

