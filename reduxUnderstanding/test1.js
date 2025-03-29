const { createStore } = require("redux");

function reducerNumber(initialObj,action){
    if(action.type ==="add"){
        return {number:initialObj.number+action.payload}
    }
     else if(action.type ==="subtract"){
        return {number:initialObj.number-action.payload}
    }
     else if(action.type ==="increment"){
        return {number:initialObj.number+1}
    }
    else if(action.type ==="decriment"){
        return {number:initialObj.number-1}
    }
    else{
        return initialObj;
    }
}


    function anotherNumber(initialObj,action){
        if(action.type ==="add"){
            return {number:initialObj.number+action.payload}
        }
         else if(action.type ==="subtract"){
            return {number:initialObj.number-action.payload}
        }
         else if(action.type ==="increment"){
            return {number:initialObj.number+1}
        }
        else if(action.type ==="decriment"){
            return {number:initialObj.number-1}
        }
        else{
            return initialObj;
        }
    



}

const rootReducer = CombinedObj({
    number:reducerNumber,
    another:anotherNumber
})

const initialstate ={number:10 ,anotherNumber:20};




// console.log(reducerNumber(initialstate,{type:"decriment",payload:5})); 
const store = createStore(reducerNumber,initialstate);
console.log(store.getState()); // {number:10}
store.dispatch({type:"add",payload:10});
console.log(store.getState()); // {number:20}