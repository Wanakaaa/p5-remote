import React from 'react'
import bannerImage from "../../../assets/bannerAbout.png"
import "./Banner.scss"

function Banner({image, text}) {
    return (
    <div className='home-banner'>
        <img src={image} alt="bannière du site, une falaise"/>
        <div className='home-banner-text'>{text}</div>
    </div>
  )
}

export default Banner