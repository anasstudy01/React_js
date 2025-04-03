import { combineReducers, createStore } from "redux";
import  numberReducer  from "./todoReducer.js";
import { userReducer } from "./userReducer.js";


const root =combineReducers({
    todoState:numberReducer,
    userState:userReducer,
})




const store = createStore(root);


store.subscribe(()=>{console.log(store.getState())});

export default store;


