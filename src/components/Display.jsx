import React, { useEffect, useRef } from 'react'
import { Routes , Route, useLocation } from 'react-router-dom'
import Home from './Home'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'
import DisplaySinger from './DisplaySinger'

const Display = () => {

  const displayRef = useRef() 
  
  const location = useLocation();  // to get location of page 
  console.log(location);

  const isAlbum = location.pathname.includes("album")  // to check  if it is on album page or not 

  const albumId = isAlbum ? location.pathname.slice(-1) : ""  // used operator to check album pe h ya ni

  const bgColor = albumsData[Number(albumId)].bgColor  // bg color ko access kiya data me se
  

  useEffect(()=>{
       if(isAlbum){
        displayRef.current.style.background = `linear-gradient(${bgColor} , #121212)`
       }

       else{
        displayRef.current.style.background = `#121212`


        

       }
  })
  return (
    <div ref={displayRef} className='w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>

        <Routes>

            <Route path='/'  element={<Home/>} />
            <Route path='/album/:id' element={<DisplayAlbum/>}    />
            <Route path='/singer/:id' element={<DisplaySinger/>}    />


        </Routes>
      
    </div>
  )
}

export default Display
 