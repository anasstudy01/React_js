import { ADD_USER } from "./constant.js";





    export default function userReducer (state =  {users: []}, action) {
        if(action.type=== ADD_USER){
            return {
                ...state,
                users: [...state.users, action.payload]
            };
    }
}