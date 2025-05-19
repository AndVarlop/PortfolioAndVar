import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h3>What Skills I Have</h3>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__work">
          <h3>FrontEnd<br/>Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Boostrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JQuery</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__work">
          <h3>Work</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h2>Informatica y Tributos</h2>
                <h4>Tecnologo de Soporte Operativo</h4>
                <h6>Julio 2024 - Actualidad</h6>
                <small className='text-light'>- Brindo soporte técnico operativo a los procesos internos de la empresa, asegurando el correcto funcionamiento de sistemas y herramientas utilizadas por los equipos administrativos y financieros.
                    <br />- Gestiono incidencias técnicas, realizo mantenimiento preventivo y correctivo de equipos y participo en la mejora continua de procesos tecnológicos.
                    <br />- Apoyo en la implementación y monitoreo de soluciones informáticas orientadas a optimizar la productividad del área Treasury y otras áreas operativas.
                    <br />- Colaboro en la administración de enlaces a servidores de clientes, garantizando seguridad, eficiencia y control de acceso.</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>BackEnd<br/>Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MyAdmin</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySql</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience