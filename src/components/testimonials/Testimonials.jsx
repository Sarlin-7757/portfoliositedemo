import React from 'react';
import './testimonial.css';
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Eren yeager',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, deserunt. Consequatur inventore eius iste vero a recusandae facilis cupiditate odio voluptates! Porro voluptatem nostrum maiores! Veritatis temporibus autem blanditiis obcaecati laboriosam pariatur. Repellendus, nam dolore!'
  },

  {
    avatar: AVTR2,
    name: 'Zoro Taro',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, deserunt. Consequatur inventore eius iste vero a recusandae facilis cupiditate odio voluptates! Porro voluptatem nostrum maiores! Veritatis temporibus autem blanditiis obcaecati laboriosam pariatur. Repellendus, nam dolore!'
  },

  {
    avatar: AVTR3,
    name: 'Sasuke Uchiha',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, deserunt. Consequatur inventore eius iste vero a recusandae facilis cupiditate odio voluptates! Porro voluptatem nostrum maiores! Veritatis temporibus autem blanditiis obcaecati laboriosam pariatur. Repellendus, nam dolore!'
  },

  {
    avatar: AVTR4,
    name: 'Naruto Uzumaki',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, deserunt. Consequatur inventore eius iste vero a recusandae facilis cupiditate odio voluptates! Porro voluptatem nostrum maiores! Veritatis temporibus autem blanditiis obcaecati laboriosam pariatur. Repellendus, nam dolore!'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install swipper modules  
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({avatar, name , review}, index)=>{
          return(
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
            </SwiperSlide>) 
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials