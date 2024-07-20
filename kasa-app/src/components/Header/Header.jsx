import React from 'react'
import Navbar from './Navbar'
import logoHeader from '../../assets/LogoHeader.png'
import './Header.scss';


function Header() {
  return (
    <div className='header-container'> 
        <img 
        src={logoHeader} 
        alt='logo KASA' 
        className='logo'></img>
        <Navbar
        className='nav'
        />
    </div>
  )
}

export default Header   
