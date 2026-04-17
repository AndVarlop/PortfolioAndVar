import React, { useEffect, useRef, useState } from 'react'
import './about.css'
import ME from '../../assets/imagen_2023-07-07_115529443.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { useLanguage } from '../../context/LanguageContext'

const StatCard = ({ icon, label, sublabel, delay }) => {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={ref}
      className={`stat-card${visible ? ' is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className='stat-card__icon'>{icon}</div>
      <h3 className='stat-card__label'>{label}</h3>
      <span className='stat-card__sub'>{sublabel}</span>
    </article>
  )
}

const About = () => {
  const { t } = useLanguage()
  const ab = t.about

  return (
    <section id='about'>
      <div className='container'>
        <span className='section__eyebrow'>{ab.subtitle}</span>
        <h2 className='section__title'>{ab.title.split(' ')[0]} <span className='accent'>{ab.title.split(' ').slice(1).join(' ')}</span></h2>

        <div className='about__container'>
          <div className='about__image'>
            <div className='about__image-inner'>
              <img src={ME} alt='Andres Varela' />
            </div>
            <div className='about__image-deco'></div>
          </div>

          <div className='about__content'>
            <div className='about__cards'>
              <StatCard icon={<FaAward />}         label={ab.english}    sublabel={ab.englishSub}    delay={0} />
              <StatCard icon={<FiUsers />}          label={ab.references} sublabel={ab.referencesSub} delay={150} />
              <StatCard icon={<VscFolderLibrary />} label={ab.projects}   sublabel={ab.projectsSub}   delay={300} />
            </div>
            <p className='about__bio'>{ab.bio}</p>
            <a href='#contact' className='btn btn-primary'>{ab.cta}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
