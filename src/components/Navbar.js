import React, {useEffect, useState} from 'react'
// import { NavLink } from 'react-router-dom';
// Icons =====================>>>>>>>>>>>>>>>>
import { FiShoppingCart } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";

//=============================>>>>>>>>>>>>>>>
// Images ====================>>>>>>>>>>>>>>>>
import Logo from "../assets/img/logo.png";
import { Button } from './Button';
//============================>>>>>>>>>>>>>>>>
   
export default function Navbar() {   
    const [bgColor, setBgColor] = useState(false)
    const authRoute = window.location.toString().split("/")
    console.log(authRoute[3])

    //Change bg color function
    const changebgColor = ()=>{
        console.log(window.scrollY)
        if (window.scrollY >= 60) {
            setBgColor(true);
        } else {
            setBgColor(false);
        }
    }

    useEffect(() => {
        changebgColor()

        window.addEventListener('scroll', changebgColor)
    })

    return (
        <div className={`${bgColor ? 'bg-white' : ''} w-screen fixed z-50 top-0`}>
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
                    <Button value={'Cart'} icon={<FiShoppingCart />} type='outlined' path="/checkout" />
                    {
                        authRoute[3] === "" ? (
                            <Button value={'Login'} path={"/login"} icon={<RxPerson />} />
                        ): (
                            <>
                                {authRoute[3] !== "register" && <Button value={'Register'} path="/register" icon={<RxPerson />} />}
                                {authRoute[3] === "register" && <Button value={'Login'} path="/login" icon={<RxPerson />} />}
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
