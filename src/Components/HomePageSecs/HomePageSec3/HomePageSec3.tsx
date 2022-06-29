import React, {MouseEvent, useState} from 'react'
import { useTranslation } from "react-i18next";

import "./HomePageSec3.scss"

import img1 from "../../../Assets/Images/Page3/off-game-dev-img@2x.png"
import img2 from "../../../Assets/Images/Page3/off-game-mar-img@2x.png"
import img3 from "../../../Assets/Images/Page3/off-si-img@2x.png"
import img4 from "../../../Assets/Images/Page3/off-ui-design-img@2x.png"

import img1a from "../../../Assets/Images/Page3/on-game-dev-img@2x.png"
import img2a from "../../../Assets/Images/Page3/on-game-mar-img@2x.png"
import img3a from "../../../Assets/Images/Page3/on-si-img@2x.png"
import img4a from "../../../Assets/Images/Page3/on-ui-design-img@2x.png"

import '../../../i18n'


const items= [
  {
    title: 'Game Development',
    img: img1,
    imgActive: img1a,
    desc: "page 3 item"
  },
  {
    title: 'UI design',
    img: img2,
    imgActive: img2a,
    desc: "page 3 item"
  },
  {
    title: 'SI',
    img: img3,
    imgActive: img3a,
    desc: "page 3 item"
  },
  {
    title: 'Game Marketing',
    img: img4,
    imgActive: img4a,
    desc: "page 3 item"
  },
]


function HomePageSec3() {

  const [itemOver, setItemOver] = useState<number|null>(null)
  const { t } = useTranslation();


  function onMouseOver(event: MouseEvent, index: number){
    setItemOver(index)

  }

  const onMouseOut = (event: MouseEvent, index: number) => {
    setItemOver(null)
  }


  return (
    <div className='section'>
      <div className="home-three">
        <div className="home-three_container">
          <div className="home-three-main">
            <div className="home-three-items ">
              {
                items.map((item, index) : any => {
                  const { title, desc, img, imgActive} = item
                  return (
                    <div className={`home-three-item select-none `} key={index}
                      onMouseOver={(event) => onMouseOver(event, index)}
                      onMouseOut={(event) => onMouseOut(event, index)}
                    >
                      <div className="home-three-item-container">
                        <h3 >
                          {title.split(' ').map(item => (
                            <>
                              {item}<br />
                            </>
                          ))}
                        </h3>
                        <div className="home-three-item-img">
                          <img src={itemOver == index ? imgActive : img} alt="" />
                        </div>
                        <div className="home-three-item-desc ">
                          <h4>{title}</h4>
                          <p>{t(desc)}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageSec3