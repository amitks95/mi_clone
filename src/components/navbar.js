import React from 'react'
import "../styles/nav.css"
import pkg from "../data/data.json"

import {Link} from "react-router-dom"


const navbar = () => {
    const logo=pkg.logo;
    const searchicon=<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M16.292 17.5 11.125 12.333Q10.438 12.854 9.635 13.115Q8.833 13.375 7.958 13.375Q5.688 13.375 4.094 11.802Q2.5 10.229 2.5 7.958Q2.5 5.688 4.094 4.094Q5.688 2.5 7.958 2.5Q10.229 2.5 11.802 4.094Q13.375 5.688 13.375 7.958Q13.375 8.833 13.125 9.635Q12.875 10.438 12.333 11.104L17.5 16.292ZM7.958 11.625Q9.479 11.625 10.552 10.552Q11.625 9.479 11.625 7.958Q11.625 6.417 10.562 5.333Q9.5 4.25 7.958 4.25Q6.417 4.25 5.333 5.333Q4.25 6.417 4.25 7.958Q4.25 9.5 5.333 10.562Q6.417 11.625 7.958 11.625Z"/></svg>
  return (
    <div className='nav'>
    <div className="logo">
        <a href="/" >
            <img id="logoimage" src={logo} alt="Not" />
        </a>
    </div>

        <a className='navlink' href="/miphones">MI PHONES</a>
        <a className='navlink' href="/redmiphones">REDMI PHONES</a>
        <a className='navlink' href="/tv">TV</a>
        <a className='navlink' href="/laptops">LAPTOPS</a>
        <a className='navlink' href="/lifestyle">FITNESS & LIFESTYLE</a>
        <a className='navlink' href="/home">HOME</a>
        <a className='navlink' href="/audio">AUDIO</a>
        <a className='navlink' href="/accessories">ACCESSORIES</a>
        <div className='searchbar'>
            <input type="text" name='search' placeholder='Search Products' />
            {searchicon}
        </div>
    </div>
     
  )
}

export default navbar