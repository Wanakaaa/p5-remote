import React from 'react'

function Realtor({host, rating}) {
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
    </div>
  )
}

export default Realtor