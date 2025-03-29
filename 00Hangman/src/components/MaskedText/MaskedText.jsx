import {getAllCharacters} from './MaskedTextUtility';




function MaskedText({text,usedLetters}){

    const letters =getAllCharacters(text,usedLetters).split('');

return(
    <>

{/* <div>{letters}</div> */}
<div>
    

 {letters.map((letter,index)=>(
     <span key={index} className="text-4xl font-bold text-center w-100   rounded-xl ">{letter}</span>
    ))}

</div>

        
    </>
)



}




   


export default  MaskedText;

