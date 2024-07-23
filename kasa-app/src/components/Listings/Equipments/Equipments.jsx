import React from 'react';
import './Equipments.scss';

function Equipments({ equipments }) {
  return (
    <ul className='equipments-list'>
      {equipments.map((equipment, index) => (
        <li key={index} className='equipment-item'>
        {equipment}
        </li>
      ))}
    </ul>
  );
}

export default Equipments;