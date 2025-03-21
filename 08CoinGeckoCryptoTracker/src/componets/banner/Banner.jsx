import BannerImage from '../banner/Banner1.PNG';


function Banner() {
    return (
<>


<div className='w-full h-[25rem] relative'>
    <img src={BannerImage} alt="Banner" className="w-full px-8 h-96"  />

    <div className='absolute top-40 left-200 right-0 mx-auto w-[20rem] text-white flex flex-col items-center'>
   <div className=' font-semibold txt-xl text-white font-sans'>
   Invest Like a Pro
   </div>
   <div className='text-sm text-white ml-11'>
    Get the latest updates on crypto prices and trends  


   </div>
</div>

</div>



</>




    )
}

export default Banner;