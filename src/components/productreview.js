import React from 'react'
import ReviewCard from './reviewcard.js'
import "../styles/productreview.css"

const productreview = ({productreview}) => {
  return (
    <div className='productreviews'>
    {productreview.map((item,index)=>(
        <ReviewCard key={item.image} image={item.image} review= {item.review} name={item.name} price={item.price} index={item.index}/>
    ))}
    </div>
  )
}

export default productreview