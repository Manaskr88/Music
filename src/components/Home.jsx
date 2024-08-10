import React from 'react'
import Navbar from './Navbar'

import { albumsData, singerData, songsData } from '../assets/assets'
import Album from './Album'
import Song from './Song'
import Singer from './Singer'


const Home = () => {
  return (
    <>
      <Navbar/>
      

      <div className="mb-4">

        <h1 className='my-5 font-bold text-2xl'>Popular Artists</h1>
        <div className="flex overflow-auto">
            {singerData.map((item , index )=>(<Singer  key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}   />))}
        </div>

      </div>

      <div className="mb-4">

        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className="flex overflow-auto">
             {albumsData.map((item , index )=>(<Album  key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}   />))}
         </div>  

      </div>


      
      <div className="mb-4">

        <h1 className='my-5 font-bold text-2xl'>Today's Biggest hits</h1>
        <div className="flex overflow-auto">
            {songsData.map((item , index )=>(<Song  key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}   />))}
        </div>

      </div>


      




















      </>
  )
}

export default Home
