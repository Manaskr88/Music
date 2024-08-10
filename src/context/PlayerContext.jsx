import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    const audioRef = useRef()
    const seekBg = useRef()  // playlist ke background color ke liye
    const seekBar = useRef()  // playlist ke bar ko update krne ke liye

    const [track, setTrack] = useState(songsData[0]) // songs ka track krne ko 
    const [status, setStatus] = useState(false)  // 

    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },

        totalTime: {
            second: 0,
            minute: 0
        }
    })

    const play = () => {
        audioRef.current.play()
        setStatus(true)
    }

    const pause = () => {
        audioRef.current.pause()
        setStatus(false)
    }

    const previous = async ()=>{
        if(track.id > 0){
            await setTrack(songsData[track.id-1])
            await audioRef.current.play()
            setStatus(true)
        }
        
    }

    const next = async ()=>{
        if(track.id < songsData.length - 1){
            await setTrack(songsData[track.id+1])
            await audioRef.current.play()
            setStatus(true)
        }
        
    }
    const playId = async (id) =>{
          await setTrack(songsData[id])
          await audioRef.current.play()
          setStatus(true)
    }
     



    const seek = async (e)=>{

        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth)*audioRef.current.duration)

    }

    useEffect(() => {  // for time starting in music 
        setTimeout(() => {

            audioRef.current.ontimeupdate =()=>{
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%"  // seekbar update
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime%60), // divide by 60 to  give second
                        minute: Math.floor(audioRef.current.currentTime/60)
                    },
            
                    totalTime: {
                        second: Math.floor(audioRef.current.duration%60), // divide by 60 to  give second
                        minute: Math.floor(audioRef.current.duration/60)
                    }
                })
            }

        }, 1000);
    }, [audioRef])


    const contextValue = {  // passing values to app.jsx 

        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        status,
        setStatus,
        time,
        setTime,
        play, pause,
        playId,
        previous,
        next,
        seek

    }

    return (
        <PlayerContext.Provider value={contextValue}>

            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;