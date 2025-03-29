const { createStore } = require("redux");

function calculator( plainObj,action){
if(action.type==="add"){
    return {number:plainObj.number+action.payload,name:plainObj.name+action.name}
}

if(action.type==="subtract"){
    return {number:plainObj.number-action.payload,name:plainObj.name+action.name}
}
else{return plainObj}



}




const Obj ={number:5,name:"sachin",age:23};

// console.log(calculator(Obj,{type:"add",payload:10,name:"kumar"})); // {number:15,name:"sachinsachin"}
// console.log(calculator(Obj,{type:"subtract",payload:10,name:"kumar"})); // {number:-5,name:"sachin-kumar"}

const store =createStore(calculator,Obj);
console.log(store); // {number:5,name:"sachin",age:23}
console.log(store.getState()); // {number:5,name:"sachin",age:23}
console.log(store.dispatch({type:"add",payload:10,name:"kumar"})); // {number:15,name:"sachinsachin"}
console.log(store.getState()); // {number:15,name:"sachinsachin"}