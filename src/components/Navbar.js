import React from 'react'
import { NavLink } from 'react-router-dom';
// Images ====================>>>>>>>>>>>>>>>>
import Logo from "../assets/img/logo.png";
//============================>>>>>>>>>>>>>>>>

export default function Navbar() {
    return (
        <div className='w-screen fixed z-20'>
            <div className="flex align-middle items-center justify-between py-3 w-[85vw] mx-auto">
                {/* Logo */}
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                {/* Buttons */}
                <div className="flex gap-5">
                    <NavLink to='#' className='border border-red text-red py-2 px-10 rounded-lg font-bold'>Cart</NavLink>
                    <NavLink to='#' className='border border-red text-white bg-red py-2 px-10 rounded-lg font-bold'>Login</NavLink>
                </div>
            </div>
        </div>
    )
}
