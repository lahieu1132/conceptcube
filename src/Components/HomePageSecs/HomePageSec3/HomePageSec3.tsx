import React from 'react'

import img1 from "../../../Assets/Images/Page3/off-game-dev-img@2x.png"
import img2 from "../../../Assets/Images/Page3/off-game-mar-img@2x.png"
import img3 from "../../../Assets/Images/Page3/off-si-img@2x.png"
import img4 from "../../../Assets/Images/Page3/off-ui-design-img@2x.png"


const items= [
  {
    title: 'Game Development',
    img: img1,
    desc: "VFX, 소셜광고 디자인, 아트웍, 게임 개발 등 이미지와 디자인 제작에 필요한 모든 것 그리고 고객이 필요로 하는 기술과 결과물을 제공합니다. 또한 모션그래픽 및 자막, 종적 타이포그래피, 애니메이션 등 촬영 이미지와 CG를 합성하여 완성도 있는 결과물을 도출합니다."
  },
  {
    title: 'Game Development',
    img: img2,
    desc: "VFX, 소셜광고 디자인, 아트웍, 게임 개발 등 이미지와 디자인 제작에 필요한 모든 것 그리고 고객이 필요로 하는 기술과 결과물을 제공합니다. 또한 모션그래픽 및 자막, 종적 타이포그래피, 애니메이션 등 촬영 이미지와 CG를 합성하여 완성도 있는 결과물을 도출합니다."
  },
  {
    title: 'Game Development',
    img: img3,
    desc: "VFX, 소셜광고 디자인, 아트웍, 게임 개발 등 이미지와 디자인 제작에 필요한 모든 것 그리고 고객이 필요로 하는 기술과 결과물을 제공합니다. 또한 모션그래픽 및 자막, 종적 타이포그래피, 애니메이션 등 촬영 이미지와 CG를 합성하여 완성도 있는 결과물을 도출합니다."
  },
  {
    title: 'Game Development',
    img: img4,
    desc: "VFX, 소셜광고 디자인, 아트웍, 게임 개발 등 이미지와 디자인 제작에 필요한 모든 것 그리고 고객이 필요로 하는 기술과 결과물을 제공합니다. 또한 모션그래픽 및 자막, 종적 타이포그래피, 애니메이션 등 촬영 이미지와 CG를 합성하여 완성도 있는 결과물을 도출합니다."
  },
]

function HomePageSec3() {


  return (
    <div className='section'>
      <div className="home-three">
        <div className="home-three_container">
          <div className="home-three-main">
            <div className="home-three-item">
              {
                items.map((item, index) : any => {
                  const { title, desc, img} = item
                  return (
                    <div className="home-three-item-title" key={index}>
                      <h3>{title}</h3>
                      <div>
                        <img src={img} alt="" />
                      </div>
                      <div>
                        <h4>{title}</h4>
                        <p>{desc}</p>
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