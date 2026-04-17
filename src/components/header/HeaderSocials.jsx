import React from 'react'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/andvarlop/' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
        <BsLinkedin />
      </a>
      <a href='https://github.com/AndVarlop' target='_blank' rel='noreferrer' aria-label='GitHub'>
        <FaGithub />
      </a>
      <a href='https://twitter.com/DeveloperAndVar' target='_blank' rel='noreferrer' aria-label='X / Twitter'>
        <BsTwitter />
      </a>
    </div>
  )
}

export default HeaderSocials