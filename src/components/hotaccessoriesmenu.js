import React from 'react'
import {Link} from "react-router-dom"
import  '../styles/hotaccessoriesmenu.css'
const hotaccessoriesmenu = () => {
  return (
    <div className='HotAccessoriesmenu'>
        <Link className="hotaccessorieslink" to="/musicStore">MUSIC STORE</Link>
        <Link className="hotaccessorieslink" to="/smartDevices">SMART DEVICES</Link>
        <Link className="hotaccessorieslink" to="/home">HOME</Link>
        <Link className="hotaccessorieslink" to="/lifestyle">LIFESTYLE</Link>
        <Link className="hotaccessorieslink" to="/mobileAccessories">MOBILE ACCESSORIES</Link>

    </div>
  )
}

export default hotaccessoriesmenu