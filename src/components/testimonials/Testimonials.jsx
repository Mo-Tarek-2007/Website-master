import React from 'react'
import "./testimonials.css"
import AVATAR from '../../assets/avatar.png'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVATAR,
        name: 'Clent One',
        review: 'Sequi ipsum, dolor sit amet consectetur adipisicing elit. Sequi, tenetur mollitia! Autem accusantium veniam aperiam nam expedita, delectus fuga quia ratione quas quam nobis debitis error optio dolorem, magnam sapiente!'
    },
    {
        avatar: AVATAR,
        name: 'Clent Two',
        review: 'Amet ipsum, dolor sit amet consectetur sit amet consectetur adipisicing elit. Autem veniam nam expedita, delectus fuga quia ratione quas quam nobis debitis error optio dolorem, magnam sapiente!aperiam.'
    },
    {
        avatar: AVATAR,
        name: 'Clent Three',
        review: 'Dolor ipsum, dolor sit amet consectetur adipisicing elit. Sequi, tenetur mollitia! Autem accusantium veniam aperiam nam expedita, delectus fuga quia ratione quas quam nobis debitis error optio dolorem, magnam sapiente!, delectus fuga quia.'
    },
    {
        avatar: AVATAR,
        name: 'Clent Four',
        review: 'Consectetur ipsum, dolor sit amet consectetur sit amet consectetur adipisicing elit. Sequi, tenetur mollitia! Autem accusantium veniam aperiam nam expedita, delectus fuga quia ratione quas quam nobis debitis.'
    }
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review From Clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
                  // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({avatar, name, review}, index) => {
                        return(
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt="" />
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials
