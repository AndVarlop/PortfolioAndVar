import React from 'react'
import './testimonials.css'
import AVTR3 from '../../assets/AVATAR1.jpg'
import AVTR4 from '../../assets/AVATAR2.jpg'
import AVTR5 from '../../assets/AVATAR3.jpg'
import AVTR6 from '../../assets/AVATAR4.jpg'
import AVTR7 from '../../assets/AVATAR5.jpg'
import AVTR8 from '../../assets/AVATAR6.jpg'
import AVTR9 from '../../assets/AVATAR7.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaQuoteLeft } from 'react-icons/fa'
import { useLanguage } from '../../context/useLanguage'

const data = [
  { avatar: AVTR3, name: 'Victor Manuel Lozano', role: 'Colleague', text: "What I admire most about Andrés is his initiative. He is always looking for opportunities to improve processes and increase efficiency, whether working alone or collaborating with others." },
  { avatar: AVTR4, name: 'Miguel Negrete Nuñez', role: 'Team Lead', text: "Andrés is an excellent mentor and partner. When we work together, he is always willing to share his knowledge and provide guidance to those who need help." },
  { avatar: AVTR5, name: 'Luis de las Salas', role: 'Collaborator', text: "Andrés is an exceptional communicator. He has the ability to explain complex concepts clearly and concisely, facilitating collaboration and team efficiency." },
  { avatar: AVTR6, name: 'Geraldin Parody', role: 'Colleague', text: "Andrés has impressive self-confidence that allows him to face challenges independently. He also knows how to listen and work as a team, making him an exceptional collaborator." },
  { avatar: AVTR7, name: 'Yudys Alexandra Lopez', role: 'Manager', text: "What impresses me most about Andrés is his ability to remain calm even in the most stressful situations. His positive attitude is contagious." },
  { avatar: AVTR8, name: 'Bryan Alexander Varela', role: 'Colleague', text: "Andrés is an extremely reliable person. When working on a project, I can always be sure he will deliver high-quality results. His work ethic is exemplary." },
  { avatar: AVTR9, name: 'Alexander Henry Varela', role: 'Mentor', text: "Andrés is an exceptional creative. His mind is always coming up with new ideas and innovative approaches to solving problems." }
]

const Testimonials = () => {
  const { t } = useLanguage()
  const tm = t.testimonials

  return (
    <section id='testimonials'>
      <div className='container'>
        <span className='section__eyebrow'>{tm.subtitle}</span>
        <h2 className='section__title'>
          <span className='accent'>{tm.title}</span>
        </h2>

        <Swiper
          className='testimonials__swiper'
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1100: { slidesPerView: 3 }
          }}
          modules={[Autoplay, Pagination]}
        >
          {data.map(({ avatar, name, role, text }, i) => (
            <SwiperSlide key={i} className='testimonial'>
              <FaQuoteLeft className='testimonial__quote' />
              <p className='testimonial__text'>{text}</p>
              <div className='testimonial__author'>
                <img src={avatar} alt={name} />
                <div>
                  <h4>{name}</h4>
                  <span>{role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
