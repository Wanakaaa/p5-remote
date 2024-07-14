import React from 'react'

function SlideItem({pictures, title}) {
  return (
    <div>SlideItem
        {pictures.map((picture) => (
            <img src={picture} alt={title}></img>
        ))}
    </div>
  )
}

export default SlideItem