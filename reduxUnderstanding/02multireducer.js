const { createStore, combineReducers } = require("redux");






function number1Reducer(initialObj= { number: 0 },action){
    if (action.type === 'Add'){
        const numberToadd = action.payload;
        
        return { ...initialObj, number: initialObj.number + numberToadd };
         
        }


        if (action.type === 'Sub'){
            const numberToadd = action.payload;
            
            return { ...initialObj, number: initialObj.number - numberToadd };
             
            }
     else {

        return initialObj;
     }
    
    }


    function nummber2Reducer(initialObj= { number: 0},action){
        if (action.type === 'increment'){
            ;
            
            return { ...initialObj, number: initialObj.number + 1 };
             
            }
    
            if (action.type === 'decriment'){
            
            
                return { ...initialObj, number: initialObj.number  -1 };
                 
                }
        
         else {
    
            return initialObj;
         }
        
        }



      const root = combineReducers(
         {

             
            obj1: number1Reducer,
            obj2: nummber2Reducer
            }
        
        )

        const store = createStore(root );


       

        // Test the store
console.log(store.getState()); // { number1: { number: 0 }, number2: { number: 0 } }


// ---------------------------------------updating both reducer 1 by 1 ----------------------------------



store.dispatch({ type: "Add", payload: 5 });
console.log(store.getState()); // { number1: { number: 5 }, number2: { number: 0 } }


store.dispatch({ type: "increment" });
console.log(store.getState()); // { number1: { number: 5 }, number2: { number: 1 } }




// ----------------updating both same time ------------------------------------


// if (action.type === "MULTI_ACTION") {
//     return { ...initialObj, number: initialObj.number + action.payload.number2 };
// }

// store.dispatch({
//     type: "MULTI_ACTION",
//     payload: {
//         number1: 5, // Update for number1Reducer
//         number2: 3, // Update for nummber2Reducer
//     },
// });

// console.log(store.getState());


