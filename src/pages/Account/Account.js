import React from 'react'
import { Outlet } from 'react-router-dom';

import Navbar from '../../components/Navbar.js'
import Sidebar from './components/Sidebar'

const Account = () => {
  return (
    <div className="bg-pink">
        <Navbar />
        <div className="pt-28 pb-6 relative bg-pink">
            <Sidebar />
            <main className="ml-[20rem]">
                <Outlet />
            </main>
        </div>
    </div>
  )
}

export default Account