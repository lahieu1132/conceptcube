import React from 'react'

import "./HomePageSec5.scss"

import {AiOutlineMail} from "react-icons/ai"

function HomePageSec5() {
  return (
    <div className='section'>
      <div className="home-five">
        <div className="home-five-container">
          <div className="home-five-main">
            <div className="home-five-contact">
              <div className="home-five-contact-item select-none">
                <h3>
                  Partnership
                </h3>
                <div className="home-five-contact-item-mail">
                  <p>
                    looc.tzlee@gmail.com
                  </p>
                  <div className="contact-item-mail-icon">
                    <AiOutlineMail />
                  </div>
                </div>
              </div>
              <div className="home-five-contact-item select-none">
                <h3>
                  Recruiting.
                </h3>
                <div className="home-five-contact-item-mail">
                  <p>
                    looc.tzlee@gmail.com
                  </p>
                  <div className="contact-item-mail-icon">
                    <AiOutlineMail className='icon'/>
                  </div>
                </div>
              </div>
              <div className="home-five-contact-item select-none">
                <h3>
                  Learn more
                </h3>
                <p>
                  Learn more about us &gt;
                </p>
              </div>
            </div>
            <h2 className="home-five-title select-none">
            Let's<br/> Make the world <br/>Together.
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageSec5