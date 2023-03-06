import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Brand from './pages/Brand'
import Size from './pages/Size'
import Wipes from './pages/Wipes'
import Checkout from './pages/Checkout'
import Account from './pages/Account/Account'
import AccountInfo from './pages/Account/layouts/AccountInfo'
import OrderHistory from './pages/Account/layouts/OrderHistory'

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
        <Route path="" element={<Account />}>
          <Route path="profile" element={<AccountInfo />} />
          <Route path="order" element={<OrderHistory />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
