import React from 'react'
import './Rating.scss'
import starEmpty from '../../../assets/StarEmpty.svg'
import starFull from '../../../assets/StarFull.svg'

function Rating({countMax, value}) {
    const starsArray = Array.from({length : countMax}, (_, index) => 
        index < value ? 'full' : 'empty')

  return (
        <ul className='rating-container'> 
            {starsArray.map((type, index) => (
                <li className='rating-stars' key={index}>
                    <img className='rating-img'
                    src={type === 'full' ? starFull : starEmpty} 
                    alt={type === 'full' ? 'full' : 'empty'} />
                </li>
            ))}
        </ul>
  )
}

export default Rating