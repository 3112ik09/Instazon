import { Button, ButtonGroup } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import './Profile.css'
import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { Navigation , EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Slide from './Slide';
import Product1 from './Product';
function Profile() {
  return (
    <div className='profile'>
        <div className='profile__about'>
            <img className='profile__image' src="images/jj.jpg"></img>
            <div className='profile__info'>
                <strong> Hi to All...</strong>
                <br></br>
                I Am Jisoo member of Korean Group BlackPink<br></br>
                <br></br>
                <ButtonGroup className='buttons__group'>
                    <Button className='buttons'>Follow</Button>
                    <Button className='buttons'>Like</Button>
                </ButtonGroup>
            </div>
        </div>
        <h1>Products</h1>
        <div className='profile__product'>
                <div className='product__image'>
                            <img className='product__image' src="images/jisoo1.jpg"></img>
                        </div>
                <div class='product_swiper'>
                    <Swiper
                        modules={[Navigation , EffectFade]}
                        speed={800}
                        spaceBetween={50}
                        slidesPerView={3}
                        loop={true}
                        className="myswiper"
                    >
                        <SwiperSlide className='swiper__slide1'>
                        <Product1
                            id="90"
                            title="Dior - Short Dress"
                            price={3100}
                            image="images/j1d.png"
                        />
                        </SwiperSlide>
                        <SwiperSlide className='swiper__slide1'>
                        <Product1
                                id="91"
                                title="Dior - Transpaent Blouse"
                                price={1000}
                            
                                image="images/j2d.png"
                            />
                        </SwiperSlide>
                        <SwiperSlide className='swiper__slide1'>
                            <Product1
                                id="92"
                                title="Dior - Brown Belt"
                                price={960}
                            
                                image="images/j3d.png"
                            />
                        </SwiperSlide>
                        
                    </Swiper>
                </div>
        </div>
        <br></br>
        <div className='profile__product'>
                <div className='product__image'>
                            <img className='product__image' src="images/jisoo2.jpg"></img>
                </div>
                <div class='product_swiper'>
                <Swiper
                    modules={[Navigation , EffectFade]}
                    // speed={800}
                    spaceBetween={50}
                    slidesPerView={3}
                    loop={true}
                    className="myswiper"
                >
                    <SwiperSlide className='swiper__slide1'>
                    <Product1
                        id="94"
                        title="Dior - Fall-winter"
                        price={3800}
                       
                        image="images/jj1.png"
                    />
                    </SwiperSlide>
                    <SwiperSlide className='swiper__slide1'>
                    <Product1
                            id="93"
                            title="Dior - Oblique"
                            price={590}
                           
                            image="images/jj2.png"
                        />
                    </SwiperSlide>
                    <SwiperSlide className='swiper__slide1'>
                        <Product1
                            id="95"
                            title="Montaigne Belt"
                            price={840}
                            image="images/jj3.png"
                        />
                    </SwiperSlide>
                    <SwiperSlide className='swiper__slide1'>
                                <Product1
                        id="96"
                        title="clou Ring"
                        price={2000}
                        image="images/jj4.png"
                    />
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Profile