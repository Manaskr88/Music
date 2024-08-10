import React, { useContext } from 'react'
import {songsData , assets} from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

    const {seekBar , track ,  seekBg , play, pause , status , time , previous , next , seek  } = useContext(PlayerContext)
  return (
    <div className='h-[10%] bg-black flex w-full justify-between items-center text-white px-4 '>
        

         {/* song details on left  */}

        <div className="hidden lg:flex items-center gap-4">

            <img  className='w-12 ' src={track.image} />
            <div className="">
                <p>{track.name}</p>
                <p>{track.desc.slice(0,12)}</p>
            </div>
        </div>
         
         {/* icon  */}

        <div className="flex flex-col items-center gap-1 m-auto">

            <div className="flex gap-4 ">
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon}  />
                <img   onClick={previous}  className='w-4 cursor-pointer'src={assets.prev_icon}  />

                {status?   
                <img onClick={pause}  className='w-4 cursor-pointer' src={assets.pause_icon}  />

                :
                <img  onClick={play} className='w-4 cursor-pointer' src={assets.play_icon}  />
   
            }
                <img  onClick={next}  className='w-4 cursor-pointer' src={assets.next_icon}  />
                <img className='w-4 cursor-pointer' src={assets.loop_icon}  />


            </div>
            
            {/* music play waala logic  */}

            <div className="flex items-center gap-5 ">
                <p>{time.currentTime.minute}:{time.currentTime.second}</p>

                <div onClick={seek} ref={seekBg} className="w-[60vw] max-w-[500px] bg-gray-300 cursor-pointer rounded-full ">
                    <  hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full'/>
                </div>

            <p>{time.totalTime.minute}:{time.totalTime.second}</p>
            </div>

        </div>

        <div className="hidden lg:flex items-center gap-2 opacity-75">

            <img src={assets.plays_icon} className='w-4 ' />
            <img src={assets.mic_icon} className='w-4 ' />
            <img src={assets.queue_icon} className='w-4 ' />
            <img src={assets.speaker_icon} className='w-4 ' />
            <img src={assets.volume_icon} className='w-4 ' />
            <div className="w-20 bg-slate-50 h-1 rounded"></div>
            <img src={assets.mini_player} className='w-4 ' />
            <img src={assets.zoom_icon} className='w-4 ' />



        </div>
      
    </div>
  )
}

export default Player
