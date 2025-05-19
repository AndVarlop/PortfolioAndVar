import React from 'react'
import './about.css'
import ME from '../../assets/imagen_2023-07-07_115529443.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const about = () => {
  return (
    <section id='about' >
      <h3>Get To Know</h3>
      <h1>About</h1>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h3>B2 English</h3>
              <small>5+ Year</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h3>References</h3>
              <small>5+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h3>Projects</h3>
              <small>10+ Projects</small>
            </article>
          </div>
          <p>I am a systems engineer by training with programming skills such as JavaScript, java, PHP, CakePHP, database languages such as phpMyAdmin, MySQL, and web design language such as cascading style sheets (css) and hypertext markup languages (HTML). Besides, I enjoy any kind of sports, good teamwork, and an excellent working environment.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default about