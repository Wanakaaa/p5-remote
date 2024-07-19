import React from 'react';

function Description({ description }) {
  return (
    <div className='description-container'>
      <p>{description}</p>
    </div>
  );
}

export default Description;