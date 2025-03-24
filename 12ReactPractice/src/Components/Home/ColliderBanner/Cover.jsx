import photo from './banner1.jpg';

function Cover(){
return (
<>

    <div className="hero w-11/12 h-120 m-auto  bg-gray-400 rounded-lg">
<div className=" banner " >
    <img src={photo}  className=' w-full h-full object-contain'></img>
</div>
</div>

</>
)

}

export default Cover;  