import React from 'react'
import './Info.scss'
import Rating from './Rating';

function InfoRealtor({host, rating}) {
    const {name, picture} = host;
    const [firstName, lastName] = name.split(' ');

  return (
    <div className='realtor-container'>
        <div className='realtor-item'>
            <div className='realtor-name'> 
              <div>{firstName}</div>
              <div>{lastName}</div>
            </div>
            <div className='realtor-picture'>
                <img src={picture} alt={`agent immobilier: ${firstName} ${lastName}`} />
            </div>
        </div>
        <div className='realtor-rating'><Rating 
        countMax={5}
        value={rating}
        
        /></div>
    </div>
  )
}

export default InfoRealtor