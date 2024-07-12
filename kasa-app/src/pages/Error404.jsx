import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Error404/Error404.scss'

function Error404() {
  return (
    <section className='container'>
      <section className='error-404'>
        <h1>404</h1>
        <p>Oups ! La page que vous demandez n'existe pas.</p>
        <Link to="/" className='returnHomeLink'>Retourner sur la page d'accueil</Link>
      </section>
    </section>
  )
}

export default Error404