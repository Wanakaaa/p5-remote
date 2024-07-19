import React from 'react'
import './Info.scss'

function InfoTag({tag}) {
  return (
    <>
    <li className='tag-item'>{tag}</li>
    </>
  )
}

export default InfoTag