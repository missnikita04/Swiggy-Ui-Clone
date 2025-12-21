import React from 'react'
import Navbar from "./Components/Navbar1"
import Hero from "./Components/Hero"
import Category from './Components/Category'
import { Routes, Route } from 'react-router-dom'
import Offer from "./Components/Offer"
import OrderOnline from "./Components/OrderOnline"

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path="/search" element={<Category/>}/>
        <Route path="/discount" element={<Offer/>}/>
        <Route  path='/OrderOnline' element={<OrderOnline/>}/>
      </Routes>
      {/* <Navbar/>
      <Category/> */}
    </div>
  )
}

export default App
