import React, { useState } from 'react'
import ChevronRight from '../../../assets/ChevronRight.svg'
import ChevronLeft from '../../../assets/ChevronLeft.svg'
import './Slider.scss'

function Slider({pictures, title}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex -1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex +1))
  }
  return (
    <div className="slider">
      <img src={pictures[currentIndex]} alt={title} />
      {pictures.length > 1 && (
        <>
          <img src={ChevronLeft} alt="Previous" className="nav-icon prev-icon" onClick={handlePrev} />
          <img src={ChevronRight} alt="Next" className="nav-icon next-icon" onClick={handleNext} />
          <div className="annotation">
            {currentIndex + 1} / {pictures.length}
          </div>
        </>
      )}
    </div>
  );
}

export default Slider;