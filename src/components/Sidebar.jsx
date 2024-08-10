import React from 'react'
import { assets } from '../assets/assets'

const Sidebar = () => {
    return (
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>

            <div className="bg-[#121212] h-[18%] gap-3 rounded flex flex-col justify-around">

                <div className="flex items-center gap-3 pl-8 cursor-pointer">

                    <a className='flex gap-2' href="/">
                        <img className='w-6' src={assets.spotify_logo} />
                        <p className='font-bold'> Spotify</p>
                    </a>


                </div>

                <div className="flex items-center gap-3 pl-8 cursor-pointer">



                    <img className='w-6' src={assets.home_icon} />
                    <p className='font-bold'>Home</p>
                </div>

                <div className="flex items-center gap-3 pl-8 cursor-pointer">

                    <img className='w-6' src={assets.search_icon} />
                    <p className='font-bold'>Search</p>


                </div>
            </div>



            <div className="bg-[#121212] h-[85%] rounded">

                <div className="p-4 flex items-center justify-between">

                    <div className="flex items-center gap-3">
                        <img className='w-8' src={assets.stack_icon} />
                        <p className='font-semibold'>Your Library </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <img className='w-5' src={assets.arrow_icon} />
                        <img className='w-5' src={assets.plus_icon} />

                    </div>

                </div>

                <div className="bg-[#242424] flex  m-2 items-center ml-4 mt-8  justify-start  rounded ">

                    <div className="flex-col items-center gap-6 pl-4 p-4">
                        <h2 className='font-bold text-lg'>Create Your First Playlist </h2>
                        <p className='text-sm font-light mt-2'>It's easy , we will help you</p>

                        <button className='bg-white text-black text-[15px] font-semibold px-4 py-1.5  rounded-full   items-center mt-4'>Create Playlist </button>

                    </div>

                </div>

                <div className="bg-[#242424] flex  items-center ml-4 mt-8  justify-start m-2 rounded ">

                    <div className="flex-col items-center gap-6 pl-4 p-4">
                        <h2 className='font-bold text-lg'>Let's Find some Podcast to follow </h2>
                        <p className='text-sm mt-2'>We will keep you updated on new episodes</p>

                        <button className='bg-white text-black font-semibold px-4 py-1.5 rounded-full ]  items-center mt-4'>Browse Podcasts </button>

                    </div>

                </div>



                .




            </div>

        </div>
    )
}

export default Sidebar
