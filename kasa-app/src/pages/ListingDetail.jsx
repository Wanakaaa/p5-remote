import React from 'react'
import listingData from '../datas/listListings.json'
import '../components/Listings/ListingDetail.scss'
import { useParams } from 'react-router-dom'
import Tag from '../components/Listings/Tag'
import Realtor from '../components/Listings/Realtor'
import Slider from '../components/Listings/Slider/Slider'
import Collapse from '../components/Collapse/Collapse'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function ListingDetail() {
  const {id} = useParams()
  const navigate = useNavigate()
  // Trouver l'annonce correspondant à l'ID dans les données
  useEffect(() => {
    // Inside useEffect to handle navigation properly
    let listing = listingData.find(listing => listing.id === id);
    if (!listing) {
      navigate('/erreur404'); // Redirect if listing with given ID not found
    }
  }, [id, navigate]);

  let listing = listingData.find(listing => listing.id === id);
  if (!listing) {
    return null; // or loading state, because the useEffect will handle redirection
  }

  const { title, pictures, description, host, rating, location, equipments, tags } = listing;

  return (
    <div className='listing-container'>
      <div className='listing-picture'>
        <Slider 
        pictures={pictures}
        alt={title}
        />
      </div>

      <div className='listing-content'>
        <div className='listing-info'>
          <h1>{title}</h1>
          <h2>{location}</h2>
          <ul>
            {tags.map((tag, index) => (
              <Tag 
              key={index}
              tag={tag}/>
            ))}
          </ul>
        </div>
        <div className='listing-realtor'>
          <Realtor 
          host={host}
          rating={rating}/>
        </div>
      </div>

      <div className='listing-collapse'>
        <div className='listing-description'>
          <Collapse 
          title='Description'
          content={description}
          />
        </div>
        <div className='listing-equipment'>
          <Collapse
          title='Equipements'
          content={equipments.map((equipment, index) => (
            <li
            key={index}>{equipment}</li>
          ))}
          />
        </div>
      </div>



    </div>
  )
}

export default ListingDetail