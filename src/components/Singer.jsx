import React from 'react'
import { useNavigate } from 'react-router-dom'

const Singer = ({name , image , id, desc}) => {
  
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/singer/${id}`)}  className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>

     <img src={image} className='rounded-full ' />
     <p className='font-bold mt-2 mb-1'>{name}</p>
     <p className='text-slate-200 text-sm'>{desc}</p>
      
    </div>
  )
}

export default Singer
