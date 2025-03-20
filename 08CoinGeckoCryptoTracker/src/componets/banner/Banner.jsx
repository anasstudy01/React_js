import BannerImage from '../banner/Banner1.PNG';


function Banner() {
    return (
<>


<div className='w-full h-[25rem] relative'>
    <img src={BannerImage} alt="Banner" className="w-full px-8 h-96"  />

    <div className='absolute top-10 left-0 right-295 mx-auto w-[20rem] text-white flex flex-col items-center'>
   <div className=' font-semibold txt-7xl text-white'>
   Crypto Tracker
   </div>
   <div className='text-sm text-white ml-11'>
   get all the info about tracking bitcoins 


   </div>
</div>

</div>



</>




    )
}

export default Banner;