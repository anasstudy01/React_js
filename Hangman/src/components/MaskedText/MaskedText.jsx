import {getAllCharacters} from './MaskedTextUtility';




function MaskedText({text,usedLetters}){

    const letters =getAllCharacters(text,usedLetters).split('');

return(
    <>

{/* <div>{letters}</div> */}
<div>
    

 {letters.map((letter,index)=>(
     <span key={index} className="text-2xl font-semibold text-center w-100 mt-15 bg-green-200 rounded-xl ">{letter}</span>
    ))}

</div>

        
    </>
)



}




   


export default  MaskedText;

