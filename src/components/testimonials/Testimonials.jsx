import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/AVATAR0.jpg'
import AVTR3 from '../../assets/AVATAR1.jpg'
import AVTR4 from '../../assets/AVATAR2.jpg'
import AVTR5 from '../../assets/AVATAR3.jpg'
import AVTR6 from '../../assets/AVATAR4.jpg'
import AVTR7 from '../../assets/AVATAR5.jpg'
import AVTR8 from '../../assets/AVATAR6.jpg'
import AVTR9 from '../../assets/AVATAR7.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards, Autoplay } from 'swiper/modules';

const data = [
  {
    avatar: AVTR3,
    name: 'Victor Manuel Lozano',
    text: "What I admire most about Andrés is his initiative. He is always looking for opportunities to improve processes and increase efficiency, whether working alone or collaborating with others. He is a great example to follow."
  },/*
  {
    avatar: AVTR1,
    name: 'Juan Sebastian Gallon',
    text: "Andrés is a true team leader. When we work together, he always makes sure we're all on the same page and distributes responsibilities fairly. He is a reliable partner."
  },*/
  {
    avatar: AVTR4,
    name: 'Miguel Negrete Nuñez',
    text: "Andrés is an excellent mentor and partner. When we work together on a project, he is always willing to share his knowledge and provide guidance to those who need help. He is a true asset to the professional growth of the team."
  },
  {
    avatar: AVTR5,
    name: 'Luis de las Salas',
    text: "Andrés is an exceptional communicator. He has the ability to explain complex concepts clearly and concisely, which facilitates collaboration and improves team efficiency, and he also works very hard when he's on his own."
  },
  {
    avatar: AVTR6,
    name: 'Geraldin Parody',
    text: "Andrés has an impressive self-confidence that allows him to face challenges independently. But what I value most about him is that he also knows how to listen and work as a team, which makes him an exceptional collaborator."
  },
  {
    avatar: AVTR7,
    name: 'Yudys Alexandra Lopez',
    text: "What impresses me most about Andrés is his ability to remain calm even in the most stressful situations. His calm and positive attitude is contagious, and we always find solutions when he is involved."
  },
  {
    avatar: AVTR8,
    name: 'Bryan Alexander Varela',
    text: "Andrés is an extremely reliable person. When working on a project, I can always be sure that he will do his part and deliver high-quality results. His work ethic is exemplary."
  },
  {
    avatar: AVTR9,
    name: 'Alexander Henry Varela',
    text: "Andrés is an exceptional creative. His mind is always coming up with new ideas and innovative approaches to solving problems. It's great to have someone like him on the team to come up with fresh solutions."
  }
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <div className="container title__container">
        <h3 className='text-light'>Review from clients</h3>
        <h1>Testimonials</h1>
      </div>
      <Swiper className="container testimonials__container"
        effect={'cards'}
        grabCursor={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCards]}
      >
        {
          data.map(({ avatar, name, text }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h3 className='client__name'>{name}</h3>
                <small className='client__review'>{text}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </section>
  )
}

export default testimonials