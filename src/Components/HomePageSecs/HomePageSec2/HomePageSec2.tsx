import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

import "./HomePageSec2.scss"
import "swiper/css";
import "swiper/css/effect-fade";

import "./HomePageSec2.scss"
import {EffectFade, Autoplay} from "swiper"

import SlideImg1 from "../../../Assets/Images/Page2/console-img-1@2x.png"
import SlideImg2 from "../../../Assets/Images/Page2/console-img-2@2x.png"
import SlideImg3 from "../../../Assets/Images/Page2/console-img-3@2x.png"
import SlideImg4 from "../../../Assets/Images/Page2/console-img-4@2x.png"
import SlideImg5 from "../../../Assets/Images/Page2/console-img-5@2x.png"
import SlideImg6 from "../../../Assets/Images/Page2/console-img-6@2x.png"

const SlideImgs = [SlideImg1,SlideImg2,SlideImg3, SlideImg4, SlideImg5, SlideImg6]


function HomePageSec2() {
  
  return (
    <div className='section'>
        <div className="home-two">
          <div className="home-two_container">
            <div className="home-two_main">
              <h2 className='home-two__title select-none'>
                Creative,
                Fun and-
                Enjoyable
                work
                Impressive
              </h2>
              <div className='home-two_sliders'>
              <Swiper
                effect={"fade"}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[EffectFade,Autoplay]}
                className="mySwiper"
              >
                {
                  SlideImgs.map((slide:string, i:any) => (
                      <SwiperSlide key={i}>
                        <img className="home-two_slider-img" src={slide} alt="ConceptCube"/>
                      </SwiperSlide>
                  ))
                }
                
              </Swiper>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomePageSec2