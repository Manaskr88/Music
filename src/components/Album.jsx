import React from 'react'
import { useNavigate } from 'react-router-dom'

const Album = ({image, name , desc , id}) => {

    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/album/${id}`)} className='min-w-[180px] p-2 px-4 rounded cursor-pointer hover:bg-[#ffffff26]'>


     <img src={image} className='rounded' />
     <p className='font-bold mt-2 mb-1'>{name}</p>
     <p className='text-slate-200 text-sm'>{desc}</p>
      
    </div>
  )
}

export default Album
