function numberReducer (incomingObject,action ){

    if(action.type==="ADD"){
        return{number:incomingObject.number+action.payload}
        }

else if(action.type==="SUBTRACT"){
        return{number:incomingObject.number-action.payload}
        }
        else if(action.type==="increment"){
            return{number:incomingObject.number+1}
        }
        else if(action.type==="decrement"){
            return{number:incomingObject.number-1}
        }
        else if(action.type==="reset"){
            return{number:0}
        }
        else{
            return incomingObject
        }
    
    
    
    }

const init= {number:0};

console.log(numberReducer(init,{type:"increment",payload:10})); // {number:1}