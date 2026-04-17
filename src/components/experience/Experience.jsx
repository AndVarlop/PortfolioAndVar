import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { FiBriefcase } from 'react-icons/fi'
import { useLanguage } from '../../context/LanguageContext'

const frontendSkills = [
  { name: 'HTML',       level: 'experienced' },
  { name: 'CSS',        level: 'experienced' },
  { name: 'JavaScript', level: 'intermediate' },
  { name: 'React',      level: 'intermediate' },
  { name: 'Angular',    level: 'intermediate' },
  { name: 'jQuery',     level: 'intermediate' },
  { name: 'Bootstrap',  level: 'experienced' }
]

const backendSkills = [
  { name: 'Java',        level: 'intermediate' },
  { name: 'Node.js',     level: 'intermediate' },
  { name: 'PHP',         level: 'experienced' },
  { name: 'Python',      level: 'intermediate' },
  { name: 'Oracle PL/SQL', level: 'intermediate' },
  { name: 'MySQL',       level: 'intermediate' }
]

const Experience = () => {
  const { t } = useLanguage()
  const ex = t.experience

  const levelLabel = (l) =>
    l === 'experienced' ? ex.experienced : l === 'intermediate' ? ex.intermediate : ex.basic

  const SkillList = ({ items }) => (
    <div className='experience__content'>
      {items.map(s => (
        <article key={s.name} className='experience__details'>
          <BsPatchCheckFill className='experience__details-icon' />
          <div>
            <h4>{s.name}</h4>
            <small className='text-light'>{levelLabel(s.level)}</small>
          </div>
        </article>
      ))}
    </div>
  )

  return (
    <section id='experience'>
      <div className='container'>
        <span className='section__eyebrow'>{ex.subtitle}</span>
        <h2 className='section__title'>
          <span className='accent'>{ex.title}</span>
        </h2>

        <div className='experience__container'>
          <div className='experience__block'>
            <h3>{ex.frontend}</h3>
            <SkillList items={frontendSkills} />
          </div>
          <div className='experience__block'>
            <h3>{ex.backend}</h3>
            <SkillList items={backendSkills} />
          </div>
        </div>

        <div className='experience__work'>
          <h3 className='experience__work-title'>
            <FiBriefcase /> {ex.work}
          </h3>
          <div className='experience__timeline'>
            {ex.roles.map((role, i) => (
              <article key={i} className='work-item'>
                <div className='work-item__head'>
                  <h4>{role.title}</h4>
                  <span className='work-item__date'>{role.date}</span>
                </div>
                <p className='work-item__company'>{ex.company}</p>
                <ul className='work-item__list'>
                  {role.items.map((it, j) => (
                    <li key={j}>
                      <BsPatchCheckFill className='work-item__icon' />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
