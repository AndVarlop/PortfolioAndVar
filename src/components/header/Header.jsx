import React from 'react'
import './header.css'
import ME from '../../assets/me1.png'
import CV from '../../assets/Andvar_cv.pdf'
import HeaderSocials from './HeaderSocials'
import { FaArrowDown } from 'react-icons/fa6'
import { FiDownload, FiMessageCircle } from 'react-icons/fi'
import { useLanguage } from '../../context/useLanguage'
import useTypewriter from '../../hooks/useTypewriter'

const Header = () => {
  const { t } = useLanguage()
  const typedTitle = useTypewriter(t.header.titles)

  return (
    <header id='home' className='hero'>
      <div className='hero__bg-grid'></div>
      <div className='container hero__container'>

        <div className='hero__content'>
          <span className='hero__greeting'>
            <span className='hero__wave'>👋</span> {t.header.greeting}
          </span>
          <h1 className='hero__name'>Andres <span className='accent'>Varela</span></h1>
          <div className='hero__title'>
            <span className='hero__title-prefix'>&lt;</span>
            <span className='hero__title-typed'>{typedTitle}</span>
            <span className='hero__cursor'>|</span>
            <span className='hero__title-prefix'>/&gt;</span>
          </div>

          <p className='hero__tagline'>{t.about.bio}</p>

          <div className='hero__actions'>
            <a href={CV} download className='btn btn-primary'>
              <FiDownload /> {t.header.downloadCV}
            </a>
            <a href='#contact' className='btn'>
              <FiMessageCircle /> {t.header.letsTalk}
            </a>
          </div>

          <HeaderSocials />
        </div>

        <div className='hero__visual'>
          <div className='hero__image-wrap'>
            <div className='hero__image-ring'></div>
            <div className='hero__image-glow'></div>
            <img src={ME} alt='Andres Varela' />
            <div className='hero__badge hero__badge--top'>
              <span className='hero__badge-dot'></span>
              Available
            </div>
            <div className='hero__badge hero__badge--bottom'>
              <span>⚡</span> 10+ Projects
            </div>
          </div>
        </div>
      </div>

      <a href='#about' className='hero__scroll'>
        <span>{t.header.scrollDown}</span>
        <FaArrowDown />
      </a>
    </header>
  )
}

export default Header
