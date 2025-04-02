import { add, add_user } from "./constant.js";


const initialstate={
    users:[],
};


export function userReducer(state=initialstate,action){

if(action.type ===add_user){

    return{
        ...state,
        users:[...state.users,action.payload]
    }
}

else {
    return state; // Ensure state is always returned    
}




}