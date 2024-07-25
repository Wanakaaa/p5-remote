import React from 'react'

function Annotation({currentIndex, total}) {
  return (
    <div className='annotation'>
        {currentIndex + 1}/{total}
    </div>
  )
}

export default Annotation