import BannerImage from '../banner/banner1.jpeg';


function Banner() {
    return (
<>


<div className='w-full h-[25rem] relative'>
    <img src={BannerImage} alt="Banner" className="w-full px-8 h-96"  />

    <div className='absolute top-40 left-0 right-200 mx-auto w-140 text-white flex flex-col items-center gap-1'>
   <div className=' font-semibold text-5xl text-white ml-10 font-sans'>
   Invest Like a Pro
   </div>
   <div className='text-sm text-white ml-0'>
    Get the latest updates on crypto prices and trends  


   </div>
</div>

</div>



</>




    )
}

export default Banner;