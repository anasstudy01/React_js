import  add_user  from "../Constant/userConstant.js";


const initialstate={
    users:[],
};


 function userReducer(state=initialstate,action){

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

export default userReducer;