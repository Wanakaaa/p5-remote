import React from 'react'
import { Link } from 'react-router-dom'
import "./Listings.scss"
import ListListings from '../../datas/listListings.json'

function Listings() {
  return (
    <div className='listings-container'>
        <ul className='listings-wrapper'>
            {ListListings.map(({id, title, cover}) => (
                <li 
                key={id}
                title={title}
                cover={cover}
                className='listing-item'>
                    <Link to={`/listings/${id}`}>
                    <img src={cover} alt="cover" />
                    <h2 className="listing-text">{title}</h2>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Listings