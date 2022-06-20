import React from 'react'
import { Link } from 'react-router-dom'

import "./HomePageSec1.scss"

import logo from "../../../Assets/Images/New folder/logo-icon@2x.png"


function HomePageSec1() {
  return (
    <div className='section'>
      <div className="home-one">
        <div className="home-one__container">
          <div className="home-one__main">
              <div className='home-one__top'>
                <div className='home-one__logo'>
                  <img src={logo} alt="" />
                </div>
                <Link to="/" className="home-one__link select-none">
                  About The Project
                </Link>
              </div>
              <h1 className='home-one__title select-none'>
                everything <br />
                is in the <br />
                conceptcube
              </h1>
              <Link to="/" className="home-one__bottom home-one__link select-none">
                ConceptCube Company Introduction
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageSec1