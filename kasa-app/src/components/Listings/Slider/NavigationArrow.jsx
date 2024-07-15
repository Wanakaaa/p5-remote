import React from 'react'

function NavigationArrow({direction, onClick, icon}) {
  return (
    <img 
    src={icon}
    alt={direction}
    className={`nav-icon ${direction === 'prev' ? 'prev-icon' : 'next-icon'}`}
    onClick={onClick}
    />
  )
}

export default NavigationArrow