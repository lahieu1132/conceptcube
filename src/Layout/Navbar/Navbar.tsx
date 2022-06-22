import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "./Navbar.scss"

const language = ["KR", "EN"]

function Navbar() {

    const [menuActive, setMenuActive] = useState(false)
    const [languageAvtive, setLanguageAvtive] = useState(0)

  return (
    <div className='navbar'>
        <div className="navbar-main">
            <div className={`navbar-menu-btn ${menuActive && "active"}`}
                onClick={() => setMenuActive(!menuActive)}
            >
                <span></span>
                <span></span>
            </div>
            <div className='navbar-language'>
                {
                    language.map((language, index) => (
                        <div className={`navbar-language-item ${languageAvtive == index && "active"}`} key={index}
                            onClick={()=>setLanguageAvtive(index)}
                        >
                            {language}
                        </div>
                    ))
                }
            </div>
            <div className={`navbar-menu ${menuActive && "active"}`}>
                <div className="navbar-menu-main">
                    <div className='navbar-logo'>
                        <img src={require("../../Assets/Images/New folder/logo-icon@2x.png")} alt="" />
                    </div>
                    <ul className="navbar-list">
                        <Link to="/" className="navbar-link">Home</Link>
                        <Link to="/" className="navbar-link">Works</Link>
                        <Link to="/" className="navbar-link">Contact</Link>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar