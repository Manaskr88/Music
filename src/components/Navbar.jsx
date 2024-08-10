import React from 'react'
import {assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()  // to back or next page 
  return (
    <>

    <div className="w-full flex  justify-between items-center font-semibold">

        <div className=" flex items-center gap-2">

            <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl  hover:bg-[#ffffff2b] cursor-pointer' src={assets.arrow_left}  />
            <img onClick={()=>navigate(1  )} className='w-8 bg-black p-2 rounded-2xl hover:bg-[#ffffff2b]  cursor-pointer' src={assets.arrow_right}  />

        </div>

        <div className="flex items-center gap-4">

            <p className='bg-white text-black text-[13px] px-4 py-2 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
            <p className='bg-black  text-[14px] px-3 py-2 rounded-2xl hidden md:block cursor-pointer'>Install App</p>
            <p className='bg-blue-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>M</p>


        </div>

    </div>


        <div className="flex items-center gap-2 mt-4">
            <p className='bg-white cursor-pointer text-black px-4 py-1 rounded-2xl '>All</p>
            <p className='bg-black cursor-pointer px-4 py-1 rounded-2xl'>Music</p>
            <p className='bg-black cursor-pointer px-4 py-1 rounded-2xl'>Podcast </p>
        </div>
      
    </>
  )
}

export default Navbar
