import React from 'react'
import './services.css'
import { FiCheck, FiMonitor, FiServer, FiLayers } from 'react-icons/fi'
import { useLanguage } from '../../context/useLanguage'

const icons = [<FiMonitor />, <FiServer />, <FiLayers />]

const Services = () => {
  const { t } = useLanguage()
  const sv = t.services

  return (
    <section id='services'>
      <div className='container'>
        <span className='section__eyebrow'>{sv.subtitle}</span>
        <h2 className='section__title'>
          <span className='accent'>{sv.title}</span>
        </h2>

        <div className='services__grid'>
          {sv.cards.map((card, i) => (
            <article key={i} className='service-card'>
              <div className='service-card__icon'>{icons[i]}</div>
              <h3 className='service-card__title'>{card.title}</h3>
              <ul className='service-card__list'>
                {card.items.map((item, j) => (
                  <li key={j}>
                    <span className='service-card__check'><FiCheck /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
