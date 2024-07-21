import React from 'react';
import Banner from '../components/Banner/Banner'; 
import bannerImage from '../assets/bannerAbout.png'; 
import '../styles/About.scss';
// import AboutItem from "../components/About/AboutItem"
import Collapse from '../components/Collapse/Collapse';

function About() {
  const aboutData = [
    {
      title: "Fiabilité",
      content: `
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
      `,
    },
    {
      title: "Respect",
      content: `
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.
      `,
    },
    {
      title: "Service",
      content: `
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.
      `,
    },
    {
      title: "Sécurité",
      content: `
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
      `,
    }
  ];
  return (
    <div className='about-container'>
      <section className='banner-section'>
        <Banner 
        image={bannerImage}/>
      </section>
      <section className='about-section'>
        <ul>
          {aboutData.map(({title, content}) => (
            <Collapse
            key={title}
            title={title}
            content={content}
              /> 
          ))}
        </ul>
      </section>

    </div>
  )
}

export default About