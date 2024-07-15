import React from 'react'

function Equipments({equipments}) {
  return (
    <div className='equipments-container'>
    <ul>{equipments.map((equipment, index) => (
      <li 
      key={index}>{equipment}</li>
    ))}</ul>
  </div>
  )
}

export default Equipments