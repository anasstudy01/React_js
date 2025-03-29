// reducer is a overall programming concept  
// it is aspecific way of writing a function that takes an array and returns a single value
// it is a higher order function that takes a function as an argument



//parameters:  1. accumulator: the accumulated value from the previous iteration (Object)
//             2. currentValue: the current value being processed in the array ( Action)

// ---------------------------------X-----------------------------------

// action -> type -->string
// action -> payload--> object


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