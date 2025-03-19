import BannerImage from '../banner/Banner1.PNG';


function Banner() {
    return (
<>


<div className='w-full h-[25rem] relative'>
    <img src={BannerImage} alt="Banner" className="w-full h-96" />

    <div className='absolute top-10 left-0 right-0 mx-auto w-[20rem] text-black flex flex-col items-center'>
   <div className=' font-semibold txt-7xl text-black'>
   Crypto Tracker
   </div>
   <div className='text-sm text-black '>
   get all the info about tracking bitcoins 


   </div>
</div>

</div>



</>




    )
}

export default Banner;