import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Error404.scss'

function Error404() {
  return (
    <section className='error-container'>
        <h1>404</h1>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
    </section>
  )
}

export default Error404