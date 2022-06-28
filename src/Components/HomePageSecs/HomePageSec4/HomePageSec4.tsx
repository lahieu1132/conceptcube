import React, { useEffect, MouseEvent } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";



import "./HomePageSec4.scss"
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import { Scrollbar, Mousewheel,Navigation } from "swiper";

import {AiOutlineRight, AiOutlineLeft} from "react-icons/ai"


const items = [
  {
    year: 2022,
    i: [
      {
        desc: "LG Display Shocase 영상 제작",
        author: "MOTION"
      },
      {
        desc: "LG Display Shocase 영상 제작",
        author: "MOTION"
      },
      {
        desc: "LG Display Shocase 영상 제작",
        author: "MOTION"
      },
      {
        desc: "LG Display Shocase 영상 제작",
        author: "MOTION"
      },
      {
        desc: "LG Display Shocase 영상 제작",
        author: "MOTION"
      }
    ]
  },
  {
    year: 2021,
    i: [
      {
        desc: "LG Display Shocase 영상 제작",
        author: "MOTION"
      },
      {
        desc: "LG Display Shocase 영상 제작",
        author: "MOTION"
      },
      {
        desc: "LG Display Shocase 영상 제작",
        author: "MOTION"
      },
      {
        desc: "LG Display Shocase 영상 제작",
        author: "MOTION"
      },
      {
        desc: "LG Display Shocase 영상 제작",
        author: "MOTION"
      }
    ]
  },
  {
    year: 2020,
    i: [
      {
        desc: "LG Display Shocase 영상 제작",
        author: "MOTION"
      },
      {
        desc: "LG Display Shocase 영상 제작",
        author: "MOTION"
      },
      {
        desc: "LG Display Shocase 영상 제작",
        author: "MOTION"
      },
      {
        desc: "LG Display Shocase 영상 제작",
        author: "MOTION"
      },{
        desc: "LG Display Shocase 영상 제작",
        author: "MOTION"
      }
    ]
  },
  {
    year: 2019,
    i: [
      {
        desc: "LG Display Shocase 영상 제작",
        author: "MOTION"
      },
      {
        desc: "LG Display Shocase 영상 제작",
        author: "MOTION"
      },
      {
        desc: "LG Display Shocase 영상 제작",
        author: "MOTION"
      },
      {
        desc: "LG Display Shocase 영상 제작",
        author: "MOTION"
      }
    ]
  },
  {
    year: 2018,
    i: [
      {
        desc: "LG Display Shocase 영상 제작",
        author: "MOTION"
      },
      {
        desc: "LG Display Shocase 영상 제작",
        author: "MOTION"
      },
      {
        desc: "LG Display Shocase 영상 제작",
        author: "MOTION"
      },
      {
        desc: "LG Display Shocase 영상 제작",
        author: "MOTION"
      }
    ]
  }
]

function HomePageSec4() {

  

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
                modules={[Navigation]}
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
                                  {item.desc}
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