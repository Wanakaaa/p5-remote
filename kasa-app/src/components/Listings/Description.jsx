import React from 'react'

function Description({description}) {
  return (
    <div>
        <div className='title-description'>Description</div>
        <div>{description}</div>
    </div>
  )
}

export default Description