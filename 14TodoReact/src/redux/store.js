import { combineReducers, createStore } from "redux";
import  numberReducer  from "./reducers/todoReducer.js";

import userReducer from "./reducers/userReducer.js"


const root =combineReducers({
    todoState:numberReducer,
    userState:userReducer,
})




export const store = createStore(root);


store.subscribe(()=>{console.log(store.getState())});




