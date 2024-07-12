import React from 'react'
import listingData from '../datas/listListings.json'
import { useParams } from 'react-router-dom'
import Tag from '../components/Listings/Tag'

function ListingDetail() {
  const {id} = useParams()
  // Trouver l'annonce correspondant à l'ID dans les données
  let listing = listingData.find(listing => listing.id === id);
  console.log(listing)

  const { title, cover, pictures, description, host, rating, location, equipments, tags } = listing;

  return (
    <div className='containerGeant'>
      <div className='imgContainer'><img src={cover} alt="gallery" /></div>

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
        <p>info agent immo</p>
        <p>staaaarzs</p>
      </div>
      </div>

      <div className='accordionLogement'>
        <div className='descriptionLogement'>Description</div>
        <div className='equipementLogement'>Equipements</div>
      </div>



    </div>
  )
}

export default ListingDetail