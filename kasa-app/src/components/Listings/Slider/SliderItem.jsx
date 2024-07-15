import React from 'react'

function SliderItem({picture, title}) {
  return (
    <img 
    src={picture} 
    alt={title}
    className='slider-item'></img>
  )
}

export default SliderItem