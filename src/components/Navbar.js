import React from 'react'
import { NavLink } from 'react-router-dom';
// Icons =====================>>>>>>>>>>>>>>>>
import { FiShoppingCart } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
//=============================>>>>>>>>>>>>>>>
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
                    <NavLink to='#' className='border border-red text-red py-2 px-10 rounded-lg font-bold flex items-center gap-2'>Cart <FiShoppingCart fontSize={'1.2em'} /></NavLink>
                    <NavLink to='#' className='border border-red text-white bg-red py-2 px-10 rounded-lg font-bold flex items-center gap-2'>Login <RxPerson fontSize={'1.2em'} /></NavLink>
                </div>
            </div>
        </div>
    )
}
