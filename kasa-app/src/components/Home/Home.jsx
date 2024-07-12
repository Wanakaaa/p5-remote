import React from 'react'
import './Home.scss'
import Banner from './Banner/Banner'
import Listings from '../Listings/Listings'
import bannerImage from "../../assets/bannerAbout.png"

function Home() {
  const bannerText= "Chez vous, partout et ailleurs"

  return (
    <div className='home-container'>
      <section className='banner-section'>
        <Banner 
        image={bannerImage}
        text={bannerText}
        />
      </section>
      <section className='listings-section'>
        <Listings />
      </section>
    </div>
  )
}

export default Home