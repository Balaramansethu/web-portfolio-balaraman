import React from 'react'
import { useEffect } from 'react'
import '../HomeComponent/HomeComponent.css'
import video from '../HomeComponent/videobg.mp4'
const HomeComponent = () => {
    

  return (
    <div className='main'>
        <div className="overlay"></div>
        <video className="background-video" src={video} autoPlay loop muted/>
        <div className="content-container">
            <h1 className='content glow'>Welcome to my portfolio</h1>
        </div>
    </div>
  )
}

export default HomeComponent