import { add, remove, toggle, add_user } from "./constant.js";

export function addNumber(todo) {
    return {
        type: add, // Fixed constant usage
        payload: todo,
    };
}

export function removeNumber(todoId) {
    return {
        type: remove, // Fixed constant usage
        payload: todoId,
    };
}

export function toggleNumber(todoId) {
    return {
        type: toggle, // Fixed constant usage
        payload: todoId,
    };
}

export function addUser(user) {
    return {
        type: add_user, // Fixed constant usage
        payload: user,
    };
}