import React from 'react'
import Navbar from './Navbar/Navbar'
import logoHeader from '../../assets/LogoHeader.png'
import './Header.scss';


function Header() {
  return (
    <div className='header-container'> 
        <img 
        src={logoHeader} 
        alt='logo KASA' 
        className='logoHeight'></img>
        <Navbar/>
    </div>
  )
}

export default Header   
