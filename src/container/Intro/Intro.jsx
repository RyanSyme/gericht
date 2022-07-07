import React, { useState, useRef } from 'react'

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'

import { meal } from '../../constants'
import './Intro.css'

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = useRef()

  const handleVideo = ()=> {
    setPlayVideo(prevPlayVideo => !prevPlayVideo)
    if(playVideo) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }

  const [isShown, setIsShown] = useState(false)

  return (
    <div className="app__video">
      <video 
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div 
        className="app__video-overlay flex__center"
        onMouseEnter={()=> setIsShown(true)}
        onMouseLeave={()=> setIsShown(false)}
      >
        {isShown && (
          <div 
            className="app__video-overlay_circle flex__center"
            onClick={handleVideo}
          >
            {playVideo ? 
              <BsPauseFill color="#DCCA87" fontSize={35}/> 
              : 
              <BsFillPlayFill color="#DCCA87" fontSize={35}/>
            }
          </div>
        )}
      </div>
    </div>
  )
}

export default Intro