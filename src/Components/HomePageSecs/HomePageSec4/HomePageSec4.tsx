import React, { useEffect, MouseEvent } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import '../../../i18n'


import "./HomePageSec4.scss"
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import { Scrollbar, Mousewheel,Navigation, Autoplay } from "swiper";

import {AiOutlineRight, AiOutlineLeft} from "react-icons/ai"


const items = [
  {
    year: 2022,
    i: [
      {
        desc: "page 4 item",
        author: "MOTION"
      },
      {
        desc: "page 4 item",
        author: "MOTION"
      },
      {
        desc: "page 4 item",
        author: "MOTION"
      },
      {
        desc: "page 4 item",
        author: "MOTION"
      },
      {
        desc: "page 4 item",
        author: "MOTION"
      }
    ]
  },
  {
    year: 2021,
    i: [
      {
        desc: "page 4 item",
        author: "MOTION"
      },
      {
        desc: "page 4 item",
        author: "MOTION"
      },
      {
        desc: "page 4 item",
        author: "MOTION"
      },
      {
        desc: "page 4 item",
        author: "MOTION"
      },
      {
        desc: "page 4 item",
        author: "MOTION"
      }
    ]
  },
  {
    year: 2020,
    i: [
      {
        desc: "page 4 item",
        author: "MOTION"
      },
      {
        desc: "page 4 item",
        author: "MOTION"
      },
      {
        desc: "page 4 item",
        author: "MOTION"
      },
      {
        desc: "page 4 item",
        author: "MOTION"
      },{
        desc: "page 4 item",
        author: "MOTION"
      }
    ]
  },
  {
    year: 2019,
    i: [
      {
        desc: "page 4 item",
        author: "MOTION"
      },
      {
        desc: "page 4 item",
        author: "MOTION"
      },
      {
        desc: "page 4 item",
        author: "MOTION"
      },
      {
        desc: "page 4 item",
        author: "MOTION"
      }
    ]
  },
  {
    year: 2018,
    i: [
      {
        desc: "page 4 item",
        author: "MOTION"
      },
      {
        desc: "page 4 item",
        author: "MOTION"
      },
      {
        desc: "page 4 item",
        author: "MOTION"
      },
      {
        desc: "page 4 item",
        author: "MOTION"
      }
    ]
  }
]

function HomePageSec4() {

  const { t } = useTranslation();
  

  return (
    <div className='section'>
      <div className="home-four select-none">
        <div className="home-four-container">
          <div className="home-four-main">
            <p className="home-four-main-title">
              History
            </p>
            <div className='home-four-content'>
              <Swiper
                // slidesPerView={4}
                spaceBetween={30}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev"
                }}
                breakpoints={{
                  576: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1460: {
                    slidesPerView: 4,
                  },
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                  stopOnLastSlide: true
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
              >
                {
                  items.map(item => (
                    <SwiperSlide>
                      <div className='home-four-item'>
                        <h2>
                          {item.year}
                        </h2>
                        <Swiper
                          direction={"vertical"}
                          slidesPerView={4}
                          // spaceBetween={10}
                          className="mySwiper-vertical"
                          mousewheel={true}
                          scrollbar={{
                            hide: true,
                          }}
                          modules={[Scrollbar, Mousewheel]}
                        >
                         {
                          item.i.map(item => (
                            <SwiperSlide>
                              <div className="mySwiper-vertical-item">
                                <h3>
                                  {t(item.desc)}
                                </h3>
                                <p>
                                  {item.author}
                                </p>
                              </div>
                            </SwiperSlide>
                          ))
                         } 
                        </Swiper>
                      </div>
                    </SwiperSlide>
                  ))
                }
                <div className="swiper-button-next">
                  <AiOutlineRight />
                </div>
                <div className="swiper-button-prev">
                  <AiOutlineLeft />
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageSec4