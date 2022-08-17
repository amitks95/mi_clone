import React from 'react'
import "../styles/hotitemcard.css"

const hotitemcard = ({name,price,image,index}) => {
  return (
    <div className='hotitemcard'>
        <img src={image} alt= {`${index} card` }/>
        <p>{name}</p>
        <span>{price}</span>


    </div>
  )
}

export default hotitemcard