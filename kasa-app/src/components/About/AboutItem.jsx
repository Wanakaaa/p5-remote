import React from 'react'
import './AboutItem.scss'


function AboutItem({content}) {

  return (
    <div className='about-container'>
      <p>{content}</p>
    </div>
  )
}

export default AboutItem