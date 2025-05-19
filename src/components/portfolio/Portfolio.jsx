import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Fondo1.jpg'
import IMG2 from '../../assets/Fondo2.jpg'
import IMG3 from '../../assets/Fondo3.jpg'
import IMG4 from '../../assets/Fondo4.jpg'
import Auditapp from '../../assets/Auditapp.png'
import Reposteria from '../../assets/Reposteria.png'
import ZonaABC from '../../assets/ZonaABC.png'

const data = [
  {
    id: 1,
    image: Auditapp,
    title: 'Auditapp',
    github: 'https://github.com/AndVarlop/AUDITAPP/',
    demo: 'https://andvarlop.github.io/AUDITAPP/'
  },
  {
    id: 2,
    image: Reposteria,
    title: 'Alexandra Reposteria',
    github: 'https://github.com/AndVarlop/AlexandraReposteria1/',
    demo: 'https://andvarlop.github.io/AlexandraReposteria1/'
  },
  {
    id: 3,
    image: ZonaABC,
    title: 'ZonaABC',
    github: 'https://github.com/AndVarlop/ZonaABC',
    demo: 'https://andvarlop.github.io/ZonaABC/'
  },{
    id: 4,
    image: IMG2,
    title: 'AndVarPictures',
    github: 'https://github.com/AndVarlop',
    demo: 'https://andvarlop.github.io/AndVarPictures/'
  },{
    id: 5,
    image: IMG3,
    title: 'Blog',
    github: 'https://github.com/AndVarlop',
    demo: 'https://andvarlop.github.io/Blog/'
  },{
    id: 6,
    image: IMG4,
    title: 'Object Detector',
    github: 'https://github.com/AndVarlop',
    demo: 'https://andvarlop.github.io/DetectorAndVar/'
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h3 className='text-light'>My Recent Work</h3>
      <h1>Portafolio</h1>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} id='btn1' className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio