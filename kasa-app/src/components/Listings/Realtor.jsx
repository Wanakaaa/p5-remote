import React from 'react'

function Realtor({host, rating}) {
    const {name, picture} = host;

  return (
    <div>
        <div className='infoAgent'>
            <div className='nameAgent'> {name}
            </div>
            <div className='photoAgent'>
                <img src={picture} alt="agent immobilier" />
            </div>
        </div>
        <div className='ratingAgent'>{rating}</div>
    </div>
  )
}

export default Realtor