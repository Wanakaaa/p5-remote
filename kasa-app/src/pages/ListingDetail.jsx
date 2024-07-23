import React from 'react'
import listingData from '../datas/listListings.json'
import "../styles/ListingDetail.scss"
import { useParams } from 'react-router-dom'
import Tags from '../components/Listings/Tags/Tags'
import Realtor from '../components/Listings/Realtor/Realtor'
import Slider from '../components/Listings/Slider/Slider'
import Collapse from '../components/Collapse/Collapse'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Rating from '../components/Listings/Rating/Rating'
import Equipments from '../components/Listings/Equipments/Equipments'


function ListingDetail() {
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    let listing = listingData.find(listing => listing.id === id);
    if (!listing) {
      navigate('/erreur404');
    }
  }, [id, navigate]);


  //Vérification supplémentaire
  let listing = listingData.find(listing => listing.id === id);
  if (!listing) {
    return null;
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
          <div className='listing-header'>
            <h1>{title}</h1>
            <h2>{location}</h2>
          </div>
          <div className='listing-tags'>
              <Tags
              tags={tags}/>
          </div>
        </div>
        <div className='listing-details'>
          <div className='listing-realtor'>
            <Realtor 
            host={host}
            />
          </div>
          <div className='listing-rating'>
            < Rating
            countMax={5}
            value={rating}
            />
          </div>
        </div>
      </div>

      <div className='listing-collapse-container'>
        <div className='listing-collapse'>
          <Collapse 
          title='Description'
          content={description}
          className="listing-title-collapse"
          />
        </div>
        <div className='listing-collapse'>
          <Collapse
          className="listing-title-collapse"
          title='Équipements'
          content={<Equipments equipments={equipments} />}
          />
        </div>
      </div>
    </div>
  )
}

export default ListingDetail


// import React from 'react'
// import listingData from '../datas/listListings.json'
// import "../styles/ListingDetail.scss"
// import { useParams } from 'react-router-dom'
// import Tag from '../components/Listings/Info/InfoTag'
// import Realtor from '../components/Listings/Info/InfoRealtor'
// import Slider from '../components/Listings/Slider/Slider'
// import Collapse from '../components/Collapse/Collapse'
// import { useNavigate } from 'react-router-dom'
// import { useEffect } from 'react'


// function ListingDetail() {
//   const {id} = useParams()
//   const navigate = useNavigate()

//   useEffect(() => {
//     let listing = listingData.find(listing => listing.id === id);
//     if (!listing) {
//       navigate('/erreur404');
//     }
//   }, [id, navigate]);


//   //Vérification supplémentaire
//   let listing = listingData.find(listing => listing.id === id);
//   if (!listing) {
//     return null;
//   }

//   const { title, pictures, description, host, rating, location, equipments, tags } = listing;

//   return (
//     <div className='listing-container'>
//       <div className='listing-picture'>
//         <Slider 
//         pictures={pictures}
//         alt={title}
//         />
//       </div>

//       <div className='listing-content'>
//         <div className='listing-info'>
//           <div className='listing-title-desc'>
//             <h1>{title}</h1>
//             <h2>{location}</h2>
//           </div>
//           <ul>
//             {tags.map((tag, index) => (
//               <Tag 
//               key={index}
//               tag={tag}/>
//             ))}
//           </ul>
//         </div>
//         <div className='listing-realtor'>
//           <Realtor 
//           host={host}
//           rating={rating}/>
//         </div>
//       </div>

//       <div className='listing-collapse-container'>
//         <div className='listing-collapse'>
//           <Collapse 
//           title='Description'
//           content={description}
//           className="listing-title-collapse"
//           />
//         </div>
//         <div className='listing-collapse'>
//           <Collapse
//           className="listing-title-collapse"
//           title='Équipements'
//           content={equipments.map((equipment, index) => (
//             <li
//             key={index}>{equipment}</li>
//           ))}
//           />
//         </div>
//       </div>



//     </div>
//   )
// }

// export default ListingDetail