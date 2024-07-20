import React from 'react'
import listingData from '../datas/listListings.json'
import "../styles/ListingDetail.scss"
import { useParams } from 'react-router-dom'
import Tag from '../components/Listings/Info/InfoTag'
import Realtor from '../components/Listings/Info/InfoRealtor'
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
          <div className='listing-title-desc'>
            <h1>{title}</h1>
            <h2>{location}</h2>
          </div>
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

      <div className='listing-collapse-container'>
        <div className='listing-collapse'>
          <Collapse 
          title='Description'
          content={description}
          />
        </div>
        <div className='listing-collapse'>
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