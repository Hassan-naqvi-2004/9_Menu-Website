import React, { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Nav from './components/Nav'
import All from './components/All'
import Breakfast from './components/BreakFast'
import Lunch from './components/Lunch'
import Shakes from './components/Shakes'


const App = () => {
   
  return (
    <div>
        <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<All/>}/>
          <Route path='/breakfast' element={<Breakfast/>}/>
          <Route path='/lunch' element={<Lunch/>}/>
          <Route path='/shakes' element={<Shakes/>}/>
        </Routes>

        </BrowserRouter>
      
      
    </div>
  )
}

export default App
