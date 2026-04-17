import React from 'react'
import './footer.css'
import { FaFacebookF, FaGithub } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { useLanguage } from '../../context/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()
  const ft = t.footer

  return (
    <footer>
      <div className='footer__inner'>
        <a href='#' className='footer__logo'>
          <span className='footer__logo-mark'>AV</span>
          AndVarLop
        </a>

        <ul className='permalinks'>
          <li><a href='#'>{ft.home}</a></li>
          <li><a href='#about'>{ft.about}</a></li>
          <li><a href='#experience'>{ft.experience}</a></li>
          <li><a href='#education'>{ft.education}</a></li>
          <li><a href='#services'>{ft.services}</a></li>
          <li><a href='#portfolio'>{ft.portfolio}</a></li>
          <li><a href='#testimonials'>{ft.testimonials}</a></li>
          <li><a href='#contact'>{ft.contact}</a></li>
        </ul>

        <div className='footer__socials'>
          <a href='https://www.linkedin.com/in/andvarlop/' target='_blank' rel='noreferrer'><BsLinkedin /></a>
          <a href='https://github.com/AndVarlop' target='_blank' rel='noreferrer'><FaGithub /></a>
          <a href='https://twitter.com/DeveloperAndVar' target='_blank' rel='noreferrer'><BsTwitter /></a>
          <a href='https://www.facebook.com/AndVarShooter/' target='_blank' rel='noreferrer'><FaFacebookF /></a>
          <a href='https://www.instagram.com/_andvar__/' target='_blank' rel='noreferrer'><FiInstagram /></a>
        </div>

        <div className='footer__copyright'>
          {ft.copyright}
        </div>
      </div>
    </footer>
  )
}

export default Footer
