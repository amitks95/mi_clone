import React from 'react'
import '../styles/starproducts.css'

const starproducts = ({StarProduct}) => {
  return (
    <div className='starproducts'>
        <div>
        <a href={StarProduct[0].url}><img src={StarProduct[0].image} alt="" /></a>
        </div>
        <div>
        <a href={StarProduct[1].url}><img src={StarProduct[1].image} alt="" /></a>
        <a className='bag' href={StarProduct[2].url}><img src={StarProduct[2].image} alt="" /></a>
        <a href={StarProduct[3].url}><img src={StarProduct[3].image} alt="" /></a>  
        </div>
    </div>

  )
}

export default starproducts