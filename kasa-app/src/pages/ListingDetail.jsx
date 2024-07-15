import React from 'react'
import listingData from '../datas/listListings.json'
import '../components/Listings/ListingDetail.scss'
import { useParams } from 'react-router-dom'
import Tag from '../components/Listings/Tag'
import Realtor from '../components/Listings/Realtor'
import Description from '../components/Listings/Description'
import Equipments from '../components/Listings/Equipments'
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

  const { title, cover, pictures, description, host, rating, location, equipments, tags } = listing;

  return (
    <div className='containerGeant'>
      <div className='imgContainer'>
        <Slider 
        pictures={pictures}
        alt={title}
        />
      </div>

      <div className='infoContainer'>
      <div className='infologement'>
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
      <div className='infoAgent'>
        <Realtor 
        host={host}
        rating={rating}/>
      </div>
      </div>

      <div className='accordionLogement'>
        <div className='descriptionLogement'>
          <Collapse 
          title='Description'
          contentComponent={Description}
          contentProps={{description}}
          />
        </div>
        <div className='equipementLogement'>
          <Collapse
          title='Equipements'
          contentComponent={Equipments}
          contentProps={{equipments}}/>
        </div>
      </div>



    </div>
  )
}

export default ListingDetail