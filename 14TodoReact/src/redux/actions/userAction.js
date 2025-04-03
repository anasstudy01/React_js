import add_user from "../constant/constant.js";

export function addUser(user) {
    return {
      type: add_user,
      payload: user,
    };
  }
  