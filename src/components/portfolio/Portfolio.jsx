import React from 'react'
import './portfolio.css'
import Auditapp from '../../assets/Auditapp.jpg'
import Reposteria from '../../assets/Reposteria.png'
import ZonaABC from '../../assets/ZonaABC.png'
import MeloPictures from '../../assets/MeloPictures.png'
import LaCaleta from '../../assets/Captura-LaCaleta.png'
import AntojitosSA from '../../assets/Antojitos-SA.png'
import JoseMendoza from '../../assets/JoseMendoza.png'
import AndVarArcade from '../../assets/AndVarArcade.png'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { useLanguage } from '../../context/useLanguage'

const images = [AndVarArcade, LaCaleta, AntojitosSA, JoseMendoza, MeloPictures, Auditapp, Reposteria, ZonaABC]

const links = [
  { github: 'https://github.com/AndVarlop/AndVarArcade', demo: 'https://andvararcade.devandvar.com/' },
  { github: 'https://github.com/AndVarlop/La-Caleta', demo: 'https://La-Caleta.devandvar.com/' },
  { github: 'https://github.com/AndVarlop/Antojitos-SA', demo: 'https://Antojitos-SA.devandvar.com/' },
  { github: 'https://github.com/AndVarlop/JoseMendoza', demo: 'https://jose-mendoza.vercel.app/' },
  { github: 'https://github.com/AndVarlop/MeloPictures', demo: 'https://andvarlop.github.io/MeloPictures/' },
  { github: 'https://github.com/AndVarlop/AUDITAPP/', demo: 'https://andvarlop.github.io/AUDITAPP/' },
  { github: 'https://github.com/AndVarlop/AlexandraReposteria1/', demo: 'https://andvarlop.github.io/AlexandraReposteria1/' },
]

const Portfolio = () => {
  const { t } = useLanguage()
  const pf = t.portfolio

  return (
    <section id='portfolio'>
      <div className='container'>
        <span className='section__eyebrow'>{pf.subtitle}</span>
        <h2 className='section__title'>
          <span className='accent'>{pf.title}</span>
        </h2>

        <div className='portfolio__grid'>
          {pf.projects.map((project, i) => (
            <article key={i} className='project scroll-reveal' data-scroll-delay={i * 120}>
              <div className='project__image'>
                <img src={images[i]} alt={project.title} />
                <div className='project__image-overlay'>
                  <a href={links[i].github} className='project__icon-btn' target='_blank' rel='noreferrer' title='GitHub'>
                    <FiGithub />
                  </a>
                  <a href={links[i].demo} className='project__icon-btn' target='_blank' rel='noreferrer' title='Live Demo'>
                    <FiExternalLink />
                  </a>
                </div>
              </div>

              <div className='project__body'>
                <h3 className='project__title'>{project.title}</h3>
                <p className='project__desc'>{project.desc}</p>
                <div className='project__tags'>
                  {project.tech.map(tag => (
                    <span key={tag} className='tech-tag'>{tag}</span>
                  ))}
                </div>
                <div className='project__actions'>
                  <a href={links[i].github} className='project__link' target='_blank' rel='noreferrer'>
                    <FiGithub /> {pf.github}
                  </a>
                  <a href={links[i].demo} className='project__link project__link--primary' target='_blank' rel='noreferrer'>
                    <FiExternalLink /> {pf.liveDemo}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
