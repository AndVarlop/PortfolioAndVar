import React from 'react'
import CV_ES from '../../assets/AndVar_CV_ES.pdf'
import CV_EN from '../../assets/AndVar_CV_EN.pdf'

import { useLanguage } from '../../context/useLanguage'

const CTA = () => {
  const { lang } = useLanguage()
  const cvFile = lang === 'es' ? CV_ES : CV_EN
  const cvName = lang === 'es' ? 'AndVar_CV_ES.pdf' : 'AndVar_CV_EN.pdf'

  return (
    <div className='cta'>
      <a href={cvFile} download={cvName} className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA