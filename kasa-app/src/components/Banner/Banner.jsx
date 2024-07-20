import React from 'react'
import "./Banner.scss"

function Banner({image, text}) {
    return (
    <div className='banner'>
        <img src={image} alt="bannière du site, une falaise"/>
        <div className='banner-overlay'></div>
        {text && <div className='banner-text'>{text}</div>}
    </div>
  )
}

export default Banner