import { combineReducers, createStore } from "redux";
import todoReducer from "./todoReducer.js";
import userReducer from "./userReducer.js";


const initialState = {
    todos: [],
    users: [],
};
// The initialState is an object that contains two properties: todos and users, both initialized as empty arrays.

const rootReducer =combineReducers(
    {
        todos:todoReducer,
    users:userReducer}) // combineReducers is used to combine multiple reducers into a single reducer function.

    


const store = createStore(rootReducer, initialState); // Pass initialState as the second argument
export default store;

store.subscribe(()=>{console.log(store.getState())});