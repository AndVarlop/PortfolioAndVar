import React from 'react'
import './header.css'
import ME from '../../assets/AndVar_Item.png'
import CV_ES from '../../assets/AndVar_CV_ES.pdf'
import CV_EN from '../../assets/AndVar_CV_EN.pdf'
import HeaderSocials from './HeaderSocials'
import { FaArrowDown } from 'react-icons/fa6'
import { FiDownload, FiMessageCircle, FiMapPin } from 'react-icons/fi'
import { useLanguage } from '../../context/useLanguage'
import { useEffect } from 'react'
import initAnime from '../../animations/animeInit'
import initScrollReveal from '../../animations/scrollReveal'
import useTypewriter from '../../hooks/useTypewriter'

const Header = () => {
  const { lang, t } = useLanguage()
  const typedTitle = useTypewriter(t.header.titles)

  const cvFile = lang === 'es' ? CV_ES : CV_EN
  const cvName = lang === 'es' ? 'AndVar_CV_ES.pdf' : 'AndVar_CV_EN.pdf'

  // Run entrance animations and scroll reveal once on mount
  useEffect(() => {
    (async () => {
      await initAnime()
      initScrollReveal()
    })()
  }, [])

  // Draggable hero image (springs-like) for visual depth
  useEffect(() => {
    const wrap = document.querySelector('.hero__image-wrap')
    if (!wrap) return
    let dragging = false
    let startX = 0
    let startY = 0
    let offsetX = 0
    let offsetY = 0
    let raf = null

    const getPoint = (ev) => {
      if (ev.touches && ev.touches.length) {
        return { x: ev.touches[0].clientX, y: ev.touches[0].clientY }
      }
      return { x: ev.clientX, y: ev.clientY }
    }

    const onDown = (e) => {
      dragging = true
      const p = getPoint(e)
      startX = p.x - offsetX
      startY = p.y - offsetY
    }

    const onMove = (e) => {
      if (!dragging) return
      const p = getPoint(e)
      offsetX = p.x - startX
      offsetY = p.y - startY
      // clamp movement for a subtle parallax feel
      offsetX = Math.max(-28, Math.min(28, offsetX))
      offsetY = Math.max(-28, Math.min(28, offsetY))
      wrap.style.transform = `translate(${offsetX}px, ${offsetY}px)`
    }

    const onUp = () => {
      dragging = false
      const animateBack = () => {
        offsetX *= 0.85
        offsetY *= 0.85
        wrap.style.transform = `translate(${offsetX}px, ${offsetY}px)`
        if (Math.abs(offsetX) > 0.5 || Math.abs(offsetY) > 0.5) {
          raf = requestAnimationFrame(animateBack)
        } else {
          wrap.style.transform = 'translate(0px, 0px)'
        }
      }
      animateBack()
    }

    wrap.addEventListener('mousedown', onDown)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    wrap.addEventListener('touchstart', onDown, { passive: true })
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('touchend', onUp)

    return () => {
      wrap.removeEventListener('mousedown', onDown)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      wrap.removeEventListener('touchstart', onDown)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onUp)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

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

          {/* Decorative inline SVG ornament */}
          <svg id='logo-ornament' width='260' height='60' viewBox='0 0 260 60' fill='none' xmlns='http://www.w3.org/2000/svg' aria-label='ornament'>
            <defs>
              <linearGradient id='gradLogo' x1='0' y1='0' x2='1' y2='0'>
                <stop offset='0%' stopColor='#60a5fa'/>
                <stop offset='100%' stopColor='#a78bfa'/>
              </linearGradient>
            </defs>
            <path id='logo-path' d='M10 40 C 60 5, 200 55, 250 20' stroke='url(#gradLogo)' strokeWidth='3' fill='none' strokeLinecap='round'/>
          </svg>

          <p className='hero__tagline'>{t.header.tagline}</p>

          <div className='hero__meta'>
            <span className='hero__meta-item'>
              <FiMapPin /> {t.header.location}
            </span>
            <span className='hero__meta-item hero__meta-item--status'>
              <span className='hero__meta-dot'></span>
              {t.header.available}
            </span>
          </div>

          <div className='hero__actions'>
            <a href={cvFile} download={cvName} className='btn btn-primary'>
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
              Open to work
            </div>
            <div className='hero__badge hero__badge--bottom'>
              <span>🚀</span> Full-Stack Engineer
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
