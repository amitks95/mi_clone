import React from 'react'
import VideoCard from './videocard.js'
import "../styles/videossection.css"

const videos = ({videos}) => {
  return (
    <div className='videos' >
    {videos.map((item,index)=>(
        <VideoCard key={item.image} index={index} image={item.image} name={item.name} />
    ))}
    </div>
  )
}

export default videos