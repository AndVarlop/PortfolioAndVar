import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { FiBriefcase } from 'react-icons/fi'
import { useLanguage } from '../../context/useLanguage'

const frontendSkills = [
  { name: 'HTML', level: 'experienced' },
  { name: 'CSS', level: 'experienced' },
  { name: 'JavaScript', level: 'experienced' },
  { name: 'TypeScript', level: 'experienced' },
  { name: 'React', level: 'intermediate' },
  { name: 'Angular', level: 'intermediate' },
  { name: 'jQuery', level: 'intermediate' }
]

const backendSkills = [
  { name: 'Java', level: 'experienced' },
  { name: 'PHP', level: 'experienced' },
  { name: 'Node.js', level: 'intermediate' },
  { name: 'Python', level: 'intermediate' },
  { name: 'Oracle PL/SQL', level: 'intermediate' },
  { name: 'MySQL', level: 'intermediate' }
]

const Experience = () => {
  const { t } = useLanguage()
  const ex = t.experience

  const getLevelPercent = (level) => {
    switch (level) {
      case 'experienced': return 100
      case 'intermediate': return 60
      case 'basic': return 30
      default: return 0
    }
  }

  const SkillBar = ({ skill }) => (
    <div className='skill-bar scroll-reveal' data-scroll-delay='50'>
      <div className='skill-bar__header'>
        <span className='skill-bar__name'>{skill.name}</span>
        <span className='skill-bar__level'>{skill.level === 'experienced' ? 'Expert' : skill.level === 'intermediate' ? 'Proficient' : 'Familiar'}</span>
      </div>
      <div className='skill-bar__track'>
        <div
          className='skill-bar__fill'
          style={{ '--skill-width': `${getLevelPercent(skill.level)}%` }}
        ></div>
      </div>
    </div>
  )

  const SkillList = ({ items }) => (
    <div className='experience__skills'>
      {items.map(s => (
        <SkillBar key={s.name} skill={s} />
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
              <article key={i} className='work-item scroll-reveal' data-scroll-delay={i * 100}>
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
