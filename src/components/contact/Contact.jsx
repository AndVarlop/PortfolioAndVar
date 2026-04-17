import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { useLanguage } from '../../context/useLanguage'

const Contact = () => {
  const { t } = useLanguage()
  const ct = t.contact
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_r1w45o8', 'template_tjy0m4d', form.current, 'xHMjLPCD6KlMqp82s')
    e.target.reset()
  }

  return (
    <section id='contact'>
      <div className='container'>
        <span className='section__eyebrow'>{ct.subtitle}</span>
        <h2 className='section__title'>
          <span className='accent'>{ct.title}</span>
        </h2>

        <div className='contact__container'>
          <div className='contact__options'>
            <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon' />
              <h4>{ct.email}</h4>
              <h6>developer.andvarlop@gmail.com</h6>
              <a href='mailto:developer.andvarlop@gmail.com' target='_blank' rel='noreferrer'>{ct.sendMessage}</a>
            </article>
            <article className='contact__option'>
              <RiMessengerLine className='contact__option-icon' />
              <h4>{ct.messenger}</h4>
              <h6>AndVarShooter</h6>
              <a href='https://m.me/AndVarShooter' target='_blank' rel='noreferrer'>{ct.sendMessage}</a>
            </article>
            <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon' />
              <h4>{ct.whatsapp}</h4>
              <h6>+57 302 259 4069</h6>
              <a href='https://api.whatsapp.com/send?phone=573022594069' target='_blank' rel='noreferrer'>{ct.sendMessage}</a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder={ct.namePlaceholder} required />
            <input type='email' name='email' placeholder={ct.emailPlaceholder} required />
            <textarea name='message' rows='8' placeholder={ct.messagePlaceholder} required></textarea>
            <button type='submit' className='btn btn-primary'>{ct.sendBtn}</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
