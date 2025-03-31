function numberFn(initialObj,action){
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


    const starter = { number: 0 };

    console.log(numberFn(starter,{type:"Add",payload:4}) )