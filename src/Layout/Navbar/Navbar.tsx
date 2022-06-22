import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

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
                    <ul className="navbar-list">
                        <NavLink to="/" className="navbar-link">Home</NavLink>
                        <NavLink to="/works" className="navbar-link">Works</NavLink>
                        <NavLink to="/conact" className="navbar-link">Contact</NavLink>
                    </ul>
                    <div className='navbar-menu-info'>
                        <p className='address'>
                            17-10, Dosan-daero 8-gil, Gangnam-gu, Republic of Korea 1F
                            <br />
                            Tel 02. 543. 4983 / Fax 02. 6280. 4079
                        </p>
                        <p className="link">
                            <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.6611743669755!2d127.0209823151663!3d37.51590877980742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3e9253866e9%3A0xc7c3669311c4500c!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDrhbztmITrj5kg64-E7IKw64yA66GcOOq4uCAxNy0xMCAxRg!5e0!3m2!1sko!2skr!4v1574831755695!5m2!1sko!2skr" target="blank">
                                View Map
                            </a>
                        </p>
                        <br/>
                        <p>Work with us.</p>
                        <p className="link">
                            <a href="mailto:loocreative@playlooc.com" >loocreative@playlooc.com</a>
                        </p>
                        <br/>
                        <p>Recruiting</p>
                        <p className="link">
                            <a href="mailto:loocreative@playlooc.com" >loocreative@playlooc.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar