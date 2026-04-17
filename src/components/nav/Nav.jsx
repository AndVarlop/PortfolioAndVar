import React, { useEffect, useState } from 'react'
import './nav.css'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { useLanguage } from '../../context/useLanguage'

const Nav = () => {
  const { lang, t, toggleLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#education', label: t.nav.education },
    { href: '#services', label: t.nav.services },
    { href: '#portfolio', label: t.footer.portfolio },
    { href: '#contact', label: t.nav.contact },
  ]

  const close = () => setOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className='navbar__inner'>
        <a href='#' className='navbar__logo'>
          <span className='navbar__logo-mark'>AV</span>
          <span className='navbar__logo-text'>AndVarLop</span>
        </a>

        <ul className={`navbar__links ${open ? 'is-open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={close}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className='navbar__actions'>
          <button className='lang-toggle' onClick={toggleLang} title='Switch language'>
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
          <button
            className='navbar__burger'
            onClick={() => setOpen(o => !o)}
            aria-label='Toggle menu'
          >
            {open ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
