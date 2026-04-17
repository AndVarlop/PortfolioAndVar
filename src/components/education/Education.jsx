import React from 'react'
import './education.css'
import { FiBookOpen, FiAward } from 'react-icons/fi'
import { useLanguage } from '../../context/useLanguage'

const Education = () => {
  const { t } = useLanguage()
  const ed = t.education

  return (
    <section id='education'>
      <div className='container'>
        <span className='section__eyebrow'>{ed.subtitle}</span>
        <h2 className='section__title'>
          <span className='accent'>{ed.title}</span>
        </h2>

        <div className='education__grid'>
          {/* DEGREES */}
          <div className='edu-block'>
            <div className='edu-block__head'>
              <div className='edu-block__icon'><FiBookOpen /></div>
              <h3>{ed.degreesTitle}</h3>
            </div>

            <div className='edu-timeline'>
              {ed.degrees.map((d, i) => (
                <article key={i} className='edu-item'>
                  <div className='edu-item__marker'>
                    <span className='edu-item__dot' />
                  </div>
                  <div className='edu-item__body'>
                    <div className='edu-item__row'>
                      <h4>{d.title}</h4>
                      <span className='edu-item__date'>{d.date}</span>
                    </div>
                    <p className='edu-item__place'>{d.place}</p>
                    {d.desc && <p className='edu-item__desc'>{d.desc}</p>}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div className='edu-block'>
            <div className='edu-block__head'>
              <div className='edu-block__icon'><FiAward /></div>
              <h3>{ed.certsTitle}</h3>
            </div>

            <div className='cert-grid'>
              {ed.certs.map((c, i) => (
                <article key={i} className='cert-card'>
                  <div className='cert-card__badge'><FiAward /></div>
                  <div className='cert-card__body'>
                    <h4>{c.title}</h4>
                    <span>{c.place}</span>
                    {c.desc && <p>{c.desc}</p>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
