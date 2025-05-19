import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h3>What I Offer</h3>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I have experiences in both FrontEnd and BackEnd development. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I'm good at either aspect, but I get along better with the visual part of the design. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I am patient and I do not despair if something does not work out for me, I go back and start until I reach the best possible solution. </p>
            </li>
            
          </ul>
        </article>
        {/* END OF UI/UX*/ }
        <article className="service">
          <div className="service__head">
            <h3>Team Work</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I am an excellent worker, both in a team and alone, in either of the two ways I have known how to accommodate.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I work a lot as an organizer and distributor of activities for a better disposition of all the workers.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Be a good example for other people so that they intensify themselves to improve at work.</p>
            </li>
            
          </ul>
        </article>
        {/* END OF CONTENT CREATION*/ }
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3> 
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I have experience in the creation of web pages, both in the design and in the logical part of the web page.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I am very detailed, I like everything to be well designed so that the user has the best possible view. </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I have a variety of projects and pages which have helped me improve both the visual part of the page and the back. </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT*/ }
      </div>
    </section>
  )
}

export default Services