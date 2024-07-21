import React from 'react'
import Navbar from './Navbar'
import logoHeader from '../../assets/LogoHeader.png'
import './Header.scss';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className='header-container'> 
      <Link to={`/`}>
        <img 
            src={logoHeader} 
            alt='logo KASA' 
            className='logo'></img>
      </Link>
        
      <Navbar
      className='nav'
      />
    </div>
  )
}

export default Header   
