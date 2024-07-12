import React from 'react'
import '../components/Home/Home.scss'
import Banner from '../components/Home/Banner/Banner'
import Listings from '../components/Listings/Listings'
import bannerImage from "../assets/bannerHome.png"

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