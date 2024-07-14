import React from 'react'
import listingData from '../datas/listListings.json'
import '../components/Listings/ListingDetail.scss'
import { useParams } from 'react-router-dom'
import Tag from '../components/Listings/Tag'
import Realtor from '../components/Listings/Realtor'
import Description from '../components/Listings/Description'
import Equipments from '../components/Listings/Equipments'
import Slider from '../components/Listings/Slider/Slider'

function ListingDetail() {
  const {id} = useParams()
  // Trouver l'annonce correspondant à l'ID dans les données
  let listing = listingData.find(listing => listing.id === id);
  console.log(listing)

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
          <Description 
          description={description}/>
        </div>
        <div className='equipementLogement'>
          <Equipments 
          equipments={equipments}/>
        </div>
      </div>



    </div>
  )
}

export default ListingDetail