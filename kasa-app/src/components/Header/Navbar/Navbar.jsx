import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"

function Navbar() {
  return (
    <nav className='nav-container'>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
    </nav>
  )
}

export default Navbar