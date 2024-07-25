import React from 'react'
import logoFooter from '../../assets/LogoFooter.png'

function Footer() {
    const copyright = '© 2020 Kasa. All rights reserved'
  return (
    <div className='footer-container'>
        <img 
        src={logoFooter} 
        alt='logo KASA' 
        className='footer-logo'></img>
        <p className='footer-copyright'>{copyright}</p>
    </div>
  )
}

export default Footer