import React from 'react'
import {Routes, Route} from "react-router-dom"
import HomePage from '../Pages/HomePage/HomePage'
import Works from '../Pages/works'
import CardList from '../Pages/works/components/cardList'

function Routers() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/works" element={<Works />}>
          <Route index={true} element={<CardList/>} />
          <Route path='?tab=:id' element={<CardList/>} />
        </Route>
    </Routes>
  )
}

export default Routers