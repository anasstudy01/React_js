import level1 from '../../assets/images/1.svg';
import level2 from '../../assets/images/2.svg';
import level3 from '../../assets/images/3.svg';
import level4 from '../../assets/images/4.svg';
import level5 from '../../assets/images/5.svg';
import level6 from '../../assets/images/6.svg';
import level7 from '../../assets/images/7.svg';
import level8 from '../../assets/images/8.svg';




function Hangman({step}){
const images = [level1, level2, level3, level4, level5, level6, level7, level8];

return(
    <>
 <div className='w-200 h-200'>
    <img src={step >=images.length ? images[images.length-1]:images[step]} alt="hangman" className="w-200 h-100" />
 </div>


    </>
)

    
}


export default Hangman;