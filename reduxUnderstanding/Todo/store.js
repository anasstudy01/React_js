import { createStore } from "redux";
import mainReducer from "./mainReducer.js";





const store = createStore(mainReducer);


store.subscribe(() => {
    console.log("State updated:", store.getState());
    }
);

// store.dispatch({ type: "add",payload: "Learn Redux" });
// store.dispatch({ type: "add",payload: "jawascripth" });
// store.dispatch({type:"remove",payload:store.getState().todos[0].id});