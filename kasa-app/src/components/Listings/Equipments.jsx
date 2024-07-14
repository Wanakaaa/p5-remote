import React from 'react'

function Equipments({equipments}) {
  return (
    <div>
        <div>Equipements</div>
        <div>{equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
        ))}</div>
    </div>
  )
}

export default Equipments