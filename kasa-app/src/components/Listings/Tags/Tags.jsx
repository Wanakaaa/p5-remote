import React from 'react'
import './Tags.scss'

function Tags({tags}) {
  return (
    <ul className='tags-container'> {tags.map((tag, index) => (
      <li 
      key={index} 
      className='tag-item'>{tag}</li>
    ))}
    </ul>
  )
}

export default Tags