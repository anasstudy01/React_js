import React from 'react'

function Card({heading,desc,className}) {
    
  return (
    <>
<div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body bg-black text-white">
    <h2 className={`${className}`}>
      {heading}
    </h2>
      <div className="bg-pink-400 w-10 rounded-sm text-sm px-1">NEW</div>
    <p>{desc}</p>
    <div className="card-actions flex gap-2  justify-end">
      <div className=" border-2 border-white w-20 px-2 rounded-md">Fashion</div>
      <div className=" border-2 border-white w-20 px-2 rounded-md">Products</div>
    </div>
  </div>
</div>
        </>
  )
}

export default Card;