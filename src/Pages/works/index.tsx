import React, {useEffect} from 'react'

import Header from './components/header'

import './index.scss'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar'
import { Outlet } from 'react-router-dom'
import CardList from './components/cardList'

interface navbarItem {
  path?: string,
  className?: string,
  classNameActive?: string
}

const navbarItem = [

  {
    path: "SHOWREEL",
    className: "works-navbar-item",
    classNameActive: "active"
  },
  {
    path: "COMMERCIAL",
    className: "works-navbar-item",
    classNameActive: "active"
  },
  {
    path: "MOTION",
    className: "works-navbar-item",
    classNameActive: "active"
  },
  {
    path: "OPENING TITLE",
    className: "works-navbar-item",
    classNameActive: "active"
  },
  {
    path: "MV",
    className: "works-navbar-item",
    classNameActive: "active"
  },
  {
    path: "ARTWORK",
    className: "works-navbar-item",
    classNameActive: "active"
  },
  {
    path: "DESIGN",
    className: "works-navbar-item",
    classNameActive: "active"
  } 
] as navbarItem[]
function Works() {
  

  return (
    <div className='works'>
      <div className='works-container'>
        <Header />
        <Navbar navbar={navbarItem} />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Works