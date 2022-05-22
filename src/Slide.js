import React from 'react'
import {useRef} from 'react';
import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { Navigation , EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Link } from 'react-router-dom';
import './Slide.css'
function Slide() {
  return (
    <div className="container">
      <Swiper
        modules={[Navigation , EffectFade]}
        speed={800}
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        className="myswiper"
      >
        <SwiperSlide className='swiper__slide'>
          <Link to='/jamy'>
            <img className="slide__image" src="images/ii1.jpg" alt=''/>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='swiper__slide'>
          <Link to='/jamy'>
              <img className="slide__image" src="images/jj.jpg" alt=''/>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='swiper__slide'>
          <Link to='/jamy'>
            <img className="slide__image" src="images/tom.jpg" alt=''/>
            </Link>
        </SwiperSlide>
        <SwiperSlide className='swiper__slide'>
            <Link to='/jamy'>
              <img className="slide__image" src="images/ju.jpg" alt=''/>
            </Link>
        </SwiperSlide>
        <SwiperSlide className='swiper__slide'>

          <img className="slide__image" src="images/v.jpg" alt=''/>
        </SwiperSlide>
      </Swiper>
      </div>
  )
}

export default Slide