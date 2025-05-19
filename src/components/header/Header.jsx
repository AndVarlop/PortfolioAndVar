import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/me1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h2>Hello i'm</h2>
        <h1>Andres Varela</h1>
        <h3 className='wrap text-light'>Back-End Developer Junior</h3>
        <br />
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
    )
}
export default Header