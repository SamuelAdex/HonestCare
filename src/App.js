import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Brand from './pages/Brand'
import Size from './pages/Size'
import Wipes from './pages/Wipes'
import Checkout from './pages/Checkout'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/brand' element={<Brand />} />
        <Route path='/size' element={<Size />} />
        <Route path="/wipes" element={<Wipes />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  )
}

export default App
