import React from 'react'
import { NavLink } from 'react-router-dom';
// Icons =====================>>>>>>>>>>>>>>>>
import { FiShoppingCart } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
//=============================>>>>>>>>>>>>>>>
// Images ====================>>>>>>>>>>>>>>>>
import Logo from "../assets/img/logo.png";
//============================>>>>>>>>>>>>>>>>

export default function Navbar() {
    return (
        <div className='w-screen fixed z-50'>
            <div className="flex align-middle items-center justify-between py-3 w-[85vw] mx-auto">
                {/* Logo */}
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                {/* Mobile toggler */}
                <div className='p-2 md:hidden flex'>
                    <AiOutlineMenu fontSize={'1.8em'} />
                </div>
                {/* Buttons */}
                <div className="gap-5 hidden md:flex">
                    <NavLink to='#' className='border border-red text-red py-2 px-10 rounded-lg font-bold flex items-center gap-2'>Cart <FiShoppingCart fontSize={'1.2em'} /></NavLink>
                    <NavLink to='#' className='border border-red text-white bg-red py-2 px-10 rounded-lg font-bold flex items-center gap-2'>Login <RxPerson fontSize={'1.2em'} /></NavLink>
                </div>
            </div>
        </div>
    )
}
