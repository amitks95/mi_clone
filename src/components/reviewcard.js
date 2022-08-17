import React from 'react'
import "../styles/reviewcard.css"

const reviewcard = ({image,index,review,name,price}) => {
  return (
    <div className='productreviewcard'>
        <img src={image} alt={`${index} Review`} />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
    </div>
  )
}

export default reviewcard