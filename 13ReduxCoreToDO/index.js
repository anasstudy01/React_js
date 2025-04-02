 import store from "./store.js";
store.dispatch({  type: "add",payload: "Learn Redux",});
store.dispatch({ type: "add", payload: "Learn React" });
store.dispatch({ type: "add", payload: "Learn JavaScript" });
store.dispatch({ type: "remove", payload:store.getState().todos[0].id });