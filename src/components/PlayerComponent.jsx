import React, { useEffect, useRef, useState } from 'react'
import artistPicture from "../assets/images/artist-2.webp"
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"
import { FaPlay, FaPause } from "react-icons/fa"


const PlayerComponent = ({artists, playing, setPlaying}) => {
    const [play, setPlay]=useState(false)
    const [trackIndex, setTrackIndex] = useState(0); //Cambiar de canción
    const [trackProgress, setTrackProgress] = useState(0);
    const audio=useRef()
    const intervalRef = useRef();
    const duration  = audio.current;

    const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%';
    const trackStyling = `
        -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
    `;



    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
  
        intervalRef.current = setInterval(() => {
          if (audio.current.ended) {
            ""
          } else {
            setTrackProgress(audio.current.currentTime);
          }
        }, [1000]);
    }

    const handlePlay = ()=> {
        if(play) {
            audio.current.pause();
            startTimer();
        } else {
            clearInterval(intervalRef.current)
            audio.current.play()
        }
        setPlay(!play)
    }

    const onScrub = (value) => {
        // Clear any timers already running
      clearInterval(intervalRef.current);
      audio.current.currentTime = value;
      setTrackProgress(audio.current.currentTime);
    }

    console.log(audio.current);

    /*function updateProgress(e){
   const {duration, currentTime} = e.srcElement
   const progressPercent = (currentTime/duration) * 100
   progress.style.width=`${progressPercent}%`
}

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
} */

  return (
    <div className={`${!playing ? 'translate-y-[100vh]' : 'translate-y-[0]'} w-full min-h-[60px] bg-[#202020] fixed bottom-0 left-0 transition-transform duration-300`}>
        {/*<div className='w-[30%] h-1 bg-lime-400 cursor-pointer hover:bg-lime-600 transition-colors duration-300' />*/}
        <input
            type="range"
            value={trackProgress}
            step="1"
            min="0"
            max={duration ? duration : `${duration}`}
            onChange={(e) => onScrub(e.target.value)}
            className="progress"
            style={{ background: trackStyling}}
        />
        <div className='w-full h-full bg-inherit flex justify-between items-center p-2'>
            <div className='flex justify-start items-center'>
                <img src={artists?.artist_card} alt="Artist picture" className='w-[50px] h-[50px] rounded-xl mr-2' />
                <div className='h-full w-fit tablet:w-[150px] text-center '>
                    <h1 className='font-bold text-lg'>{artists?.artist_name}</h1>
                    <h3 className='text-gray-300 text-sm'>{artists?.song?.song_name}</h3>
                </div>
            </div>
            <div className='flex justify-center items-center bg-inherit h-full'>
                <audio
                    src={artists?.song?.song_music}
                    controls={false}
                    loop
                    autoPlay={true}
                    ref={audio}
                />
                <BiSkipPrevious className='text-3xl cursor-pointer transition-colors duration-300 hover:text-gray-400' />
                <div className='w-[50px] h-[50px] bg-gray-400 rounded-full flex justify-center items-center transition-colors duration-300 hover:bg-gray-600 cursor-pointer' onClick={handlePlay}>
                    {!play ? <FaPlay /> : <FaPause />}
                </div>
                <BiSkipNext className='text-3xl cursor-pointer transition-colors duration-300 hover:text-gray-400' />
            </div>
        </div>
    </div>
  )
}

export default PlayerComponent