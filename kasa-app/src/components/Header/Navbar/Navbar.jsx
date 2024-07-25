import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='nav'>
        <NavLink
        to="/"
        end
        className={({isActive}) => (isActive ? "active" : "")}
        >Accueil</NavLink>
        <NavLink 
        to="/about"
        className={({ isActive }) => (isActive ? 'active' : '')}
        >A propos</NavLink>
    </nav>
  )
}

export default Navbar